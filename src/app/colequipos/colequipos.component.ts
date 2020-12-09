import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../colaborador-menu';
import { auth } from 'firebase/app';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { HttpClient, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-colequipos',
  templateUrl: './colequipos.component.html',
  styleUrls: ['./colequipos.component.scss']
})
export class ColequiposComponent implements OnInit {
  menu = MENU_ITEMS;
  equipos: any;

  settings = {
    actions: {delete: false},
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
  nombre: {
    title: 'Equipo'
  },
  descripcion: {
    title: 'Descripcion'
  }
}
};
data: any;
datos: any;
idc: any;
  constructor(private router: Router, private http: HttpClient) {
    this.idc = localStorage.getItem("sel");
    this.getEquipos(this.idc).then((a:any) => {
      this.equipos = a;
      a.forEach(c => {
        this.datos = a.map( c => {
          return {
            id: c.IDEQUIPO,
            nombre: c.NOMBRE,
            descripcion: c.DESCRIPCION,

          }
        })
      })
    })


  }

  getEquipos(idc){
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(usuario => {
        if (usuario){
          this.http.get(environment.server+'/equipos?IdCampeonato='+this.idc).subscribe((equipos: any) => {
            console.log(equipos)
            this.equipos = equipos;
            equipos.forEach(c => {
              this.datos = equipos.map( c => {
                return {
                  id: c.IDEQUIPO,
                  nombre: c.NOMBRE,
                  descripcion: c.DESCRIPCION,

                }
              })
            })
            resolve(equipos)
          })
        }
      })
    })
  }
onEdit(event){

}

onCreateConfirm(event){
console.log(event)


let datos = [{
  "Nombre": event.newData.nombre,
  "Descripcion": event.newData.descripcion,
  "Logo": "logo dummy",
  "IdCampeonato": this.idc
}]
firebase.auth().onAuthStateChanged(usuario => {
  if(usuario){
    this.http.post(environment.server+'/equipo',datos,{observe:'response'}).subscribe((result: any) => {
      console.log(result)
      event.confirm.resolve(event.newData)
    })
  }
})
}

llamada(){
  console.log("LLAMADA")
}
  ngOnInit(): void {
  }

}
