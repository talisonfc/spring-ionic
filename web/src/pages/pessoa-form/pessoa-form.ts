import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaProvider } from '../../providers/pessoa/pessoa';

@IonicPage({name: "pessoa-form-page"})
@Component({
  selector: 'page-pessoa-form',
  templateUrl: 'pessoa-form.html',
})
export class PessoaFormPage implements OnInit{

  campos = [
    {nome: 'nome', label: 'Nome', tipo: 'text'},
    {nome: 'cpf', label: 'CPF', tipo: 'text'},
    {nome: 'email', label: 'Email', tipo: 'text'},
    {nome: 'password', label: 'Senha', tipo: 'password'},
  ]
  pessoaForm = this.fb.group({
    nome: ['', Validators.required],
    cpf: [''],
    email: [''],
    password: [''],
  })
  payload: any

  constructor(
    private fb: FormBuilder,
    private pessoaProvider: PessoaProvider,
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.payload = this.navParams.get('payload')
    if(this.payload!=undefined){
      this.pessoaForm.setValue({
        nome: this.payload.nome,
        cpf: this.payload.cpf,
        email: this.payload.email,
        password: this.payload.password
      })
    }
  }

  onSubmit(){
    if(this.payload){
      let temp = this.pessoaForm.value
      temp['id'] = this.payload.id
      this.pessoaProvider.update(temp).subscribe(res => {
        this.viewCtrl.dismiss()
      }, err => {
        console.error(err)
      })
    }
    else{
      this.pessoaProvider.add(this.pessoaForm.value).subscribe(res => {
        this.viewCtrl.dismiss()
      }, err => {
        console.error(err)
      })
    }
  }

}
