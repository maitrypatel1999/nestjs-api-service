import { JsonDB, Config } from 'node-json-db';

export const getJsonDB = (fileName: string): JsonDB => {
  return new JsonDB(new Config(fileName, true, true, '/'));
};
