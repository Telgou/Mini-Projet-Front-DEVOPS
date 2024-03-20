import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEtudiantComponent } from './layoutErudiant/layout-etudiant/layout-etudiant.component';
import { ListeFoyerComponent } from '../views/liste-foyer/liste-foyer.component';

const routes: Routes = [
  {path:'',component:LayoutEtudiantComponent,
  children :[ {path:'listefoyer',component:ListeFoyerComponent}
    


    
  ]
  
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
