import {Promocode} from "./promocode.entity";

export const PROMOCODES_REPOSITORY_TOKEN = 'PROMOCODES_REPOSITORY'

export const promocodeProvider = {
    provide: PROMOCODES_REPOSITORY_TOKEN,
    useValue: Promocode,
  }