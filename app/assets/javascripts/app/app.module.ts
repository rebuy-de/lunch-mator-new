import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "app/app.component";
import {routing} from "app/app.routing";
import {HeaderComponent} from "app/common/components/header/header.component";
import {LunchModule} from "app/lunch/lunch.module";
import {WelcomeComponent} from "app/common/components/welcome/welcome.component";
import {AuthenticationModule} from "app/authentication/authentication.module";

@NgModule({
  imports: [
    BrowserModule,
    LunchModule,
    AuthenticationModule,
    HttpModule,
    routing
  ],
  declarations: [AppComponent, HeaderComponent, WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
