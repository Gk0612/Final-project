import { Component, OnInit , ViewChild} from '@angular/core';
import { Router} from '@angular/router'
import {RicePlantService} from '../../rice-plant.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


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

  displayedColumns: string[] = ['date','customerName','customerPlace','billNumber','numberOfAcres','costPerAcres','totalAmount','advance','balance','amountGiven'];
  dataSource = new MatTableDataSource<Income>(this.incomeDetails);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



    

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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

export interface Income {
  date:string;
  customerName:string;
  customerPlace:string;
  billNumber:number;
  numberOfAcres:number;
  costPerAcre:number;
  totalAmount:number;
  advance:number;
  balance:number;
  amountGiven:number;
  }