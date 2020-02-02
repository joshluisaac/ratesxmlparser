import xml2js = require("xml2js");


export class Xml2JsonMapper {

    private static readonly settings = {explicitArray: false};

    public static parseXml(xmlContent: string): any {
        const parser = new xml2js.Parser(Xml2JsonMapper.settings);
        let json: any = {};
        parser.parseString(xmlContent, (error: any, parsedContent: any) => {
            //consider calling an error handling function
            if (error)  throw error;
            json = parsedContent;
        });
        return json;
    }

}