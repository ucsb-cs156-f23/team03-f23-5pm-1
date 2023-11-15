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
import RecommendationRequestForm from "main/components/RecommendationRequests/RecommendationRequestForm";
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function RecommendationRequestsEditPage({
  storybook = stryMutAct_9fa48("1076") ? true : (stryCov_9fa48("1076"), false)
}) {
  if (stryMutAct_9fa48("1077")) {
    {}
  } else {
    stryCov_9fa48("1077");
    let {
      id
    } = useParams();
    const {
      data: recommendationRequest,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/recommendationrequests?id=${id}`], stryMutAct_9fa48("1080") ? {} : (stryCov_9fa48("1080"), {
      // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
      method: "GET",
      url: stryMutAct_9fa48("1082") ? `` : (stryCov_9fa48("1082"), `/api/recommendationrequests`),
      params: stryMutAct_9fa48("1083") ? {} : (stryCov_9fa48("1083"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("1084") ? () => undefined : (stryCov_9fa48("1084"), (() => {
      const objectToAxiosPutParams = recommendationRequest => stryMutAct_9fa48("1085") ? {} : (stryCov_9fa48("1085"), {
        url: stryMutAct_9fa48("1086") ? "" : (stryCov_9fa48("1086"), "/api/recommendationrequests"),
        method: stryMutAct_9fa48("1087") ? "" : (stryCov_9fa48("1087"), "PUT"),
        params: stryMutAct_9fa48("1088") ? {} : (stryCov_9fa48("1088"), {
          id: recommendationRequest.id
        }),
        data: stryMutAct_9fa48("1089") ? {} : (stryCov_9fa48("1089"), {
          requesterEmail: recommendationRequest.requesterEmail,
          professorEmail: recommendationRequest.professorEmail,
          explanation: recommendationRequest.explanation,
          dateNeeded: recommendationRequest.dateNeeded,
          dateRequested: recommendationRequest.dateRequested,
          done: recommendationRequest.done
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = recommendationRequest => {
      if (stryMutAct_9fa48("1090")) {
        {}
      } else {
        stryCov_9fa48("1090");
        toast(stryMutAct_9fa48("1091") ? `` : (stryCov_9fa48("1091"), `RecommendationRequest Updated - id: ${recommendationRequest.id} by: ${recommendationRequest.requesterEmail}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("1092") ? {} : (stryCov_9fa48("1092"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/recommendationrequests?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1095")) {
        {}
      } else {
        stryCov_9fa48("1095");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1098") ? isSuccess || !storybook : stryMutAct_9fa48("1097") ? false : stryMutAct_9fa48("1096") ? true : (stryCov_9fa48("1096", "1097", "1098"), isSuccess && (stryMutAct_9fa48("1099") ? storybook : (stryCov_9fa48("1099"), !storybook)))) {
      if (stryMutAct_9fa48("1100")) {
        {}
      } else {
        stryCov_9fa48("1100");
        return <Navigate to="/recommendationrequests" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Edit RecommendationRequest</h1>
        {stryMutAct_9fa48("1103") ? recommendationRequest || <RecommendationRequestForm initialContents={recommendationRequest} submitAction={onSubmit} buttonLabel="Update" /> : stryMutAct_9fa48("1102") ? false : stryMutAct_9fa48("1101") ? true : (stryCov_9fa48("1101", "1102", "1103"), recommendationRequest && <RecommendationRequestForm initialContents={recommendationRequest} submitAction={onSubmit} buttonLabel="Update" />)}
      </div>
    </BasicLayout>;
  }
}