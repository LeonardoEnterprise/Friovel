import { Component } from '@angular/core';
import { slideAnimation } from 'src/app/animations/slideAnimations';

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
    { src: 'logo1.png', alt: 'Marca 1' },
    { src: 'logo2.png', alt: 'Marca 2' },
    { src: 'logo3.png', alt: 'Marca 3' },
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
    { question: 'O que é Angular?', answer: 'Angular é um framework de desenvolvimento web...', showAnswer: false  },
    { question: 'Como começar a usar Angular?', answer: 'Para começar com Angular, você precisa...', showAnswer: false  },
    { question: 'Qual a versão mais recente do Angular?', answer: 'A versão mais recente do Angular é...', showAnswer: false  },
    // Adicione mais perguntas e respostas aqui
  ];

  toggleAnswer(question: FaqQuestion) {
    question.showAnswer = !question.showAnswer;
  }
}
