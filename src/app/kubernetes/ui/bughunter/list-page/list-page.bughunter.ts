import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";


import {BugsInfos} from "../../../model/bugsinfo.model";
import {BugHunterStore} from "../../../store/bughunter.store";


@Component({
  selector: 'fabric8-bughunter-list-page',
  templateUrl: './list-page.bughunter.html',
  styleUrls: ['./list-page.bughunter.scss']
})
export class BugHunterListPage implements OnInit {
  private readonly bugsInfos: Observable<BugsInfos>;
  private readonly loading: Observable<boolean>;

  constructor(private bugHunterStore: BugHunterStore) {
    this.bugsInfos = this.bugHunterStore.list;
    this.loading = this.bugHunterStore.loading;
  }

  ngOnInit() {

  }

}

