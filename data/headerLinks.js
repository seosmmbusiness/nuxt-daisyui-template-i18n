export function headerLinks() {
  return [
    {
      title: 'menu.example',
      hidden: false,
      subMenu: [
        {
          title: 'menu.example2',
          nuxtLink: '/page2',
          hidden: false,
        },
        {
          title: 'menu.example3',
          nuxtLink: '/page3',
          hidden: false,
        },
      ],
    },
    {
      title: 'menu.example4',
      nuxtLink: '/page4',
      hidden: false,
    },
  ]
}
