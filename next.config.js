const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] });
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsFilename: 'stats.json'
      })
    )
    return config
  }
}
