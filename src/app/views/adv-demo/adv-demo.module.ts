import { NgModule } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';

import { AdvDemoRoutingModule } from './adv-demo-routing.module';
import { SwapDemoComponent } from './swap-demo/swap-demo.component';

@NgModule({
  imports: [
    AdvDemoRoutingModule,
    AngularDraggableModule,
    TabsModule,
    MarkdownModule
  ],
  declarations: [
    SwapDemoComponent
  ]
})
export class AdvDemoModule { }
