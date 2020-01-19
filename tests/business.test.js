const should = require("chai").should();
const { addBusiness } = require("../controllers/business");
const { newPayload } = require("./sampedata");
const { registerVendor } = require("../controllers/vendor");

before(done => {
    const payload = {
      firstName: "Abhishek",
      lastName: "ch",
      email: "abhishekch65@gmail.com",
      phone: "+919876543210",
      contacts: [],
      invoices: [],
      business: []
    };
    registerVendor(payload);
    registerVendor(newPayload);
    done();
  });

 /**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Creating a Business", function() {
    it("should create a instance of Business. returns change in size of no of businesses.", function() {
      const payload = {
        phone: "+919876543210",
        business: {
          businessName: "Newspaper",
          businessID: "News32",
          inventory: []
        }
      };
      no_of_businesses_added = addBusiness(payload);
      no_of_businesses_added[0].should.be.a("number");
      no_of_businesses_added[0].should.equal(1);
    });
  });
  