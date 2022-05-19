import { exec } from "child_process"
import { set } from "../adapter/config";

export {
    createSocketServer
}

async function createSocketServer() {
    const unixTimestamp = Date.now().toString()
    await spinUpDockerContainer(unixTimestamp)

    const url = encodeURI(`https://${unixTimestamp}.loca.lt/`)
    set("socketServerUrl", url)

    console.log(`🤟 Your IRC server url: ${url}`)
}

async function spinUpDockerContainer(domainPrefix: string) {
    await removeOldSocketServerContainer()

    console.log("🐳 Spinning up docker container....")
    await buildSocketServerContainer()

    await runSocketServerContainer(domainPrefix)
    console.log("🚀 Server is created!")
}

function removeOldSocketServerContainer(): Promise<void> {
    return new Promise((resolve, reject) => {
        exec("cd socketServer && docker rm -f irc-server", (err) => {
            if(err) reject(err)
            resolve()
        })
    })
}

function buildSocketServerContainer(): Promise<void> {
    return new Promise((resolve, reject) => {
        exec("cd socketServer && docker build -t irc-server .", (err) => {
            if(err) reject(err)
            resolve()
        })
    })
}

function runSocketServerContainer(domainPrefix: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(`cd socketServer && docker run -dp 3000:3000 --name irc-server -e UNIX=${domainPrefix} irc-server`, (err) => {
            if(err) reject(err)
            resolve()
        })
    })
}