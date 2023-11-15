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
import HelpRequestForm from "main/components/HelpRequest/HelpRequestForm";
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function HelpRequestEditPage({
  storybook = stryMutAct_9fa48("944") ? true : (stryCov_9fa48("944"), false)
}) {
  if (stryMutAct_9fa48("945")) {
    {}
  } else {
    stryCov_9fa48("945");
    let {
      id
    } = useParams();
    const {
      data: helpRequest,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/HelpRequest?id=${id}`], stryMutAct_9fa48("948") ? {} : (stryCov_9fa48("948"), {
      // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
      method: "GET",
      url: stryMutAct_9fa48("950") ? `` : (stryCov_9fa48("950"), `/api/HelpRequest`),
      params: stryMutAct_9fa48("951") ? {} : (stryCov_9fa48("951"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("952") ? () => undefined : (stryCov_9fa48("952"), (() => {
      const objectToAxiosPutParams = helpRequest => stryMutAct_9fa48("953") ? {} : (stryCov_9fa48("953"), {
        url: stryMutAct_9fa48("954") ? "" : (stryCov_9fa48("954"), "/api/HelpRequest"),
        method: stryMutAct_9fa48("955") ? "" : (stryCov_9fa48("955"), "PUT"),
        params: stryMutAct_9fa48("956") ? {} : (stryCov_9fa48("956"), {
          id: helpRequest.id
        }),
        data: stryMutAct_9fa48("957") ? {} : (stryCov_9fa48("957"), {
          requesterEmail: helpRequest.requesterEmail,
          teamId: helpRequest.teamId,
          tableOrBreakoutRoom: helpRequest.tableOrBreakoutRoom,
          requestTime: helpRequest.requestTime,
          explanation: helpRequest.explanation,
          solved: helpRequest.solved
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = helpRequest => {
      if (stryMutAct_9fa48("958")) {
        {}
      } else {
        stryCov_9fa48("958");
        toast(stryMutAct_9fa48("959") ? `` : (stryCov_9fa48("959"), `HelpRequest Updated - id: ${helpRequest.id} email: ${helpRequest.requesterEmail}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("960") ? {} : (stryCov_9fa48("960"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/HelpRequest?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("963")) {
        {}
      } else {
        stryCov_9fa48("963");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("966") ? isSuccess || !storybook : stryMutAct_9fa48("965") ? false : stryMutAct_9fa48("964") ? true : (stryCov_9fa48("964", "965", "966"), isSuccess && (stryMutAct_9fa48("967") ? storybook : (stryCov_9fa48("967"), !storybook)))) {
      if (stryMutAct_9fa48("968")) {
        {}
      } else {
        stryCov_9fa48("968");
        return <Navigate to="/helprequest" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Edit HelpRequest</h1>
        {stryMutAct_9fa48("971") ? helpRequest || <HelpRequestForm initialContents={helpRequest} submitAction={onSubmit} buttonLabel="Update" /> : stryMutAct_9fa48("970") ? false : stryMutAct_9fa48("969") ? true : (stryCov_9fa48("969", "970", "971"), helpRequest && <HelpRequestForm initialContents={helpRequest} submitAction={onSubmit} buttonLabel="Update" />)}
      </div>
    </BasicLayout>;
  }
}