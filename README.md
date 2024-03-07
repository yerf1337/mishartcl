# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
````markdown
# Real-Time Chat Library

This is a simple JavaScript library for implementing real-time chat functionality in your applications.

## Installation

You can install the library via npm:

```bash
npm install real-time-chat-library
```

## Usage

```javascript
const RealTimeChat = require('real-time-chat-library');

// Create a new instance of RealTimeChat
const chat = new RealTimeChat();

// Add users to the chat
chat.addUser('user1', 'Alice');
chat.addUser('user2', 'Bob');

// Send messages
chat.sendMessage('user1', 'Hello, Bob!');
chat.sendMessage('user2', 'Hi, Alice!');

// Get all messages
const allMessages = chat.getAllMessages();
console.log(allMessages);
```

## API

### `addUser(userId, username)`

Adds a new user to the chat.

- `userId`: Unique identifier for the user.
- `username`: Username of the user.

Returns `true` if the user is successfully added, `false` if the user already exists.

### `removeUser(userId)`

Removes a user from the chat.

- `userId`: Unique identifier for the user.

Returns `true` if the user is successfully removed, `false` if the user doesn't exist.

### `sendMessage(userId, message)`

Sends a message in the chat.

- `userId`: Unique identifier for the user sending the message.
- `message`: The message to be sent.

Returns `true` if the message is successfully sent, `false` if the user doesn't exist.

### `getAllMessages()`

Retrieves all messages sent in the chat.

Returns an array of message objects.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
