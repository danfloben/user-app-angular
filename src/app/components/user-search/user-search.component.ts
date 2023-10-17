import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  selectedDocumentType: string;
  documentNumber: string;

  constructor(private router: Router, private userService: UserService) {
    this.selectedDocumentType = '';
    this.documentNumber = '';
  }

  isFieldsValid(): boolean {
    return !!this.selectedDocumentType && !!this.documentNumber && this.documentNumber.length >= 8 && this.documentNumber.length <= 11;
  }

  search(): void {
    this.userService.getUser(this.selectedDocumentType, this.documentNumber)
      .then(response => {
        if (response.data.status) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          this.router.navigate(['/user-details']);
        }
      })
      .catch(error => {
        console.error('Error al obtener detalles del usuario:', error);
      });
  }
}
