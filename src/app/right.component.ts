import { Component,Input } from "@angular/core";

@Component({
  selector: "right-app",
  templateUrl: "./right.component.html",
})
export class RightComponent {
  @Input() lib:any; 
  @Input() currentCategory:any;
  name = "Angular";
  onClickTab(category){
    this.currentCategory=category;
  }
  clickMe() {
    alert("Bootstap working");
  }
}
