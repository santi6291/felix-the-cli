#!/usr/bin/env node
import { Command } from 'commander';

import InitCommand from './commands/init/init';

class Cli {
    private pjson: any = require('../package.json');
    private program: Command = new Command();

    constructor(argv: string[]) {
        this.program.version(this.pjson.version);
        this.setCommands();
        this.program.parse(argv);
    }

    private setCommands() {
        this.commandInit();
    }

    private commandInit() {
        this.program
            .command('init')
            .description('Create feconfig.json on root directory')
            .option('--scss', 'Enable SCSS')
            .option('--ts', 'Enable TypeScript')
            .option('--twig', 'Enable Twig')
            .action(InitCommand.run.bind(InitCommand));
    }
}

new Cli(process.argv);
