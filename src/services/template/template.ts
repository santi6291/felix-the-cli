import * as handlebars from 'handlebars';
import * as fs from 'fs';
import { promisify } from 'util';

import { IConfigFE } from '../../types/config.d';

export class TemplateService {
    // private path: string;
    private readFile: any = promisify(fs.readFile);
    private templateStr: string | Buffer = '';
    private data: any = {};

    constructor(options: IConfigFE.ServiceItem) {
        this.setup(options);
    }

    public set name(name : string) {
        this.data['name'] = name;
    }

    public get template() {
        this.data['name'] = name;
        const template = Handlebars.compile(this.templateStr);

        return template(this.data);
    }

    private async setup(options: IConfigFE.ServiceItem) {
        const { err, data }: ReadFileArgs = await this.readFile(options.template);
        if (err) throw err;
        console.log(data)
        // fs.read1File(options.template, this.getTemplate.bind(this));
    }

    // private getTemplate(err: Error, data:string|Buffer): string|Buffer {
    //     console.log(data);
    //     this.templateStr = data;
    //     return data;
    // }

}

interface ReadFileArgs {
    err: Error;
    data:string|Buffer;
}
