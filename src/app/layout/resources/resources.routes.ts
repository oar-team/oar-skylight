import { Route } from '@angular/router';
import { AuthGuard } from '../../shared/services/auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResourcesComponent } from './';


const routes: Routes = [
    { path: '', component: ResourcesComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
