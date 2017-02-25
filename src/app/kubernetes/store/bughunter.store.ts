/**
 * Created by kameshs on 24/02/17.
 */


import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {BugsInfo, BugsInfos} from "../model/bugsinfo.model";
import {Http} from "@angular/http";


@Injectable()
export class BugHunterStore {

  //TODO !!!! Lookup service url within.. !!!
  _bughunterUri: string = "/elasticsearch/bughunter/_search";

  protected _bugsInfos = new BugsInfos();

  protected _bugsInfo: BehaviorSubject<BugsInfos> = new BehaviorSubject(this._bugsInfos);

  protected _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: Http) {
    this.query();
  }

  get loading(): Observable<boolean> {
    return this._loading.asObservable();
  }

  get list(): Observable<BugsInfos> {
    return this._bugsInfo.asObservable();
  }

  protected query() {

    this._loading.next(true);

    this.http.get(this._bughunterUri)
      .subscribe(
        (res) => {

          let data = res.json();

          //TODO -- am I observable ..
          if (data && data.hits && data.hits.hits) {
            data.hits.hits.forEach(hit => {
              this._bugsInfos.push(new BugsInfo(hit._source));
            });
          }
          this._loading.next(false);
        },
        (err) => {
          console.log("Error loading Bug Hunter bugs", err);
          this._loading.next(false);
        }
      );
  }

}
