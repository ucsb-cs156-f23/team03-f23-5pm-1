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
import BasicLayout from 'main/layouts/BasicLayout/BasicLayout';
import OrganizationTable from 'main/components/UCSBOrganization/UCSBOrganizationTable';
import { useCurrentUser, hasRole } from 'main/utils/currentUser';
import { Button } from 'react-bootstrap';
export default function UCSBOrganizationIndexPage() {
  if (stryMutAct_9fa48("1346")) {
    {}
  } else {
    stryCov_9fa48("1346");
    const currentUser = useCurrentUser();
    const {
      data: organizations,
      error: _error,
      status: _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    ['/api/UCSBOrganization/all'], stryMutAct_9fa48("1349") ? {} : (stryCov_9fa48("1349"), {
      method: stryMutAct_9fa48("1350") ? "" : (stryCov_9fa48("1350"), 'GET'),
      url: stryMutAct_9fa48("1351") ? "" : (stryCov_9fa48("1351"), '/api/UCSBOrganization/all')
    }),
    // Stryker disable next-line all : don't test default value of empty list
    []);
    const createButton = () => {
      if (stryMutAct_9fa48("1353")) {
        {}
      } else {
        stryCov_9fa48("1353");
        if (stryMutAct_9fa48("1355") ? false : stryMutAct_9fa48("1354") ? true : (stryCov_9fa48("1354", "1355"), hasRole(currentUser, stryMutAct_9fa48("1356") ? "" : (stryCov_9fa48("1356"), 'ROLE_ADMIN')))) {
          if (stryMutAct_9fa48("1357")) {
            {}
          } else {
            stryCov_9fa48("1357");
            return <Button variant="primary" href="/organizations/create" style={stryMutAct_9fa48("1358") ? {} : (stryCov_9fa48("1358"), {
              float: stryMutAct_9fa48("1359") ? "" : (stryCov_9fa48("1359"), 'right')
            })}>
          Create Organization
        </Button>;
          }
        }
      }
    };
    return <BasicLayout>
      <div className="pt-2">
        {createButton()}
        <h1>Organizations</h1>
        <OrganizationTable organizations={organizations} currentUser={currentUser} />
      </div>
    </BasicLayout>;
  }
}