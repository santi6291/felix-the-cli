#!/usr/bin/env node
import { resolve } from 'path';
import * as fs from 'fs';

import { Command } from 'commander';

// Need to set these before files are imported
process.env['APP_DIR'] = resolve(__dirname, '../');
// Using PWD since this could be installed as a global module
process.env['OUTPUT_DIR'] = process.env.PWD;

import InitCommand from './commands/init/init';
import { IPackageJSON } from './types/package-json';
// import { triggerAsyncId } from 'async_hooks';

class Cli {
    private pjson: IPackageJSON = this.getPackageJson();
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
            .description('Create felixconfig.json on root directory')
            .option('--scss', 'Enable SCSS')
            .option('--ts', 'Enable TypeScript')
            .option('--twig', 'Enable Twig')
            .action(InitCommand.run.bind(InitCommand));
    }

    private getPackageJson(): IPackageJSON {
        const pjsonPath: string = resolve(<string>process.env['APP_DIR'], 'package.json');
        const file: string  = fs.readFileSync(pjsonPath, 'utf8');
        return JSON.parse(file);
    }
}

new Cli(process.argv);
