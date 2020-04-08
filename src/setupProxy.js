const proxy = require("http-proxy-middleware");

module.exports = function(app) {

    const api = process.env.REACT_APP_API_URL !== undefined ?
                process.env.REACT_APP_API_URL :
                "http://localhost:5000/";

    app.use(proxy("/api", { target: api }));

};
