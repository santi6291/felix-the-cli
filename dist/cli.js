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
process.env['OUTPUT_DIR'] = process.env.PWD;
const init_1 = __importDefault(require("./commands/init/init"));
class Cli {
    constructor(argv) {
        this.pjson = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
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
}
new Cli(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF5QjtBQUV6Qix5Q0FBb0M7QUFFcEMsOENBQThDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCwwRUFBMEU7QUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUU1QyxnRUFBK0M7QUFHL0MsTUFBTSxHQUFHO0lBSUwsWUFBWSxJQUFjO1FBSGxCLFVBQUssR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0UsWUFBTyxHQUFZLElBQUksbUJBQU8sRUFBRSxDQUFDO1FBR3JDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxDQUFDLE9BQU87YUFDUCxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ2YsV0FBVyxDQUFDLHdDQUF3QyxDQUFDO2FBQ3JELE1BQU0sQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUM7YUFDbkMsTUFBTSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7YUFDL0IsTUFBTSxDQUFDLGNBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKO0FBRUQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDIn0=