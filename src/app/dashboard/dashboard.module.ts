import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahComponent } from './dah/dah.component';
import { ListefoyerComponent } from './listefoyer/listefoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DahComponent,
    ListefoyerComponent,
    AddfoyerComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
