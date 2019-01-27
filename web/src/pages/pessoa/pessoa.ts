import { Component, OnInit, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PessoaProvider } from '../../providers/pessoa/pessoa';

@IonicPage({ name: "pessoa-page" })
@Component({
  selector: 'page-pessoa',
  templateUrl: 'pessoa.html',
})
export class PessoaPage{

  lista: Array<any>

  constructor(
    public pessoaProvider: PessoaProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.pessoaProvider.list().subscribe(res => {
      this.lista = <Array<any>>res
    })
  }

  openFormPessoa() {
    let modal = this.modalCtrl.create('pessoa-form-page')
    modal.present()
    modal.onDidDismiss(()=>{
      this.pessoaProvider.list().subscribe(res => {
        this.lista = <Array<any>>res
      })
    })
  }

  delete(id, index){
    this.pessoaProvider.remove({id: id}).subscribe(rs=>{
      this.lista.splice(index, 1)
    }, err => {
      console.error(err)
    })
  }

  edit(item){
    let modal = this.modalCtrl.create('pessoa-form-page', {payload: item})
    modal.present()
    modal.onDidDismiss(()=>{
      this.pessoaProvider.list().subscribe(res => {
        this.lista = <Array<any>>res
      })
    })
  }

}
