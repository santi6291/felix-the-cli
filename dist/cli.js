#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs = __importStar(require("fs"));
const commander_1 = require("commander");
// Need to set these before files are imported
process.env['APP_DIR'] = path_1.resolve(__dirname, '../');
// Using PWD since this could be installed as a global module
process.env['OUTPUT_DIR'] = process.env.PWD;
const init_1 = __importDefault(require("./commands/init/init"));
// import { triggerAsyncId } from 'async_hooks';
class Cli {
    constructor(argv) {
        this.pjson = this.getPackageJson();
        this.program = new commander_1.Command();
        this.program.version(this.pjson.version);
        this.setCommands();
        this.program.parse(argv);
    }
    setCommands() {
        this.commandInit();
    }
    commandInit() {
        this.program
            .command('init')
            .description('Create feconfig.json on root directory')
            .option('--scss', 'Enable SCSS')
            .option('--ts', 'Enable TypeScript')
            .option('--twig', 'Enable Twig')
            .action(init_1.default.run.bind(init_1.default));
    }
    getPackageJson() {
        const pjsonPath = path_1.resolve(process.env['APP_DIR'], 'package.json');
        const file = fs.readFileSync(pjsonPath, 'utf8');
        return JSON.parse(file);
    }
}
new Cli(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF5QjtBQUV6Qix5Q0FBb0M7QUFFcEMsOENBQThDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCw2REFBNkQ7QUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUU1QyxnRUFBK0M7QUFFL0MsZ0RBQWdEO0FBRWhELE1BQU0sR0FBRztJQUlMLFlBQVksSUFBYztRQUhsQixVQUFLLEdBQWlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QyxZQUFPLEdBQVksSUFBSSxtQkFBTyxFQUFFLENBQUM7UUFHckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsT0FBTzthQUNQLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDZixXQUFXLENBQUMsd0NBQXdDLENBQUM7YUFDckQsTUFBTSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7YUFDL0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQzthQUNuQyxNQUFNLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQzthQUMvQixNQUFNLENBQUMsY0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sY0FBYztRQUNsQixNQUFNLFNBQVMsR0FBVyxjQUFPLENBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNsRixNQUFNLElBQUksR0FBWSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBRUQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDIn0=