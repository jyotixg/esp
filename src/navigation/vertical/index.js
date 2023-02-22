const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Clients',
      icon: 'mdi:people',
      children: [
        {
          title: 'List',
          path: '/clients/list-client'
        },
        {
          title: 'Add',
          path: '/clients/add-client'
        }
      ]
    },

  ]
}

export default navigation
