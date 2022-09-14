import LiveDropsStoreService from "../../websockets/services/live-drops-store.service";
import StatisticsStoreService from "../../websockets/services/statistics-store.service";
import {Controller} from "@nestjs/common";
import {WebSocketServer} from "@nestjs/websockets";
import {Server} from "socket.io";
import {EventPattern} from "@nestjs/microservices";
import {topics} from "../topics";
import {socketEmits} from "../../websockets/emits";
import {LiveDropsGateway} from "../../websockets/gateways/live-drops.gateway";
import {AppGateway} from "../../websockets/gateways/app.gateway";


@Controller()
export class CasesMessageController {

  constructor(
      public liveDropsStore: LiveDropsStoreService,
      public statisticsStore: StatisticsStoreService,
      public appGateway: AppGateway,
      public liveDropsGateway: LiveDropsGateway,
  ) {}

  @EventPattern(topics.cases.caseOpened)
  async handleCaseOpened(payload: Record<string, unknown>) {

    this.liveDropsStore.pushLiveDrops([]);
    this.statisticsStore.incrementUpgrades();

    // this.liveDropsGateway.sendNewItems()
    this.appGateway.onStatisticsUpdated()
  }

}
