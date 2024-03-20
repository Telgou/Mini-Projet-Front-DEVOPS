import { Component, OnInit } from '@angular/core';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-liste-foyer',
  templateUrl: './liste-foyer.component.html',
  styleUrls: ['./liste-foyer.component.css']
})
export class ListeFoyerComponent implements OnInit {
  constructor(private foyerservice: FoyerService){


  }
  ngOnInit(): void {
this.recuperfoyer();  }
  Listefoyer: any = {};
  key: string = 'id';
  reverse: boolean = false;
  sort(column: string) {
    this.key = column;
    this.reverse = !this.reverse;
  
    this.Listefoyer.sort((a: any, b: any) => {
      const order = this.reverse ? -1 : 1;
      return order * (a[column] - b[column]);
    });
  }
  recuperfoyer() {
    this.foyerservice.getAllfoyer().subscribe(
      (data) => {
        console.log(data);
        this.Listefoyer = data;
        console.log(this.Listefoyer)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
