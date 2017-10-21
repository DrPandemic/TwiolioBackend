const { execSync } = require('child_process');

console.log(execSync(`docker exec twioliobackend_functions_1 functions-emulator deploy ${process.argv[2]} --trigger-http --local-path /usr/src/app/`).toString());
