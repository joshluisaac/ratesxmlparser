

import {Constants} from "./rate/constants";
import {RateService} from "./rate/rateService";


export function run() {

}

let rateService = new RateService(Constants.rawRatesXml);
let value = rateService.getProductRate("L1-fix-1-INV");
let value2 = rateService.getProductRate("L1-ULT-fix-5-INV");
let value3 = rateService.getProductRate("CALC-FHMP-ARREAR-fix-2-INV-morethan90LVR");
let value4 = rateService.getProductRate("CALC-FHMP-ADVANCE-fix-1-INV-morethan90LVR-IO");
console.log(value);
console.log(value2);
console.log(value3);
console.log(value4);

//console.log(rateService.getProductRates());
