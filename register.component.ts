import { Component, OnInit, Output ,EventEmitter} from '@angular/core';  
import { NgForm, FormGroup, FormControl } from '@angular/forms';  
import { MatDialog } from '@angular/material/dialog';
import { RegisterDataComponent } from '../register-data/register-data.component';
@Component({  
selector: 'app-register',  
templateUrl: './register.component.html',  
styleUrls: ['./register.component.css']  
})  
export class RegisterComponent implements OnInit {  
data = {
    firstName:'',
    lastName : '',
    mobile : '',
    location : '' 
};
userForm;
constructor(public dialog: MatDialog) { }  
ngOnInit() {  
    this.userForm = new FormGroup({
        firstName : new FormControl(" "),
        lastName : new FormControl(" "),
        mobile : new FormControl(" "),
        location : new FormControl(" ")
    })
}  
locations = ['Bangalore', 'Kalaburagi', 'Solapur'];  
createUser(user) : void{
        const dialogRef = this.dialog.open(RegisterDataComponent, {
          width: '471px',
          disableClose: true,
          data: user
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
}  