import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";


import {BugsInfo} from "../../../model/bugsinfo.model";


@Component({
  selector: 'fabric8-bughunter-list-page',
  templateUrl: './list-page.bughunter.html',
  styleUrls: ['./list-page.bughunter.scss']
})
export class BugHunterListPage implements OnInit {
  private bugsInfos: BugsInfo[];
  private loading: Observable<boolean>;

  //FIXME need to make it to real service
  constructor() {
    this.loading = Observable.of(false);
  }

  loadBugInfos(): any {
    console.log("Loading Bug info ...")
    return null;
  }

  ngOnInit() {
    this.bugsInfos = LIST_OF_BUGS;
  }

}

export const LIST_OF_BUGS = [
  {

    "appBranch": "",
    "appGroup": "io.fabric8.devops.apps",
    "appIssueTrackerUrl": "",
    "appProject": "simple-calculator-springboot",
    "appProjectUrl": "",
    "appRevision": "",
    "appVersion": "1.0.0-SNAPSHOT",
    "count": 0,
    "id": "AVnbzxBZZB-P-5-RnI_G",
    "logMessage": "org.springframework.web.util.NestedServletException: Request processing failed; nested exception is org.json.JSONException: JSONArray[1] is not a number.\n",
    "podContainerName": "spring-boot",
    "podHost": "minikube",
    "podNamespace": "default",
    "podId": "e21387ae-e3eb-11e6-8a35-6a3fe2e876c7",
    "podName": "simple-calculator-spring-1262323589-l4qvt",
    "score": 9.867972,
    "timestamp": "2017-01-26T17:24:55+00:00"
  },
  {
    "appBranch": "",
    "appGroup": "io.fabric8.devops.apps",
    "appIssueTrackerUrl": "",
    "appProject": "simple-calculator-springboot",
    "appProjectUrl": "",
    "appRevision": "",
    "appVersion": "1.0.0-SNAPSHOT",
    "count": 0,
    "id": "AVnbzxBZZB-P-5-RnI_F",
    "logMessage": "17:24:55.559 [XNIO-2 task-5] ERROR io.undertow.request - UT005023: Exception handling request to /api/div\n",
    "podContainerName": "spring-boot",
    "podHost": "minikube",
    "podNamespace": "default",
    "podId": "e21387ae-e3eb-11e6-8a35-6a3fe2e876c7",
    "podName": "simple-calculator-spring-1262323589-l4qvt",
    "score": 9.772448,
    "timestamp": "2017-01-26T17:24:55+00:00"
  }
] as BugsInfo[];

