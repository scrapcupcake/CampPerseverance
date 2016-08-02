import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { MissionStatement } from './mission-statement';
import { SiteSearch } from './site-search';
import { Contact } from './contact';
import { Needs, NeedsSurvey } from './needs';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  { path: '',      component: MissionStatement },
  { path: 'our-mission',  component: MissionStatement },
  { path: 'site-search',  component: SiteSearch },
  { path: 'contact',  component: Contact },
  { path: 'needs',  component: Needs },
  { path: 'needs/survey', component: NeedsSurvey },
  { path: '**',    component: MissionStatement },
];
