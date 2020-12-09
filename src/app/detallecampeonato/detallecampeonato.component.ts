import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../colaborador-menu';
import { NbWindowService } from '@nebular/theme';
import { NoticiasComponent } from '../noticias/noticias.component';
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
  selector: 'ngx-detallecampeonato',
  templateUrl: './detallecampeonato.component.html',
  styleUrls: ['./detallecampeonato.component.scss']
})
export class DetallecampeonatoComponent implements OnInit {
  menu = MENU_ITEMS;
  idc: any;
  noticias: any;
  constructor(private windowService: NbWindowService, private storage: AngularFireStorage,  private http: HttpClient) {
this.ngOnInit();
  }

  ngOnInit(): void {
    this.idc = localStorage.getItem("sel");
    console.log(this.idc)
    this.getNoticias(this.idc).then(a => {
      console.log(a)
      this.noticias = a;
    })
  }


nuevaNoticia(){
  let windowRef = this.windowService.open(NoticiasComponent, { title: `Nueva Noticia` });

  this.getNoticias(this.idc).then(a => {
    this.noticias = a;
  })

}
onClose(){

}

getNoticias(idc){
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(usuario => {
      if (usuario){
        this.http.get(environment.server+'/noticias?IdCampeonato='+idc).subscribe((noticias: any) => {
          console.log(noticias)
          resolve(noticias)
        })
      }
    })
  })
}

}
