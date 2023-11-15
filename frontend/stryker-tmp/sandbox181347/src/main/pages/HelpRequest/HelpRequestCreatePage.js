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
import HelpRequestForm from "main/components/HelpRequest/HelpRequestForm";
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function HelpRequestCreatePage({
  storybook = stryMutAct_9fa48("926") ? true : (stryCov_9fa48("926"), false)
}) {
  if (stryMutAct_9fa48("927")) {
    {}
  } else {
    stryCov_9fa48("927");
    // Stryker disable all : placeholder for future implementation
    /*return (
      <BasicLayout>
        <div className="pt-2">
          <h1>Create page not yet implemented</h1>
        </div>
      </BasicLayout>
    )*/

    const objectToAxiosParams = helpRequest => ({
      url: "/api/HelpRequest/post",
      method: "POST",
      params: {
        requesterEmail: helpRequest.requesterEmail,
        teamId: helpRequest.teamId,
        tableOrBreakoutRoom: helpRequest.tableOrBreakoutRoom,
        explanation: helpRequest.explanation,
        solved: helpRequest.solved,
        requestTime: helpRequest.requestTime
      }
    });
    const onSuccess = helpRequest => {
      toast(`New helpRequest Created - id: ${helpRequest.id} email: ${helpRequest.requesterEmail}`);
    };
    const mutation = useBackendMutation(objectToAxiosParams, {
      onSuccess
    },
    // Stryker disable next-line all : hard to set up test for caching
    ["/api/HelpRequest/all"]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      mutation.mutate(data);
    };
    if (isSuccess && !storybook) {
      return <Navigate to="/helprequest" />;
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New HelpRequest</h1>

        <HelpRequestForm submitAction={onSubmit} />

      </div>
    </BasicLayout>;
  }
}