// layouts.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    PrivateLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // Ajoutez RouterModule ici
  ],
})
export class LayoutsModule {}
