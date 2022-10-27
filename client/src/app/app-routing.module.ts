import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'',component:EmpDashboardComponent},
  {path:'customers',
  children:[
    {
      path:'',component:CustomerComponent
    },
    {
      path:':id',component:CustomerDetailComponent
    }
  ]
    
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
