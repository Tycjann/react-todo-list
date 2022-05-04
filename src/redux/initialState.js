const initialState = {
  columns: [
    {
      id: 1,
      title: 'Books',
      icon: 'book',
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
    }
  ],

  cards: [
    { id: 1, columnId: 1, title: 'This is Going to Hurt' },
    { id: 2, columnId: 1, title: 'Interpreter of Maladies' },
    { id: 3, columnId: 2, title: 'Harry Potter' },
    { id: 4, columnId: 2, title: 'Star Wars' },
    { id: 5, columnId: 3, title: 'The Witcher' },
    { id: 6, columnId: 3, title: 'Skyrim' }
  ]

};

export default initialState;