import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngularApp';
  jsonData;
  ngOnInit() {
    this.jsonData = [
      { name: 'Utkarsha', email: 'utkarsh*@**.**', phone: '88888888' },
      { name: 'Tapendra', email: 'tap*@**.**', phone: '99999999' },
      { name: 'Paras', email: 'par*@**.**', phone: '00000000' },
    ];
  }
}
