import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { Cine } from './components/cine/cine';
import { UsuariosHTTP } from './components/usuarios-http/usuarios-http';
import { Padre } from './components/padre/padre';
import { CarritoSignals } from './components/carrito-signals/carrito-signals';
import { Carrito } from './components/carrito/carrito';
import { Ventas } from './components/ventas/ventas';
import { Usuario } from './components/usuario/usuario';

export const routes: Routes = [

    {path: 'PeticionesHTTP', component: UsuariosHTTP},
    {path: 'InputOutputDatos', component: Padre},
    {path: 'Signals', component: CarritoSignals},
    {path: 'Eventos', component: Carrito},
    {path: 'TWDB-Services', component: Cine},
    {path: 'Directivas', component: Ventas},
    {path: 'ComponenteBasico', component: ProductoComponent},
    {path: 'Plantillas', component: Usuario},

];
