import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register';
import { NeedBookComponent } from './need-book/need-book';
import { OwnBookComponent } from './own-book/own-book';
@NgModule({
	declarations: [RegisterComponent,
    NeedBookComponent,
    NeedBookComponent,
    OwnBookComponent],
	imports: [],
	exports: [RegisterComponent,
    NeedBookComponent,
    OwnBookComponent,]
})
export class ComponentsModule {}
