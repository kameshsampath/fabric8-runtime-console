import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MomentModule} from "angular2-moment";

import {Fabric8CommonModule} from "../../../common/common.module";

import {BugHunterListComponent} from "./list/list.bughunter";
import {BugHunterListPage} from "./list-page/list-page.bughunter";
import {BugHunterViewWrapperComponent} from "./view-wrapper/view-wrapper.bughunter";
import {BugHunterViewPage} from "./view-page/view-page.bughunter";
import {BugHunterViewToolbarComponent} from "./view-toolbar/view-toolbar.bughunter";
import {BugHunterViewComponent} from "./view/view.bughunter";
import {BugHunterStore} from "../../store/bughunter.store";

const routes: Routes = [
  { path: '', component: BugHunterListPage },
  { path: ':id', component: BugHunterViewPage }
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
    BugHunterViewPage,
    BugHunterListComponent,
    BugHunterViewComponent,
    BugHunterViewWrapperComponent,
    BugHunterViewToolbarComponent,
  ],
  providers:[
    BugHunterStore,
  ],
  entryComponents: [
    BugHunterListPage,
  ],
})

export class BugHunterModule {
}
