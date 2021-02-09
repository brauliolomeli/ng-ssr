import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: '', redirectTo: 'bar', pathMatch: 'full' },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'other',
    component: OtherComponent
  }
];

@NgModule({
  declarations: [BarComponent, OtherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FooModule { }
