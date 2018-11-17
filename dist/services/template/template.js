"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Handlebars from 'handlebars';
const Mustache = __importStar(require("mustache"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class TemplateService {
    constructor(options) {
        this.options = options;
    }
    compile(data) {
        const path = this.fullPath(this.options.template);
        const template = fs.readFileSync(path, 'utf8');
        return Mustache.render(template, data);
    }
    fullPath(pathStr) {
        if (!process.env['APP_DIR'])
            throw 'APP_DIR env variable not set';
        return path.resolve(process.env['APP_DIR'], pathStr);
    }
}
exports.TemplateService = TemplateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvdGVtcGxhdGUvdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBQzVDLG1EQUFxQztBQUVyQyx1Q0FBeUI7QUFDekIsMkNBQTZCO0FBSTdCLE1BQWEsZUFBZTtJQUd4QixZQUFZLE9BQThCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBUztRQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sUUFBUSxDQUFDLE9BQWU7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQUUsTUFBTSw4QkFBOEIsQ0FBQztRQUNsRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0o7QUFqQkQsMENBaUJDIn0=