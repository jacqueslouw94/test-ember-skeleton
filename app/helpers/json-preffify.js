import { helper } from "@ember/component/helper";

export default helper(function jsonPreffify(val /*, hash*/) {
  return JSON.stringify(val, null, 2);
});
