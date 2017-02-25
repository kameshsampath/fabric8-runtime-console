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

  constructor(data: any) {
    var bugInfo = data || {};
    //flattening the JSON for easier view output
    this.id = bugInfo.id;
    this.count = bugInfo.count;
    this.logMessage = bugInfo.logMessage;
    this.score = bugInfo.score;
    this.timestamp = bugInfo.timestamp;
    this.appBranch = bugInfo.app.branch;
    this.appGroup = bugInfo.app.group;
    this.appIssueTrackerUrl = bugInfo.app.issueTrackerUrl;
    this.appProject = bugInfo.app.project;
    this.appProjectUrl = bugInfo.app.projectUrl;
    this.appRevision = bugInfo.app.revision;
    this.podContainerName = bugInfo.pod.containerName;
    this.podHost = bugInfo.pod.host;
    this.podId = bugInfo.pod.podId;
    this.podName = bugInfo.pod.podName;
    this.podNamespace = bugInfo.pod.namespace;
  }
}


export class BugsInfos extends Array<BugsInfo> {

}
