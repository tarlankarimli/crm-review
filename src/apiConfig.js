const config = {
    development: {
        url: "localhost:3000"
    },
    production: {
        url: "localhost:3000"
    }
}

export default config[process.env.NODE_ENV];