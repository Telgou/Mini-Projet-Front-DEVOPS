import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddfoyerService } from 'src/app/service/addfoyer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfoyer',
  templateUrl: './addfoyer.component.html',
  styleUrls: ['./addfoyer.component.css']
})
export class AddfoyerComponent implements OnInit {
  Listefoyer: any = {};
  nouveauFoyer: { nomFoyer?: string, capaciteFoyer?: number } = {};
  monFormulaire: FormGroup;
  formSubmitted = false; // naAjouti un drapeau pour indiquer si le formulaire a été soumis

  constructor(
    private foyerservice: AddfoyerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.monFormulaire = this.formBuilder.group({
      nomFoyer: ['', [Validators.required]],
      capaciteFoyer: [null, Validators.required]
    });
  }

  onSupprimerClick() {
    console.log('Bouton "supprimer foyer" cliqué !');
    this.router.navigate(['/dashboard/listefoyer']);
  }

  register() {
    this.formSubmitted = true; 
    if (this.monFormulaire.valid) {
      this.foyerservice.addfoyer(this.monFormulaire.value).subscribe(
        (resp) => {
          console.log(resp);
          this.monFormulaire.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {}
}
