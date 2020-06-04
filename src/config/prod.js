const prodConfig = {
  port: process.env.PORT || 8080,
  database: process.env.DATABASE,
  secerets: {
    API_KEY: process.env.API_KEY,
  },
}
export default prodConfig
