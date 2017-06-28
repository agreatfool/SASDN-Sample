import app from "./router/Gateway";

app.init()
  .then(() => {
    app.start();
  })
  .catch((err) => {
    console.log(err.message);
  });