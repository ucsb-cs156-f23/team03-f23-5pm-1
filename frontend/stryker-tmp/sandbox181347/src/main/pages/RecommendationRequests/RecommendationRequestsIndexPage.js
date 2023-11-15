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
import React from 'react';
import { useBackend } from 'main/utils/useBackend';
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import RecommendationRequestsTable from 'main/components/RecommendationRequests/RecommendationRequestsTable';
import { Button } from 'react-bootstrap';
import { useCurrentUser, hasRole } from 'main/utils/currentUser';
export default function RecommendationRequestsIndexPage() {
  if (stryMutAct_9fa48("1104")) {
    {}
  } else {
    stryCov_9fa48("1104");
    const currentUser = useCurrentUser();
    const createButton = () => {
      if (stryMutAct_9fa48("1105")) {
        {}
      } else {
        stryCov_9fa48("1105");
        if (stryMutAct_9fa48("1107") ? false : stryMutAct_9fa48("1106") ? true : (stryCov_9fa48("1106", "1107"), hasRole(currentUser, stryMutAct_9fa48("1108") ? "" : (stryCov_9fa48("1108"), "ROLE_ADMIN")))) {
          if (stryMutAct_9fa48("1109")) {
            {}
          } else {
            stryCov_9fa48("1109");
            return <Button variant="primary" href="/recommendationrequests/create" style={stryMutAct_9fa48("1110") ? {} : (stryCov_9fa48("1110"), {
              float: stryMutAct_9fa48("1111") ? "" : (stryCov_9fa48("1111"), "right")
            })}>
                Create RecommendationRequest 
            </Button>;
          }
        }
      }
    };
    const {
      data: requests,
      error: _error,
      status: _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    ["/api/recommendationrequests/all"], stryMutAct_9fa48("1114") ? {} : (stryCov_9fa48("1114"), {
      method: stryMutAct_9fa48("1115") ? "" : (stryCov_9fa48("1115"), "GET"),
      url: stryMutAct_9fa48("1116") ? "" : (stryCov_9fa48("1116"), "/api/recommendationrequests/all")
    }), stryMutAct_9fa48("1117") ? ["Stryker was here"] : (stryCov_9fa48("1117"), []));
    return <BasicLayout>
      <div className="pt-2">
        {createButton()}
        <h1>RecommendationRequests</h1>
        <RecommendationRequestsTable requests={requests} currentUser={currentUser} />
      </div>
    </BasicLayout>;
  }
}