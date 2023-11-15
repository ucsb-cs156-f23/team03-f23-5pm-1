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
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils";
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
export default function UCSBDatesTable({
  dates,
  currentUser
}) {
  if (stryMutAct_9fa48("678")) {
    {}
  } else {
    stryCov_9fa48("678");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("679")) {
        {}
      } else {
        stryCov_9fa48("679");
        navigate(stryMutAct_9fa48("680") ? `` : (stryCov_9fa48("680"), `/ucsbdates/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/ucsbdates/all"]);
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("685") ? [] : (stryCov_9fa48("685"), [stryMutAct_9fa48("686") ? {} : (stryCov_9fa48("686"), {
      Header: stryMutAct_9fa48("687") ? "" : (stryCov_9fa48("687"), 'id'),
      accessor: stryMutAct_9fa48("688") ? "" : (stryCov_9fa48("688"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("689") ? {} : (stryCov_9fa48("689"), {
      Header: stryMutAct_9fa48("690") ? "" : (stryCov_9fa48("690"), 'QuarterYYYYQ'),
      accessor: stryMutAct_9fa48("691") ? "" : (stryCov_9fa48("691"), 'quarterYYYYQ')
    }), stryMutAct_9fa48("692") ? {} : (stryCov_9fa48("692"), {
      Header: stryMutAct_9fa48("693") ? "" : (stryCov_9fa48("693"), 'Name'),
      accessor: stryMutAct_9fa48("694") ? "" : (stryCov_9fa48("694"), 'name')
    }), stryMutAct_9fa48("695") ? {} : (stryCov_9fa48("695"), {
      Header: stryMutAct_9fa48("696") ? "" : (stryCov_9fa48("696"), 'Date'),
      accessor: stryMutAct_9fa48("697") ? "" : (stryCov_9fa48("697"), 'localDateTime')
    })]);
    if (stryMutAct_9fa48("699") ? false : stryMutAct_9fa48("698") ? true : (stryCov_9fa48("698", "699"), hasRole(currentUser, stryMutAct_9fa48("700") ? "" : (stryCov_9fa48("700"), "ROLE_ADMIN")))) {
      if (stryMutAct_9fa48("701")) {
        {}
      } else {
        stryCov_9fa48("701");
        columns.push(ButtonColumn(stryMutAct_9fa48("702") ? "" : (stryCov_9fa48("702"), "Edit"), stryMutAct_9fa48("703") ? "" : (stryCov_9fa48("703"), "primary"), editCallback, stryMutAct_9fa48("704") ? "" : (stryCov_9fa48("704"), "UCSBDatesTable")));
        columns.push(ButtonColumn(stryMutAct_9fa48("705") ? "" : (stryCov_9fa48("705"), "Delete"), stryMutAct_9fa48("706") ? "" : (stryCov_9fa48("706"), "danger"), deleteCallback, stryMutAct_9fa48("707") ? "" : (stryCov_9fa48("707"), "UCSBDatesTable")));
      }
    }
    return <OurTable data={dates} columns={columns} testid={stryMutAct_9fa48("708") ? "" : (stryCov_9fa48("708"), "UCSBDatesTable")} />;
  }
}
;