import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  lib = {
    categories: ["Performance", "Investments", "Operations"],
    applets: [
      {
        name: "Performance Snapshot",
        categories: ["Performance"]
      },
      {
        name: "Commitment Widget",
        categories: ["Investments"]
      },
      {
        name: "CMS",
        categories: ["Investments", "Performance"]
      },
      {
        name: "ZYX",
        categories: ["Investments", "Performance","Operations"]
      }
    ]
  };
  currentCategory=this.lib.categories[0]?this.lib.categories[0]:"";
  searchText="";
  name = "Angular";
  onClickTab(category){
   console.log(category);
    this.currentCategory=category;
  }
  onChangeSearch(searchStr){
    this.searchText=searchStr;
  }
  clickMe() {
    alert("Bootstap working");
  }
}