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
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import UCSBDiningCommonsMenuItemForm from "main/components/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemForm";
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function UCSBDiningCommonsMenuItemEditPage({
  storybook = stryMutAct_9fa48("1257") ? true : (stryCov_9fa48("1257"), false)
}) {
  if (stryMutAct_9fa48("1258")) {
    {}
  } else {
    stryCov_9fa48("1258");
    let {
      id
    } = useParams();
    const {
      data: UCSBDiningCommonsMenuItem,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/ucsbdiningcommonsmenuitems?id=${id}`], stryMutAct_9fa48("1261") ? {} : (stryCov_9fa48("1261"), {
      // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
      method: "GET",
      url: stryMutAct_9fa48("1263") ? `` : (stryCov_9fa48("1263"), `/api/ucsbdiningcommonsmenuitems`),
      params: stryMutAct_9fa48("1264") ? {} : (stryCov_9fa48("1264"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("1265") ? () => undefined : (stryCov_9fa48("1265"), (() => {
      const objectToAxiosPutParams = UCSBDiningCommonsMenuItem => stryMutAct_9fa48("1266") ? {} : (stryCov_9fa48("1266"), {
        url: stryMutAct_9fa48("1267") ? "" : (stryCov_9fa48("1267"), "/api/ucsbdiningcommonsmenuitems"),
        method: stryMutAct_9fa48("1268") ? "" : (stryCov_9fa48("1268"), "PUT"),
        params: stryMutAct_9fa48("1269") ? {} : (stryCov_9fa48("1269"), {
          id: UCSBDiningCommonsMenuItem.id
        }),
        data: stryMutAct_9fa48("1270") ? {} : (stryCov_9fa48("1270"), {
          name: UCSBDiningCommonsMenuItem.name,
          diningCommonsCode: UCSBDiningCommonsMenuItem.diningCommonsCode,
          station: UCSBDiningCommonsMenuItem.station
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = UCSBDiningCommonsMenuItem => {
      if (stryMutAct_9fa48("1271")) {
        {}
      } else {
        stryCov_9fa48("1271");
        toast(stryMutAct_9fa48("1272") ? `` : (stryCov_9fa48("1272"), `UCSBDiningCommonsMenuItem Updated - id: ${UCSBDiningCommonsMenuItem.id} name: ${UCSBDiningCommonsMenuItem.name} diningCommonsCode: ${UCSBDiningCommonsMenuItem.diningCommonsCode} station: ${UCSBDiningCommonsMenuItem.station}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("1273") ? {} : (stryCov_9fa48("1273"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/ucsbdiningcommonsmenuitems?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1276")) {
        {}
      } else {
        stryCov_9fa48("1276");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1279") ? isSuccess || !storybook : stryMutAct_9fa48("1278") ? false : stryMutAct_9fa48("1277") ? true : (stryCov_9fa48("1277", "1278", "1279"), isSuccess && (stryMutAct_9fa48("1280") ? storybook : (stryCov_9fa48("1280"), !storybook)))) {
      if (stryMutAct_9fa48("1281")) {
        {}
      } else {
        stryCov_9fa48("1281");
        return <Navigate to="/ucsbdiningcommonsmenuitems" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Edit UCSBDiningCommonsMenuItem</h1>
        {stryMutAct_9fa48("1284") ? UCSBDiningCommonsMenuItem || <UCSBDiningCommonsMenuItemForm initialContents={UCSBDiningCommonsMenuItem} submitAction={onSubmit} buttonLabel="Update" /> : stryMutAct_9fa48("1283") ? false : stryMutAct_9fa48("1282") ? true : (stryCov_9fa48("1282", "1283", "1284"), UCSBDiningCommonsMenuItem && <UCSBDiningCommonsMenuItemForm initialContents={UCSBDiningCommonsMenuItem} submitAction={onSubmit} buttonLabel="Update" />)}
      </div>
    </BasicLayout>;
  }
}