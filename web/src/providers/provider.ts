import { HttpClient } from "@angular/common/http";

const host = "http://localhost:8080"

const header = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export class Provider{

    http: HttpClient
    path: string

    constructor(http: HttpClient){
        this.http = http
    }

    add(obj: Object){
        return this.http.post(`${host}${this.path}`, obj, header)
    }

    list(){
        return this.http.get(`${host}${this.path}`)
    }

    remove(obj: Object){
        return this.http.delete(`${host}${this.path}?id=${obj['id']}`)
    }

    update(obj: Object){
        return this.http.put(`${host}${this.path}`, obj, header)
    }

}