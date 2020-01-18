import { RicePlantService } from './../../rice-plant.service';
import { Component} from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'rice-income',
  templateUrl: './rice-income.component.html',
  styleUrls: ['./rice-income.component.css']
})
export class RiceIncomeComponent  {
  
  constructor(private details:RicePlantService ,private router:Router){}


  addIncome(date,customerName,customerPlace, billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven){
    this.details.addIncome(date,customerName,customerPlace, billNumber,numberOfAcre,
      costPerAcre,totalAmount,advance,balance,amountGiven).subscribe(()=>{
        this.router.navigate([''])
    })
}
}
