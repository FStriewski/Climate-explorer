"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./temp/router"));
const app = express_1.default();
app.use(cors_1.default());
app.use(router_1.default);
app.listen(4000, () => console.log('Server running on port 4000!'));
//# sourceMappingURL=server.js.map