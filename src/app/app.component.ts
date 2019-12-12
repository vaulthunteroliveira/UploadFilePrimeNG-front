import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  
  uploadedFiles: any[] = [];

  constructor() {}


  dealWithFiles(event) {
    
      for(let file of event.files){
        this.uploadedFiles.push(file.name)
      }
  }

  save(){
    if(this.uploadedFiles.length > 0){
      
      const formData = new FormData();

      this.uploadedFiles.forEach( file => formData.append('file', file, file.name))

      console.log(formData);

      //const 

    }
  }
}
