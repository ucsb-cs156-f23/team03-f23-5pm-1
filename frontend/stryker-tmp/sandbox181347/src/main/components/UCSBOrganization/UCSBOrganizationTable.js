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
import { cellToAxiosParamsDelete, onDeleteSuccess } from 'main/utils/UCSBOrganizationUtils';
import { useNavigate } from 'react-router-dom';
import { hasRole } from 'main/utils/currentUser';
export default function OrganizationTable({
  organizations,
  currentUser,
  testIdPrefix = stryMutAct_9fa48("809") ? "" : (stryCov_9fa48("809"), 'OrganizationTable')
}) {
  if (stryMutAct_9fa48("810")) {
    {}
  } else {
    stryCov_9fa48("810");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("811")) {
        {}
      } else {
        stryCov_9fa48("811");
        navigate(stryMutAct_9fa48("812") ? `` : (stryCov_9fa48("812"), `/organizations/edit/${cell.row.values.orgCode}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ['/api/UCSBOrganization/all']);
    // Stryker restore all

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("817") ? [] : (stryCov_9fa48("817"), [stryMutAct_9fa48("818") ? {} : (stryCov_9fa48("818"), {
      Header: stryMutAct_9fa48("819") ? "" : (stryCov_9fa48("819"), 'OrgCode'),
      accessor: stryMutAct_9fa48("820") ? "" : (stryCov_9fa48("820"), 'orgCode')
    }), stryMutAct_9fa48("821") ? {} : (stryCov_9fa48("821"), {
      Header: stryMutAct_9fa48("822") ? "" : (stryCov_9fa48("822"), 'OrgTranslationShort'),
      accessor: stryMutAct_9fa48("823") ? "" : (stryCov_9fa48("823"), 'orgTranslationShort')
    }), stryMutAct_9fa48("824") ? {} : (stryCov_9fa48("824"), {
      Header: stryMutAct_9fa48("825") ? "" : (stryCov_9fa48("825"), 'OrgTranslation'),
      accessor: stryMutAct_9fa48("826") ? "" : (stryCov_9fa48("826"), 'orgTranslation')
    }), stryMutAct_9fa48("827") ? {} : (stryCov_9fa48("827"), {
      Header: stryMutAct_9fa48("828") ? "" : (stryCov_9fa48("828"), 'Inactive'),
      accessor: stryMutAct_9fa48("829") ? "" : (stryCov_9fa48("829"), 'inactive')
    })]);
    if (stryMutAct_9fa48("831") ? false : stryMutAct_9fa48("830") ? true : (stryCov_9fa48("830", "831"), hasRole(currentUser, stryMutAct_9fa48("832") ? "" : (stryCov_9fa48("832"), 'ROLE_ADMIN')))) {
      if (stryMutAct_9fa48("833")) {
        {}
      } else {
        stryCov_9fa48("833");
        columns.push(ButtonColumn(stryMutAct_9fa48("834") ? "" : (stryCov_9fa48("834"), 'Edit'), stryMutAct_9fa48("835") ? "" : (stryCov_9fa48("835"), 'primary'), editCallback, testIdPrefix));
        columns.push(ButtonColumn(stryMutAct_9fa48("836") ? "" : (stryCov_9fa48("836"), 'Delete'), stryMutAct_9fa48("837") ? "" : (stryCov_9fa48("837"), 'danger'), deleteCallback, testIdPrefix));
      }
    }
    return <OurTable data={organizations} columns={columns} testid={testIdPrefix} />;
  }
}