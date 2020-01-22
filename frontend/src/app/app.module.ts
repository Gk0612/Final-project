
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MatTableModule } from '@angular/material/table';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RiceIncomeComponent } from './Rice-Plant/rice-income/rice-income.component';
import { BalerIncomeComponent } from './Baler/baler-income/baler-income.component';
import { RiceExpenseComponent } from './Rice-Plant/rice-expense/rice-expense.component';
import { BalerExpenseComponent } from './Baler/baler-expense/baler-expense.component';
import { SugarIncomeComponent } from './Sugarcane/sugar-income/sugar-income.component';
import { SugarExpenseComponent } from './Sugarcane/sugar-expense/sugar-expense.component';
import { RiceDetailsComponent } from './Rice-Plant/rice-details/rice-details.component'
import {RicePlantService} from './rice-plant.service';
import { RiceManageComponent } from './Rice-Plant/rice-manage/rice-manage.component';
import { SugarManageComponent } from './Sugarcane/sugar-manage/sugar-manage.component';
import { SugarDetailsComponent } from './Sugarcane/sugar-details/sugar-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from './material/material.module';


const routes:Routes = [
  {  path:'' , component:HomeComponent},
  {  path:'login', component:LoginComponent},
  {  path:'main',component:SidenavbarComponent},
  {  path:'riceincome' , component:RiceIncomeComponent},
  {  path:'riceexpense' , component:RiceExpenseComponent},
  {  path:'ricemanage', component:RiceManageComponent},
  {  path:'ricedetails',component:RiceDetailsComponent},
  {  path:'sugarincome' , component:SugarIncomeComponent},
  {  path:'sugarexpense' , component:SugarExpenseComponent},
  {  path:'sugardetails',component:SugarDetailsComponent},
  {  path:'balerincome' , component:BalerIncomeComponent},
  {  path:'balerexpense' , component:BalerExpenseComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavbarComponent,
    HomeComponent,
    RiceIncomeComponent,
    BalerIncomeComponent,
    RiceExpenseComponent,
    BalerExpenseComponent,
    SugarIncomeComponent,
    SugarExpenseComponent,
    RiceDetailsComponent,
    RiceManageComponent,
    SugarManageComponent,
    SugarDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatTreeModule,
    CommonModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,  
    MatIconModule,
    MatListModule,
    MaterialModule
  ],
  providers: [
    RicePlantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
