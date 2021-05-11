import Controller from "@ember/controller";

export default Controller.extend({
  get names() {
    return ["Lil Sebastian", "Lesley Knope", "Andy Dwyer"];
  },
  get people() {
    return [
      {
        name: "Lil Sebastian",
      },
      {
        name: "Lesley Knope",
      },
      {
        name: "Andy Dwyer",
      },
    ];
  },
  get tableData() {
    return {
      name: "Jacques",
      surname: "Louw",
      age: 26,
    };
  },
  get newData() {
    return {
      surname: "Nope2",
    };
  },
  get newTableData() {
    return {
      ...this.tableData,
      ...this.newData,
    };
  },
});
