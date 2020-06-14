#!/usr/bin/env node

import { createEnvManager } from "@j.u.p.iter/env-manager";
import { argv } from "yargs";

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
