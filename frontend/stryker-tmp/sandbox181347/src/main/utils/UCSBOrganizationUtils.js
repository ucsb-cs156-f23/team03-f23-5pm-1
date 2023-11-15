// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { toast } from 'react-toastify';
export function onDeleteSuccess(message) {
  if (stryMutAct_9fa48("1390")) {
    {}
  } else {
    stryCov_9fa48("1390");
    console.log(message);
    toast(message);
  }
}
export function cellToAxiosParamsDelete(cell) {
  if (stryMutAct_9fa48("1391")) {
    {}
  } else {
    stryCov_9fa48("1391");
    return stryMutAct_9fa48("1392") ? {} : (stryCov_9fa48("1392"), {
      url: stryMutAct_9fa48("1393") ? "" : (stryCov_9fa48("1393"), '/api/UCSBOrganization'),
      method: stryMutAct_9fa48("1394") ? "" : (stryCov_9fa48("1394"), 'DELETE'),
      params: stryMutAct_9fa48("1395") ? {} : (stryCov_9fa48("1395"), {
        orgCode: cell.row.values.orgCode
      })
    });
  }
}