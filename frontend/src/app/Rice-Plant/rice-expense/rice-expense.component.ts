import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RicePlantService } from './../../rice-plant.service';

@Component({
  selector: 'rice-expense',
  templateUrl: './rice-expense.component.html',
  styleUrls: ['./rice-expense.component.css']
})
export class RiceExpenseComponent implements OnInit {

  constructor(private incomeDetails:RicePlantService ,private router:Router) { }

  ngOnInit() {
  }
  
  addExpense(driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,service,spare,foodCost,totalAmount){
      this.incomeDetails.addExpense(driverName,managerName,driverSalary,managerSalary,
        date,petrol,diesel,service,spare,foodCost,totalAmount).subscribe(()=>{
          this.router.navigate(['']);
        })
}
}
