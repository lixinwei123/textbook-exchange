import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register';
import { NeedBookComponent } from './need-book/need-book';
import { OwnBookComponent } from './own-book/own-book';
import { MenuComponent } from './menu/menu';
@NgModule({
	declarations: [RegisterComponent,
    NeedBookComponent,
    NeedBookComponent,
    OwnBookComponent,
    MenuComponent],
	imports: [],
	exports: [RegisterComponent,
    NeedBookComponent,
    OwnBookComponent,
    MenuComponent,]
})
export class ComponentsModule {}
