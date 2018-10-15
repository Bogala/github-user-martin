import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './search-field/search-field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchFieldComponent],
  exports: [SearchFieldComponent]
})
export class GithubModule {}
