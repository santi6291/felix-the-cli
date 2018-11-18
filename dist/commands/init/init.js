"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const template_1 = require("../../services/template/template");
class InitCommand {
    static run(options) {
        const services = [];
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
    static addServices(services) {
        services.forEach(this.addService.bind(this));
    }
    static addService(service) {
        const serviceConfig = this.feconfig.services[service];
        if (!serviceConfig) {
            return false;
        }
        serviceConfig.main.forEach(opts => this.compileMainTemplates(opts, serviceConfig.extension));
    }
    static compileMainTemplates(options, extension) {
        const template = new template_1.TemplateService(options);
        const name = options.template
            .replace(/.*(\/)/, '') // remove path, only leave file name
            .replace(/\..*/, ''); // remove extension from file
        const compile = template.compile({ name });
        const fullPath = path.resolve(process.env['OUTPUT_DIR'], options.path);
        const filePath = path.resolve(fullPath, `${name}.${extension}`);
        this.createDir(fullPath);
        fs.writeFileSync(filePath, compile);
    }
    /**
     * Create file directory if it does not exist
     * @param {string} dir [description]
     */
    static createDir(dir) {
        fs.mkdirSync(dir, { recursive: true });
    }
    static get defaultConfigPath() {
        return path.resolve(process.env['APP_DIR'], 'assets/feconfig.json');
    }
    static get outDiConfigPath() {
        return path.resolve(process.env['OUTPUT_DIR'], 'feconfig.json');
    }
    /**
     * Get built config for compiler
     */
    static getFeConfig() {
        const filePath = fs.existsSync(this.outDiConfigPath) ? this.outDiConfigPath : this.defaultConfigPath;
        const fileStr = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileStr);
    }
    static copyMiscFiles() {
        const filePath = this.outDiConfigPath;
        if (!fs.existsSync(filePath)) {
            const data = JSON.stringify(this.feconfig, undefined, 2);
            fs.writeFileSync(filePath, data);
        }
    }
}
InitCommand.feconfig = InitCommand.getFeConfig();
exports.default = InitCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbml0L2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTZCO0FBQzdCLHVDQUF5QjtBQUl6QiwrREFBbUU7QUFFbkUsTUFBcUIsV0FBVztJQUdyQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQXFCO1FBQ25DLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQWtCO1FB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