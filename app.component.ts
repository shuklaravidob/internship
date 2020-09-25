import { Component } from '@angular/core';  
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internship';
  submitted(event){  
    this.tableData.push(event);  
    }  
    DeletedItem(values){  
    for(var i = this.tableData.length - 1; i >= 0; i--) {  
    if(this.tableData[i].Mobile === values) {  
    this.tableData.splice(i, 1);  
    }  
    }  
    }  
    tableData=[  
    {  
    FirstName:"Abhishek",  
    LastName:"Shukla",  
    Mobile:1234567890,  
    Location:"Bangalore"  
    },  
    {  
    FirstName:"Ravi",  
    LastName:"Shukla",  
    Mobile:1478523690,  
    Location:"Lucknow"  
    },  
    {  
    FirstName:"Shashi",  
    LastName:"Shukla",  
    Mobile:9874563215,  
    Location:"Kalaburagi"  
    }  
    ]  
    }  

