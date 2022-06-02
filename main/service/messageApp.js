const axios = require('axios');

class MessageApp {
    constructor() {
        this.axiosApp = axios.create({ baseURL: 'http://messageapp:3000' })
        // this.axiosApp = axios.create({ baseURL: 'http://localhost:3000' })

    }

    testMessages = () => {
        let message = {
            "destination": "string",
            "body": "string"
        }

        return this.axiosApp.post(`/message`, message)

    }
    getOneMessage = (body) => {
        let lastMessage = {
            "destination": body.destination,
            "body": body.message
        }

        return this.axiosApp.post(`/message`, lastMessage)
    }
}

module.exports = MessageApp
