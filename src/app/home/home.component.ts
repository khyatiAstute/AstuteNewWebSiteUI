import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('slickModal') slickModal: any;
  @ViewChild('slickModal2') slickModal2: any;
  @ViewChild('slickModal3') slickModal3: any;
  slides = [
    {
      title: 'Web Crawling',
      description:
        'Get Fast and Accurate Data with Our Custom Web Crawling Solutions.',
    },
    {
      title: 'Software Development',
      description:
        'Grow Your Business with Our Custom Software Development Solutions.',
    },
    {
      title: 'IT Consulting',
      description:
        'Get Expert IT Consulting and Hire Dedicated Staff for Your Projects.',
    },
    // Add more slides as needed
  ];
  slideConfig = {
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
  };

  slideConfig2 = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  slideConfig3 = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };

  @ViewChild('techSlider') techSlider: any;
  techConfig = {
    arrows: false,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 0,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() { }

  slickInit(e: any) {
    this.dynamicHeaderText = "";
    this.dynamicHeaderDescText = "";
    this.changeHeaderText(0);   
  }

  afterChange(e: any) {
    this.dynamicHeaderText = "";
    this.dynamicHeaderDescText = "";
    this.changeHeaderText(e.currentSlide);
  }

  dynamicHeaderText: string = "temp";
  dynamicHeaderDescText: string = "temp";

  changeHeaderText(e: any) {
    var i = 0;
    this.typeHeaderWriter(this.slides[e].title, i,e)
  }

  typeHeaderWriter(letter: any, i: any,e : any) {
    if (i < letter.length) {
      this.dynamicHeaderText += letter.charAt(i);
      i++;

      setTimeout(() => {
        this.typeHeaderWriter(letter, i,e);
      }, 70);
    }
    else{
      this.changeHeaderDescText(e);
    }
  }

  changeHeaderDescText(e: any) {
    var j = 0;
    this.typeHeaderDescWriter(this.slides[e].description, j)
  }

  typeHeaderDescWriter(letter: any, j: any) {
    if (j < letter.length) {
      this.dynamicHeaderDescText += letter.charAt(j);
      j++;

      setTimeout(() => {
        this.typeHeaderDescWriter(letter, j);
      }, 50);
    }
  }
}
