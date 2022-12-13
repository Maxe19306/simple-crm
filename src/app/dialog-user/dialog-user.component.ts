import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {
  loadAnimation = false;
  user = new User();

  birthDate: Date;
  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogUserComponent> ) { }

  ngOnInit(): void {
  }


  saveUser(){
    this.loadAnimation = true;
    this.user.birthDate = this.birthDate.getTime()
    this.firestore
    .collection('users')        // welcher Sammlung soll es hinzugefügt werden
    .add(this.user.toJson())    // fügt Infos der Sammlung hinzu
    .then((result: any) =>{     // was passiert nach dem hinzufügen, kann auch raus 
      console.log('moin moin',result)
    });
    this.loadAnimation = false; 
    this.dialogRef.close();
  }

  
}
