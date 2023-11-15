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
import RestaurantForm from "main/components/Restaurants/RestaurantForm";
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function RestaurantCreatePage({
  storybook = stryMutAct_9fa48("1118") ? true : (stryCov_9fa48("1118"), false)
}) {
  if (stryMutAct_9fa48("1119")) {
    {}
  } else {
    stryCov_9fa48("1119");
    const objectToAxiosParams = stryMutAct_9fa48("1120") ? () => undefined : (stryCov_9fa48("1120"), (() => {
      const objectToAxiosParams = restaurant => stryMutAct_9fa48("1121") ? {} : (stryCov_9fa48("1121"), {
        url: stryMutAct_9fa48("1122") ? "" : (stryCov_9fa48("1122"), "/api/restaurants/post"),
        method: stryMutAct_9fa48("1123") ? "" : (stryCov_9fa48("1123"), "POST"),
        params: stryMutAct_9fa48("1124") ? {} : (stryCov_9fa48("1124"), {
          name: restaurant.name,
          description: restaurant.description
        })
      });
      return objectToAxiosParams;
    })());
    const onSuccess = restaurant => {
      if (stryMutAct_9fa48("1125")) {
        {}
      } else {
        stryCov_9fa48("1125");
        toast(stryMutAct_9fa48("1126") ? `` : (stryCov_9fa48("1126"), `New restaurant Created - id: ${restaurant.id} name: ${restaurant.name}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("1127") ? {} : (stryCov_9fa48("1127"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    ["/api/restaurants/all"] // mutation makes this key stale so that pages relying on it reload
    );

    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1130")) {
        {}
      } else {
        stryCov_9fa48("1130");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1133") ? isSuccess || !storybook : stryMutAct_9fa48("1132") ? false : stryMutAct_9fa48("1131") ? true : (stryCov_9fa48("1131", "1132", "1133"), isSuccess && (stryMutAct_9fa48("1134") ? storybook : (stryCov_9fa48("1134"), !storybook)))) {
      if (stryMutAct_9fa48("1135")) {
        {}
      } else {
        stryCov_9fa48("1135");
        return <Navigate to="/restaurants" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New Restaurant</h1>
        <RestaurantForm submitAction={onSubmit} />
      </div>
    </BasicLayout>;
  }
}