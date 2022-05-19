import localtunnel from "localtunnel"

export {
    createNewUrl
}

async function createNewUrl(port: number) {
    const tunnel = await localtunnel({port, subdomain: process.env.UNIX})
    return tunnel.url
}


