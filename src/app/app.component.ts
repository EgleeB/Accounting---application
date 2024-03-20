import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-account-app';

  constructor(private router: Router){}

  onSearchInputChange($event: any) {
    const searchQuery = $event.target.value;
    this.router.navigate(['accountname', searchQuery]);
  }
}
