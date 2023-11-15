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
import { useQuery } from "react-query";
import axios from "axios";
export function useSystemInfo() {
  if (stryMutAct_9fa48("1459")) {
    {}
  } else {
    stryCov_9fa48("1459");
    return useQuery(stryMutAct_9fa48("1460") ? "" : (stryCov_9fa48("1460"), "systemInfo"), async () => {
      if (stryMutAct_9fa48("1461")) {
        {}
      } else {
        stryCov_9fa48("1461");
        try {
          if (stryMutAct_9fa48("1462")) {
            {}
          } else {
            stryCov_9fa48("1462");
            const response = await axios.get(stryMutAct_9fa48("1463") ? "" : (stryCov_9fa48("1463"), "/api/systemInfo"));
            return response.data;
          }
        } catch (e) {
          if (stryMutAct_9fa48("1464")) {
            {}
          } else {
            stryCov_9fa48("1464");
            console.error(stryMutAct_9fa48("1465") ? "" : (stryCov_9fa48("1465"), "Error invoking axios.get: "), e);
            return stryMutAct_9fa48("1466") ? {} : (stryCov_9fa48("1466"), {
              springH2ConsoleEnabled: stryMutAct_9fa48("1467") ? true : (stryCov_9fa48("1467"), false),
              showSwaggerUILink: stryMutAct_9fa48("1468") ? true : (stryCov_9fa48("1468"), false)
            });
          }
        }
      }
    }, stryMutAct_9fa48("1469") ? {} : (stryCov_9fa48("1469"), {
      initialData: stryMutAct_9fa48("1470") ? {} : (stryCov_9fa48("1470"), {
        initialData: stryMutAct_9fa48("1471") ? false : (stryCov_9fa48("1471"), true),
        springH2ConsoleEnabled: stryMutAct_9fa48("1472") ? true : (stryCov_9fa48("1472"), false),
        showSwaggerUILink: stryMutAct_9fa48("1473") ? true : (stryCov_9fa48("1473"), false)
      })
    }));
  }
}