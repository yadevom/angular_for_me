import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  

  // Se pasa  este informacion de array al servicio.empleados para que este disponible para cualquier componente
  // No se borra aquí para que este disponible para el hijo porque así lo tenemos
  /*
  empleados:Empleado[] = [
    new Empleado("Juan", "Diaz", "Presidente", 31000000),
    new Empleado("Juan", "Diaz", "Ministro", 30000000),
    new Empleado("Juan", "Diaz", "Senador", 32000000),
    new Empleado("Juan", "Diaz", "Gobernador", 13000000),
    new Empleado("Juan", "Diaz", "General", 28000000),
  ];
  */
  

  // Inyectar en el componente el servicio creado
  constructor(private loginService:LoginService) {
    
    // Almacenar en el array empleados la información del servicio que contiene dicha información
    // Esta alternativa es sin implementar el OnInti
    // this.empleados = this.empleadosService.empleados;

  }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyB2pOmz-TGBc8FPiqJ7OykcACreIG8vTkk",
      authDomain: "mis-clientes-1d4b3.firebaseapp.com",
    });

  }
 

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }

}
