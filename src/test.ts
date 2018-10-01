import * as fs from 'fs';
import { resolve } from 'path';

import InitSpec from './commands/init/init.spec';

class TestEnv {
    private sandboxDir: string = resolve(__dirname, '../', '.sandbox');

    constructor() {
        // Create Environment
        console.log('Creating Sandbox Directory');
        // console.log(this.sandboxDir);
        this.createSanbox();

        // Run test
        new InitSpec(this.sandboxDir);

        // Destrory Environment
        console.log('Destroying Sandbox Directory');
        this.rmDir();
    }

    private createSanbox() {

        if (this.sandboxExist()) {
            this.rmDir();
        }
        this.makeDir();
    }

    private sandboxExist() {
        return fs.existsSync(this.sandboxDir);
    }

    private makeDir() {
        return fs.mkdirSync(this.sandboxDir);
    }

    private rmDir() {
        return fs.rmdirSync(this.sandboxDir);
    }
}

new TestEnv();
