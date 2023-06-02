import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { ForApplicantsComponent } from './for-applicants/for-applicants.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'for-companies', component: ForCompaniesComponent },
  { path: 'for-applicants', component: ForApplicantsComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
