import {Xml2jsMapper} from "../common/xml2jsMapper";

export class RateService {

    private rates = new Map<string, string>();

    constructor(xml: string) {
        this.setRates(xml);
    }

    private static parseRate(xml: string): string {
        return Xml2jsMapper.parseXml(xml).rates.rate;
    }

    public getProductRate(productType: string): String {
        return this.rates.get(productType);
    }

    public getProductRates(): Map<string, string> {
        return this.rates;
    }

    private toMap(rate: any): Map<string, string> {
        let rates = new Map<string, string>();
        rate.map(entry => {
            rates.set(entry.$.key, entry.$.value);
        });
        return rates;
    }

    private setRates(xml: string): void {
        let parsedRate = RateService.parseRate(xml);
        this.rates = this.toMap(parsedRate);
    }

}