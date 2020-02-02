
import { parseString} from "xml2js";
//import { parseString} from "xml2js";

import xml2js from "xml2js";




//util function
function parseXml(xml:string): string {
    let json;
    parseString(xml, { explicitArray : false }, function (error, result) {
        json = JSON.stringify(result.rates.rate);
    });
    return json;
}


//parseXMl()
//reshapeXml()
//parseXml

const ratesXml = "<?xml version=\"1.0\"?>\n" +
    "<rates>\n" +
    "    <rate key=\"L1-var\" value=\"4.87\"/>\n" +
    "    <rate key=\"L1-fix-1\" value=\"3.78\"/>\n" +
    "</rates>";

const reshape = "<?xml version=\"1.0\"?>\n" +
    "<rates>\n" +
    "    <rate>\n" +
    "        <key>L1-var</key>\n" +
    "        <value>4.87</value>\n" +
    "    </rate>\n" +
    "    <rate>\n" +
    "        <key>L1-fix-1</key>\n" +
    "        <value>3.78</value>\n" +
    "    </rate>\n" +
    "</rates>";

console.log("**************************");
console.log(parseXml(ratesXml));
console.log("**************************");
console.log(parseXml(reshape));

const keys = JSON.parse(parseXml(reshape)).map(rate => rate.key);
console.log(keys);

const values = JSON.parse(parseXml(reshape)).map(rate => rate.value);
console.log(values);

let x = new Map<string,string>();

x.set("1","valueOf1");
console.log(x.get("1"));

console.log(x);
console.log(JSON.parse(parseXml(reshape)));