import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/loading/loading.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent {

  constructor(private loadingService: LoadingService){

  }

  ngOnInit(): void {
    this.loadingService.show(); // Mostra o loading

    // Simule uma solicitação assíncrona (por exemplo, uma solicitação HTTP)
    setTimeout(() => {
      // Após a conclusão da solicitação
      this.loadingService.hide(); // Oculta o loading
    }, 2000); // Simulação de tempo de espera de 2 segundos
    }
}
