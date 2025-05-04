import { Component, Input, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';

@Component({
  selector: 'app-livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.scss']
})
export class LivroCardComponent implements OnInit {
    
    @Input() livro?: Livro;

    ngOnInit(): void {}
}
