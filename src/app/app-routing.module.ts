import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BillsComponent } from './bills/bills.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'bills', component: BillsComponent },
    ],
  },

  { path: '', component: LoginComponent },
  { path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routeComponents = [PortalComponent, HomeComponent];
