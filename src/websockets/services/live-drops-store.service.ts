import {Injectable} from "@nestjs/common";

@Injectable()
class LiveDropsStoreService {
  private instance: LiveDropsStoreService;

  public liveDrops = [];
  public topDrops = [];

  public pushLiveDrops(openData: []) {}

  public getData() {
    return {
      liveDrops: this.liveDrops,
      topDrops: this.topDrops
    };
  }
}

export default LiveDropsStoreService;
