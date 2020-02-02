import fs = require('fs');
import {RateService} from "./rate/rateService";


async function readFile(file: string): Promise<string> {
    return new Promise<string>(((resolve, reject) => {
        fs.readFile(file, "UTF-8", (error: any, data: string) => {
            if (error) reject(error);
            resolve(data);
        });
    }));
}

async function run(file: string): Promise<any> {
    const fileContent = await readFile(file);
    const rateService = new RateService(fileContent);
    const value = rateService.getRateById("L1-fix-1-INV");
    const value2 = rateService.getRateById("L1-ULT-fix-5-INV");
    const value3 = rateService.getRateById("CALC-FHMP-ARREAR-fix-2-INV-morethan90LVR");
    const value4 = rateService.getRateById("CALC-FHMP-ADVANCE-fix-1-INV-morethan90LVR-IO");
    console.log(value);
    console.log(value2);
    console.log(value3);
    console.log(value4);
    console.log(rateService.getRates().size);
}

(async () => {
    await run("/media/joshua/martian/jobs/webstormbase/playground/infrastructure/fininfo1309.xml");
})().catch(async (e) => {
    console.log("Some error occurred..");
});



