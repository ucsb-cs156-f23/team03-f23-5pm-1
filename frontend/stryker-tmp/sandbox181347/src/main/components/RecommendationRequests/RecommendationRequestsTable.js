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
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/RecommendationRequestUtils";
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
export default function RecommendationRequestsTable({
  requests,
  currentUser
}) {
  if (stryMutAct_9fa48("507")) {
    {}
  } else {
    stryCov_9fa48("507");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("508")) {
        {}
      } else {
        stryCov_9fa48("508");
        navigate(stryMutAct_9fa48("509") ? `` : (stryCov_9fa48("509"), `/recommendationrequests/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/recommendationrequests/all"]);
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("514") ? [] : (stryCov_9fa48("514"), [stryMutAct_9fa48("515") ? {} : (stryCov_9fa48("515"), {
      Header: stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), 'id'),
      accessor: stryMutAct_9fa48("517") ? "" : (stryCov_9fa48("517"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("518") ? {} : (stryCov_9fa48("518"), {
      Header: stryMutAct_9fa48("519") ? "" : (stryCov_9fa48("519"), 'Your Email'),
      accessor: stryMutAct_9fa48("520") ? "" : (stryCov_9fa48("520"), 'requesterEmail')
    }), stryMutAct_9fa48("521") ? {} : (stryCov_9fa48("521"), {
      Header: stryMutAct_9fa48("522") ? "" : (stryCov_9fa48("522"), 'Professor\'s Email'),
      accessor: stryMutAct_9fa48("523") ? "" : (stryCov_9fa48("523"), 'professorEmail')
    }), stryMutAct_9fa48("524") ? {} : (stryCov_9fa48("524"), {
      Header: stryMutAct_9fa48("525") ? "" : (stryCov_9fa48("525"), 'Reason'),
      accessor: stryMutAct_9fa48("526") ? "" : (stryCov_9fa48("526"), 'explanation')
    }), stryMutAct_9fa48("527") ? {} : (stryCov_9fa48("527"), {
      Header: stryMutAct_9fa48("528") ? "" : (stryCov_9fa48("528"), 'Need By Date'),
      accessor: stryMutAct_9fa48("529") ? "" : (stryCov_9fa48("529"), 'dateNeeded')
    }), stryMutAct_9fa48("530") ? {} : (stryCov_9fa48("530"), {
      Header: stryMutAct_9fa48("531") ? "" : (stryCov_9fa48("531"), 'Date of Request'),
      accessor: stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), 'dateRequested')
    }), stryMutAct_9fa48("533") ? {} : (stryCov_9fa48("533"), {
      Header: stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), 'Done?'),
      accessor: stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), 'done')
    })]);
    if (stryMutAct_9fa48("537") ? false : stryMutAct_9fa48("536") ? true : (stryCov_9fa48("536", "537"), hasRole(currentUser, stryMutAct_9fa48("538") ? "" : (stryCov_9fa48("538"), "ROLE_ADMIN")))) {
      if (stryMutAct_9fa48("539")) {
        {}
      } else {
        stryCov_9fa48("539");
        columns.push(ButtonColumn(stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), "Edit"), stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), "primary"), editCallback, stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), "RecommendationRequestsTable")));
        columns.push(ButtonColumn(stryMutAct_9fa48("543") ? "" : (stryCov_9fa48("543"), "Delete"), stryMutAct_9fa48("544") ? "" : (stryCov_9fa48("544"), "danger"), deleteCallback, stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), "RecommendationRequestsTable")));
      }
    }
    return <OurTable data={requests} columns={columns} testid={stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), "RecommendationRequestsTable")} />;
  }
}
;