import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Module/feature/components/login/login.component';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  currentSection:any;
  isNavbarContentOpen!:boolean;
  isLogin: boolean = false

  categories!: any[];

  constructor(private http_service: HttpServiceService, public dialog: MatDialog){}

ngOnInit(): void {
  this.loadCategories();
  
}

openLoginDialog(){
  const dialogRef = this.dialog.open(LoginComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

  loadCategories(){
    this.http_service.getCategories().subscribe({
      next: (data) => {
       this.categories = data
      },
      error: (error) => console.error('Error fetching categories:', error)
    } 
    )
  }

  openNavbarContent(section:any){
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }
  closeNavbarContent(){
    this.isNavbarContentOpen = false;
  }

  navigateTo(path:any){

  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });

    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }

}

 