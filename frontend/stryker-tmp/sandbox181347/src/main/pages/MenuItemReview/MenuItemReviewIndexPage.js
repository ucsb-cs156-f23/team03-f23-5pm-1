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
import MenuItemReviewTable from 'main/components/MenuItemReview/MenuItemReviewTable';
import { Button } from 'react-bootstrap';
import { useCurrentUser, hasRole } from 'main/utils/currentUser';
export default function MenuItemReviewIndexPage() {
  if (stryMutAct_9fa48("1033")) {
    {}
  } else {
    stryCov_9fa48("1033");
    const currentUser = useCurrentUser();
    const createButton = () => {
      if (stryMutAct_9fa48("1034")) {
        {}
      } else {
        stryCov_9fa48("1034");
        if (stryMutAct_9fa48("1036") ? false : stryMutAct_9fa48("1035") ? true : (stryCov_9fa48("1035", "1036"), hasRole(currentUser, stryMutAct_9fa48("1037") ? "" : (stryCov_9fa48("1037"), 'ROLE_ADMIN')))) {
          if (stryMutAct_9fa48("1038")) {
            {}
          } else {
            stryCov_9fa48("1038");
            return <Button variant="primary" href="/menuitemreview/create" style={stryMutAct_9fa48("1039") ? {} : (stryCov_9fa48("1039"), {
              float: stryMutAct_9fa48("1040") ? "" : (stryCov_9fa48("1040"), 'right')
            })}>
          Create Menu Item Review
        </Button>;
          }
        }
      }
    };
    const {
      data: MenuItemReviews,
      error: _error,
      status: _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    ['/api/MenuItemReview/all'], stryMutAct_9fa48("1043") ? {} : (stryCov_9fa48("1043"), {
      method: stryMutAct_9fa48("1044") ? "" : (stryCov_9fa48("1044"), 'GET'),
      url: stryMutAct_9fa48("1045") ? "" : (stryCov_9fa48("1045"), '/api/MenuItemReview/all')
    }), stryMutAct_9fa48("1046") ? ["Stryker was here"] : (stryCov_9fa48("1046"), []));
    return <BasicLayout>
      <div className="pt-2">
        {createButton()}
        <h1>MenuItemReview</h1>
        <MenuItemReviewTable menuItemReviews={MenuItemReviews} currentUser={currentUser} />
      </div>
    </BasicLayout>;
  }
}