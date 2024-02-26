import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }

  importarExcel(excelFile: File) {
    const formData = new FormData();
    formData.append('file', excelFile);
    alert(formData)
    // Aquí simularíamos la solicitud HTTP para enviar el archivo
    setTimeout(() => {
      // Simulamos el éxito y mostramos el nombre del archivo en el modal
      Swal.fire({
        title: '¡Archivo subido exitosamente!',
        text: `Nombre del archivo: ${excelFile.name}`,
        icon: 'success'
      });
    }, 1000);
  }


}
