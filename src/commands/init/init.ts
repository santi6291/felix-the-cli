import * as path from 'path';
import * as fs from 'fs';

import { IinitOptions } from './init.d';
import { IConfigFE } from '../../types/config.d';
import { TemplateService } from '../../services/template/template';

export default class InitCommand {
    static readonly feconfig: IConfigFE.Config = JSON.parse(fs.readFileSync('../../../assets/feconfig.json', 'utf8'));

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

        serviceConfig.main.forEach( opts=>this.compileMainTemplates(opts, serviceConfig.extension) );
    }

    private static compileMainTemplates(options: IConfigFE.ServiceItem, extension: string) {
        const template: TemplateService = new TemplateService(options);
        const name = options.template
            .replace(/.*(\/)/, '') // remove path, only leave file name
            .replace(/\..*/, ''); // remove extension from file
        const compile = template.compile({ name });
        const fullPath: string = path.resolve(<string>process.env['OUTPUT_DIR'], options.path);
        const filePath: string =   path.resolve(fullPath, `${name}.${extension}`);
        this.createDir(fullPath);
        fs.writeFileSync(filePath, compile);
    }

    /**
     * Create file directory if it does not exist
     * @param {string} dir [description]
     */
    private static createDir(dir: string) {
        fs.mkdirSync(dir, { recursive: true });

    }

}
