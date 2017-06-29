import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-thumbs-up',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/thumbs-up.svg'
})
export class IconThumbsUpComponent {}

@NgModule({
  declarations: [ IconThumbsUpComponent ],
  exports: [ IconThumbsUpComponent ]
})
export class IconThumbsUp {}
