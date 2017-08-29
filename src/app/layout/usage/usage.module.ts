import { DataTableModule } from "angular2-datatable/index";
import { SharedPipesModule } from "./../../shared/pipes/shared-pipes.module";
import { UsageRoutingModule } from "./usage.routes";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsageComponent } from "./usage.component";
import { ResourceStateComponent } from "./resource-state/resource-state.component";
import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    UsageRoutingModule,
    SharedPipesModule,
    DataTableModule,
    NgbProgressbarModule
  ],
  declarations: [UsageComponent, ResourceStateComponent]
})
export class UsageModule {}
