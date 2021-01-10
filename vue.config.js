module.exports = {
  devServer: {
    public: (() => {
      return process.env.hasOwnProperty('VUE_HOST')
        ? process.env.VUE_HOST
        : undefined
    })(),
    port: (() => {
      return process.env.hasOwnProperty('VUE_PORT')
        ? Number.parseInt(process.env.VUE_PORT, 10)
        : undefined
    })()
  }
}
