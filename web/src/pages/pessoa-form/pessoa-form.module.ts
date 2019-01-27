import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoaFormPage } from './pessoa-form';

@NgModule({
  declarations: [
    PessoaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoaFormPage),
  ],
})
export class PessoaFormPageModule {}
