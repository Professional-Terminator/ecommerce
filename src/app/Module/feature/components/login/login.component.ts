import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<LoginComponent>,private router: Router, private httpService: HttpServiceService) {}

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.httpService.login(this.username, this.password).subscribe(isValid => {
      if (isValid) {

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', this.username);
        
        this.router.navigate(['/admin']); // Redirect to admin panel
        this.dialogRef.close();
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
