import {Input, Component} from "@angular/core";
import {BugsInfo} from "../../../model/bugsinfo.model";

@Component({
  selector: 'fabric8-bughunter-view',
  templateUrl: './view.bughunter.html',
  styleUrls: ['./view.bughunter.scss'],
})
export class BugHunterViewComponent {

  @Input() bugInfo: BugsInfo;
}
