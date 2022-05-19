import { spawn } from "child_process";
import { join } from "path"
import { io } from "socket.io-client";

import { set } from "../adapter/config";

export {
    connectToSocketServer
}


async function connectToSocketServer(options: any) {
    set("username", options.username)

    listenToMessages(options.url)

    // use this terminal to send the messages.
    console.log("👉 Use the new terminal to send your messages")
    openTerminal()
}

function openTerminal() {
    let openTerminalAtPath = spawn ('open', [ '-a', 'Terminal', join(__dirname, "../../src") ]);
    openTerminalAtPath.on ('error', (err) => { console.log (err); });
}

function listenToMessages(socketUrl: string) {
    let socket = io(socketUrl)

    socket.on("message", (args: any) => {
        console.log(args)
    })
}