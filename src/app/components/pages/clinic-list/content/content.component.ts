import { Component } from '@angular/core';
import { ClinicHelperService } from 'src/app/components/helper/clinic/clinic-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends ClinicHelperService {

}
