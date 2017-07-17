# 测试流程
## 启动中心节点
* 需要安装sqlite工具
* 修改sasdn-pm的config，中心节点的地址
* 在sasdn-pm中启动server。

## 下载demo案例
* 下载git库 https://github.com/niklaus0823/SASDN-Sample
* 进入example_project文件夹，有四个文件夹
	* 一个测试项目demo@0.0.0
	* 三个基础项目bookPb@1.0.0, userPb@1.0.0, userPb@2.0.0
* 分别进入到这些文件夹的/node_modules/sasdm-pm/下，使用npm install命令，安装所需要的模块

## 测试发布流程
* 进入到基础项目bookPb@1.0.0, userPb@1.0.0, userPb@2.0.0的根目录下,检查spm.json
* 使用 secret 命令，设置密钥
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js secret -s 1q2w3e4r
* 使用 publish 命令，将proto项目发布到中心节点
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js publish
	* 需要发布的项目的文件夹有book，user，user2

## 测试安装与其他
* 进入demo文件夹
* 使用 search 命令，查找proto包的存在
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js search -k bookPb
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js search -k userPb
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js search -k userPb@1.0.0
* 使用 install 命令，在demo文件夹下进行安装
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js install (根据spm.json全部安装)
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js install -n bookPb （根据 -n 参数从中心节点指定安装）
* 使用 uninstall 命令，在demo文件夹下进行proto卸载
	* 手动修改 ./demo/spm_protos/userPb/spm.json，增加依赖 user:2.0.0
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js uninstall -n bookPb
	* 查看demo/spm.json中，bookPb被删除了。
	* 查看demo/spm_protos/文件夹下， bookPb被删除了，userPb_v2依然存在（被user依赖）
	* set DEBUG=SPM:* & node ./node_modules/sasdn-pm/build/bin/spm.js uninstall -n userPb
	* 查看demo/spm.json中，userPb的1.0.0被删除
	* 查看demo/spm_protos/文件夹下， userPb被删除了，userPb__v2被删除（没有任何安装的proto依赖它）