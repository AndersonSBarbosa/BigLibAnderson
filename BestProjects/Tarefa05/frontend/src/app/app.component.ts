import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class AppComponent implements OnInit {
  public users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    //deixe a visualização dinamica
    this.http.get('/api/users')
      .subscribe((data: any) => {
        this.users = [{"name":"teste","email":"teste2"}];
      }, error => {
        console.error('Error loading users', error);
      });
  }

  addUser(name: string, email: string) {
    //implemente a adição de users
  }
}