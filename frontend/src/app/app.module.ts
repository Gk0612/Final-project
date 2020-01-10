import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeComponent } from './income/income.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule,Routes} from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';
import { ContentpageComponent } from './contentpage/contentpage.component';

const routes:Routes = [
  {  path:'' , component:HomeComponent},
  {  path:'login', component:LoginComponent},
  {  path:'income' , component:IncomeComponent},
  {  path:'side' , component:SidenavbarComponent},
  {  path:'expense' , component:ExpenseComponent},
  {  path:'main' , component:ContentpageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    LoginComponent,
    SidenavbarComponent,
    ExpenseComponent,
    HomeComponent,
    ContentpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    CommonModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
