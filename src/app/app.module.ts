import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {ProdutoService} from './service/produto.service';
import { HomeComponent } from './home/home.component';
import { ProdViewComponent } from './views/prod-view/prod-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ProdViewComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,


  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
