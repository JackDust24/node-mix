import { EventEmitter } from 'events';
import { fileUploadHandler } from '../utils/fileHandler';

/*
* EventService class extends EventEmitter class from Node.js core module.
* It listens to 'processFile' event and processes the file buffer.
* It also listens to 'fileUploaded' event and processes the file.
* The process.NextTick and setImmediate functions are used for testing purposes only

*/

class EventService extends EventEmitter {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.on('processFile', (buffer: Buffer) => {
      console.log('Processing file with buffer:', buffer);
      process.nextTick(() => {
        console.log('nextTick: Starting file processing...');
      });

      setImmediate(() => {
        console.log('setImmediate: File processed.');
      });

      fileUploadHandler(buffer);
    });
    this.on('processPDF', ({ buffer, metadata }) => {
      console.log('Processing PDF file with metadata:', metadata);
      process.nextTick(() => {
        console.log('nextTick: Starting file processing...');
      });

      setImmediate(() => {
        console.log('setImmediate: File processed.');
      });

      fileUploadHandler(buffer);
    });
  }
}

export const eventService = new EventService();
