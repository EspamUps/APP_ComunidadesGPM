import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginGuard } from '../../guards/login.guard';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        canActivate: [LoginGuard],
        children: [
          {
            path:'',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'menu',
        canActivate: [LoginGuard],
        children:[
          {
            path:'',
            loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
          }
        ]
        
      },
      {
        path: 'mapa',
        canActivate: [LoginGuard],
        children:[
          {
            path:'',
            loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
          }
        ]
        
      },
      {
        path: 'cuestionarios-asignados',
        canActivate: [LoginGuard],
        children:[
          {
            path:'',
            loadChildren: () => import('../cuestionarios-asignados/cuestionarios-asignados.module').then( m => m.CuestionariosAsignadosPageModule)
          },
          { 
            path: '**', 
            redirectTo: '',
            pathMatch: 'full' 
          }
        ],
      },
      {
        path: 'usuario',
        canActivate: [LoginGuard],
        children:[
          {
            path:'',
            loadChildren: () => import('../usuario/usuario.module').then( m => m.UsuarioPageModule)
          }
        ]
      },
      {
        path: '',
        canActivate: [LoginGuard],
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    canActivate: [LoginGuard],
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/tabs/home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
