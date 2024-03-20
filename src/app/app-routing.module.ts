import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahComponent } from './dashboard/dah/dah.component';
import { AddfoyerComponent } from './dashboard/addfoyer/addfoyer.component';
import { ListefoyerComponent } from './dashboard/listefoyer/listefoyer.component';
import { LayoutEtudiantComponent } from './Etudiant/etudiant/layoutErudiant/layout-etudiant/layout-etudiant.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DahComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: 'etudiant',
    
        loadChildren: () =>
          import('./Etudiant/etudiant/etudiant.module').then((e) => e.EtudiantModule),
      },
  
  


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
