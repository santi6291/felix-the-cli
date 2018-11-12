import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';


import InitSpec from './commands/init/init.spec';

class TestEnv {
    constructor() {
        fs.mkdtemp(`${os.tmpdir()}${path.sep}`, this.initTest.bind(this))
    }

    private initTest(err: Error, folder: string){
        process.env['APP_DIR'] = path.resolve(__dirname, '../');
        process.env['OUTPUT_DIR'] = folder;
        console.log(folder);
        // Run test
        new InitSpec();

        // Destrory Environment
        console.log('Destroying Sandbox Directory');
        return fs.rmdirSync(<string>process.env['OUTPUT_DIR']);
    }
}

new TestEnv();
