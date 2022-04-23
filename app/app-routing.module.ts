import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetintervalComponent } from './setinterval.component';
import { IncDecComponent } from './incdec.component';
import { IncDecRangeComponent } from './incdecrange.component';
import { UserComponent } from './user.component';
import { MultipleOfIntergerComponent } from './multilpeofinteger.component';
import { NgclassExampleComponent } from './ngclassexample.component';

const routes: Routes = [
  {path:"setinterval",component:SetintervalComponent},
  {path:"incdec",component:IncDecComponent},
  {path:"incdecrange",component:IncDecRangeComponent},
  {path:"user",component:UserComponent},
  {path:"multipleofinteger",component:MultipleOfIntergerComponent},
  {path:"ngclassexample",component:NgclassExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
