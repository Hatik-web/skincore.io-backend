import {BoxesCategory} from "./box-category.entity";
import {Box} from "./box.entity";

export const BOXES_REPOSITORY_TOKEN = 'BOXES_REPOSITORY'

export const boxProvider = {
    provide: BOXES_REPOSITORY_TOKEN,
    useValue: Box,
  }