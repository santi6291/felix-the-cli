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
// TODO, ensure this will looks at the directory that installed the module
process.env['OUTPUT_DIR'] = path_1.resolve(__dirname, '../../../');
console.log(process.env);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF5QjtBQUV6Qix5Q0FBb0M7QUFFcEMsOENBQThDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCwwRUFBMEU7QUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxjQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGdFQUErQztBQUUvQyxnREFBZ0Q7QUFFaEQsTUFBTSxHQUFHO0lBSUwsWUFBWSxJQUFjO1FBSGxCLFVBQUssR0FBaUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVDLFlBQU8sR0FBWSxJQUFJLG1CQUFPLEVBQUUsQ0FBQztRQUdyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sV0FBVztRQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sV0FBVztRQUNmLElBQUksQ0FBQyxPQUFPO2FBQ1AsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUNmLFdBQVcsQ0FBQyx3Q0FBd0MsQ0FBQzthQUNyRCxNQUFNLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQzthQUMvQixNQUFNLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDO2FBQ25DLE1BQU0sQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxjQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxjQUFjO1FBQ2xCLE1BQU0sU0FBUyxHQUFXLGNBQU8sQ0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxHQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFFRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMifQ==