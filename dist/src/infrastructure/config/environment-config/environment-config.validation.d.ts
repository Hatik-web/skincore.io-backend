export declare enum Environment {
    Development = "development",
    Production = "production",
    Local = "local",
    Test = "test"
}
declare class EnvironmentVariables {
    NODE_ENV: string;
    JWT_SECRET: string;
    JWT_EXPIRATION_TIME: string;
    JWT_REFRESH_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;
    BASE_URL: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
