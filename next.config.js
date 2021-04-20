const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  
  module.exports = ({
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next",
              name: "static/media/[name].[hash].[ext]",
            },
          },
        ],
      });
  
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  

      return config;
    },
  });