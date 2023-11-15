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
import UCSBDateForm from "main/components/UCSBDates/UCSBDateForm";
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function UCSBDatesEditPage({
  storybook = stryMutAct_9fa48("1197") ? true : (stryCov_9fa48("1197"), false)
}) {
  if (stryMutAct_9fa48("1198")) {
    {}
  } else {
    stryCov_9fa48("1198");
    let {
      id
    } = useParams();
    const {
      data: ucsbDate,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/ucsbdates?id=${id}`], stryMutAct_9fa48("1201") ? {} : (stryCov_9fa48("1201"), {
      // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
      method: "GET",
      url: stryMutAct_9fa48("1203") ? `` : (stryCov_9fa48("1203"), `/api/ucsbdates`),
      params: stryMutAct_9fa48("1204") ? {} : (stryCov_9fa48("1204"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("1205") ? () => undefined : (stryCov_9fa48("1205"), (() => {
      const objectToAxiosPutParams = ucsbDate => stryMutAct_9fa48("1206") ? {} : (stryCov_9fa48("1206"), {
        url: stryMutAct_9fa48("1207") ? "" : (stryCov_9fa48("1207"), "/api/ucsbdates"),
        method: stryMutAct_9fa48("1208") ? "" : (stryCov_9fa48("1208"), "PUT"),
        params: stryMutAct_9fa48("1209") ? {} : (stryCov_9fa48("1209"), {
          id: ucsbDate.id
        }),
        data: stryMutAct_9fa48("1210") ? {} : (stryCov_9fa48("1210"), {
          quarterYYYYQ: ucsbDate.quarterYYYYQ,
          name: ucsbDate.name,
          localDateTime: ucsbDate.localDateTime
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = ucsbDate => {
      if (stryMutAct_9fa48("1211")) {
        {}
      } else {
        stryCov_9fa48("1211");
        toast(stryMutAct_9fa48("1212") ? `` : (stryCov_9fa48("1212"), `UCSBDate Updated - id: ${ucsbDate.id} name: ${ucsbDate.name}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("1213") ? {} : (stryCov_9fa48("1213"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/ucsbdates?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1216")) {
        {}
      } else {
        stryCov_9fa48("1216");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1219") ? isSuccess || !storybook : stryMutAct_9fa48("1218") ? false : stryMutAct_9fa48("1217") ? true : (stryCov_9fa48("1217", "1218", "1219"), isSuccess && (stryMutAct_9fa48("1220") ? storybook : (stryCov_9fa48("1220"), !storybook)))) {
      if (stryMutAct_9fa48("1221")) {
        {}
      } else {
        stryCov_9fa48("1221");
        return <Navigate to="/ucsbdates" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Edit UCSBDate</h1>
        {stryMutAct_9fa48("1224") ? ucsbDate || <UCSBDateForm initialContents={ucsbDate} submitAction={onSubmit} buttonLabel="Update" /> : stryMutAct_9fa48("1223") ? false : stryMutAct_9fa48("1222") ? true : (stryCov_9fa48("1222", "1223", "1224"), ucsbDate && <UCSBDateForm initialContents={ucsbDate} submitAction={onSubmit} buttonLabel="Update" />)}
      </div>
    </BasicLayout>;
  }
}