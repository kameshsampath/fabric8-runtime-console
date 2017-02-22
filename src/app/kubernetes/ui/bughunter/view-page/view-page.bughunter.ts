import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'fabric8-bughunter-view-page',
  templateUrl: './view-page.bughunter.html',
  styleUrls: ['./view-page.bughunter.scss'],
})
export class BugHunterViewPage implements OnDestroy {
  private idSubscription: Subscription;

  //FIXME  - remove this after service integration
  private MOCK_DATA: any = {
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
  };

  constructor(route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('id')
      .map(() => {
        return this.MOCK_DATA;
      })
      .subscribe();
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }
}
