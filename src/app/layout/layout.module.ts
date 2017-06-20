import { JobStateModule } from './../shared/components/job-state/job-state.module';
import { JobStateComponent } from './../shared/components/job-state/job-state.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        FormsModule,
        TranslateModule,
        LayoutRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
    ]
})
export class LayoutModule { }
