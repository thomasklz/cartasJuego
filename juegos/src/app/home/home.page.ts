import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JugarService } from '../servicios/jugar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;
  usuario:any;
  datosJugar!:any;
  penitenciaVer!:any;
  constructor( private router:Router, private jugarService:JugarService) {
    
  }
  ngOnInit(){
    this.usuario= localStorage.getItem('usuario');
  }

  logout(){
      localStorage.clear();
      debugger
      this.router.navigateByUrl('/login')
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  jugar(){
    this.jugarService.getJugar().subscribe({
      next: (data:any) =>{
        this.datosJugar=data;
        this.penitencia(data.penitencia_id)
      },
      error: (error)=>{
        console.log("Error al obtener la lista de juegos");
      }

    })
  }
  penitencia(id:number){
    this.jugarService.getPenitencia(id).subscribe({
      next: (data) =>{
        this.penitenciaVer=data;
      },
      error: (error)=>{
        console.log("Error al obtener la penitencia");
      }

    })
  }
}
