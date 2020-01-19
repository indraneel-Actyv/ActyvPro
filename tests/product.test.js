const should = require("chai").should();
const { newPayload } = require("./sampedata");
const { addingProductToInventory  } = require("../controllers/product");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Adding product to Inventory of Vendor", function() {
    it("should create a instance of Product. returns change in size of Inventory of Vendor.", function() {
      let payload = {
        phone: "+919876543210",
        businessName: "Newspaper",
        product: {
          productID: "101",
          productName: "Hindu",
          description: "This is Hindu Paper",
          units: "units",
          productModels: []
        }
      };
      no_of_Products_added = addingProductToInventory(payload);
      no_of_Products_added[0].should.be.a("number");
      no_of_Products_added[0].should.equal(1);
    });
  });
  