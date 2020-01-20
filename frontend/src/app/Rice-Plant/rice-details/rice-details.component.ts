import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {RicePlantService} from '../../rice-plant.service'

@Component({
  selector: 'rice-details',
  templateUrl: './rice-details.component.html',
  styleUrls: ['./rice-details.component.css']
})
export class RiceDetailsComponent implements OnInit {

  

  incomeDetails=[];
  sum=0;
  expenseDetails;
  constructor(private details:RicePlantService,private router:Router) { }
  
  
  ngOnInit() {
    this.fetchIncomes();
    this.fetchExpense();
    this.totalIncome();

    

  
  }
  fetchIncomes(){
    this.details.getIncomeDetails().subscribe((data:any) =>{
            this.incomeDetails=data;
            console.log("Data requested....");
           
    })
   }

   totalIncome(){

    for(let i=0;i<this.incomeDetails.length;i++)
    {
      console.log(this.incomeDetails[i].advance)
    }

    return this.sum;
    
  }

   fetchExpense(){
    this.details.getExpenseDetails().subscribe((data:any) =>{
            this.expenseDetails=data;
            console.log("Data requested....");
           
    })
   }
}
