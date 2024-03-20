import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-etudiant',
  templateUrl: './layout-etudiant.component.html',
  styleUrls: ['./layout-etudiant.component.css','../../etudiant.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutEtudiantComponent {
  showme:boolean=false;
  showMe(){
    this.showme=true;
  }

  
}
// src\app\Etudiant\etudiant\etudiant.css