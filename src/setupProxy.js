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
    app.use(proxy("/api/users", opts));
    app.use(proxy("/api/books/categories", opts));
    app.use(proxy("/api/books/category/", opts));
    app.use(proxy("/api/books/{id}", opts));
    app.use(proxy("/api/books/{id}/rent", opts));
    app.use(proxy("/api/books/{id}/return", opts));
    app.use(proxy("/api/books/**", opts));
};
