import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TurmaComponent } from './turma/turma.component';
import { AlunosComponent } from './turma/alunos/alunos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [  AppComponent, TurmaComponent, AlunosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
