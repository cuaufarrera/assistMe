import { Component } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {

  usuario : Usuario = {
    nombreUsuario : '',
    senha: '',
    email: '',
    tipoUsuario: 'cliente',
    estatus: 'true'
  };
  
  constructor(private usuarioService: UsuariosService) {  }

  createUser(): void {
    this.usuarioService.save( this.usuario ) 
      .subscribe( data => {
        console.log(data);
    },
      error => console.log(error)
    );
  }

  onSubmit(){
    console.log(this.usuario);
    this.createUser();
  }

}
