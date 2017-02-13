import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NameListService } from './name-list/index';
import { OarApiService } from './oar-api/index';
import { JobsStore } from './stores/jobs-store';
import { UserConfigStore } from './stores/user-config-store';
import { AuthenticationService } from './auth/authentification.service';

/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [],
    exports: [CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService, AuthenticationService, JobsStore, OarApiService, UserConfigStore]
        };
    }
}
