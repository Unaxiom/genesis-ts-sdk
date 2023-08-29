import * as path from "path";
import * as fs from "fs";

const srcFolder = "src";
const __dirname = "."
const directoryPath = path.join(__dirname, srcFolder);
const filesList = fs.readdirSync(directoryPath);

let indexStr = <string[]>[
    // `export * from "@bufbuild/connect-web";`

    // `import ***REMOVED*** createConnectTransport as connectNode ***REMOVED*** from "@bufbuild/connect-node";`,
    // `import ***REMOVED*** createConnectTransport as connectWeb ***REMOVED*** from "@bufbuild/connect-web";`,
    // `export ***REMOVED*** connectNode, connectWeb ***REMOVED***;`
];

filesList.forEach(f => ***REMOVED***
    if (f.endsWith("_connect.ts") || f.endsWith("_pb.ts")) ***REMOVED***
        indexStr.push(`export * from "./$***REMOVED***srcFolder***REMOVED***/$***REMOVED***f.split(".ts")[0]***REMOVED***";`);
***REMOVED***
***REMOVED***);

fs.writeFileSync(path.join(__dirname, "index.ts"), indexStr.join("\n"));

console.log("index.ts has been updated");