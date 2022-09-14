import {Controller, Get, OnModuleInit, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {v4 as uuid} from "uuid";

const editFileName = (req, file, callback) => {
    const name = `${uuid() + file.originalname}`;
    callback(null, name);
};

@Controller("/")
export class AppController {
    constructor() {}

    @Get()
    async getHello() {
        // const users = []
        //
        // let steamId = 76561199235333550
        //
        // while (users.length <= 100) {
        //     const response = await axios.get(
        //         `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API}&steamids=${steamId}`
        //     )
        //     const player = response.data.response.players[0]
        //     if (player && player.avatarfull !== "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg") {
        //         users.push(player)
        //     }
        //
        //     console.log(ConsoleStatus.info, users.length)
        //     steamId = steamId + 10
        // }

        // return users
        // this.client.emit('t', [1,1,1,1,1]);
        // return this.client.send<number>('SUMMA', [1, 2, 3]);
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