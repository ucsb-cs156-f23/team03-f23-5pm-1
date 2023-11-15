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
import UCSBDiningCommonsMenuItemTable from 'main/components/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemTable';
import { Button } from 'react-bootstrap';
import { useCurrentUser, hasRole } from 'main/utils/currentUser';
export default function UCSBDiningCommonsMenuItemIndexPage() {
  if (stryMutAct_9fa48("1285")) {
    {}
  } else {
    stryCov_9fa48("1285");
    const currentUser = useCurrentUser();
    const createButton = () => {
      if (stryMutAct_9fa48("1286")) {
        {}
      } else {
        stryCov_9fa48("1286");
        if (stryMutAct_9fa48("1288") ? false : stryMutAct_9fa48("1287") ? true : (stryCov_9fa48("1287", "1288"), hasRole(currentUser, stryMutAct_9fa48("1289") ? "" : (stryCov_9fa48("1289"), "ROLE_ADMIN")))) {
          if (stryMutAct_9fa48("1290")) {
            {}
          } else {
            stryCov_9fa48("1290");
            return <Button variant="primary" href="/ucsbdiningcommonsmenuitems/create" style={stryMutAct_9fa48("1291") ? {} : (stryCov_9fa48("1291"), {
              float: stryMutAct_9fa48("1292") ? "" : (stryCov_9fa48("1292"), "right")
            })}>
                Create UCSBDiningCommonsMenuItem 
            </Button>;
          }
        }
      }
    };
    const {
      data: UCSBDiningCommonsMenuItem,
      error: _error,
      status: _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    ["/api/ucsbdiningcommonsmenuitems/all"], stryMutAct_9fa48("1295") ? {} : (stryCov_9fa48("1295"), {
      method: stryMutAct_9fa48("1296") ? "" : (stryCov_9fa48("1296"), "GET"),
      url: stryMutAct_9fa48("1297") ? "" : (stryCov_9fa48("1297"), "/api/ucsbdiningcommonsmenuitems/all")
    }), stryMutAct_9fa48("1298") ? ["Stryker was here"] : (stryCov_9fa48("1298"), []));
    return <BasicLayout>
      <div className="pt-2">
        {createButton()}
        <h1>UCSBDiningCommonsMenuItem</h1>
        <UCSBDiningCommonsMenuItemTable UCSBDiningCommonsMenuItem={UCSBDiningCommonsMenuItem} currentUser={currentUser} />
      </div>
    </BasicLayout>;
  }
}