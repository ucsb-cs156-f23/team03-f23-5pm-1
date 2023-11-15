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
import React from "react";
import OurTable, { ButtonColumn } from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDiningCommonsMenuItemUtils";
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
export default function UCSBDiningCommonsMenuItemTable({
  UCSBDiningCommonsMenuItem,
  currentUser,
  testIdPrefix = stryMutAct_9fa48("742") ? "" : (stryCov_9fa48("742"), "UCSBDiningCommonsMenuItemTable")
}) {
  if (stryMutAct_9fa48("743")) {
    {}
  } else {
    stryCov_9fa48("743");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("744")) {
        {}
      } else {
        stryCov_9fa48("744");
        navigate(stryMutAct_9fa48("745") ? `` : (stryCov_9fa48("745"), `/ucsbdiningcommonsmenuitems/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/ucsbdiningcommonsmenuitems/all"]);
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("750") ? [] : (stryCov_9fa48("750"), [stryMutAct_9fa48("751") ? {} : (stryCov_9fa48("751"), {
      Header: stryMutAct_9fa48("752") ? "" : (stryCov_9fa48("752"), 'id'),
      accessor: stryMutAct_9fa48("753") ? "" : (stryCov_9fa48("753"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("754") ? {} : (stryCov_9fa48("754"), {
      Header: stryMutAct_9fa48("755") ? "" : (stryCov_9fa48("755"), 'Dining commons code'),
      accessor: stryMutAct_9fa48("756") ? "" : (stryCov_9fa48("756"), 'diningCommonsCode')
    }), stryMutAct_9fa48("757") ? {} : (stryCov_9fa48("757"), {
      Header: stryMutAct_9fa48("758") ? "" : (stryCov_9fa48("758"), 'Name'),
      accessor: stryMutAct_9fa48("759") ? "" : (stryCov_9fa48("759"), 'name')
    }), stryMutAct_9fa48("760") ? {} : (stryCov_9fa48("760"), {
      Header: stryMutAct_9fa48("761") ? "" : (stryCov_9fa48("761"), 'Station'),
      accessor: stryMutAct_9fa48("762") ? "" : (stryCov_9fa48("762"), 'station')
    })]);
    if (stryMutAct_9fa48("764") ? false : stryMutAct_9fa48("763") ? true : (stryCov_9fa48("763", "764"), hasRole(currentUser, stryMutAct_9fa48("765") ? "" : (stryCov_9fa48("765"), "ROLE_ADMIN")))) {
      if (stryMutAct_9fa48("766")) {
        {}
      } else {
        stryCov_9fa48("766");
        columns.push(ButtonColumn(stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), "Edit"), stryMutAct_9fa48("768") ? "" : (stryCov_9fa48("768"), "primary"), editCallback, testIdPrefix));
        columns.push(ButtonColumn(stryMutAct_9fa48("769") ? "" : (stryCov_9fa48("769"), "Delete"), stryMutAct_9fa48("770") ? "" : (stryCov_9fa48("770"), "danger"), deleteCallback, testIdPrefix));
      }
    }
    return <OurTable data={UCSBDiningCommonsMenuItem} columns={columns} testid={testIdPrefix} />;
  }
}
;