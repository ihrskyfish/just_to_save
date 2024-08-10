const moduleName = require('modulePath');
module.exports = someValue;
exports.function1 = function1;
exports.value1 = value1;




import * as moduleName from 'modulePath';

import { function1, value1 } from 'modulePath';
import defaultExport from 'modulePath';


export default someValue;

export { function1, value1 };

export { function1 as newFunctionName, value1 as newValueName };