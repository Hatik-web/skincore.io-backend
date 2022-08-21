import {BoxesCategory} from "./box-category.entity";

export const BOXES_CATEGORIES_REPOSITORY_TOKEN = 'BOXES_CATEGORIES_REPOSITORY'

export const boxesCategoriesProvider = {
    provide: BOXES_CATEGORIES_REPOSITORY_TOKEN,
    useValue: BoxesCategory,
  }