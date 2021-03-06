import { CustomXHRBackend } from './shared/services/http/CustomXHRBackend';
import { SharedPipesModule } from "./shared/pipes/shared-pipes.module";
import { SimpleNotificationsModule } from "angular2-notifications";
import { AuthGuard } from "./shared/services/auth/auth-guard.service";
import { FmModule } from "./file-manager/fm.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, Http, XHRBackend } from "@angular/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthenticationService } from "./shared/services/auth/authentification.service";
import { JobsStore } from "./shared/stores/jobs-store";
import { OarApiService } from "./shared/services/oar-api";
import { UserConfigStore } from "./shared/stores/user-config-store";
import { JobStateComponent } from "./shared/components/job-state/job-state.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    SharedPipesModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    FmModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    JobsStore,
    OarApiService,
    UserConfigStore,
    AuthGuard,
    {provide: XHRBackend, useClass: CustomXHRBackend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
