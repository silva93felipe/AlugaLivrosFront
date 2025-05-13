import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { LivroFormComponent } from "./pages/livros/livro-form/livro-form.component";
import { LivroComponent } from "./pages/livros/livro/livro.component";
import { LivroDetailComponent } from "./pages/livros/livro-detail/livro-detail.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'livro', children: 
        [
            { path: '', component: LivroComponent },
            { path: 'new', component: LivroFormComponent},
            { path: 'detail', component: LivroDetailComponent},
        ]
    },
    { path: '**', component: NotfoundComponent },
  ];