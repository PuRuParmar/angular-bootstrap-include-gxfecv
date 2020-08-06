import { Component, Input} from "@angular/core";

@Component({
  selector: "left-app",
  templateUrl: "./left.component.html",
})
export class LeftComponent {
  @Input() lib:any; 
  @Input() currentCategory:any;
  name = "Angular";
  onClickTab(category){;
    this.currentCategory=category;
  }
  clickMe() {
    alert("Bootstap working");
  }
}
