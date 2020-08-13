const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path =require('path')

module.exports = {
  output: {
		filename: 'app.bundle.js',
		publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
		}),
		new WebpackPwaManifestPlugin(
			{
				name:'Petgramm - Tu app de mascotas',
				short_name:'Petgram 🐶',
				description:'Con Petgram puedes encontrar fotos de animales Lindos',
				background_color:'#fff',
				theme_color:'#b1a',
				icons:[
					{
						src:path.resolve('src/assets/icon.png'),
						size:[96,128,192,256,384,512]
					}
				]

			}
		)
  ],
}
