import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
const rimraf = require('rimraf');

// import { expect } from 'chai';
import 'mocha';

process.env['APP_DIR'] = path.resolve(__dirname, '../');
process.env['OUTPUT_DIR'] = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);

import InitSpecs from './commands/init/init.spec';

class TestEnv {

    constructor() {
        console.log('Creating Sandbox Directory');
        new InitSpecs();
        describe('Destroying Sandbox Directory', this.clearTmpDir.bind(this));

    }

    clearTmpDir() {
        it('Temp directory destroyed', ()=> {
            rimraf(process.env['OUTPUT_DIR'],(error: Error)=>{
                if(error) throw error;
            });
        });
    }
}

new TestEnv();
