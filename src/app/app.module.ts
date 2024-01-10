import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { IngresoService } from './ingreso/ingresoService.service';
import { EgresoService } from './egreso/egresoService.service';
import { CommonModule, CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    CurrencyPipe,
    TitleCasePipe,
    DecimalPipe
  ],
  providers: [IngresoService,EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
