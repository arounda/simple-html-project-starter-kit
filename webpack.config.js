const merge = require("webpack-merge");
const common = require("./webpack.common");
const dev = require("./webpack.dev");
const prod = require("./webpack.prod");

module.exports = merge.smart(common, process.env.WEBPACK_SERVE ? dev : prod);