import { DataTableModule } from "angular2-datatable/index";
import { SharedPipesModule } from "./../../shared/pipes/shared-pipes.module";
import { UsageRoutingModule } from "./usage.routes";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsageComponent } from "./usage.component";

@NgModule({
  imports: [
    CommonModule,
    UsageRoutingModule,
    SharedPipesModule,
    DataTableModule
  ],
  declarations: [UsageComponent]
})
export class UsageModule {}
