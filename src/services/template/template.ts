// import * as Handlebars from 'handlebars';
import * as Mustache from 'mustache';

import * as fs from 'fs';
import * as path from 'path';

import { IConfigFE } from '../../types/config.d';

export class TemplateService {
    // private path: string;
    private templateStr: string = '';
    private data: any = {};
    private _rootDir: any = {};
    private options: IConfigFE.ServiceItem;

    constructor(options: IConfigFE.ServiceItem) {
        this.options = options;
    }

    public set name(name : string) {
        this.data['name'] = name;
    }

    public compile() {
        if (!this._rootDir) throw 'Root Directory must be set';
        const path = this.fullPath(this.options.template);
        this.templateStr = fs.readFileSync(path, 'utf8');
        return Mustache.render(this.templateStr, this.data);
    }

    private fullPath(pathStr: string): string {
        // if (!process.env['APP_DIR']) throw 'APP_DIR not set';
        return path.resolve(<string>process.env['APP_DIR'], pathStr);
    }

    // private getTemplate(err: Error, data:string|Buffer): string|Buffer {
    //     console.log(data);
    //     this.templateStr = data;
    //     return data;
    // }
}
