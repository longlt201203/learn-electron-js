import * as fs from "fs";

function readdir(path: string) {
  return fs.readdirSync(path);
}

const fileSystem = {
  readdir,
};

export default fileSystem;
