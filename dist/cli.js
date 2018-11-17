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
const init_1 = __importDefault(require("./commands/init/init"));
class Cli {
    constructor(argv) {
        this.pjson = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
        this.program = new commander_1.Command();
        process.env['APP_DIR'] = path_1.resolve(__dirname, '../');
        // TODO, ensure this will looks at the directory that installed the module
        process.env['OUTPUT_DIR'] = process.env.PWD;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF5QjtBQUV6Qix5Q0FBb0M7QUFFcEMsZ0VBQStDO0FBRy9DLE1BQU0sR0FBRztJQUlMLFlBQVksSUFBYztRQUhsQixVQUFLLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdFLFlBQU8sR0FBWSxJQUFJLG1CQUFPLEVBQUUsQ0FBQztRQUdyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGNBQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsMEVBQTBFO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsT0FBTzthQUNQLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDZixXQUFXLENBQUMsd0NBQXdDLENBQUM7YUFDckQsTUFBTSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7YUFDL0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQzthQUNuQyxNQUFNLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQzthQUMvQixNQUFNLENBQUMsY0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0o7QUFFRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMifQ==