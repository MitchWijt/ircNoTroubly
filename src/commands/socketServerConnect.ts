import { spawn } from "child_process";
import { join } from "path"

export {
    connectToSocketServer
}


async function connectToSocketServer(options: any) {
    console.log(options)

    //save username in config
    // start http server and listen for incomming messages from socket.io-client

    // use this terminal to send the messages.
    console.log("👉 Use the new terminal to send your messages")
    openTerminal()
}

function openTerminal() {
    let openTerminalAtPath = spawn ('open', [ '-a', 'Terminal', join(__dirname, "../../src") ]);
    openTerminalAtPath.on ('error', (err) => { console.log (err); });
}