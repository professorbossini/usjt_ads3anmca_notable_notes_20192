import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //injeção de dependência
  //é um tipo de inversão de controle
  notes;
  constructor( public navCtrl: NavController, public noteService: NoteService) {
    this.notes = this.noteService.notes;
  }

  

  onItemClick (note){
    //console.log ("dentro do itemClick", note);
    this.navCtrl.push ('DetailPage', {noteParam: note});  
  }

  onAddClick(){
    this.navCtrl.push ('DetailPage');
  }
}
