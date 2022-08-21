import {Drop} from "./drop.entity";

export const DROPS_REPOSITORY_TOKEN = 'DROPS_REPOSITORY'

export const dropProvider = {
    provide: DROPS_REPOSITORY_TOKEN,
    useValue: Drop,
  }