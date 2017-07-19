import {NgModule} from '@angular/core';
import { MaterialModule } from '@angular/material';
import {MdTabsModule,MdInputModule,MdAutocompleteModule,
       MdDialogModule,MdCardModule,MdButtonModule,MdTooltipModule,MdProgressBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [MdTabsModule,MdAutocompleteModule,MdInputModule,MdTooltipModule,
  MdDialogModule,BrowserAnimationsModule,MaterialModule,MdCardModule,MdButtonModule,
  MdProgressBarModule],

  exports: [MdTabsModule,MdAutocompleteModule,MdInputModule,MdTooltipModule,
  MdDialogModule,BrowserAnimationsModule,MaterialModule,MdCardModule,MdButtonModule
  ,MdProgressBarModule]
})
export class MyOwnMaterialModule { }