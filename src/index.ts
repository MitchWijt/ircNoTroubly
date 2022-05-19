#! /usr/bin/env node
import { Command } from "commander";

import { createSocketServer } from "./commands/newSocketServer";

const program = new Command()

program
    .command("create-new-socket")
    .description("Creates a new IRC socket server")
    .action(createSocketServer)

program.parse()