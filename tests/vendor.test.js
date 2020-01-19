const should = require("chai").should();
const { newPayload } = require("./sampedata");
const { registerVendor } = require("../controllers/vendor");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Creating a Vendor", function() {
    it("should create a instance of vendor. returns  change in size of total_no_of_vendors.", function() {
      const payload = {
        firstName: "abhi",
        lastName: "shek",
        email: "abhishek@gmail.com",
        phone: "+917207735192",
        contacts: [],
        invoices: [],
        business: []
      };
      no_of_vendors = registerVendor(payload);
      no_of_vendors.should.be.a("number");
      no_of_vendors.should.equal(1);
    });
  });