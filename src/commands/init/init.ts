import { resolve } from 'path';

import { IinitOptions } from './init.d';

export default class InitCommand {
    private static feconfig: any = require('../../../assets/feconfig.json');
    public static rootDir: any = resolve(__dirname,'../../../');

    public static run(options: IinitOptions){
        const services: string[] = [];
        if (options.scss) {
            services.push('scss');
        }

        if (options.ts) {
            services.push('ts');
        }

        if (options.twig) {
            services.push('twig');
        }

        if (!options.scss && !options.ts && !options.twig) {
            options.scss = options.ts = options.twig = true;
            services.push('scss');
            services.push('ts');
            services.push('twig');
        }
        this.addServices(services);
        return options;
    }

    private static addServices(services: string[]) {
        services.forEach(this.addService.bind(this));
    }

    private static addService(service: string) {
        switch (service) {
            case "twig":
                this.addTwig();
            break;
            case "ts":
                this.addTs();
            break;
            case "scss":
                this.addScss();
            break;
        }
    }

    private static addTwig() {
        console.log('Adding twig');
    }

    private static addTs() {
        console.log('Adding TypeScript');
    }

    private static addScss() {
        console.log('Adding scss');
    }
}
