const { calculateInvoice } = require("../controllers/invoice");
const should = require("chai").should();
const { newPayload } = require("./sampedata");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Invoice ", function() {
    it("it should calculate the invoice amount", function() {
      let payload = {
        subscriptionInfo: newPayload.contacts[0].subscriptions[0],
        productInfo: newPayload.business[0].inventory[0]
      };
      amount = calculateInvoice(payload);
      amount.should.be.a("number");
      amount.should.equal(176);
    });
  });
  
  /**
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */
  describe("Invoice ", function() {
    it("it should calculate the invoice amount", function() {
      let payload = {
        subscriptionInfo: {
          subscriptionID: "10001",
          subscriptionFrom:
            "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
          subscriptionTo:
            "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
          holdDate: []
        },
        productInfo: newPayload.business[0].inventory[0]
      };
      amount = calculateInvoice(payload);
      amount.should.be.a("number");
      amount.should.equal(194);
    });
  
    it("it should calculate the invoice amount", function() {
      let payload = {
        subscriptionInfo: {
          subscriptionID: "10001",
          subscriptionFrom:
            "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
          subscriptionTo:
            "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
          holdDate: [
            "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 23 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 6 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 12 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 25 2020 05:30:30 GMT+0530 (India Standard Time)"
          ]
        },
        productInfo: newPayload.business[0].inventory[0]
      };
      amount = calculateInvoice(payload);
      amount.should.be.a("number");
      amount.should.equal(156);
    });
  
    it("it should calculate the invoice amount", function() {
      let payload = {
        subscriptionInfo: {
          subscriptionId: "10001",
          subscriptionFrom:
            "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
          subscriptionTo:
            "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
          holdDate: [
            "Thu Jan 10 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 14 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 16 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 20 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 21 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 22 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 29 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 30 2020 05:30:30 GMT+0530 (India Standard Time)"
          ]
        },
        productInfo: newPayload.business[0].inventory[0]
      };
      amount = calculateInvoice(payload);
      amount.should.be.a("number");
      amount.should.equal(146);
    });
  
    it("it should calculate the invoice amount even he is not Subscribed for weekends and on vaction on weekends", function() {
      let payload = {
        subscriptionInfo: {
          subscriptionID: "10001",
          subscriptionFrom:
            "Thu Jan 1 2020 05:30:30 GMT+0530 (India Standard Time)",
          subscriptionTo:
            "Thu Jan 31 2020 05:30:30 GMT+0530 (India Standard Time)",
          holdDate: [
            "Thu Jan 3 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 5 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 12 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 18 2020 05:30:30 GMT+0530 (India Standard Time)",
            "Thu Jan 25 2020 05:30:30 GMT+0530 (India Standard Time)"
          ]
        },
        productInfo: newPayload.business[0].inventory[0]
      };
      amount = calculateInvoice(payload);
      amount.should.be.a("number");
      amount.should.equal(160);
    });
  });
  