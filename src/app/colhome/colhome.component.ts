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
  selector: 'ngx-colhome',
  templateUrl: './colhome.component.html',
  styleUrls: ['./colhome.component.scss']
})
export class ColhomeComponent implements OnInit {
  settings = {
    mode: 'external',
    actions: {delete: false ,add:false},
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>'
    },

columns: {
  id: {
    title: 'ID',
    editable: false
  },
  name: {
    title: 'Campeonato'
  },
  tipo: {
    title: 'Tipo'
  },
  sexo: {
    title: 'Sexo'
  },
  ubicacion:{
  title: 'Ubicacion'
  },
  categoria: {
    title: 'Categoria'
  }
}
};
data: any;
datos: any;
  constructor(private router: Router, private http: HttpClient) {
    this.datos = new Array();
    console.log("LLEGANDO AL DASHBOARD")
firebase.auth().onAuthStateChanged(usuario => {

  if (usuario){
    console.log(usuario.uid)
    this.http.get(environment.server+'/campeonatos?idUsuario='+usuario.uid).subscribe((campeonatos: any) => {
      localStorage.setItem("campeonatos",JSON.stringify(campeonatos));
      campeonatos.forEach(c  => {
        this.datos =campeonatos.map( c => {
        return  {
            id: c.IDCAMPEONATO,
            name: c.NOMBRECAMPEONATO,
            tipo: c.TIPO,
            sexo: c.SEXO,
            ubicacion: c.UBICACION,
            categoria: c.CATEGORIA,
            detalle: c.IDCAMPEONATO
          }
        })
      })
    })
  }
})


  }
  onEdit(event){
    console.log(event);
    localStorage.setItem("sel",event.data.id);
    this.router.navigate(['/detallecampeonato']);
  }
  ngOnInit(): void {
  }

}
