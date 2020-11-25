import InventoryRequestModelGenerated from "./generated/InventoryRequestModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await InventoryRequestModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...InventoryRequestModelGenerated,
  ...customModel
};
