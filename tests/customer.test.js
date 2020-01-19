const should = require("chai").should();
const { addCustomer } = require("../controllers/customer");
const { newPayload } = require("./sampedata");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Contact ", function() {
    it("should create a instance of Product. returns change in size of Inventory of Vendor", function() {
      let payload = {
        customer: {
          customerID: "1023",
          customerName: "Acabhishek",
          customerAddress: "Hyderabad",
          subscriptions: []
        },
        phone: "+919876543210"
      };
      no_of_Customers_added = addCustomer(payload);
      no_of_Customers_added[0].should.be.a("number");
      no_of_Customers_added[0].should.equal(1);
    });
  });
  