module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Sure! Lets Chat!',
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Mentor',
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
      text: 'Hello! Let me introduce myself. I’m currently enrolled in a full stack web development program and my main goal is to become outstandind Full-Stack Web Developer. I found your information from the Mentor Database and was so impressed with your skills and background so I decided to write you with a kind request to be my Mentor.',
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Wellcome to the chat! Get to know your match.",
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      system: true,
    },
  ];