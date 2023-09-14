import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoadingService } from './service/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loadingService: LoadingService) { }

  get isLoading(): Observable<boolean> {
    return this.loadingService.isLoading();
  }
}
