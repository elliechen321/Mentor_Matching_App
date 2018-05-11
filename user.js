// Client side
determineUser(){
    AsyncStorage.getItem('userId')
      .then((userId) => {
        if (userId) {
          this.socket.emit('i-dont-need-an-id');
        } else {
          this.socket.emit('i-need-id');
          this.socket.on('here-is-your-id', (id) => {
            AsyncStorage.setItem('userId', id);
            // Force a rerender in the React component
            this.setState({ id });
          });
        }
    });
  }
  
  // Server side
  socket.on('i-need-id', () => {
    // Create a document in the db and grab that id.
    var user = db.collection('users').insert({});
    socket.emit('here-is-your-id', user._id);
  });