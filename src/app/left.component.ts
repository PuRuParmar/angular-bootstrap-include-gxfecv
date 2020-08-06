import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "left-app",
  templateUrl: "./left.component.html"
})
export class LeftComponent {
  @Input() lib: any;
  @Input() currentCategory: String;
  @Input() searchText: string;
  @Output() onChangeTab: EventEmitter<any> = new EventEmitter();
  @Output() onChangeSearch = new EventEmitter();

  name = "Angular";
  onClickTab(category) {
    console.log(category);
    this.onChangeTab.emit(category);
  }
  onSearch(event) {
    console.log(event.target.value);
    this.onChangeSearch.emit(event.target.value);
  }
  clickMe() {
    alert("Bootstap working");
  }
}
