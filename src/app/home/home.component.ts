import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  Renderer2,
} from '@angular/core';
import * as AOS from 'aos';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('descriptionRef') descriptionRef!: ElementRef;
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
  ];

  slideConfig = {
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
  };

  slideConfig2 = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
  };

  slideConfig3 = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
  };

  dynamicHeaderText: string = 'temp';
  dynamicHeaderDescText: string = 'temp';

  constructor(private cdr: ChangeDetectorRef,private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    AOS.init();
  }


  ngAfterViewInit() {
    this.cdr.detectChanges(); // Trigger change detection manually
  }

  initTypewriter(descriptionElement: HTMLElement, descriptionText: string) {
    // Clear the description element
    descriptionElement.innerText = '';

    // Loop through each character of the text and animate them
    for (let i = 0; i < descriptionText.length; i++) {
      const char = descriptionText.charAt(i);
      const charElement = document.createElement('span');
      charElement.innerText = char;
      charElement.style.opacity = '0';
      descriptionElement.appendChild(charElement);

      gsap.to(charElement, {
        opacity: 1,
        duration: 0.5,
        delay: i * 0.05,
        x: 0,
      });
    }
  }

  slickInit(e: any) {
    this.dynamicHeaderText = '';
    this.dynamicHeaderDescText = '';
    this.changeHeaderText(0);
    this.cdr.detectChanges(); // Trigger change detection manually
  }

  afterChange(e: any) {
    this.dynamicHeaderText = '';
    this.dynamicHeaderDescText = '';
    this.changeHeaderText(e.currentSlide);
    this.cdr.detectChanges(); // Trigger change detection manually
  }

  changeHeaderText(e: any) {
    var i = 0;
    this.typeHeaderWriter(this.slides[e].title, i, e);
  }

  typeHeaderWriter(letter: any, i: any, e: any) {
    if (i < letter.length) {
      this.dynamicHeaderText += letter.charAt(i);
      i++;

      setTimeout(() => {
        this.typeHeaderWriter(letter, i, e);
        this.cdr.detectChanges(); // Trigger change detection manually
      }, 70);
    } else {
      this.changeHeaderDescText(e);
    }
  }

  changeHeaderDescText(e: any) {
    var j = 0;
    this.typeHeaderDescWriter(this.slides[e].description, j);
  }

  typeHeaderDescWriter(letter: any, j: any) {
    if (j < letter.length) {
      this.dynamicHeaderDescText += letter.charAt(j);
      j++;

      setTimeout(() => {
        this.typeHeaderDescWriter(letter, j);
        this.cdr.detectChanges(); // Trigger change detection manually
      }, 50);
    }
  }

  sd: any[] = [
    {
      slideTitle: 'Retail & ECommerce',
      li1: 'Customer Relationship Management (CRM) Software',
      li2: 'Product Information Management (PIM) Software',
      li3: 'Ecommerce Platforms',
      li4: 'Inventory Management Software',
      li5: 'Email Marketing Tools',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Travel & Hospitality',
      li1: 'Online Booking Systems',
      li2: 'Hotel Management Software',
      li3: 'Customer Relationship Management (CRM) Systems',
      li4: 'Flight Tracking Apps',
      li5: 'Tour Operator Software',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Food & Beverages',
      li1: 'Online Ordering Systems',
      li2: 'Table Reservation Systems',
      li3: 'Delivery Management Systems',
      li4: 'Kiosk Ordering Systems',
      li5: 'Event Management Software',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Real Estate',
      li1: 'Real Estate Listing Platforms',
      li2: 'Document Management Systems',
      li3: 'Real Estate Marketing Software',
      li4: 'Property Management Software',
      li5: 'Real Estate Auction Platforms',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Health Care',
      li1: 'Electronic Health Record (EHR) Software',
      li2: 'Medical Billing Software',
      li3: 'Laboratory Information Systems (LIS)',
      li4: 'Appointment Scheduling Software',
      li5: 'Hospital Management Systems',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Automobiles',
      li1: 'Dealer Management Systems (DMS)',
      li2: 'Parts Inventory and Management Systems',
      li3: 'Electric Vehicle (EV) Charging Management Software',
      li4: 'Automotive Supply Chain Management (SCM) Software',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Finance',
      li1: 'Financial Planning Software',
      li2: 'Insurance Software',
      li3: 'Tax Preparation Software',
      li4: 'Accounting Software',
      li5: 'Payroll Software',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
  ];

  wc: any[] = [
    {
      slideTitle: 'Retail & ECommerce',
      li1: 'Price Monitoring',
      li2: 'Product Assortment Monitoring',
      li3: 'Customer Review and Sentiment Analysis',
      li4: 'Brand Monitoring',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Travel & Hospitality',
      li1: 'Hotel Price Monitoring',
      li2: 'Flight Fare Aggregation',
      li3: 'Hotel Review Aggregation',
      li4: 'Destination Insights',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Food & Beverages',
      li1: 'Menu Scraping',
      li2: 'Ingredient Price Monitoring',
      li3: 'Review Aggregators',
      li4: 'Competitor Price Monitoring',
      li5: 'Event Monitoring',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Real Estate',
      li1: 'Property Listings Aggregator',
      li2: 'Price Monitoring',
      li3: 'Property Details Extraction',
      li4: 'Rental Market Analysis',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Health Care',
      li1: 'Drug Pricing and Availability Monitoring',
      li2: 'Health Insurance Plan Comparison',
      li3: 'Health News Aggregator',
      li4: 'Health Product Review Aggregator',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Automobiles',
      li1: 'Inventory Management',
      li2: 'Comparative Analysis',
      li3: 'Electric Vehicle Charging Stations',
      li4: 'Auction Data',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
    {
      slideTitle: 'Finance',
      li1: 'Content Discovery',
      li2: 'Ad Performance Tracker',
      li3: 'Viewer Reviews and Feedback Analysis',
      slideImg: 'ind-travel-and-hopitality-img.jpg',
    },
  ];
}
