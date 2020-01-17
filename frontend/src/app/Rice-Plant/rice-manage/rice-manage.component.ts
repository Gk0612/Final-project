import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {RicePlantService} from '../../rice-plant.service'

@Component({
  selector: 'app-rice-manage',
  templateUrl: './rice-manage.component.html',
  styleUrls: ['./rice-manage.component.css']
})
export class RiceManageComponent implements OnInit {
  incomeDetails;
  expenseDetails;
  constructor(private details:RicePlantService,private router:Router) { }

  ngOnInit() {
    this.fetchIncomes();
    this.fetchExpense();
  }

  fetchIncomes(){
    this.details.getIncomeDetails().subscribe((data:any) =>{
            this.incomeDetails=data;
            console.log("Data requested....");
            console.log(this.incomeDetails[0]);
    })
   }

   fetchExpense(){
    this.details.getExpenseDetails().subscribe((data:any) =>{
            this.expenseDetails=data;
            console.log("Data requested....");
            console.log(this.expenseDetails[0]);
    })
   }

}
