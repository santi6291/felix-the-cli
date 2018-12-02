import { argv } from 'process';
import * as fs from 'fs';
import * as path from 'path';

import { Command, Option } from 'commander';
import { expect } from 'chai';
import 'mocha';

import InitCommand from './init';
import { IConfigFE } from '../../types/config.d';

export default class InitSpecs {

    constructor() {
        describe('Add dependencies', this.describe1.bind(this));
        describe('Verify dependency installed', this.describe2.bind(this));
        describe('Copy of feconfig', this.describe3.bind(this));
    }

    private describe1() {
        it('Should Add Scss', this.itShouldAdd.bind(this, 'scss'));
        it('Should Add TS', this.itShouldAdd.bind(this, 'ts'));
        it('Should Add TWIG', this.itShouldAdd.bind(this, 'twig'));
        it('Should Add All', this.itShouldAdd.bind(this, ''));
    }

    private itShouldAdd(prop: string) {
        const fakeArgv: string[] = argv.slice(0)
        const fakeProgram:Command = new Command();

        fakeArgv.push(`--${prop}`);

        fakeProgram.option('--scss');
        fakeProgram.option('--ts');
        fakeProgram.option('--twig');
        fakeProgram.parse(fakeArgv);

        const result = InitCommand.run( fakeProgram.opts() );
        for (const key in result) {
            const value: boolean | undefined = result[key];
            if (prop == '' || key == prop) {
                expect(value).to.be.true;
            } else {
                expect(value).to.not.be.true;
            }
        }
    }

    private describe2() {
        for (const key in InitCommand.feconfig.services) {
            const val: IConfigFE.Service = InitCommand.feconfig.services[key];
            it(`${key} files should exist`, this.itShouldCheckFiles.bind(this, val.main))
        }
    }

    private itShouldCheckFiles(val: IConfigFE.ServiceItem[]) {
        let filesExist: boolean = true;

        for (const itemI in val) {
            const itemV = val[itemI];
            const filePath = path.resolve(<string>process.env['OUTPUT_DIR'], itemV.path);

            if (!fs.existsSync(filePath)) {
                filesExist = false;
                break;
            }
        }
        expect(filesExist).to.be.true;
    }

    private describe3() {
        it('feconfig should exist in out dir', this.itShouldHaveConfigCopy.bind(this));
    }

    private itShouldHaveConfigCopy() {
        const filePath = path.resolve(<string>process.env['OUTPUT_DIR'], 'feconfig.json');
        expect(fs.existsSync(filePath)).to.be.true;
    }
}
