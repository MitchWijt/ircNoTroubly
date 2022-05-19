#! /usr/bin/env node
import { Command } from "commander";

import { createSocketServer } from "./commands/newSocketServer";
import { connectToSocketServer } from "./commands/socketServerConnect";
import { sendMessageToSocketServer } from "./commands/message";

const program = new Command()

program
    .command("create-new-socket")
    .description("Creates a new IRC socket server")
    .action(createSocketServer)

program
    .command("connect")
    .requiredOption('-user, --username <username>', "your username", "Anonymous")
    .requiredOption('-u, --url <url>', "IRC server URL")
    .description("Connect to an IRC socket server")
    .action(connectToSocketServer)

program
    .command("send-message")
    .requiredOption('-msg, --message <message>', "Your message")
    .description("Send message to the IRC socket server")
    .action(sendMessageToSocketServer)

program.parse()