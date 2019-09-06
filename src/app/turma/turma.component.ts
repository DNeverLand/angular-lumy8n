import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  turma:Turma = {
    name:"TPSI1018",
    description:"New class",
    initialdate: new Date(2017,10,11),
    classtype:"Junior"
  }

  constructor() { }

  ngOnInit() {
  }

}
