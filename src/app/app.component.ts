import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    public notificationsOptions = {
        position: ['bottom', 'right'],
        timeOut: 3000,
        lastOnBottom: true,
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 10
    };

    constructor(private translate: TranslateService, private notifications: NotificationsService) {
        translate.addLangs(['en', 'fr', 'ur']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur/) ? browserLang : 'en');
    }

}

