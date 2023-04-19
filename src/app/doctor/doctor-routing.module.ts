import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { AddslotComponent } from './components/addslot/addslot.component';
import { GetslotsComponent } from './components/getslots/getslots.component';

const routes: Routes = [{ path: '', component: DoctorComponent },
{ path: 'addslot', component: AddslotComponent },
{ path: 'getslots', component: GetslotsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
