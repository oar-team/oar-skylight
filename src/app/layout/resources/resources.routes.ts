import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { Route } from "@angular/router";
import { AuthGuard } from "../../shared/services/auth/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ResourcesComponent } from "./";

const routes: Routes = [
  { path: "", component: ResourcesComponent, canActivate: [AuthGuard] },
  { path: ":id", component: ResourceDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule {}
