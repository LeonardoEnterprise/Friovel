import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './service/loading/loading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { RevenuesComponent } from './pages/revenues/revenues.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    TicketComponent,
    InvoiceComponent,
    CatalogsComponent,
    SellersComponent,
    ConfigurationComponent,
    LoginComponent,
    LoadingComponent,
    RevenuesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule


  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
