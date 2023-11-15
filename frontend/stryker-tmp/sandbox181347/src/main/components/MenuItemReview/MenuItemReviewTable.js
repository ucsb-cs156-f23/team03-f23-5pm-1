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
import OurTable, { ButtonColumn } from 'main/components/OurTable';
import { useBackendMutation } from 'main/utils/useBackend';
import { cellToAxiosParamsDelete, onDeleteSuccess } from 'main/utils/MenuItemReviewUtils';
import { useNavigate } from 'react-router-dom';
import { hasRole } from 'main/utils/currentUser';
export default function MenuItemReviewTable({
  menuItemReviews,
  currentUser
}) {
  if (stryMutAct_9fa48("292")) {
    {}
  } else {
    stryCov_9fa48("292");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("293")) {
        {}
      } else {
        stryCov_9fa48("293");
        navigate(stryMutAct_9fa48("294") ? `` : (stryCov_9fa48("294"), `/MenuItemReview/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ['/api/MenuItemReview/all']);
    // Stryker restore all

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };

    // Stryker restore all

    const columns = stryMutAct_9fa48("299") ? [] : (stryCov_9fa48("299"), [stryMutAct_9fa48("300") ? {} : (stryCov_9fa48("300"), {
      Header: stryMutAct_9fa48("301") ? "" : (stryCov_9fa48("301"), 'id'),
      accessor: stryMutAct_9fa48("302") ? "" : (stryCov_9fa48("302"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("303") ? {} : (stryCov_9fa48("303"), {
      Header: stryMutAct_9fa48("304") ? "" : (stryCov_9fa48("304"), 'itemId'),
      accessor: stryMutAct_9fa48("305") ? "" : (stryCov_9fa48("305"), 'itemId')
    }), stryMutAct_9fa48("306") ? {} : (stryCov_9fa48("306"), {
      Header: stryMutAct_9fa48("307") ? "" : (stryCov_9fa48("307"), 'reviewerEmail'),
      accessor: stryMutAct_9fa48("308") ? "" : (stryCov_9fa48("308"), 'reviewerEmail')
    }), stryMutAct_9fa48("309") ? {} : (stryCov_9fa48("309"), {
      Header: stryMutAct_9fa48("310") ? "" : (stryCov_9fa48("310"), 'stars'),
      accessor: stryMutAct_9fa48("311") ? "" : (stryCov_9fa48("311"), 'stars')
    }), stryMutAct_9fa48("312") ? {} : (stryCov_9fa48("312"), {
      Header: stryMutAct_9fa48("313") ? "" : (stryCov_9fa48("313"), 'dateReviewed'),
      accessor: stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), 'dateReviewed')
    }), stryMutAct_9fa48("315") ? {} : (stryCov_9fa48("315"), {
      Header: stryMutAct_9fa48("316") ? "" : (stryCov_9fa48("316"), 'comments'),
      accessor: stryMutAct_9fa48("317") ? "" : (stryCov_9fa48("317"), 'comments')
    })]);
    if (stryMutAct_9fa48("319") ? false : stryMutAct_9fa48("318") ? true : (stryCov_9fa48("318", "319"), hasRole(currentUser, stryMutAct_9fa48("320") ? "" : (stryCov_9fa48("320"), 'ROLE_ADMIN')))) {
      if (stryMutAct_9fa48("321")) {
        {}
      } else {
        stryCov_9fa48("321");
        columns.push(ButtonColumn(stryMutAct_9fa48("322") ? "" : (stryCov_9fa48("322"), 'Edit'), stryMutAct_9fa48("323") ? "" : (stryCov_9fa48("323"), 'primary'), editCallback, stryMutAct_9fa48("324") ? "" : (stryCov_9fa48("324"), 'MenuItemReviewTable')));
        columns.push(ButtonColumn(stryMutAct_9fa48("325") ? "" : (stryCov_9fa48("325"), 'Delete'), stryMutAct_9fa48("326") ? "" : (stryCov_9fa48("326"), 'danger'), deleteCallback, stryMutAct_9fa48("327") ? "" : (stryCov_9fa48("327"), 'MenuItemReviewTable')));
      }
    }
    return <OurTable data={menuItemReviews} columns={columns} testid={stryMutAct_9fa48("328") ? "" : (stryCov_9fa48("328"), 'MenuItemReviewTable')} />;
  }
}