import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {BugHunterStore} from "../../../store/bughunter.store";

@Component({
  selector: 'fabric8-bughunter-view-page',
  templateUrl: './view-page.bughunter.html',
  styleUrls: ['./view-page.bughunter.scss'],
})
export class BugHunterViewPage implements OnDestroy {
  private idSubscription: Subscription;

  constructor(store: BugHunterStore, route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('id')
      .map((id) => {
        return store.load(id);
      })
      .subscribe();
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }
}
