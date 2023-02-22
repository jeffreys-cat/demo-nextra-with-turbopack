const path = require("path");
const { DOCS_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    appDir: true,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    removeConsole:
      process.env.NODE_ENV == "development"
        ? false
        : {
            exclude: ["error"],
          },
    experimentalDecorators: true,
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
        preventFullImport: true,
      },
    },
  },
  pageExtensions: ["ts", "tsx"],
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
};
