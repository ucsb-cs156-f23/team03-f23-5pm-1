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
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function useCurrentUser() {
  if (stryMutAct_9fa48("1404")) {
    {}
  } else {
    stryCov_9fa48("1404");
    let rolesList = stryMutAct_9fa48("1405") ? [] : (stryCov_9fa48("1405"), [stryMutAct_9fa48("1406") ? "" : (stryCov_9fa48("1406"), "ERROR_GETTING_ROLES")]);
    return useQuery(stryMutAct_9fa48("1407") ? "" : (stryCov_9fa48("1407"), "current user"), async () => {
      if (stryMutAct_9fa48("1408")) {
        {}
      } else {
        stryCov_9fa48("1408");
        try {
          if (stryMutAct_9fa48("1409")) {
            {}
          } else {
            stryCov_9fa48("1409");
            const response = await axios.get(stryMutAct_9fa48("1410") ? "" : (stryCov_9fa48("1410"), "/api/currentUser"));
            try {
              if (stryMutAct_9fa48("1411")) {
                {}
              } else {
                stryCov_9fa48("1411");
                rolesList = response.data.roles.map(stryMutAct_9fa48("1412") ? () => undefined : (stryCov_9fa48("1412"), r => r.authority));
              }
            } catch (e) {
              if (stryMutAct_9fa48("1413")) {
                {}
              } else {
                stryCov_9fa48("1413");
                console.error(stryMutAct_9fa48("1414") ? "" : (stryCov_9fa48("1414"), "Error getting roles: "), e);
              }
            }
            response.data = stryMutAct_9fa48("1415") ? {} : (stryCov_9fa48("1415"), {
              ...response.data,
              rolesList: rolesList
            });
            return stryMutAct_9fa48("1416") ? {} : (stryCov_9fa48("1416"), {
              loggedIn: stryMutAct_9fa48("1417") ? false : (stryCov_9fa48("1417"), true),
              root: response.data
            });
          }
        } catch (e) {
          if (stryMutAct_9fa48("1418")) {
            {}
          } else {
            stryCov_9fa48("1418");
            console.error(stryMutAct_9fa48("1419") ? "" : (stryCov_9fa48("1419"), "Error invoking axios.get: "), e);
            return stryMutAct_9fa48("1420") ? {} : (stryCov_9fa48("1420"), {
              loggedIn: stryMutAct_9fa48("1421") ? true : (stryCov_9fa48("1421"), false),
              root: null
            });
          }
        }
      }
    }, stryMutAct_9fa48("1422") ? {} : (stryCov_9fa48("1422"), {
      initialData: stryMutAct_9fa48("1423") ? {} : (stryCov_9fa48("1423"), {
        loggedIn: stryMutAct_9fa48("1424") ? true : (stryCov_9fa48("1424"), false),
        root: null,
        initialData: stryMutAct_9fa48("1425") ? false : (stryCov_9fa48("1425"), true)
      })
    }));
  }
}
export function useLogout() {
  if (stryMutAct_9fa48("1426")) {
    {}
  } else {
    stryCov_9fa48("1426");
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const mutation = useMutation(async () => {
      if (stryMutAct_9fa48("1427")) {
        {}
      } else {
        stryCov_9fa48("1427");
        await axios.post(stryMutAct_9fa48("1428") ? "" : (stryCov_9fa48("1428"), "/logout"));
        await queryClient.resetQueries(stryMutAct_9fa48("1429") ? "" : (stryCov_9fa48("1429"), "current user"), stryMutAct_9fa48("1430") ? {} : (stryCov_9fa48("1430"), {
          exact: stryMutAct_9fa48("1431") ? false : (stryCov_9fa48("1431"), true)
        }));
        navigate(stryMutAct_9fa48("1432") ? "" : (stryCov_9fa48("1432"), "/"));
      }
    });
    return mutation;
  }
}
export function hasRole(currentUser, role) {
  if (stryMutAct_9fa48("1433")) {
    {}
  } else {
    stryCov_9fa48("1433");
    // The following hack is because there is some bug in terms of the
    // shape of the data returned by useCurrentUser.  Is there a separate 
    // data level, or not? 

    // We will file an issue to track that down and then remove this hack

    if (stryMutAct_9fa48("1436") ? currentUser != null : stryMutAct_9fa48("1435") ? false : stryMutAct_9fa48("1434") ? true : (stryCov_9fa48("1434", "1435", "1436"), currentUser == null)) return stryMutAct_9fa48("1437") ? true : (stryCov_9fa48("1437"), false);
    if (stryMutAct_9fa48("1440") ? "data" in currentUser && "root" in currentUser.data && currentUser.data.root != null || "rolesList" in currentUser.data.root : stryMutAct_9fa48("1439") ? false : stryMutAct_9fa48("1438") ? true : (stryCov_9fa48("1438", "1439", "1440"), (stryMutAct_9fa48("1442") ? "data" in currentUser && "root" in currentUser.data || currentUser.data.root != null : stryMutAct_9fa48("1441") ? true : (stryCov_9fa48("1441", "1442"), (stryMutAct_9fa48("1444") ? "data" in currentUser || "root" in currentUser.data : stryMutAct_9fa48("1443") ? true : (stryCov_9fa48("1443", "1444"), (stryMutAct_9fa48("1445") ? "" : (stryCov_9fa48("1445"), "data")) in currentUser && (stryMutAct_9fa48("1446") ? "" : (stryCov_9fa48("1446"), "root")) in currentUser.data)) && (stryMutAct_9fa48("1448") ? currentUser.data.root == null : stryMutAct_9fa48("1447") ? true : (stryCov_9fa48("1447", "1448"), currentUser.data.root != null)))) && (stryMutAct_9fa48("1449") ? "" : (stryCov_9fa48("1449"), "rolesList")) in currentUser.data.root)) {
      if (stryMutAct_9fa48("1450")) {
        {}
      } else {
        stryCov_9fa48("1450");
        return currentUser.data.root.rolesList.includes(role);
      }
    }
    return stryMutAct_9fa48("1452") ? currentUser.root.rolesList?.includes(role) : stryMutAct_9fa48("1451") ? currentUser.root?.rolesList.includes(role) : (stryCov_9fa48("1451", "1452"), currentUser.root?.rolesList?.includes(role));
  }
}