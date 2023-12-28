import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugarService {

  constructor(private http:HttpClient) { }


  getJugar(){
    return this.http.get('http://localhost:3000/api/v0/jugar');
  }

  getPenitencia(id:number){
    return this.http.get('http://localhost:3000/api/v0/penitencia/'+id);
  }
}
