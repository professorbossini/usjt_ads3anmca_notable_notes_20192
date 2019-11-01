export class NoteService{
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

    removeNote (note){
        let i = this.notes.indexOf(note);
        if (i >= 0)
            this.notes.splice (i, 1);
    }

    addNote (note){
      this.notes.push(note);
    }
}