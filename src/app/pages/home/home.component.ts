import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/loading/loading.service';
declare var $: any; // Declare a variável global $ para acessar o jQuery

interface FaqQuestion {
  question: string;
  answer: string;
  showAnswer: boolean; // Adicionamos a propriedade showAnswer aqui
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  logos = [
    { src: '../assets/partnersLogos/logo1.gif', alt: 'Marca 1', href:'https://www.latcarolina.com.br/'},
    { src: '../assets/partnersLogos/logo2.png', alt: 'Marca 2', href:'https://www.friovel.com.br/produtos/frireggio/'},
    { src: '../assets/partnersLogos/logo3.gif', alt: 'Marca 3', href:'https://www.garoto.com.br/'},
    { src: '../assets/partnersLogos/logo4.png', alt: 'Marca 4', href:'https://gradina.com.br/'},
    { src: '../assets/partnersLogos/logo5.png', alt: 'Marca 5', href:'https://www.coopsantaclara.com.br/'},
    { src: '../assets/partnersLogos/logo6.png', alt: 'Marca 6', href:'https://www.yakult.com.br/'},
    { src: '../assets/partnersLogos/logo7.gif', alt: 'Marca 7', href:'https://saf-instant.com.br/'},
    // Adicione mais logos aqui
  ];

  outdoors = [
    // { src: '../assets/outdoors/background1.svg'},
    { src: '../assets/outdoors/background2.svg', alt: 'Tábua de frios', content: 'Conheça a Frireggio, nossa marca de produtos voltada para quem preza pela qualidade.', h1: 'Frireggio', button: 'Conhecer' },
    { src: '../assets/outdoors/background3.svg'},
    { src: '../assets/outdoors/background4.svg'},
    { src: '../assets/outdoors/background5.svg'},
    // { src: '../assets/outdoors/background6.svg'},
    // { src: '../assets/outdoors/background7.svg'},
    { src: '../assets/outdoors/background8.svg', alt: 'Valores da empresa', content: 'Venha conhecer nossa empressa com visita agendada.', h1: 'Valores da empresa', button: 'Agendar'},
    { src: '../assets/outdoors/background9.svg', alt: 'Muito obrigado', content: 'Agradecemos a todos os nossos caminhoneiros pelo excelente trabalho e dedicação!', h1: 'Muito obrigado'},
    // { src: '../assets/outdoors/background10.svg'},
    // { src: '../assets/outdoors/background11.svg'},
    { src: '../assets/outdoors/background12.svg', alt: 'Café da manhã santa clara.', h1: 'O café da manhã que sua familia merece!'},
    { src: '../assets/outdoors/background13.svg'}
  ]

  currentImageIndex = 0;
  currentImage = this.outdoors[this.currentImageIndex];
  slideAnimationActive = false;

  constructor(private loadingService: LoadingService){}

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.outdoors.length;
    this.currentImage = this.outdoors[this.currentImageIndex];
  }

  // prevImage() {
  //   this.currentImageIndex =
  //     (this.currentImageIndex - 1 + this.outdoors.length) % this.outdoors.length;
  //   this.currentImage = this.outdoors[this.currentImageIndex];
  // }

  goToSlide(index: number): void {
    // Esta função é chamada quando você clica em um indicador de slide

    // Remova a classe 'active' da div de cobertura para ocultá-la
    const cover = document.querySelector('.cover') as HTMLElement;
    cover.classList.remove('active');

    // Aguarde um pequeno intervalo (por exemplo, 100ms) para permitir a transição da classe
    setTimeout(() => {
      // Atualize a largura da div de cobertura para cobrir a imagem
      cover.style.width = '100%';

      // Aguarde a conclusão da animação (0,5 segundos) e, em seguida, atualize o índice da imagem atual
      setTimeout(() => {
        this.currentImageIndex = index;

        // Reinicie a largura da div de cobertura para zero
        cover.style.width = '0';

        // Adicione novamente a classe 'active' para a próxima animação
        setTimeout(() => {
          cover.classList.add('active');
        }, 10);
      }, 500); // Tempo de transição (0,5 segundos)
    }, 100);
  }

  private interval: any;
  autoSlideDelay = 5000; // Defina o intervalo em milissegundos (5 segundos neste exemplo)

  ngOnInit(): void {
    this.startAutoSlide();

    this.loadingService.show(); // Mostra o loading

    // Simule uma solicitação assíncrona (por exemplo, uma solicitação HTTP)
    setTimeout(() => {
      // Após a conclusão da solicitação
      this.loadingService.hide(); // Oculta o loading
    }, 2000); // Simulação de tempo de espera de 2 segundos
    }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, this.autoSlideDelay);
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }

  faqList = [
    { question: 'O que é Angular?', answer: 'Angular é um framework de desenvolvimento web...', showAnswer: false, isClicked: false  },
    { question: 'Como começar a usar Angular?', answer: 'Para começar com Angular, você precisa...', showAnswer: false, isClicked: false  },
    { question: 'Qual a versão mais recente do Angular?', answer: 'A versão mais recente do Angular é...', showAnswer: false, isClicked: false  },
    // Adicione mais perguntas e respostas aqui
  ];

  toggleAnswer(question: { showAnswer: boolean; isClicked: boolean; }) {
    question.showAnswer = !question.showAnswer;
    question.isClicked = !question.isClicked;
  }
}

