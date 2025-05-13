import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/model/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
    public livro$?: Observable<Livro[]>;
    constructor(private readonly _livroService: LivroService){
        
     }

    ngOnInit(): void {
        this.livro$ = this.getAll();        
    }
    private getAll(){
        return this._livroService.getAll();
    }
}
