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
import RecommendationRequestForm from "main/components/RecommendationRequests/RecommendationRequestForm";
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function RecommendationRequestsCreatePage({
  storybook = stryMutAct_9fa48("1058") ? true : (stryCov_9fa48("1058"), false)
}) {
  if (stryMutAct_9fa48("1059")) {
    {}
  } else {
    stryCov_9fa48("1059");
    const objectToAxiosParams = stryMutAct_9fa48("1060") ? () => undefined : (stryCov_9fa48("1060"), (() => {
      const objectToAxiosParams = recommendationRequest => stryMutAct_9fa48("1061") ? {} : (stryCov_9fa48("1061"), {
        url: stryMutAct_9fa48("1062") ? "" : (stryCov_9fa48("1062"), "/api/recommendationrequests/post"),
        method: stryMutAct_9fa48("1063") ? "" : (stryCov_9fa48("1063"), "POST"),
        params: stryMutAct_9fa48("1064") ? {} : (stryCov_9fa48("1064"), {
          requesterEmail: recommendationRequest.requesterEmail,
          professorEmail: recommendationRequest.professorEmail,
          explanation: recommendationRequest.explanation,
          dateNeeded: recommendationRequest.dateNeeded,
          dateRequested: recommendationRequest.dateRequested,
          done: recommendationRequest.done
        })
      });
      return objectToAxiosParams;
    })());
    const onSuccess = recommendationRequest => {
      if (stryMutAct_9fa48("1065")) {
        {}
      } else {
        stryCov_9fa48("1065");
        toast(stryMutAct_9fa48("1066") ? `` : (stryCov_9fa48("1066"), `New recommendationRequest Created - id: ${recommendationRequest.id} by: ${recommendationRequest.requesterEmail}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("1067") ? {} : (stryCov_9fa48("1067"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    ["/api/recommendationrequests/all"]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1070")) {
        {}
      } else {
        stryCov_9fa48("1070");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1073") ? isSuccess || !storybook : stryMutAct_9fa48("1072") ? false : stryMutAct_9fa48("1071") ? true : (stryCov_9fa48("1071", "1072", "1073"), isSuccess && (stryMutAct_9fa48("1074") ? storybook : (stryCov_9fa48("1074"), !storybook)))) {
      if (stryMutAct_9fa48("1075")) {
        {}
      } else {
        stryCov_9fa48("1075");
        return <Navigate to="/recommendationrequests" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New RecommendationRequest</h1>

        <RecommendationRequestForm submitAction={onSubmit} />

      </div>
    </BasicLayout>;
  }
}