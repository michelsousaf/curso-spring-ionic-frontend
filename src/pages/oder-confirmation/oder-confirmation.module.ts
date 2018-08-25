import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OderConfirmationPage } from './oder-confirmation';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OderConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OderConfirmationPage),
  ],

  providers: [
    PedidoService
  ]

})
export class OderConfirmationPageModule {}
