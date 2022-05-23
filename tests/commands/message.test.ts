import superagent from 'superagent'

import { sendMessageToSocketServer } from "../../src/commands/message";
import { clear, set, remove } from "../../src/adapter/config"

const sendMock = jest.fn()
jest.mock("superagent", function() {
    return {
        post: jest.fn(function() {
            return {
                send: sendMock
            }
        })
    }
})

beforeAll(() => {
    clear()
    set("username", "tester")
    set("socketServerUrl", "https://n0saf4fn4e.execute-api.us-east-1.amazonaws.com/prod/")
})

describe('sendMessageToSocketServer', function () {
    it("sends the correct message data", () => {
        sendMessageToSocketServer({ message: "Test Message" })

        expect(superagent.post).toHaveBeenCalledWith("https://n0saf4fn4e.execute-api.us-east-1.amazonaws.com/prod/")
        expect(superagent.post).toHaveBeenCalledTimes(1)

        expect(sendMock).toHaveBeenCalledTimes(1)
        expect(sendMock).toHaveBeenCalledWith({
            messageDetails: {
                name: "tester",
                message: "Test Message"
            },
            socketUrl: "https://n0saf4fn4e.execute-api.us-east-1.amazonaws.com/prod/"
        })
    })

    // it("receives an error when username is not defined", () => {
        remove("username")
        //
        // expect(() => {
        //     sendMessageToSocketServer({ message: "Test Message" })
        // }).toThrow('Username or SocketURL is undefined')

        // expect(superagent.post).toHaveBeenCalledWith("https://n0saf4fn4e.execute-api.us-east-1.amazonaws.com/prod/")
        // expect(superagent.post).toHaveBeenCalledTimes(1)
        //
        // expect(sendMock).toHaveBeenCalledTimes(1)
        // expect(sendMock).toHaveBeenCalledWith({
        //     messageDetails: {
        //         name: "tester",
        //         message: "Test Message"
        //     },
        //     socketUrl: "https://n0saf4fn4e.execute-api.us-east-1.amazonaws.com/prod/"
        // })
    // })
});

afterAll(() => {
    clear()
})