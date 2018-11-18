import { IinitOptions } from './init.d';
import { IConfigFE } from '../../types/config.d';
export default class InitCommand {
    static readonly feconfig: IConfigFE.Config;
    static run(options: IinitOptions): IinitOptions;
    private static addServices;
    private static addService;
    private static compileMainTemplates;
    /**
     * Create file directory if it does not exist
     * @param {string} dir [description]
     */
    private static createDir;
    private static readonly defaultConfigPath;
    private static readonly outDiConfigPath;
    /**
     * Get built config for compiler
     */
    private static getFeConfig;
    private static copyMiscFiles;
}
