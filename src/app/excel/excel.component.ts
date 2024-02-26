import { Component, inject } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { ExcelService } from '../services/excel.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-excel',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule],
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.css'
})
export class ExcelComponent {
  constructor(private excelService: ExcelService) {}
  archivo! : File

  archivoSelecionado(event: any) {
    this.archivo = event.target.files[0];
  }

  importar(){
    if (this.archivo) {
      this.excelService.importarExcel(this.archivo);
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }

}
   

