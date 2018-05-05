module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text:
        "Hi. My name is Anastasiia and I’m a student at Northwestern University enrolled in full stack web development program. I found your information from the Mentor Database. I see that you are a Senior Web Developer for Google and I’m really interested in learning more about a career in web development. Would you have time to tell me about what you do and how your career progressed after graduating?",
      createdAt: new Date(Date.UTC(2018, 3, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: "Anastasiia"
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Thank You for connection!",
      createdAt: new Date(Date.UTC(2018, 3, 30, 16, 10, 0)),
      user: {
        _id: 1,
        name: "Matt"
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "This is the beginning of your conversation.",
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      system: true
    }
  ];