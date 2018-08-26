import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoDetailPage } from './produto-detail';
import { Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    ProdutoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoDetailPage),
  ],
  providers:[
    Camera
  ]
})
export class ProdutoDetailPageModule {}
