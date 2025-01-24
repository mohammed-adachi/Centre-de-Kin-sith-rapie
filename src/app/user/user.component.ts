import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  newUser: any = { firstName: '', lastName: '', email: '' };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.getUsers();  // Refresh the list after adding a new user
      this.newUser = { firstName: '', lastName: '', email: '' }; // Reset form
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();  // Refresh the list after deleting a user
    });
  }
}
