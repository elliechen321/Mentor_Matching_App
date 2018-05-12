module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text:
        "This is the very beginning of your conversation",
      createdAt: new Date(Date.UTC(2018, 3, 30, 11, 20, 0)),
      user: {
        _id: 1,
        name: "Mentor"
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Thank You for connection!",
      createdAt: new Date(Date.UTC(2018, 3, 30, 16, 20, 0)),
      user: {
        _id: 1,
        name: "Developer"
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "This is a system message.",
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      system: true
    }
  ];