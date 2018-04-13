import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [MarkdownModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
