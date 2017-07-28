import { FmComponent } from "./fm/fm.component";
import { Route } from "@angular/router";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "explorer", component: FmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmRoutingModule {}
