import {Component, Input} from "@angular/core";

@Component({
  selector: 'k8s-labels',
  templateUrl: './k8s-labels.html',
  styleUrls: ['./k8s-labels.scss'],
})
export class KubernetesLabelsComponent {

  @Input() labels: Map<String,String>;

}
