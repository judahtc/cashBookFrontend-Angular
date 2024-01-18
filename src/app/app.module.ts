import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BillsComponent } from './bills/bills.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { SpendingsComponent } from './spendings/spendings.component';
import { BusinessUsersComponent } from './business-users/business-users.component';
@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    HomeComponent,
    BillsComponent,
    SpendingsComponent,
    BusinessUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
