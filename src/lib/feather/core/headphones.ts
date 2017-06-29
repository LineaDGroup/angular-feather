import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-headphones',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/headphones.svg'
})
export class IconHeadphonesComponent {}

@NgModule({
  declarations: [ IconHeadphonesComponent ],
  exports: [ IconHeadphonesComponent ]
})
export class IconHeadphones {}
