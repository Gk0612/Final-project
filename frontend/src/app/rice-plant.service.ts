import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RicePlantService {

  uri='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getIncomeDetails(){
    return this.http.get(`${this.uri}/incomedetails`)
  }

  getExpenseDetails(){
    return this.http.get(`${this.uri}/expensedetails`)
  }

  addIncome(date,customerName,customerPlace,billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven){
    const income ={
    date:date,
    customerName:customerName,
    customerPlace:customerPlace,
    billNumber:billNumber,
    numberOfAcre:numberOfAcre,
    costPerAcre:costPerAcre,
    totalAmount:totalAmount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/incomedetails/add`,income)
  }

  addExpense(driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount){

const expense={
  driverName:driverName,
  managerName:managerName,
  driverSalary:driverSalary,
  managerSalary:managerSalary,
  date:date,
  petrol:petrol,
  diesel:diesel,
  spare:spare,
  service:service,
  foodCost:foodCost,
  totalAmount:totalAmount
}

return this.http.post(`${this.uri}/expensedetails/add`,expense)
  }
   }


