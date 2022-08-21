import {Global, Module} from '@nestjs/common';
import { JwtModule as Jwt } from '@nestjs/jwt';
import { JwtTokenService } from './jwt.service';
import {IJwtService} from "../../../core/abstracts/adapters/jwt.interface";

@Global()
@Module({
    imports: [
        Jwt.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '24h' },
        }),
    ],
    providers: [{
        provide: IJwtService,
        useClass: JwtTokenService,
    }],
    exports: [IJwtService]
})
export class JwtModule {}