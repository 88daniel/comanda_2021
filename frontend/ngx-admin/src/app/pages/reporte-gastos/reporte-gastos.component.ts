import { ReportespagosService } from './../../services/reportespagos.service';
import { ReportePagos } from './../../models/reporte-pagos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ngx-reporte-gastos',
  templateUrl: './reporte-gastos.component.html',
  styleUrls: ['./reporte-gastos.component.scss']
})
export class ReporteGastosComponent implements OnInit {

  frm_rangepicker: FormGroup;

  constructor(private reporteservice: ReportespagosService) {
    this.frm_rangepicker = new FormGroup({
      'rango': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const m1 = moment(this.frm_rangepicker.controls['rango'].value.start).format('YYYYMMDD');
    const m2 = moment(this.frm_rangepicker.controls['rango'].value.end).format('YYYYMMDD');
    console.log(m1);
    console.log(m2);

    const r: ReportePagos = new ReportePagos();
    r.end = m2;
    r.start = m1;

    //llamada a service para generar reporte de pagos
    this.reporteservice.getReportePagos(r).subscribe(
      response => {
        console.log(response);
      },
      err => {},
      () => {}
    )
  }

  changePicker(e) {


  }
}
