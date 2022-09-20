"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = __importDefault(require("./src/router/routers"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const DB_URL = 'mongodb://localhost:27017/dbtest';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err.message));
app.use('/api', routers_1.default);
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});
//# sourceMappingURL=index.js.map