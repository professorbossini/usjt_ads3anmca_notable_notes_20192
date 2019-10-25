import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valor = 2;
  notes = [
    {
      id: 1,
      title: 'Firebase',
      content: 'Estudar Firebase',
      date: '2019-06-05' 
    },
    {
    id: '2',
    date: '2016-01-01',
    title: 'Ionic',
    content: 'Aprenda o básico de Ionic'
    },
    {
    id: '3',
    date: '2016-03-01',
    title: 'Angular',
    content: 'Importante para desenvolver com Ionic'
    }
  ]

  //injeção de dependência
  //é um tipo de inversão de controle
  constructor( public navCtrl: NavController) {

  }

  

  onItemClick (note){
    //console.log ("dentro do itemClick", note);
    this.navCtrl.push ('DetailPage', {noteParam: note});  
  }
}
