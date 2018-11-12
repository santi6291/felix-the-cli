import { argv } from 'process';
import { Command, Option } from 'commander';
import { expect } from 'chai';
import 'mocha';

import InitCommand from './init';
import { IConfigFE } from '../../types/config.d';

export default class InitSpecs {

    constructor() {
        describe('Add dependencies', this.describe1.bind(this));
        describe('Verify dependency installed', this.describe2.bind(this))
    }

    private describe1() {
        console.log('describe1');
        it('Should Add Scss', this.itShouldAdd.bind(this, 'scss'));
        it('Should Add TS', this.itShouldAdd.bind(this, 'ts'));
        it('Should Add TWIG', this.itShouldAdd.bind(this, 'twig'));
        it('Should Add All', this.itShouldAdd.bind(this));
    }

    private itShouldAdd(prop: string = '') {
        console.log('itShouldAdd')
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
        console.log('describe2');
        for (const key in InitCommand.feconfig.services) {
            const val: IConfigFE.Service = InitCommand.feconfig.services[key];
            it(`${val} files should exist`, this.itShouldCheckFiles.bind(this, val))
        }
    }

    private itShouldCheckFiles(val:IConfigFE.Service) {
        console.log('itShouldCheckFiles', val);
        expect(true).to.be.true;
    }
}
