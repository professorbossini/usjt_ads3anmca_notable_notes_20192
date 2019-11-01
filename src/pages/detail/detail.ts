import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;
  newNoteFlag = false;
  constructor(public navCtrl: NavController, 
                  public navParams: NavParams,
                    public noteService: NoteService,
                      public alertCtrl: AlertController) {
    this.note = this.navParams.get ('noteParam');
    //console.log ("Na DetailPage", this.note);
    if (!this.note){
      this.note = {
        id: '',
        title: '',
        content: '',
        date: ''
      }
      this.newNoteFlag = true;
    }
  }

  ionViewWillLeave (){
    if (this.newNoteFlag){
      this.noteService.addNote(this.note);
    }
  }

  onTrash (){
    let confirm = this.alertCtrl.create({
      title: 'Apagar?',
      message: `Apagar essa nota: ${this.note.title}`,
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "OK",
          handler: () => {
            this.noteService.removeNote(this.note);
            this.navCtrl.pop();
          } 
        }
      ]  
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
