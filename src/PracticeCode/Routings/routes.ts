import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { Component1 } from './components';


export const Routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./AllRoutings').then((m) => m.AllRoutesComponent),
    data: { title: 'All Routings' },
    title: 'All Routings Title',
    resolve: {
      data: async (route: ActivatedRouteSnapshot) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log(route, 'i should be called first');
        return { message: 'Data resolved' };
      },      
    },

    children: [
      {
        path: 'comp1',
        component: Component1,
      },
    ],
  },
];
