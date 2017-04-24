var glob = require("glob");

var files = glob.sync('./public/app/*.js');
files = files.concat(glob.sync('./public/app/controllers/*.js'));

files.push('webpack/hot/dev-server');

module.exports = {
    entry: files,
    output: {
        path: __dirname + '/public/bundles/',
        filename: 'app.bundle.js',
        publicPath: '/public/'
    },
    module: {
        loaders: [
            { 
            }
        ]
    }
};