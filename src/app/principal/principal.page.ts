import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Loja } from '../interfaces/loja';
import { Subscription } from 'rxjs';
import { LojaService } from '../services/loja.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  loja1 = [];
  loja2 = [];
  loja3 = [];
  loja4 = [];
  loja5 = [];

  name = {};

  public tipo: Loja = {}


  constructor(private authService: AuthService,
    private lojasService: LojaService,
    private db: LojaService,
  ) {
  }

  ngOnInit() {
    this.db.getLojas().subscribe(caixa => {
      let i = 0; 
     caixa.forEach((x)=>{
      if(x.tipo == 'Pizzaria'){

        this.loja1.push(x);
      }
      
     })

    });

    this.db.getLojas().subscribe(caixa => {
      let i = 0; 
     caixa.forEach((x)=>{
      if(x.tipo == 'Frutos do Mar'){

        this.loja2.push(x);
      }
      
     })

    });

    this.db.getLojas().subscribe(caixa => {
      let i = 0; 
     caixa.forEach((x)=>{
      if(x.tipo == 'Fast-Food'){

        this.loja3.push(x);
      }
      
     })

    });

    this.db.getLojas().subscribe(caixa => {
      let i = 0; 
     caixa.forEach((x)=>{
      if(x.tipo == 'Bar'){

        this.loja4.push(x);
      }
      
     })

    });
    
    this.db.getLojas().subscribe(caixa => {
      let i = 0; 
     caixa.forEach((x)=>{
      if(x.tipo == 'Restaurante'){

        this.loja5.push(x);
      }

      
     })

    });


    
  }
   



  
  ngOnDestroy(){
  }

  selectSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
  }

  async segmentChanged(ev) {
    await this.selectSlide.slideTo(this.segment);
  }

  async slideShange(slides: IonSlides) {
    this.selectSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    })
  }

  logout() {
    try {
      this.authService.sair()
    } catch (error) {
      console.log(error);
    }
  }



}
