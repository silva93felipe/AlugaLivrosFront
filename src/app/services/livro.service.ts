import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Livro } from '../model/livro';
@Injectable({
    providedIn: 'root',
})
export class LivroService {
    private livros: Livro[] = []
    private readonly urlApi = `${environment.URL_API}/livro`;
    constructor(private readonly _httpClient : HttpClient) {
        for (let i = 0; i < 10; i++) {
            let livro = new Livro();
            livro.id = i + 1;
            livro.avaliacao = Math.round(Math.random() * ( 5 - 1) + 1); 
            livro.titulo = `Livro ${i + 1}`;
            this.livros.push(livro)
        }
    }

    getAll() {
        return of<Livro[]>(this.livros)
        //return this._httpClient.get(this.urlApi);
    }
}
