export interface SasdnAPIOptions {
    type?: string;
    dataType?: string;
    data?: any;
    url?: string;
    timeout?: number
}

export interface SasdnAPIParams {
    data: any;
    uri: string;
}

export interface SasdnAPIResponse {
    response: any;
    statusText: string;
    statusCode: number;
}

export default class SasdnAPI {
    private _domain: string;

    constructor(domain: string) {
        this._domain = domain;
    }

    private _buildParam(condition: string | object): string {
        let data: string = null;
        if (condition != null) {
            switch (typeof condition) {
                case 'string':
                    data = condition as string;
                    break;
                case 'object':
                    let arr = [];
                    for (let key in condition as object) {
                        let value = condition[key];
                        arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
                    }
                    data = arr.join('&');
                    break;
            }
        }
        return data;
    }

    private _ajax(options: SasdnAPIOptions): Promise<SasdnAPIResponse> {
        options = options || {};
        options.type = (options.type || 'GET').toUpperCase();
        options.dataType = (options.dataType || 'json').toLowerCase();

        let params = this._buildParam(options.data);
        let url = ((options.type == 'GET' || options.type == 'DELETE') && params !== null) ? options.url + '?' + params : options.url;

        return new Promise((resolve, reject) => {
            const xhr = ((window as any).XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            switch (options.type) {
                case 'POST':
                case 'PUT':
                case 'PATCH':
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    break;
            }
            xhr.open(options.type, url, true);
            xhr.send(params);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    return;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    let response = xhr.responseText;
                    switch (options.dataType) {
                        case 'json':
                            response = JSON.parse(xhr.responseText);
                            break;
                        case 'xml':
                            response = xhr.responseXML;
                            break;
                    }
                    resolve({response: response, statusText: xhr.statusText, statusCode: xhr.status});
                } else {
                    reject(xhr.responseText);
                }
            };

        });
    }

    private _handleParams(uri: string, params: object, aggParams: Array<string>, requiredParams: Array<string>): SasdnAPIParams {
        let data = {};

        // fill aggParams && requiredParams via uri query params
        let requiredQueryParams: Array<string>;
        requiredQueryParams = uri.split(':');
        requiredQueryParams.shift();
        requiredQueryParams.forEach((key) => {
            if (aggParams.indexOf(key) < 0) {
                aggParams.push(key);
            }

            if (requiredParams.indexOf(key) < 0) {
                requiredParams.push(key);
            }
        });

        // validate requiredParams
        aggParams.forEach((key, index) => {
            const value = params[index];
            if (requiredParams.indexOf(key) >= 0 && (value === undefined || value === null || value === '')) {
                throw new Error('Param ' + key + ' is required!');
            } else if (value === undefined) {
                return;
            }

            if (uri.match(':' + key) !== null) {
                uri = uri.replace(':' + key, value);
            } else {
                data[key] = value;
            }
        });

        return {uri: uri, data: data};
    }

    private _request(params: IArguments, uri: string, method: string, aggParams: Array<string>, requiredParams: Array<string>) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = this._handleParams(uri, params, aggParams, requiredParams);

                if (method == 'patch' && params.length == 2 && typeof params[1] === 'object') {
                    data.data = params[1];
                }

                const response = await this._ajax({
                    url: `${this._domain}${data.uri}`,
                    type: method,
                    timeout: 5000,
                    data: data.data
                });

                resolve(response);
            } catch (err) {
                reject(err);
            }
        });
    }

    public async postGetBookApi(body) {
        const uri = '/v1/getBook';
        const method = 'post';
        const aggParams = ['body'];
        const requiredParams = ['body'];

        return await this._request(arguments, uri, method, aggParams, requiredParams);
    }

    public async postGetBookUserApi(id, body) {
        const uri = '/v1/getBookUser/:id';
        const method = 'post';
        const aggParams = ['id', 'body'];
        const requiredParams = ['id', 'body'];

        return await this._request(arguments, uri, method, aggParams, requiredParams);
    }

    public async postGetBooksViaAuthorApi(body) {
        const uri = '/v1/getBooksViaAuthor';
        const method = 'post';
        const aggParams = ['body'];
        const requiredParams = ['body'];

        return await this._request(arguments, uri, method, aggParams, requiredParams);
    }

    public async postUpdateBooksApi(isbn, body) {
        const uri = '/v1/updateBook/:isbn';
        const method = 'post';
        const aggParams = ['isbn', 'body'];
        const requiredParams = ['isbn', 'body'];

        return await this._request(arguments, uri, method, aggParams, requiredParams);
    }

    public async postGetUserApi(id, body) {
        const uri = '/v1/getUser/:id';
        const method = 'post';
        const aggParams = ['id', 'body'];
        const requiredParams = ['id', 'body'];

        return await this._request(arguments, uri, method, aggParams, requiredParams);
    }

}