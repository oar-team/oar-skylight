import { Route, Routes, RouterModule} from '@angular/router';
import { SearchComponent } from './index';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: ':strSearch', component: SearchComponent},
    { path: '', component: SearchComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SearchRoutingModule { }
