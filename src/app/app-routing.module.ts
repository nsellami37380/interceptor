import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './core/auth.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectedGuard } from './core/is-connected.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';

const routes: Routes = [
  {path:'secured', component: SecuredComponent, canActivate: [AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate: [IsConnectedGuard]},
  {path:'admin', component: AdminComponent, canActivate: [IsAdminGuard]},
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
