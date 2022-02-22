"use strict";
// export default function add(x: number, y: number): number {
//   return x + y;
// }
exports.__esModule = true;
exports.Calculator = void 0;
// export function sub(x: number, y: number): number {
//   return x - y;
// }
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
