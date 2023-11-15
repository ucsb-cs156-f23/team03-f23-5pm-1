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
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/HelpRequestUtils";
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
export default function HelpRequestTable({
  helprequest,
  currentUser
}) {
  if (stryMutAct_9fa48("174")) {
    {}
  } else {
    stryCov_9fa48("174");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("175")) {
        {}
      } else {
        stryCov_9fa48("175");
        navigate(stryMutAct_9fa48("176") ? `` : (stryCov_9fa48("176"), `/helprequest/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/HelpRequest/all"]);
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("181") ? [] : (stryCov_9fa48("181"), [stryMutAct_9fa48("182") ? {} : (stryCov_9fa48("182"), {
      Header: stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'id'),
      accessor: stryMutAct_9fa48("184") ? "" : (stryCov_9fa48("184"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("185") ? {} : (stryCov_9fa48("185"), {
      Header: stryMutAct_9fa48("186") ? "" : (stryCov_9fa48("186"), 'Email'),
      accessor: stryMutAct_9fa48("187") ? "" : (stryCov_9fa48("187"), 'requesterEmail')
    }), stryMutAct_9fa48("188") ? {} : (stryCov_9fa48("188"), {
      Header: stryMutAct_9fa48("189") ? "" : (stryCov_9fa48("189"), 'Team ID'),
      accessor: stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), 'teamId')
    }), stryMutAct_9fa48("191") ? {} : (stryCov_9fa48("191"), {
      Header: stryMutAct_9fa48("192") ? "" : (stryCov_9fa48("192"), 'Table or Breakout Room'),
      accessor: stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'tableOrBreakoutRoom')
    }), stryMutAct_9fa48("194") ? {} : (stryCov_9fa48("194"), {
      Header: stryMutAct_9fa48("195") ? "" : (stryCov_9fa48("195"), 'Explanation'),
      accessor: stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), 'explanation')
    }), stryMutAct_9fa48("197") ? {} : (stryCov_9fa48("197"), {
      Header: stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'Solved'),
      id: stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), 'solved'),
      accessor: stryMutAct_9fa48("200") ? () => undefined : (stryCov_9fa48("200"), (row, _rowIndex) => String(row.solved)) // hack needed for boolean values to show up
    }), stryMutAct_9fa48("201") ? {} : (stryCov_9fa48("201"), {
      Header: stryMutAct_9fa48("202") ? "" : (stryCov_9fa48("202"), 'Request Time'),
      accessor: stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), 'requestTime')
    })]);
    if (stryMutAct_9fa48("205") ? false : stryMutAct_9fa48("204") ? true : (stryCov_9fa48("204", "205"), hasRole(currentUser, stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), "ROLE_ADMIN")))) {
      if (stryMutAct_9fa48("207")) {
        {}
      } else {
        stryCov_9fa48("207");
        columns.push(ButtonColumn(stryMutAct_9fa48("208") ? "" : (stryCov_9fa48("208"), "Edit"), stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), "primary"), editCallback, stryMutAct_9fa48("210") ? "" : (stryCov_9fa48("210"), "HelpRequestTable")));
        columns.push(ButtonColumn(stryMutAct_9fa48("211") ? "" : (stryCov_9fa48("211"), "Delete"), stryMutAct_9fa48("212") ? "" : (stryCov_9fa48("212"), "danger"), deleteCallback, stryMutAct_9fa48("213") ? "" : (stryCov_9fa48("213"), "HelpRequestTable")));
      }
    }
    return <OurTable data={helprequest} columns={columns} testid={stryMutAct_9fa48("214") ? "" : (stryCov_9fa48("214"), "HelpRequestTable")} />;
  }
}
;