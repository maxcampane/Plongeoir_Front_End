// @ts-ignore
const proxy = require("http-proxy-middleware");

const TARGET = "http://localhost:8080/";

const opts = {
    target: TARGET,
    changeOrigin: true,
    ws: true,
};

module.exports = app => {
    app.use(proxy("/login", opts));
    app.use(proxy("/signup", opts));
    app.use(proxy("/books/categories", opts));
    app.use(proxy("/books/category/", opts));
};
