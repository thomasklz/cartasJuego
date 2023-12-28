import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Iregistro } from '../Interfaces/resgitro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() {
  }

  registro(usuario:any, correo:any, password:any) {
    let data = <Iregistro>{
      user:usuario.value,
      password:password.value,
      email:correo.value,
      typeusers_id:1      
    };
    this.usuarioService.register(data)
      .subscribe({
        next: (data: any) => {
          this.router.navigateByUrl('/home');
          localStorage.setItem('token', data.token);
          localStorage.setItem('usuario', data.users.user);
          localStorage.setItem('cu', data.users.id);
        },
        error: (error:any) => {
          debugger
        }
      })
  }
}
