const express= require('express');

const mongoose=require('mongoose');

const cors=require('cors');

const bodyparser=require('body-parser')

const Income = require('./models/income')

const Expense=require('./models/expense')

const app=express();

const corsObj={
    orgin:"http://localost:4200",
    optionSuccessStatus:200
}

app.use(cors(corsObj));

app.use(bodyparser.json());


mongoose.connect('mongodb://localhost:27017/incomedetails', {useNewUrlParser: true });


const connection=mongoose.connection;

connection.once('open',()=>{      
    console.log("Mongodb connected");
})
 
app.get('/incomedetails',(req,res)=>{
    console.log(req.body)     
    Income.find((err,income)=>{
        if(err)        
          console.log(err)
        else
         res.send(income)
    })
})

app.get('/expensedetails',(req,res)=>{
    Expense.find((err,expense)=>{
        if(err)
          console.log(err)
        else
         res.send(expense)
    })
})

app.post('/incomedetails/add',(req,res)=>{
    console.log(req.body)           
    let income = new Income(req.body)
    income.save()
        .then(income=>{
            res.status(200).json({'income':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send("Failed to create")
        })
})



app.post('/expensedetails/add',(req,res)=>{
    console.log(req.body)           
    let expense = new Expense(req.body)
    expense.save()
        .then(expense=>{
            res.status(200).json({'expense':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send("Failed to create")
        })
})




app.listen(3000,()=>console.log("Running on 3000"));