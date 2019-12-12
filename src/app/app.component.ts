import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  uploadedFiles: any[] = [];

  constructor() { }


  dealWithFiles(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  save() {

    console.log(this.uploadedFiles)

      const formData: FormData = new FormData();

      this.uploadedFiles.forEach(file => formData.append('file', file, file.name))

      formData.forEach(teste => console.log(`formdata => $teste`))
      //const 

  }
}
