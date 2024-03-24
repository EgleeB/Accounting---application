import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToLogin(): void {
    this.router.navigate(['/userzone/login']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/userzone/register']);
  }
}
