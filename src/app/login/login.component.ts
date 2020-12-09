import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { HttpClient, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseAuth: AngularFireAuth, private toastrService: NbToastrService, private router: Router, private http: HttpClient) {


  }

  ngOnInit(): void {
  }
  login(email, password){
    console.log(email, password);
    this.firebaseAuth.auth.signInWithEmailAndPassword(email,password).then((result) =>{
      firebase.auth().onAuthStateChanged(usuario => {
          this.http.get(environment.server+'/usuario?IdGoogle='+usuario.uid).subscribe((tipo:any) => {
            console.log(tipo[0])
            console.log(tipo[0].TIPO);
            if (tipo[0].TIPO==="Administrador"){
              this.router.navigate(['colhome']);
            }
            else{
              this.router.navigate(['admhome'])
            }

          })
      })







    }).catch(error => {
      console.log("ACA NO");
      let position: any = 'top-right';
      let status: any = 'danger';

      this.toastrService.show("Nombre de usuario o password incorrecto pavo qliao","Error",{position,status});
    })
  }
}
