const path = require('path');

module.exports = {
     mode: "development",
    entry: [
        './src/index.js',
        './src/style.css',
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};