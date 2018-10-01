import { resolve } from 'path';

import { IinitOptions } from './init.d';

export default class InitCommand {
    private static feconfig: any = require('../../../assets/feconfig.json');
    public static rootDir: any = resolve(__dirname,'../../../');

    public static run(options: IinitOptions){
        if (options.scss) {
            console.log('Adding scss');
            this.addService('scss');
        }

        if (options.ts) {
            console.log('Adding TypeScript');
            this.addService('ts');
        }

        if (options.twig) {
            console.log('Adding twig');
            this.addService('twig');
        }

        if (!options.scss && !options.ts && !options.twig) {
            options.scss = options.ts = options.twig = true;
            console.log('Adding scss, ts, twig' );
            this.addService();
        }

        return options;
        // console.log(options.scss, options.ts, options.twig);
    }

    static addService(type?: string) {

    }
}
