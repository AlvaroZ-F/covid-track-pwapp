import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'global',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../global/global.module').then(m => m.GlobalPageModule)
          }
        ]
      },

      {
        path: "national",
        children: [
          {
            path: '',
            loadChildren: () => import('../national/national.module').then(m => m.NationalPageModule)
          }
        ]
      },

      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/global',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/global',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
