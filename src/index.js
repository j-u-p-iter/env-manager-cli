#!/usr/bin/env node

const { createEnvManager } = require("@j.u.p.iter/env-manager");
const { argv } = require("yargs");

const runCLI = () => {
  const {
    password,
    path,
    originalFileName,
    encryptedFileName,
    decodedFileName,
    _
  } = argv;

  const [command] = _;

  if (command === "createConfig") {
    const envManager = createEnvManager(password);

    envManager.createConfig({
      pathToFile: path,
      originalFileName,
      encryptedFileName
    });

    return;
  }

  if (command === "decodeConfig") {
    const envManager = createEnvManager(password);

    envManager.decodeConfig({
      pathToFile: path,
      originalFileName,
      decodedFileName
    });

    return;
  }

  throw new Error(`There is no such a command ${command}`);
};

runCLI();
