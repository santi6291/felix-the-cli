import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';


import InitSpecs from './commands/init/init.spec';

class TestEnv {
    constructor() {
        fs.mkdtemp(`${os.tmpdir()}${path.sep}`, this.initTest.bind(this))
    }

    private initTest(err: Error, folder: string){
        process.env['APP_DIR'] = path.resolve(__dirname, '../');
        process.env['OUTPUT_DIR'] = folder;
        console.log('OUTPUT_DIR: ', folder);

        new InitSpecs();

        console.log('Destroying Sandbox Directory');
        fs.rmdirSync(<string>process.env['OUTPUT_DIR']);
    }
}

new TestEnv();
