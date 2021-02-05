import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//Exporta todas as diretivas e tubos angulares básicos, como NgIf, NgForOf, DecimalPipe e assim por diante.
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms'; // Importação para forulários
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
