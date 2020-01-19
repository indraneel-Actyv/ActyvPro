const should = require("chai").should();
const { newPayload } = require("./sampedata");
const { addingProductModelToProduct } = require("../controllers/product");

/**
 * @function
 * @inner
 * @param {string} description - string explaining what test should do
 * @param {callback} middleware - function with done as a param
 */
describe("Adding productModel to Product of Vendor's Inventory", function() {
    it("should create a instance of ProductModel. returns change in size of ProductModels in PRODUCT of Vendor's Inventory.", function() {
      let payload = {
        phone: "+918897626060",
        businessName: "Newspaper",
        productName: "Hindu",
        productModel: {
          productModelName: "Sunday",
          productModelPrice: "8",
          productModelGST: "",
          productModelGSTAmount: "",
          productModelSubTotal: "",
          productModelDiscount: ""
        }
      };
      no_of_Products_added = addingProductModelToProduct(payload).filter(Boolean);
      no_of_Products_added[0].should.be.a("number");
      no_of_Products_added[0].should.equal(1);
    });
  });