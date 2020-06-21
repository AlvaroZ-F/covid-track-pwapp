import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalPage } from './global.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Ng2SearchPipeModule,
        RouterModule.forChild([{ path: '', component: GlobalPage }])
    ],
    declarations: [GlobalPage]
})
export class GlobalPageModule { }
