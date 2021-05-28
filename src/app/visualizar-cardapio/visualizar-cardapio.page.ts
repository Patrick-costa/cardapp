import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-visualizar-cardapio',
  templateUrl: './visualizar-cardapio.page.html',
  styleUrls: ['./visualizar-cardapio.page.scss'],
})
export class VisualizarCardapioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
  }

  async segmentChanged(ev){
    await this.selectSlide.slideTo(this.segment);
  }

  async slideShange(slides : IonSlides){
    this.selectSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    })
  }
}



