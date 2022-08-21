export abstract class IHexaOneService {
    abstract getItems(app_id: number): Promise<any>;
}