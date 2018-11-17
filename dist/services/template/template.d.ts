import { IConfigFE } from '../../types/config.d';
export declare class TemplateService {
    private options;
    constructor(options: IConfigFE.ServiceItem);
    compile(data: any): string;
    private fullPath;
}
