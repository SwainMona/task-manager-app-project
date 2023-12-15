import { Routes } from '@angular/router';
import { TaskmanagerComponent } from './components/taskmanager/taskmanager.component';

export const routes: Routes = [
    {path:'taskmanager', component: TaskmanagerComponent },
    {path:'**', pathMatch: 'full', redirectTo: 'taskmanager'},//Aquí seteamos todos los paths no seteados
];
