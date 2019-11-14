module.exports = {
  //target: 'serverless', // <- add here
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
