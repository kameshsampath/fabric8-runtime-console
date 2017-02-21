import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MomentModule} from "angular2-moment";

import {Fabric8CommonModule} from "../../../common/common.module";

import {BugHunterListComponent} from "./list/list.bughunter";
import {BugHunterListPage} from "./list-page/list-page.bughunter";

const routes: Routes = [
  { path: '', component: BugHunterListPage }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Fabric8CommonModule,
    MomentModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BugHunterListPage,
    BugHunterListComponent,
  ],
  entryComponents: [
    BugHunterListPage,
  ],
})

export class BugHunterModule {
}
