export default {
  path: '/daybook',
  name: 'daybook',
  component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry-selected',
      component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/views/NoEntrySelected.vue'),
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/views/EntryView.vue'),
    }
  ],
}