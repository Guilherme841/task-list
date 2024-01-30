import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
