import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,    
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
