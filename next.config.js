/** @type {import('next').NextConfig} */
module.exports = {
  // Other next config here...

  devIndicators: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  // Remove Velite plugin code
  webpack: (config) => {
    // Simply return the config without pushing VeliteWebpackPlugin
    return config;
  },
};
