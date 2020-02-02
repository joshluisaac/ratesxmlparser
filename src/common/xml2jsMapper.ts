import xml2js = require("xml2js");

const xml2jsSettings = { explicitArray : false };

export class Xml2jsMapper {

    public static parseXml(xmlContent:string) : any {
        let parser = new xml2js.Parser(xml2jsSettings);
        let json: any = {};
        parser.parseString(xmlContent, function (error: any, parsedContent: any) {
            if (error) { throw error; }
            else { json = parsedContent; }
        });
        return json;
    }


}