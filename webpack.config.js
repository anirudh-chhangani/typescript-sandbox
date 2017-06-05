const path = require('path');
module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "./bin/app.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: false,
      port: 9000,
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/
      }
    }
}