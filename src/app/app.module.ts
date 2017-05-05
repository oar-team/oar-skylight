import { FmModule } from './file-manager/fm.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './shared/services/auth/authentification.service';
import { JobsStore } from './shared/stores/jobs-store';
import { OarApiService } from './shared/services/oar-api';
import { UserConfigStore } from './shared/stores/user-config-store';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FmModule,
        AppRoutingModule
    ],
    providers: [AuthenticationService, JobsStore, OarApiService, UserConfigStore],
    bootstrap: [AppComponent]
})
export class AppModule { }
