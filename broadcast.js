// Server side
socket.on('message', (message) => {
    // Save the message document in the `messages` collection.
    db.collection('messages').insert(message);
    
    // The `broadcast` allows us to send to all users but the sender.
    socket.broadcast.emit('message', message);
  });
  
  // Client side
  socket.on('message', (message) => {
    var oldMessages = this.state.messages;
    // React will automatically rerender the component when a new message is added.
    this.setState({ messages: oldMessages.concat(message) });
  });