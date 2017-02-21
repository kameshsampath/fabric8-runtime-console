import {App} from "./buginfoapp.model";
import {Pod} from "./bugsinfopod.model";

export class BugsInfo {
    id: string;
    count: number;
    logMessage: string;
    score: number;
    timestamp: string;
    app: App;
    pod: Pod;
}

export class BugsInfos extends Array<BugsInfo>{

}
