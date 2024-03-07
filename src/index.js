// chatLibrary.js

class RealTimeChat {
    constructor() {
      this.users = {};
      this.messages = [];
    }
  
    // Method to add a new user to the chat
    addUser(userId, username) {
      if (!this.users[userId]) {
        this.users[userId] = username;
        return true;
      }
      return false; // User already exists
    }
  
    // Method to remove a user from the chat
    removeUser(userId) {
      if (this.users[userId]) {
        delete this.users[userId];
        return true;
      }
      return false; // User doesn't exist
    }
  
    // Method to send a message
    sendMessage(userId, message) {
      if (this.users[userId]) {
        const chatMessage = {
          userId: userId,
          username: this.users[userId],
          message: message,
          timestamp: new Date().toISOString(),
        };
        this.messages.push(chatMessage);
        return true;
      }
      return false; // User doesn't exist
    }
  
    // Method to get all messages
    getAllMessages() {
      return this.messages;
    }
  }
  
  module.exports = RealTimeChat;
  