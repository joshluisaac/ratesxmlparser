import xml2js = require("xml2js");


export class Xml2JsonMapper {

    private static readonly settings = {explicitArray: false};

    /**
     * Returns a JSON string from an XML content.
     * @param xmlContent
     */
    public static parseXml(xmlContent: string): any {
        const parser = new xml2js.Parser(Xml2JsonMapper.settings);
        let json: any = {};
        parser.parseString(xmlContent, (error: any, parsedContent: any) => {
            //Josh: consider calling or dispatching an error handling function here.
            if (error)  throw error;
            json = parsedContent;
        });
        return json;
    }

}