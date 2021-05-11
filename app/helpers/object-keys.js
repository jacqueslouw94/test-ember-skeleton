import { helper } from "@ember/component/helper";

export default helper(function objectKeys(val /*, hash*/) {
  return Object.keys(val[0]);
});
