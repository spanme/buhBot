var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    name: "add", // The name of the command
    description: "Add two numbers", // Description for the command
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const args = interaction.options.data;
            const num1 = parseFloat((_a = args[0]) === null || _a === void 0 ? void 0 : _a.value);
            const num2 = parseFloat((_b = args[1]) === null || _b === void 0 ? void 0 : _b.value);
            if (!isNaN(num1) && !isNaN(num2)) {
                yield interaction.reply(`The sum is: ${num1 + num2}`);
            }
            else {
                yield interaction.reply("Please provide valid numbers.");
            }
        });
    },
};
export {};
