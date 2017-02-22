import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BugsInfo} from "../../../model/bugsinfo.model";

@Component({
  selector: 'fabric8-bughunter-view-wrapper',
  templateUrl: './view-wrapper.bughunter.html',
  styleUrls: ['./view-wrapper.bughunter.scss'],
})
export class BugHunterViewWrapperComponent implements OnInit {
  bugInfo: Observable<BugsInfo>;

  constructor() { }

  ngOnInit() { this.bugInfo = Observable.of(MOCK_BUG_INFO); }
}

//FIXME - always return this ...
const MOCK_BUG_INFO: BugsInfo = {

  "appBranch": "HEAD",
  "appGroup": "io.fabric8.devops.apps",
  "appIssueTrackerUrl": "https://github.com/issues",
  "appProject": "simple-calculator-springboot",
  "appProjectUrl": "http://www.yahoo.com",
  "appRevision": "v1.0.1",
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
};

