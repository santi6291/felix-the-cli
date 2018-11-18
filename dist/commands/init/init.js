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
    /**
     * Get built config for compiler
     */
    static getFeConfig() {
        const filePath = path.resolve(process.env['APP_DIR'], 'assets/feconfig.json');
        const fileStr = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileStr);
    }
}
InitCommand.feconfig = InitCommand.getFeConfig();
exports.default = InitCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbml0L2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTZCO0FBQzdCLHVDQUF5QjtBQUl6QiwrREFBbUU7QUFFbkUsTUFBcUIsV0FBVztJQUdyQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQXFCO1FBQ25DLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBa0I7UUFDekMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWU7UUFDckMsTUFBTSxhQUFhLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFFLENBQUM7SUFDakcsQ0FBQztJQUVPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUE4QixFQUFFLFNBQWlCO1FBQ2pGLE1BQU0sUUFBUSxHQUFvQixJQUFJLDBCQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVE7YUFDeEIsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxvQ0FBb0M7YUFDMUQsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtRQUN2RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQyxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFTLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sUUFBUSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFXO1FBQ2hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ssTUFBTSxDQUFDLFdBQVc7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDdEYsTUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O0FBcEVlLG9CQUFRLEdBQXFCLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUQzRSw4QkF1RUMifQ==