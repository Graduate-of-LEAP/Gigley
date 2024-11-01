"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const category_router_1 = require("./routes/category.router");
const user_router_1 = require("./routes/user.router");
const dotenv_1 = __importDefault(require("dotenv"));
const tasker_router_1 = require("./routes/tasker.router");
const auth_middlewares_1 = require("./middlewares/auth.middlewares");
const getTasker_router_1 = require("./routes/getTasker.router");
const subCategory_router_1 = require("./routes/subCategory.router");
const workDetails_router_1 = require("./routes/workDetails.router");
const taskerDataUpdate_router_1 = require("./routes/taskerDataUpdate.router");
const multer_1 = __importStar(require("multer"));
const cloudinary_1 = require("cloudinary");
const getTaskerAlInfo_1 = __importDefault(require("./routes/getTaskerAlInfo"));
const getAllTasker_router_1 = require("./routes/getAllTasker.router");
const task_router_1 = require("./routes/task.router");
dotenv_1.default.config();
(0, database_1.connectToDatabase)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(auth_middlewares_1.authMiddleware);
app.use('/subCategory', subCategory_router_1.subcategoryRouter);
app.use('/mainCategory', category_router_1.mainCategoryRouter);
app.use('/user', user_router_1.userRouter);
app.use('/authTasker', tasker_router_1.authTaskerRouter);
app.use('/tasker', getTasker_router_1.getTaskerRouter);
app.use('/workDetails', workDetails_router_1.workDetailsRouter);
app.use('/submitWorkDetails', taskerDataUpdate_router_1.submitTaskerRouter);
app.use('/getTaskerAllInforouter', getTaskerAlInfo_1.default);
app.use('/getAllTasker', getAllTasker_router_1.allTasker);
app.use('/task', task_router_1.taskRouter);
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const storage = (0, multer_1.memoryStorage)();
const upload = (0, multer_1.default)({ storage });
async function handleUpload(file) {
    const res = await cloudinary_1.v2.uploader.upload(file, {
        resource_type: 'auto',
    });
    return res;
}
app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const dataURI = `data:${req.file.mimetype};base64,${b64}`;
        const cloudinaryResponse = await handleUpload(dataURI);
        res.json(cloudinaryResponse);
    }
    catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        res.status(500).send('Failed to upload image.');
    }
});
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
