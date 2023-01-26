//#!/usr/bin/env node
const {version,description,name: cliName} = require('../package.json');
const figlet = require("figlet");
const { Command } = require ("commander");
const fs = require("fs");
const path = require("path");

const program = new Command();

console.log(figlet.textSync(cliName));
program
    .version(version)
    .description(description)
    .option("-a, --optA", "Boolean Option")
    .option("-b, --optB [value]", "Option with optional value")
    .option("-c, --optC <value>", "Option with required value")
    .parse(process.argv);

const options = program.opts();

if (options.optA) {
    console.log("OptA specified");
}
if (options.optB) {
  if (!!options.optB == options.optB) {
    console.log(`OptB specified, with no value`);
  } else {
    console.log(`OptB specified, with a value of "${options.optB}"`);
  }
;}
if (options.optC) {
  console.log(`OptB specified, with a value of "${options.optC}"`);
}

