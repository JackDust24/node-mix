import { Request, Response } from 'express';
import { eventService } from '../services/eventService';
import { PDFDocument } from 'pdf-lib';

export const uploadController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'Only PDF files are allowed!' });
      return;
    }

    const { buffer } = req.file;

    // Load the PDF file into memory
    const pdfDoc = await PDFDocument.load(buffer);

    const pageCount = pdfDoc.getPageCount();

    const title = pdfDoc.getTitle() || 'Untitled';
    const author = pdfDoc.getAuthor() || 'Unknown';

    //  eventService.emit('processFile', req.file.buffer);

    eventService.emit('processPDF', {
      buffer,
      metadata: { title, author, pageCount },
    });

    res.status(200).json({
      message: 'File uploaded successfully',
      metadata: { title, author, pageCount },
    });
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json({ error: 'An error occurred during file processing.' });
  }
};
