import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { auth } from 'firebase/app';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { HttpClient, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  idc: any;
  archivo: any;
  constructor(private storage: AngularFireStorage,  private http: HttpClient) {
    this.idc = localStorage.getItem("sel");


  }

  ngOnInit(): void {
  }

  onFilePicked(event){
this.archivo = event._underlyingFile;




  }
  guardaNoticia(titulo,detalle){
    firebase.auth().onAuthStateChanged(usuario => {

      if (usuario){

        let referencia = this.storage.ref("archivodeprueba");
        this.storage.upload("archivodeprueba",this.archivo).percentageChanges().subscribe((subida: any) => {
          console.log(subida)
        });
        referencia.getDownloadURL().subscribe(url => {
          console.log(url);
          let datos = [{
            "IdCampeonato": this.idc,
            "Titulo": titulo,
            "Descripcion": detalle,
            "URLFoto": url
          }]
          this.http.post(environment.server+'/noticia',datos,{observe:'response'}).subscribe((d:any) => {
            console.log(d)
          })


        })
      }
    })
  }
}
