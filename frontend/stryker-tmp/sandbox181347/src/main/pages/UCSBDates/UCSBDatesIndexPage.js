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
import UCSBDatesTable from 'main/components/UCSBDates/UCSBDatesTable';
import { Button } from 'react-bootstrap';
import { useCurrentUser, hasRole } from 'main/utils/currentUser';
export default function UCSBDatesIndexPage() {
  if (stryMutAct_9fa48("1225")) {
    {}
  } else {
    stryCov_9fa48("1225");
    const currentUser = useCurrentUser();
    const createButton = () => {
      if (stryMutAct_9fa48("1226")) {
        {}
      } else {
        stryCov_9fa48("1226");
        if (stryMutAct_9fa48("1228") ? false : stryMutAct_9fa48("1227") ? true : (stryCov_9fa48("1227", "1228"), hasRole(currentUser, stryMutAct_9fa48("1229") ? "" : (stryCov_9fa48("1229"), "ROLE_ADMIN")))) {
          if (stryMutAct_9fa48("1230")) {
            {}
          } else {
            stryCov_9fa48("1230");
            return <Button variant="primary" href="/ucsbdates/create" style={stryMutAct_9fa48("1231") ? {} : (stryCov_9fa48("1231"), {
              float: stryMutAct_9fa48("1232") ? "" : (stryCov_9fa48("1232"), "right")
            })}>
                Create UCSBDate 
            </Button>;
          }
        }
      }
    };
    const {
      data: dates,
      error: _error,
      status: _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    ["/api/ucsbdates/all"], stryMutAct_9fa48("1235") ? {} : (stryCov_9fa48("1235"), {
      method: stryMutAct_9fa48("1236") ? "" : (stryCov_9fa48("1236"), "GET"),
      url: stryMutAct_9fa48("1237") ? "" : (stryCov_9fa48("1237"), "/api/ucsbdates/all")
    }), stryMutAct_9fa48("1238") ? ["Stryker was here"] : (stryCov_9fa48("1238"), []));
    return <BasicLayout>
      <div className="pt-2">
        {createButton()}
        <h1>UCSBDates</h1>
        <UCSBDatesTable dates={dates} currentUser={currentUser} />
      </div>
    </BasicLayout>;
  }
}