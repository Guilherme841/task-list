import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { ContainerTaskComponent } from './components/container-task/container-task.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContainerTaskComponent,
      },
    ],
  },
];
