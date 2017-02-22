export class BugsInfo {
  id: string;
  count: number;
  logMessage: string;
  score: number;
  timestamp: string;
  //App
  appBranch: string;
  appGroup: string;
  appIssueTrackerUrl: string;
  appProject: string;
  appProjectUrl: string;
  appRevision: string;
  appVersion: string;
  //Pod
  podContainerName: string;
  podHost: string;
  podNamespace: string;
  podId: string;
  podName: string;
}

export class BugsInfos extends Array<BugsInfo> {

}
