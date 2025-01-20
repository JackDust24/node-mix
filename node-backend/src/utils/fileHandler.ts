import fs from 'fs';
import { Transform } from 'stream';

/**
 * Reads a JSON file, extracts the `content` attribute, and writes it to an output file using streams.
 * @param inputPath - Path to the input JSON file.
 * @param outputPath - Path to the output text file.
 * @returns A promise that resolves to the final output string.
 */

export async function processFileWithStreams(
  inputPath: string,
  outputPath: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    let output = '';

    // Create readable and writable streams
    const readStream = fs.createReadStream(inputPath, { encoding: 'utf8' });
    const writeStream = fs.createWriteStream(outputPath);

    // Transform stream to extract and process content:
    const transformStream = new Transform({
      readableObjectMode: true,

      transform(chunk, encoding, callback) {
        try {
          const data = JSON.parse(chunk.toString());
          const content = data
            .map((item: { content: string }) => item.content)
            .join('\n');
          output = content;
          callback(null, content);
        } catch (error: any) {
          callback(error as Error);
        }
      },
    });

    readStream
      .pipe(transformStream)
      .pipe(writeStream)
      .on('finish', () => {
        resolve(output);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
