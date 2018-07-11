import { Component } from '@angular/core';

export interface IMC {
  name: string;
  clasif: string;

}

const ELEMENT_DATA: IMC[] = [
  { name: '<16.00', clasif: 'Infrapeso: Delgadez Severa'},
  { name: '16.00 - 16.99', clasif: 'Infrapeso: Delgadez Moderada'},
  { name: '17.00 - 18.49', clasif: 'Infrapeso: Delgadez Aceptable'},
  { name: '18.50 - 24.99', clasif: 'Peso Normal'},
  { name: '25.00 - 29.99', clasif: 'Sobrepeso'},
  { name: '30.00 - 34.99', clasif: 'Obeso: Tipo I'},
  { name: '35.00 - 40.00', clasif: 'Obeso: Tipo II'},
  { name: '>40.00', clasif: 'Obeso: Tipo III'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  displayedColumns: string[] = ['name', 'clasif'];
  dataSource = ELEMENT_DATA;
}
