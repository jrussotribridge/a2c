var glob = require("glob");

var files = glob.sync('./node_modules/@angular/common/src/*.js');

module.exports = {
    entry: files,
    output: {
        path: __dirname + '/public/bundles/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            }
        ]
    },
    watch: true
};