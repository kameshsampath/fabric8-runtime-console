import {BaseEntity} from "../store/entity/entity.model";

export class KubernetesResource implements BaseEntity {
  id: string;
  name: string;
  description: string;
  icon: string;
  labels: Map<string,string>;
  annotations: Map<string,string>;
  resource: any;

  public setResource(resource) {
    this.resource = resource || {};
    this.updateValuesFromResource();
    return this;
  }

  updateResource(resource) {
    this.annotations["description"] = this.description;

    var metadata = resource.metadata;
    if (!metadata) {
      metadata = {};
      resource.metadata = metadata;
    }
    metadata.labels = this.labels;
    metadata.annotations = this.annotations;
  }

  updateValuesFromResource() {
    var resource = this.resource || {};
    var metadata = resource.metadata || {};
    this.name = metadata.name || "";
    this.id = this.name;
    this.labels = metadata.labels || new Map<string,string>();
    this.annotations = metadata.annotations || new Map<string,string>();
    this.icon = this.annotations["fabric8.io/iconUrl"] || this.defaultIconUrl();

    // TODO any other annotations we should look for?
    this.description = this.annotations["description"] || "";
  }

  defaultIconUrl() {
    return "";
  }
}
