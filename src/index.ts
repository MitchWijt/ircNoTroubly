#! /usr/bin/env node
import { Command } from "commander";

const program = new Command()

program
    .command("create-new-socket")
    .description("Creates a new IRC socket server")
    .action(() => console.log("create a new socket"))

program.parse()