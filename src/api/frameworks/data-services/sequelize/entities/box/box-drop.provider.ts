import {BoxDropRelations} from "./box-drop.entity";

export const BOX_DROP_REPOSITORY_TOKEN = 'BOX_DROP_REPOSITORY'

export const boxDropProvider = {
    provide: BOX_DROP_REPOSITORY_TOKEN,
    useValue: BoxDropRelations,
  }