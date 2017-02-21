import {Component, Input} from "@angular/core";
import {BugsInfos} from "../../../model/bugsinfo.model";

@Component({
  selector: 'fabric8-bughunter-list',
  templateUrl: './list.bughunter.html',
  styleUrls: ['./list.bughunter.scss'],
})
export class BugHunterListComponent {

  @Input() bugsInfos: BugsInfos;

  @Input() loading: boolean;

}
