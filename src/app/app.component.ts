import { Component, ViewChild } from '@angular/core';
import { HttpClientModule, HttpRequest, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  uploadedFiles: any[] = [];

  constructor(private http: HttpClient){}



  dealWithFiles(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  save() {

    console.log(this.uploadedFiles)

      const formData: FormData = new FormData();

      this.uploadedFiles.forEach(file => formData.append('file', file, file.name));

      // const request = new HttpRequest('POST', '/arquivos', formData);

      this.http.post('/api/arquivos', formData).subscribe(res =>{
        console.log('envio feito com sucesso!')
      })

  }
}
