import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import { of } from "rxjs";

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions, private usuariosService: UsuarioService){}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuario ),
            //tap (data => console.log(data)),
            mergeMap(
                (action) => this.usuariosService.getUserById(action.id)
                .pipe(
                    map(user => usuariosActions.cargarUsuarioSuccess({usuario: user})),
                    catchError(error => of(usuariosActions.cargarUsuariosError({payload: error})))
                )
            )
        )
    );
}