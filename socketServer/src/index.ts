import express from 'express'
import {Server as HttpServer} from "http"
import {Server as SocketServer} from "socket.io"

import { createNewUrl } from "./localtunnel";

const PORT = 3000;

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

io.on('connection', (socket: any) => {
    io.emit('connected', 'user has connected')

    socket.on('message', (args: any) => {
        io.sockets.emit('message', args)
    })
})

app.get("/", (req, res) => {
    res.json({ success: process.env.UNIX })
})

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`))
createNewUrl(PORT).then((url) => console.log(url))