import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { configurationGuard } from './guard/configuration.guard';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'sellers', component: SellersComponent},
  {path: 'catalogs', component: CatalogsComponent},
  {path: 'config', component: ConfigurationComponent, canActivate: [configurationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'loading', component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
