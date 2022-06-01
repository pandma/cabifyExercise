const axios = require('axios');

class MessageApp {
    constructor() {
        this.axiosApp = axios.create({ baseURL: 'http://messageapp:3000' })
    }

    testMessages = () => {
        let message = {
            "destination": "string",
            "body": "string"
        }

        return this.axiosApp.post(`/message`, message)

    }
    getOneMessage = (message) => {
        const options = { headers: { "content-type": "application/json" } }

        return this.axiosApp.post(`/message`, message, options)
    }
}

module.exports = MessageApp
