import { UsageComponent } from "./usage.component";
import { Route, Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: UsageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageRoutingModule {}
