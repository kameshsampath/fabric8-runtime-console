import {Component, Input} from "@angular/core";
import {BugsInfo} from "../../../model/bugsinfo.model";

@Component({
  selector: 'fabric8-bughunter-view-toolbar',
  templateUrl: './view-toolbar.bughunter.html',
  styleUrls: ['./view-toolbar.bughunter.scss'],
})
export class BugHunterViewToolbarComponent {

  @Input() bugInfo: BugsInfo;

}
