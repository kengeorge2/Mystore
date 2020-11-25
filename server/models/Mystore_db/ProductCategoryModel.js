import ProductCategoryModelGenerated from "./generated/ProductCategoryModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProductCategoryModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProductCategoryModelGenerated,
  ...customModel
};
