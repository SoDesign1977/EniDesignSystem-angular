import { NgModule } from '@angular/core';
import { EnidesignsystemAngularComponent } from './enidesignsystem-angular.component';
import { EniCheckboxComponent } from './Checkbox/eni-checkbox/eni-checkbox.component';
import { EniListcheckboxComponent } from './Checkbox/eni-listcheckbox/eni-listcheckbox.component';
import { EniInputComponent } from './Input/eni-input/eni-input.component';
import { EniModaleComponent } from './Modale/eni-modale/eni-modale.component';
import { EniRadioTextComponent } from './Radio/eni-radio-text/eni-radio-text.component';
import { EniRadioButtonComponent } from './Radio/eni-radio-button/eni-radio-button.component';
import { EniSelectComponent } from './Select/eni-select/eni-select.component';
import { EniSelectcheckboxComponent } from './Select/eni-selectcheckbox/eni-selectcheckbox.component';
import { EniSquarecheckboxComponent } from './Square/eni-squarecheckbox/eni-squarecheckbox.component';
import { EniSquarelistcheckboxComponent } from './Square/eni-squarelistcheckbox/eni-squarelistcheckbox.component';
import { EniSquarelistradioComponent } from './Square/eni-squarelistradio/eni-squarelistradio.component';
import { EniStatusComponent } from './Status/eni-status/eni-status.component';
import { EniSwitchComponent } from './Switch/eni-switch/eni-switch.component';
import { EniTabsComponent } from './Tabs/eni-tabs/eni-tabs.component';
import { EniTextareaComponent } from './TextArea/eni-textarea/eni-textarea.component';
import { EniTooltipComponent } from './Tooltip/eni-tooltip/eni-tooltip.component';
import { EniAlertComponent } from './Alert/eni-alert/eni-alert.component';
import { EniStylesComponent } from './eni-styles/eni-styles.component';
import { EniButtonComponent } from './Button/eni-button/eni-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    EnidesignsystemAngularComponent,
    EniCheckboxComponent,
    EniListcheckboxComponent,
    EniInputComponent,
    EniModaleComponent,
    EniRadioTextComponent,
    EniRadioButtonComponent,
    EniSelectComponent,
    EniSelectcheckboxComponent,
    EniSquarecheckboxComponent,
    EniSquarelistcheckboxComponent,
    EniSquarelistradioComponent,
    EniStatusComponent,
    EniSwitchComponent,
    EniTabsComponent,
    EniTextareaComponent,
    EniTooltipComponent,
    EniAlertComponent,
    EniStylesComponent,
    EniButtonComponent
  ],
  imports: [CommonModule,BrowserModule, FormsModule],
  exports: [
    EnidesignsystemAngularComponent,
    EniCheckboxComponent,
    EniListcheckboxComponent,
    EniInputComponent,
    EniModaleComponent,
    EniRadioTextComponent,
    EniRadioButtonComponent,
    EniSelectComponent,
    EniSelectcheckboxComponent,
    EniSquarecheckboxComponent,
    EniSquarelistcheckboxComponent,
    EniSquarelistradioComponent,
    EniStatusComponent,
    EniSwitchComponent,
    EniTabsComponent,
    EniTextareaComponent,
    EniTooltipComponent,
    EniAlertComponent,
    EniStylesComponent,
    EniButtonComponent
  ]
})
export class EnidesignsystemAngularModule { }
