const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['file-loader'], // Treat SVG as a file
    });

    // Add rule for font files
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf)$/, // Match font files
      use: {
        loader: 'file-loader', // Treat fonts as files
        options: {
          name: 'static/fonts/[name].[hash].[ext]', // File naming convention
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
