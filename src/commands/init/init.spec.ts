import { argv } from 'process';
import { Command, Option } from 'commander';
import { expect } from 'chai';
import 'mocha';

import InitCommand from './init';

export default class InitSpec {

    constructor(private sandboxDir: string) {
        // console.log(this.sandboxDir);
        describe('Check for dependecies to add', this.describe1.bind(this));
        describe('Add dependecy if it doesn\'t exist', this.describe2.bind(this));
    }

    private describe1() {
        it('Should Add Scss', this.itShouldAdd.bind(this, 'scss') );
        it('Should Add TS', this.itShouldAdd.bind(this, 'ts'));
        it('Should Add TWIG', this.itShouldAdd.bind(this, 'twig'));
        it('Should Add All', this.itShouldAdd.bind(this));
    }

    private itShouldAdd(prop: string = '') {
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
    }
}
