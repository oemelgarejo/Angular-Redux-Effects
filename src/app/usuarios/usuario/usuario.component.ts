import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuario } from '../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario(id))
    })
  }

}
