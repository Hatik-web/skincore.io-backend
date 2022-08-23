import {Controller, Get, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import { v4 as uuid } from "uuid";

const editFileName = (req, file, callback) => {
    const name = `${uuid() + file.originalname}`;
    callback(null, name);
};

@Controller("/")
export class AppController {
    constructor() {}

    @Get()
    async getHello() {
        return "Давай за работу!"
    }

    @Post("/upload-image")
    @UseInterceptors(
        FilesInterceptor('file', 1, {
            storage: diskStorage({
                destination: './dist/static/',
                filename: editFileName,
            })
        }),
    )
    async uploadFiles(@UploadedFiles() files) {
        return `/${files[0].filename}`;
    }

}