import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practiceProject1';

  constructor(private store : StorageService, private route : Router){ }

  logout(){
    this.store.deleteToken();
    this.route.navigate(['/login']);
  }
}




