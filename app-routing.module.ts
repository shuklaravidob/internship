import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { RegisterDataComponent } from './register-data/register-data.component';


const routes: Routes = [
  
  {path:"create/user", component:RegisterComponent},
  {path:"registerData", component:RegisterDataComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const RoutingConponent = [RegisterComponent,RegisterDataComponent];
