import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { style } from '@angular/core/src/animation/dsl';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'index',
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})

export class IndexComponent {
  title = 'app';
  corSalva: any;
  ocultar: boolean = true;
  color = 'fil0';

  public ngOnit()
  { 

  }  	
  
  fim(){
    // = false;
  }

  capturarCor(cor){
    this.corSalva = cor;
  };

  setColor(idComponente){
    var novaCor = null; 
    novaCor = this.corSalva + "-set";

    document.getElementById(idComponente).classList.remove(this.color);
    document.getElementById(idComponente).classList.add(novaCor);
    
  };

  reiniciar(){
    $('g').children().removeClass();
  }


}
