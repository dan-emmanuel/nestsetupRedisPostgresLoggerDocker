import * as fs from 'fs';
import { mock } from 'node:test';
import * as path from 'path';



// The directory where your JSON files are located
const folderPath = path.join(__dirname, '../mocks')
  ;
// Read the directory
const files = fs.readdirSync(folderPath);

const mocksFiles = files.filter((file) => file.includes('.js') && !file.includes('index') && !file.includes('js.map'));

export const mocks = mocksFiles.reduce(async (previousMocks, currentFile) => {
  const currentFileData = await import(path.join(folderPath, currentFile));
  return {
    ...await previousMocks,
    ...currentFileData,
  };
}, Promise.resolve({}) as any);
