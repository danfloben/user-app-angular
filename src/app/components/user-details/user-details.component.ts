import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {

  user: User = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
  };

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString) as User;
    }
  }
}
