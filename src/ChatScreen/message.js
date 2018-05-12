socket.on('connection', () => {
    var messages = db.collection('messages').find({
      chatId: chatId // We want all the messages for that room.
    }).sort({
      createdAt: -1 // It's best not to assume that it is in order.
    });
    socket.emit('message', messages);
  });