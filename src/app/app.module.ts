import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LeftComponent } from "./left.component";
import { RightComponent } from "./right.component";
import SearchFilterPipe from "./filterBySearch.pipe"; // -> imported filter pipe
import { CatFilterPipe } from "./filterByCat.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LeftComponent,
    RightComponent,
    SearchFilterPipe,
    CatFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
