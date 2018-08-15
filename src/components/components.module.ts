import { NgModule } from '@angular/core';
import { ResetButtonsComponent } from './reset-buttons/reset-buttons';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [ResetButtonsComponent],
	imports: [
		IonicPageModule.forChild(ResetButtonsComponent)
	],
	exports: [ResetButtonsComponent]
})
export class ComponentsModule {}
