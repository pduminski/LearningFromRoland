import { mutation } from "@e2e/support/api/mutation/mutation";
describe("API tests", () => {
    it("SOAP tests", () => {
        const num = 600;

        cy.request({
            url: "https://www.dataaccess.com/webservicesserver/NumberConversion.wso",
            method: "POST",
            headers: {
                "Content-Type": "text/xml;charset=UTF-8",
            },
            body: `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
        <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
            <ubiNum>${num}</ubiNum>
            </NumberToWords>
            </soap:Body>
            </soap:Envelope>`,
        }).then((response) => {
            console.log(response.body)
            const xml = `${response.body}`;

            const parser = new DOMParser();
            const doc:any = parser.parseFromString(xml, "application/xml");
            const numberToWordsResult = doc.querySelector("NumberToWordsResult").textContent
            console.log(numberToWordsResult)
            const numberToCompare = "five hundred ";
            // cy.wrap(numberToWordsResult).as('numberToWordsResult').should('eq', numberToCompare);
            expect(numberToWordsResult).to.eq(numberToCompare)
            // assert.strictEqual(numberToWordsResult, numberToCompare);
        });
    });
});
