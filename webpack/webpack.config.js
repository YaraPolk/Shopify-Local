import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default {
    context: path.resolve('src'),
    entry: './index.js',
    plugins: [new MiniCssExtractPlugin({
        filename: 'my-custom-section.css',
    })],
    output: {
        filename: 'test-build.js',
        path: path.resolve('../assets/'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};