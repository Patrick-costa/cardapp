import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public router:Router){
    setTimeout(()=>{
      this.router.navigateByUrl('principal');
    },2000);
  }

  // selectSlide: any;
  // segment = 0;
  // sliderOptions = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   speed: 400,
  // }
  // constructor() {}

  // async segmentChanged(ev){
  //   await this.selectSlide.slideTo(this.segment);
  // }

  // async slideShange(slides : IonSlides){
  //   this.selectSlide = slides;
  //   slides.getActiveIndex().then(selectedIndex => {
  //     this.segment = selectedIndex;
  //   })
  // }
}

