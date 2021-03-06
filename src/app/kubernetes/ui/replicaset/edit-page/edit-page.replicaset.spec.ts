/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {ReplicaSetEditPage} from "./edit-page.replicaset";
import {ReplicaSetEditWrapperComponent} from "../edit-wrapper/edit-wrapper.replicaset";
import {ReplicaSetEditToolbarComponent} from "../edit-toolbar/edit-toolbar.replicaset";
import {ReplicaSetEditComponent} from "../edit/edit.replicaset";
import {KubernetesStoreModule} from "../../../kubernetes.store.module";
import {FormsModule} from "@angular/forms";


describe('ReplicaSetEditPage', () => {
  let replicaset: ReplicaSetEditPage;
  let fixture: ComponentFixture<ReplicaSetEditPage>;

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
          ReplicaSetEditPage,
          ReplicaSetEditWrapperComponent,
          ReplicaSetEditToolbarComponent,
          ReplicaSetEditComponent,
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
    fixture = TestBed.createComponent(ReplicaSetEditPage);
    replicaset = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(replicaset).toBeTruthy(); });
});
