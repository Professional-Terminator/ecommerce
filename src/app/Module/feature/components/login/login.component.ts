import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.dialogRef.close();
  }
}
