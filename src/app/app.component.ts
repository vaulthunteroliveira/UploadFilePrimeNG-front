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
        console.log(file.name)
      }
    
    // for(let i = 0; i < fileList.lenght; i++){
    //   this.uploadedFiles.push(fileList[i])
    // }


  }
}
