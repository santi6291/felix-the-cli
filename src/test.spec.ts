import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
// import * as rimraf from 'rimraf';
const rimraf = require('rimraf');
// import { rimraf } from 'rimraf';


import { expect } from 'chai';
import 'mocha';

import InitSpecs from './commands/init/init.spec';

class TestEnv {

    constructor() {
        console.log('Creating Sandbox Directory');
        process.env['APP_DIR'] = path.resolve(__dirname, '../');
        process.env['OUTPUT_DIR'] = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);
        console.log('OUTPUT_DIR: ', process.env['OUTPUT_DIR']);

        new InitSpecs();

        describe('Destroying Sandbox Directory', this.clearTmpDir.bind(this));

    }

    clearTmpDir() {
        it('Should Destroy Tmp Dir', ()=> {
            rimraf(process.env['OUTPUT_DIR'],(error: Error)=>{
                if(error) throw error;
            });
        });
    }
}

new TestEnv();
