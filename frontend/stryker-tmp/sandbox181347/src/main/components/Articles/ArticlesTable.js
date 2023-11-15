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
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/articlesUtils";
import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private long id;

// private String title;
// private String url;
// private String explanation;
// private String email;
// private LocalDateTime dateAdded;
export default function ArticlesTable({
  articles,
  currentUser,
  testIdPrefix = stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), "ArticlesTable")
}) {
  if (stryMutAct_9fa48("44")) {
    {}
  } else {
    stryCov_9fa48("44");
    const navigate = useNavigate();
    const editCallback = cell => {
      if (stryMutAct_9fa48("45")) {
        {}
      } else {
        stryCov_9fa48("45");
        navigate(stryMutAct_9fa48("46") ? `` : (stryCov_9fa48("46"), `/articles/edit/${cell.row.values.id}`));
      }
    };

    // Stryker disable all : hard to test for query caching

    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/articles/all"]);
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };
    const columns = stryMutAct_9fa48("51") ? [] : (stryCov_9fa48("51"), [stryMutAct_9fa48("52") ? {} : (stryCov_9fa48("52"), {
      Header: stryMutAct_9fa48("53") ? "" : (stryCov_9fa48("53"), 'id'),
      accessor: stryMutAct_9fa48("54") ? "" : (stryCov_9fa48("54"), 'id') // accessor is the "key" in the data
    }), stryMutAct_9fa48("55") ? {} : (stryCov_9fa48("55"), {
      Header: stryMutAct_9fa48("56") ? "" : (stryCov_9fa48("56"), 'Title'),
      accessor: stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), 'title')
    }), stryMutAct_9fa48("58") ? {} : (stryCov_9fa48("58"), {
      Header: stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), 'URL'),
      accessor: stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), 'url')
    }), stryMutAct_9fa48("61") ? {} : (stryCov_9fa48("61"), {
      Header: stryMutAct_9fa48("62") ? "" : (stryCov_9fa48("62"), 'Explanation'),
      accessor: stryMutAct_9fa48("63") ? "" : (stryCov_9fa48("63"), 'explanation')
    }), stryMutAct_9fa48("64") ? {} : (stryCov_9fa48("64"), {
      Header: stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), 'Email'),
      accessor: stryMutAct_9fa48("66") ? "" : (stryCov_9fa48("66"), 'email')
    }), stryMutAct_9fa48("67") ? {} : (stryCov_9fa48("67"), {
      Header: stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), 'Date Added'),
      accessor: stryMutAct_9fa48("69") ? "" : (stryCov_9fa48("69"), 'dateAdded')
    })]);
    if (stryMutAct_9fa48("71") ? false : stryMutAct_9fa48("70") ? true : (stryCov_9fa48("70", "71"), hasRole(currentUser, stryMutAct_9fa48("72") ? "" : (stryCov_9fa48("72"), "ROLE_ADMIN")))) {
      if (stryMutAct_9fa48("73")) {
        {}
      } else {
        stryCov_9fa48("73");
        columns.push(ButtonColumn(stryMutAct_9fa48("74") ? "" : (stryCov_9fa48("74"), "Edit"), stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), "primary"), editCallback, testIdPrefix));
        columns.push(ButtonColumn(stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), "Delete"), stryMutAct_9fa48("77") ? "" : (stryCov_9fa48("77"), "danger"), deleteCallback, testIdPrefix));
      }
    }
    return <OurTable data={articles} columns={columns} testid={testIdPrefix} />;
  }
}
;