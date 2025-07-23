// See the Electron documentation for details on how to use preload scripts:

import { contextBridge } from "electron";
import test from "./native/test";
import fileSystem from "./native/file-system";

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// contextBridge.exposeInMainWorld("test", test);
// contextBridge.exposeInMainWorld("fileSystem", fileSystem);
