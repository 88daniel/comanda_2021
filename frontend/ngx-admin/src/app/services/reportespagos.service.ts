import { ReportePagos } from './../models/reporte-pagos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportespagosService {

  constructor(private globalservice: GlobalService, private http:HttpClient) { }

  // generar reporte de pagos
  getReportePagos(datos: ReportePagos): Observable<any> {
    return this.http.post(this.globalservice.getBackendUrl() + 'generarreportepagos', datos ).pipe(
      map(data => data as any)
    );
  }
}
