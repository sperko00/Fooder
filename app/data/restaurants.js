import restImg from '../images/rest.jpg';
import fastImg from '../images/fast.jpg';
export class restoran {
    constructor(ime , slika, komentari,ocjena) {
      this.ime = ime;
      this.slika = slika;
      this.komentari = komentari;
      this.ocjena = ocjena;
    }
  }
export var ListOfRest=[
    new restoran("Restoran 1",restImg,"0","4.5"),
    new restoran("Restoran 2",fastImg,"0","3.5"),
    new restoran("Restoran 3",fastImg,"0","2.0"),
    new restoran("Restoran 4",restImg,"0","5.0"),
  ];
