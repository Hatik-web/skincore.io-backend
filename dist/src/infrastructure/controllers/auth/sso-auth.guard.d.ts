import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as Passport from 'passport';
export declare const PASSPORT = "passport";
export declare class SSOAuthGuard implements CanActivate {
    private readonly passport;
    constructor(passport: Passport.Authenticator);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private handleRequest;
}
