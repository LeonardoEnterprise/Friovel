import { Component} from '@angular/core';
import { slideAnimation } from 'src/app/animations/slideAnimations';

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
  animations: [slideAnimation]
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
    { src: '../assets/outdoors/Slide1.svg', alt: 'Valores da empresa' },
    { src: '../assets/outdoors/Slide2.svg', alt: 'Crianças cozinhando' },
    { src: '../assets/outdoors/Slide2teste.svg', alt: 'Crianças cozinhando' },
    { src: '../assets/outdoors/Slide3.svg', alt: 'Tabua de frios' },
    { src: '../assets/outdoors/Slide4.svg', alt: 'Familia feliz' },
    { src: '../assets/outdoors/Slide5.svg', alt: 'Linhas de padaria' },
    { src: '../assets/outdoors/Slide6.svg', alt: 'Padeiro' },
  ]

  currentImageIndex = 0;
  currentImage = this.outdoors[this.currentImageIndex];

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.outdoors.length;
    this.currentImage = this.outdoors[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.outdoors.length) % this.outdoors.length;
    this.currentImage = this.outdoors[this.currentImageIndex];
  }

  private interval: any;
  autoSlideDelay = 5000; // Defina o intervalo em milissegundos (5 segundos neste exemplo)

  ngOnInit() {
    this.startAutoSlide();
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

