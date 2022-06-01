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
        let lastMessage = {
            "destination": message.destination,
            "body": message.body
        }
        console.log(lastMessage)

        return this.axiosApp.post(`/message`, lastMessage)
    }

}

module.exports = MessageApp
