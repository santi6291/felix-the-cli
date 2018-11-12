// import * as Handlebars from 'handlebars';
import * as Mustache from 'mustache';

import * as fs from 'fs';
import * as path from 'path';

import { IConfigFE } from '../../types/config.d';

export class TemplateService {
    private options: IConfigFE.ServiceItem;

    constructor(options: IConfigFE.ServiceItem) {
        this.options = options;
    }

    public compile(data: any) {
        const path = this.fullPath(this.options.template);
        const template: string = fs.readFileSync(path, 'utf8');
        return Mustache.render(template, data);
    }

    private fullPath(pathStr: string): string {
        if (!process.env['APP_DIR']) throw 'APP_DIR env variable not set';
        return path.resolve(<string>process.env['APP_DIR'], pathStr);
    }
}
