import { AuthGuard } from './../shared/services/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'jobs', loadChildren: './jobs/jobs.module.ts#JobsModule', canActivate: [AuthGuard] },
            { path: 'resources', loadChildren: './resources/resources.module.ts#ResourcesModule' },
            { path: 'search', loadChildren: './search/search.module.ts#SearchModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
