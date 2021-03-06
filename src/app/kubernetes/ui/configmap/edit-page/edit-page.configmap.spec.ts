/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {ConfigMapEditPage} from "./edit-page.configmap";
import {ConfigMapEditWrapperComponent} from "../edit-wrapper/edit-wrapper.configmap";
import {ConfigMapEditToolbarComponent} from "../edit-toolbar/edit-toolbar.configmap";
import {ConfigMapEditComponent} from "../edit/edit.configmap";
import {KubernetesStoreModule} from "../../../kubernetes.store.module";
import {FormsModule} from "@angular/forms";


describe('ConfigMapEditPage', () => {
  let configmap: ConfigMapEditPage;
  let fixture: ComponentFixture<ConfigMapEditPage>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          FormsModule,
          KubernetesStoreModule,
        ],
        declarations: [
          ConfigMapEditPage,
          ConfigMapEditWrapperComponent,
          ConfigMapEditToolbarComponent,
          ConfigMapEditComponent,
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions],
          },
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMapEditPage);
    configmap = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(configmap).toBeTruthy(); });
});
