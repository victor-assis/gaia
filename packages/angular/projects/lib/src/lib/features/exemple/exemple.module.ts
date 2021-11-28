import { NgModule } from '@angular/core'

import { ExempleComponent } from './exemple.component'

@NgModule({
  exports: [ExempleComponent],
  declarations: [ExempleComponent]
})
export class ExempleModule {}

export * from './exemple.component'
