import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShirtComponent } from './components/details/shirt/shirt.component';
import { ShortComponent } from './components/details/short/short.component';
import { ShoesComponent } from './components/details/shoes/shoes.component';
import { TrainingShirtComponent } from './components/details/training-shirt/training-shirt.component';
import { FootballBallComponent } from './components/details/football-ball/football-ball.component';
import { GlovesComponent } from './components/details/gloves/gloves.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ShoppingCartComponent },
  { path: 'shirt', component: ShirtComponent },
  { path: 'short', component: ShortComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'training-shirt', component: TrainingShirtComponent },
  { path: 'football-ball', component: FootballBallComponent },
  { path: 'gloves', component: GlovesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
