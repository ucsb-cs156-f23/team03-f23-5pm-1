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
import UCSBDiningCommonsMenuItemForm from "main/components/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemForm";
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function UCSBDiningCommonsMenuItemCreatePage({
  storybook = stryMutAct_9fa48("1239") ? true : (stryCov_9fa48("1239"), false)
}) {
  if (stryMutAct_9fa48("1240")) {
    {}
  } else {
    stryCov_9fa48("1240");
    const objectToAxiosParams = stryMutAct_9fa48("1241") ? () => undefined : (stryCov_9fa48("1241"), (() => {
      const objectToAxiosParams = ucsbDiningCommonsMenuItem => stryMutAct_9fa48("1242") ? {} : (stryCov_9fa48("1242"), {
        url: stryMutAct_9fa48("1243") ? "" : (stryCov_9fa48("1243"), "/api/ucsbdiningcommonsmenuitems/post"),
        method: stryMutAct_9fa48("1244") ? "" : (stryCov_9fa48("1244"), "POST"),
        params: stryMutAct_9fa48("1245") ? {} : (stryCov_9fa48("1245"), {
          name: ucsbDiningCommonsMenuItem.name,
          diningCommonsCode: ucsbDiningCommonsMenuItem.diningCommonsCode,
          station: ucsbDiningCommonsMenuItem.station
        })
      });
      return objectToAxiosParams;
    })());
    const onSuccess = ucsbDiningCommonsMenuItem => {
      if (stryMutAct_9fa48("1246")) {
        {}
      } else {
        stryCov_9fa48("1246");
        toast(stryMutAct_9fa48("1247") ? `` : (stryCov_9fa48("1247"), `New UCSBDiningCommonsMenuItem Created - id: ${ucsbDiningCommonsMenuItem.id} name: ${ucsbDiningCommonsMenuItem.name} diningCommonsCode: ${ucsbDiningCommonsMenuItem.diningCommonsCode} station: ${ucsbDiningCommonsMenuItem.station}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("1248") ? {} : (stryCov_9fa48("1248"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    ["/api/ucsbdiningcommonsmenuitems/all"]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1251")) {
        {}
      } else {
        stryCov_9fa48("1251");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1254") ? isSuccess || !storybook : stryMutAct_9fa48("1253") ? false : stryMutAct_9fa48("1252") ? true : (stryCov_9fa48("1252", "1253", "1254"), isSuccess && (stryMutAct_9fa48("1255") ? storybook : (stryCov_9fa48("1255"), !storybook)))) {
      if (stryMutAct_9fa48("1256")) {
        {}
      } else {
        stryCov_9fa48("1256");
        return <Navigate to="/ucsbdiningcommonsmenuitems" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New ucsbDiningCommonsMenuItem</h1>

        <UCSBDiningCommonsMenuItemForm submitAction={onSubmit} />

      </div>
    </BasicLayout>;
  }
}