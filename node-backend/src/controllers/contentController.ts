import { Request, Response } from 'express';
import { processFileWithStreams } from '../utils/fileHandler';
import path from 'path';

const inputFilePath = path.join(__dirname, '../data/example.json');
const outputFile = path.join(__dirname, '../../output/streamOutput.txt');

export const getContent = async (req: Request, res: Response) => {
  try {
    const output = await processFileWithStreams(inputFilePath, outputFile);
    res.json({ data: output });
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json({ error: 'An error occurred during file processing.' });
  }
};
