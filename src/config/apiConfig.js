const config = {
    development: {
        url: 'http://localhost:3000'
    },
    production: {
        url: 'http://localhost:3000'
    }
}

export default config[process.env.NODE_ENV]