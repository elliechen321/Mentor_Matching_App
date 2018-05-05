module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'How are you?!',
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      received: true,
      // location: {
      //   latitude: 48.864601,
      //   longitude: 2.398704
      // },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Hi!',
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'Mentor',
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Wellcome to the chat! Get to know your match.",
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      system: true,
    },
  ];