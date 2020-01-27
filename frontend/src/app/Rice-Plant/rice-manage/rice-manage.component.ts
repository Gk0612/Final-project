import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import {RicePlantService} from '../../rice-plant.service'

@Component({
  selector: 'app-rice-manage',
  templateUrl: './rice-manage.component.html',
  styleUrls: ['./rice-manage.component.css']
})
export class RiceManageComponent implements OnInit {
  incomeDetails;
  expenseDetails;
  incomeId;
  expenseId;
  constructor(private details:RicePlantService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
      this.incomeId=this.router.url;
      console.log(this.incomeId)

    this.fetchIncomes();
    this.fetchExpense();
  }

  fetchIncomes(){
    this.details.getIncomeDetails().subscribe((data:any) =>{
            this.incomeDetails=data;
            console.log("Data requested....");
    })
   }

   fetchExpense(){
    this.details.getExpenseDetails().subscribe((data:any) =>{
            this.expenseDetails=data;
            console.log("Data requested....");
    })
   }



  deleteIncome(id){
    this.details.deleteIncomeDetailsById(id).subscribe(()=>{
      this.fetchIncomes();
    })

  }

  deleteExpense(id){
    this.details.deleteExpenseDetailsById(id).subscribe(()=>{
      this.fetchExpense();
    })

  }

  


}
