import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() {
  }
  
  login (email:any, password:any){
    this.usuarioService.login(email.value,password.value)
      .subscribe({
        next: (data: any) => {
          this.router.navigateByUrl('/home');
          localStorage.setItem('token', data.token);
          localStorage.setItem('usuario', data.dataUser.user);
          localStorage.setItem('cu', data.dataUser.id);
        },
        error: (error:any) => {
          debugger
        }
      })
  }
}
