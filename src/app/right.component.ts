import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "right-app",
  templateUrl: "./right.component.html"
})
export class RightComponent {
  @Input() lib: any;
  @Input() currentCategory: any;
  @Input() searchText: string;
  name = "Angular";
  
  clickMe() {
    alert("Bootstap working");
  }
}
