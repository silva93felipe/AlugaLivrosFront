import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { LivroFormComponent } from "./components/livro-form/livro-form.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new', component: LivroFormComponent },
    { path: '**', component: NotfoundComponent },
  ];