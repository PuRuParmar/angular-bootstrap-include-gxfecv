// filter.pipe.ts

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "catFilter" })
export class CatFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} applets
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(applets: any, currentCategory: string): any[] {
    console.log(applets, currentCategory);
    if (!applets) {
      return [];
    }


    return applets
      .filter(app => app.categories.find(cat => cat === currentCategory));
    
  }
}
