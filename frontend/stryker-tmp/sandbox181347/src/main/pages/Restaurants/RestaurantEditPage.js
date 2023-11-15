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
import RestaurantForm from 'main/components/Restaurants/RestaurantForm';
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function RestaurantEditPage({
  storybook = stryMutAct_9fa48("1136") ? true : (stryCov_9fa48("1136"), false)
}) {
  if (stryMutAct_9fa48("1137")) {
    {}
  } else {
    stryCov_9fa48("1137");
    let {
      id
    } = useParams();
    const {
      data: restaurant,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/restaurants?id=${id}`], stryMutAct_9fa48("1140") ? {} : (stryCov_9fa48("1140"), {
      // Stryker disable next-line all : GET is the default, so mutating this to "" doesn't introduce a bug
      method: "GET",
      url: stryMutAct_9fa48("1142") ? `` : (stryCov_9fa48("1142"), `/api/restaurants`),
      params: stryMutAct_9fa48("1143") ? {} : (stryCov_9fa48("1143"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("1144") ? () => undefined : (stryCov_9fa48("1144"), (() => {
      const objectToAxiosPutParams = restaurant => stryMutAct_9fa48("1145") ? {} : (stryCov_9fa48("1145"), {
        url: stryMutAct_9fa48("1146") ? "" : (stryCov_9fa48("1146"), "/api/restaurants"),
        method: stryMutAct_9fa48("1147") ? "" : (stryCov_9fa48("1147"), "PUT"),
        params: stryMutAct_9fa48("1148") ? {} : (stryCov_9fa48("1148"), {
          id: restaurant.id
        }),
        data: stryMutAct_9fa48("1149") ? {} : (stryCov_9fa48("1149"), {
          name: restaurant.name,
          description: restaurant.description
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = restaurant => {
      if (stryMutAct_9fa48("1150")) {
        {}
      } else {
        stryCov_9fa48("1150");
        toast(stryMutAct_9fa48("1151") ? `` : (stryCov_9fa48("1151"), `Restaurant Updated - id: ${restaurant.id} name: ${restaurant.name}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("1152") ? {} : (stryCov_9fa48("1152"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/restaurants?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1155")) {
        {}
      } else {
        stryCov_9fa48("1155");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1158") ? isSuccess || !storybook : stryMutAct_9fa48("1157") ? false : stryMutAct_9fa48("1156") ? true : (stryCov_9fa48("1156", "1157", "1158"), isSuccess && (stryMutAct_9fa48("1159") ? storybook : (stryCov_9fa48("1159"), !storybook)))) {
      if (stryMutAct_9fa48("1160")) {
        {}
      } else {
        stryCov_9fa48("1160");
        return <Navigate to="/restaurants" />;
      }
    }
    return <BasicLayout>
            <div className="pt-2">
                <h1>Edit Restaurant</h1>
                {stryMutAct_9fa48("1163") ? restaurant || <RestaurantForm submitAction={onSubmit} buttonLabel={"Update"} initialContents={restaurant} /> : stryMutAct_9fa48("1162") ? false : stryMutAct_9fa48("1161") ? true : (stryCov_9fa48("1161", "1162", "1163"), restaurant && <RestaurantForm submitAction={onSubmit} buttonLabel={stryMutAct_9fa48("1164") ? "" : (stryCov_9fa48("1164"), "Update")} initialContents={restaurant} />)}
            </div>
        </BasicLayout>;
  }
}