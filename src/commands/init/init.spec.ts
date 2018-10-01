import { expect } from 'chai';
import 'mocha';

import InitCommand from './init';
import { IinitOptions } from './init.d';

export default class InitSpec {

    constructor(private sandboxDir: string) {
        // console.log(this.sandboxDir);
        describe('Check for dependecies to add', this.describe1.bind(this));
        describe('Add dependecy if it doesn\'t exist', this.describe2.bind(this));
    }

    private describe1() {
        it('Should Add Scss', this.itShouldAdd.bind(this, {scss: true}));
        it('Should Add TS', this.itShouldAdd.bind(this, {ts: true}));
        it('Should Add TWIG', this.itShouldAdd.bind(this, {twig: true}));
    }

    private itShouldAdd(prop: string) {
        const options: IinitOptions = {};
        options[prop] = true;
        const result = InitCommand.run(options);

        expect(result[prop]).to.be.true;
    }

    private describe2() {

    }
}
