"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
const connectToDatabase = async () => {
    await (0, mongoose_1.connect)('mongodb+srv://gigley7:UADBsqK5OLO34qQA@database.4vhis.mongodb.net/?retryWrites=true&w=majority&appName=DataBase');
    console.log('Connected to database');
};
exports.connectToDatabase = connectToDatabase;
