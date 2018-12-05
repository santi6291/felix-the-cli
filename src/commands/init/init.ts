import * as path from 'path';
import * as fs from 'fs';

import { IinitOptions } from './init.d';
import { IConfigFE } from '../../types/config.d';
import { TemplateService } from '../../services/template/template';

export default class InitCommand {
    static readonly felixconfig: IConfigFE.Config = InitCommand.getFelixconfig();

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
        this.copyMiscFiles();
        return options;
    }

    private static addServices(services: string[]) {
        services.forEach(this.addService.bind(this));
    }

    private static addService(service: string) {
        const serviceConfig: IConfigFE.Service = this.felixconfig.services[service];
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

    private static get defaultConfigPath() {
        return path.resolve(<string>process.env['APP_DIR'], 'assets/felixconfig.json');
    }

    private static get outDiConfigPath() {
        return path.resolve(<string>process.env['OUTPUT_DIR'], 'felixconfig.json');
    }

    /**
     * Get built config for compiler
     */
    private static getFelixconfig(): IConfigFE.Config {
        const filePath = fs.existsSync(this.outDiConfigPath) ? this.outDiConfigPath : this.defaultConfigPath;
        const fileStr: string = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileStr);
    }

    private static copyMiscFiles() {
        const filePath = this.outDiConfigPath;

        if (!fs.existsSync(filePath)) {
            const data: string = JSON.stringify(this.felixconfig, undefined, 2);
            fs.writeFileSync(filePath, data);
        }
    }
}
