import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { PopUpAdicionarComponent } from '../../components/pop-up-adicionar/pop-up-adicionar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SideBarComponent, PopUpAdicionarComponent],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
}
