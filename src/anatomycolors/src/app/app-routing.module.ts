import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './www/index'

const routes: Routes = [
  {path: 'index', component: IndexComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]  
})
export class AppRoutingModule { }
