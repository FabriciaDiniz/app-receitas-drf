import { TestBed } from '@angular/core/testing';

import { ConexaoService } from './conexao.service';

describe('ConexaoService', () => {
  let service: ConexaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
