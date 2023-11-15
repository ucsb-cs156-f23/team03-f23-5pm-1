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
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/restaurantUtils";
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
export default function RestaurantTable({
  restaurants,
  currentUser,
  testIdPrefix = stryMutAct_9fa48("575") ? "" : (stryCov_9fa48("575"), "RestaurantTable")
}) {
  if (stryMutAct_9fa48("576")) {
    {}
  } else {
    stryCov_9fa48("576");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("577")) {
        {}
      } else {
        stryCov_9fa48("577");
        navigate(stryMutAct_9fa48("578") ? `` : (stryCov_9fa48("578"), `/restaurants/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/restaurants/all"]);
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("583") ? [] : (stryCov_9fa48("583"), [stryMutAct_9fa48("584") ? {} : (stryCov_9fa48("584"), {
      Header: stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), 'id'),
      accessor: stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("587") ? {} : (stryCov_9fa48("587"), {
      Header: stryMutAct_9fa48("588") ? "" : (stryCov_9fa48("588"), 'Name'),
      accessor: stryMutAct_9fa48("589") ? "" : (stryCov_9fa48("589"), 'name')
    }), stryMutAct_9fa48("590") ? {} : (stryCov_9fa48("590"), {
      Header: stryMutAct_9fa48("591") ? "" : (stryCov_9fa48("591"), 'Description'),
      accessor: stryMutAct_9fa48("592") ? "" : (stryCov_9fa48("592"), 'description')
    })]);
    if (stryMutAct_9fa48("594") ? false : stryMutAct_9fa48("593") ? true : (stryCov_9fa48("593", "594"), hasRole(currentUser, stryMutAct_9fa48("595") ? "" : (stryCov_9fa48("595"), "ROLE_ADMIN")))) {
      if (stryMutAct_9fa48("596")) {
        {}
      } else {
        stryCov_9fa48("596");
        columns.push(ButtonColumn(stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), "Edit"), stryMutAct_9fa48("598") ? "" : (stryCov_9fa48("598"), "primary"), editCallback, testIdPrefix));
        columns.push(ButtonColumn(stryMutAct_9fa48("599") ? "" : (stryCov_9fa48("599"), "Delete"), stryMutAct_9fa48("600") ? "" : (stryCov_9fa48("600"), "danger"), deleteCallback, testIdPrefix));
      }
    }
    return <OurTable data={restaurants} columns={columns} testid={testIdPrefix} />;
  }
}
;