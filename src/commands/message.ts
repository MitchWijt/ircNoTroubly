import superagent from "superagent"
import { get } from "../adapter/config";

export {
    sendMessageToSocketServer
}

const lambdaUrl = "https://n0saf4fn4e.execute-api.us-east-1.amazonaws.com/prod/"

interface messageBody {
    messageDetails: {
        name: string,
        message: string
    },
    socketUrl: string
}

async function sendMessageToSocketServer(options: any) {
    const message = options.message
    const username = get("username")
    const socketUrl = get("socketServerUrl")

    const data = <messageBody>{
        messageDetails: {
            name: username,
            message
        },
        socketUrl
    }

    await superagent
        .post(lambdaUrl)
        .send(data)
}