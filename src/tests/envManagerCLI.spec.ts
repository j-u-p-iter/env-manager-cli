import fs from 'fs';
import path from 'path';

import { executeCommand } from '@j.u.p.iter/execute-command';

describe('envManagerCLI', () => {
  describe('createConfig', () => {
    describe('with default names', () => {
      it('works properly', async () => {
        const pathToBin = path.resolve(__dirname, '../..', './dist/lib/index.js');
        const pathToFile = path.resolve(__dirname, './forCreateConfigTest');

        await executeCommand({ 
          pathToBin, 
          args: [
            'createConfig', 
            '--password', 
            'SomePassword', 
            '--path', 
            pathToFile,
          ] 
        });

        const pathToEncodedConfig = path.resolve(
          pathToFile,
          "env.enc.js"
        );

        expect(() => fs.accessSync(pathToEncodedConfig)).not.toThrow();

        fs.unlinkSync(pathToEncodedConfig);
      });
    });

    describe('with custom names', () => {
      it('works properly', async () => {
        const pathToBin = path.resolve(__dirname, '../..', './dist/lib/index.js');
        const pathToFile = path.resolve(__dirname, './forCreateConfigTest');

        await executeCommand({ 
          pathToBin, 
          args: [
            'createConfig', 
            '--password', 
            'SomePassword', 
            '--path', 
            pathToFile,
            '--originalFileName',
            'someConfig.json',
            '--encryptedFileName',
            'encryptedConfig.json'
          ] 
        });

        const pathToEncodedConfig = path.resolve(
          pathToFile,
          "encryptedConfig.json"
        );

        expect(() => fs.accessSync(pathToEncodedConfig)).not.toThrow();

        fs.unlinkSync(pathToEncodedConfig);
      });
    });
  });

  describe('decodeConfig', () => {
    describe('with default names', () => {
      it('works properly', async () => {
        const pathToBin = path.resolve(__dirname, '../..', './dist/lib/index.js');
        const pathToFile = path.resolve(__dirname, './forDecodeConfigTest');

        await executeCommand({ 
          pathToBin, 
          args: [
            'decodeConfig', 
            '--password', 
            'SomePassword', 
            '--path', 
            pathToFile,
          ] 
        });

        const pathToEncodedConfig = path.resolve(
          pathToFile,
          "env.js"
        );

        expect(() => fs.accessSync(pathToEncodedConfig)).not.toThrow();

        fs.unlinkSync(pathToEncodedConfig);
      });
    });

    describe('with custom names', () => {
      it('works properly', async () => {
        const pathToBin = path.resolve(__dirname, '../..', './dist/lib/index.js');
        const pathToFile = path.resolve(__dirname, './forDecodeConfigTest');

        await executeCommand({ 
          pathToBin, 
          args: [
            'decodeConfig', 
            '--password', 
            'SomePassword', 
            '--path', 
            pathToFile,
            '--originalFileName',
            'encryptedConfig.json',
            '--decodedFileName',
            'someConfig.json'
          ] 
        });

        const pathToEncodedConfig = path.resolve(
          pathToFile,
          "someConfig.json"
        );

        expect(() => fs.accessSync(pathToEncodedConfig)).not.toThrow();

        fs.unlinkSync(pathToEncodedConfig);
      });
    });
  });
});
