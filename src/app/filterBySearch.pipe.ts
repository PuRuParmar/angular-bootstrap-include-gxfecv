// filter.pipe.ts

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "searchFilter" })
export default class SearchFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} applets
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(applets: any, searchText: string): any[] {
    console.log(applets, searchText);
    if (!applets) {
      return [];
    }
    if (!searchText) {
      return applets;
    }
    searchText = searchText.toLocaleLowerCase();

    return applets.filter(app => {
      return app.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
