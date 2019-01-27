import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../provider';

@Injectable()
export class PessoaProvider extends Provider{

  constructor(public http: HttpClient) {
    super(http)
    this.path = '/pessoa'
  }

}
