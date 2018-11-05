import { resolve } from 'path';

import { IinitOptions } from './init.d';
import { IConfigFE } from '../../types/config.d';

export default class InitCommand {
    private static feconfig: IConfigFE.Config = require('../../../assets/feconfig.json');
    public static rootDir: string = resolve(__dirname,'../../../');

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
        const serviceConfig: IConfigFE.Service = this.feconfig.services[service];
        if (!serviceConfig) {
            return false;
        }

        console.log(serviceConfig);
    }
}
