#!/usr/bin/env node
import { resolve } from 'path';
import * as fs from 'fs';

import { Command } from 'commander';

// Need to set these before files are imported
process.env['APP_DIR'] = resolve(__dirname, '../');
// TODO, ensure this will looks at the directory that installed the module
process.env['OUTPUT_DIR'] = process.env.PWD;

import InitCommand from './commands/init/init';
import { IPackageJSON } from './types/package-json';

class Cli {
    private pjson: IPackageJSON = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
    private program: Command = new Command();

    constructor(argv: string[]) {
        this.program.version(<string>this.pjson.version);
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
