const arg1 = process.argv[2];
const arg2 = process.argv[3];

import modules_default_export_math from './modules_default_export_math';
console.log(modules_default_export_math.PI);
console.log(modules_default_export_math.sqrt(+arg1));
console.log(modules_default_export_math.square(+arg2));