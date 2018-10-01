import { resolve } from 'path';

import { IinitOptions } from './init.d';

export default class InitCommand {
    private static feconfig: any = require('../../assets/feconfig.json');
    public static rootDir: any = resolve(__dirname,'../../../');

    public static run(options: IinitOptions){

        console.log(this.rootDir);

        if (options.scss) {
            console.log('Adding scss' );
        }

        if (options.ts) {
            console.log('Adding TypeScript');
        }

        if (options.twig) {
            console.log('Adding twig' );
        }

        return options;
        // console.log(options.scss, options.ts, options.twig);
    }
}
