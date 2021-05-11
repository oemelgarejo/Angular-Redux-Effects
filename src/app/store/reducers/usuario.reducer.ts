import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { Usuario } from '../../models/usuario.models';

export interface UsuarioState {
    id:string;
    user: any;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsuarioState = {
    id: '',
   user: {},
   loaded: false,
   loading: false,
   error: null
}

const _UsuarioReducer = createReducer(initialState,

    on(cargarUsuario, (state, {id}) => ({ ...state, loading: true, id: id})),
    on(cargarUsuarioSuccess, (state, {usuario}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user: {...usuario}
    })),
    on(cargarUsuarioError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        error: payload
    })),
);

export function usuarioReducer(state: any, action: any) {
    return _UsuarioReducer(state, action);
}