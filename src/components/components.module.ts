import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register';
import { NeedBookComponent } from './need-book/need-book';
import { OwnBookComponent } from './own-book/own-book';
import { MenuComponent } from './menu/menu';
import { FindMatchComponent } from './find-match/find-match';
@NgModule({
	declarations: [RegisterComponent,
    NeedBookComponent,
    NeedBookComponent,
    OwnBookComponent,
    MenuComponent,
    FindMatchComponent],
	imports: [],
	exports: [RegisterComponent,
    NeedBookComponent,
    OwnBookComponent,
    MenuComponent,
    FindMatchComponent,]
})
export class ComponentsModule {}
