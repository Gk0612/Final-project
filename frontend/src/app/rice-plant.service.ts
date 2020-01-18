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

  getIncomeDetailsById(id){
    return this.http.get(`${this.uri}/incomedetails/${id}`)
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

  updateIncome( id,date,customerName,customerPlace,billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven){
    const income ={
      id:id,
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
    return this.http.post(`${this.uri}/incomedetails/update/${id}`,income)
  }

  deleteIncomeDetailsById(id){
    return this.http.get(`${this.uri}/incomedetails/delete/${id}`)
  }



  getExpenseDetails(){
    return this.http.get(`${this.uri}/expensedetails`)
  }

  getExpenseDetailsById(id){
    return this.http.get(`${this.uri}/expensedetails/${id}`)
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


  updateExpense(id,driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount){
  const expense={
    id:id,
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

return this.http.post(`${this.uri}/expensedetails/update/${id}`,expense)
  }

  deleteExpenseDetailsById(id){
    return this.http.get(`${this.uri}/expensedetails/delete/${id}`)
  }


   }


