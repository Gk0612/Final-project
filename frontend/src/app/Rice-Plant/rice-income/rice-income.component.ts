import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rice-income',
  templateUrl: './rice-income.component.html',
  styleUrls: ['./rice-income.component.css']
})
export class RiceIncomeComponent  {

 

  submit(f){
    console.log(f)
  }
}
