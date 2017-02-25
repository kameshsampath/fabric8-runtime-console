import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BugsInfo} from "../../../model/bugsinfo.model";
import {BugHunterStore} from "../../../store/bughunter.store";

@Component({
  selector: 'fabric8-bughunter-view-wrapper',
  templateUrl: './view-wrapper.bughunter.html',
  styleUrls: ['./view-wrapper.bughunter.scss'],
})
export class BugHunterViewWrapperComponent implements OnInit {
  bugInfo: Observable<BugsInfo>;

  constructor(private store:BugHunterStore) { }

  ngOnInit() { this.bugInfo = this.store.resource; }
}

