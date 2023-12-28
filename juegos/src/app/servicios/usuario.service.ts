import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregistro } from '../Interfaces/resgitro';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  register(datos:Iregistro){
    const params = { 
      'user': datos.user, 
      'email': datos.email, 
      'password': datos.password,
      'typeusers_id':datos.typeusers_id  
    }
   return  this.http.post('http://localhost:3000/api/v0/user',params);
  }
  
  login(email:string, password:string){
    const params = { 
      'email':email, 
      'password': password
    }
   return  this.http.post('http://localhost:3000/api/v0/login',params);
  }
}

