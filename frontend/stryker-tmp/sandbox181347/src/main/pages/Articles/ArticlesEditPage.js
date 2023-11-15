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
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import ArticlesForm from 'main/components/Articles/ArticlesForm';
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function ArticlesEditPage({
  storybook = stryMutAct_9fa48("883") ? true : (stryCov_9fa48("883"), false)
}) {
  if (stryMutAct_9fa48("884")) {
    {}
  } else {
    stryCov_9fa48("884");
    let {
      id
    } = useParams();
    const {
      data: articles,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/articles?id=${id}`], stryMutAct_9fa48("887") ? {} : (stryCov_9fa48("887"), {
      // Stryker disable next-line all : GET is the default, so mutating this to "" doesn't introduce a bug
      method: "GET",
      url: stryMutAct_9fa48("889") ? `` : (stryCov_9fa48("889"), `/api/articles`),
      params: stryMutAct_9fa48("890") ? {} : (stryCov_9fa48("890"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("891") ? () => undefined : (stryCov_9fa48("891"), (() => {
      const objectToAxiosPutParams = articles => stryMutAct_9fa48("892") ? {} : (stryCov_9fa48("892"), {
        url: stryMutAct_9fa48("893") ? "" : (stryCov_9fa48("893"), "/api/articles"),
        method: stryMutAct_9fa48("894") ? "" : (stryCov_9fa48("894"), "PUT"),
        params: stryMutAct_9fa48("895") ? {} : (stryCov_9fa48("895"), {
          id: articles.id
        }),
        data: stryMutAct_9fa48("896") ? {} : (stryCov_9fa48("896"), {
          title: articles.title,
          url: articles.url,
          explanation: articles.explanation,
          email: articles.email,
          dateAdded: articles.dateAdded
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = articles => {
      if (stryMutAct_9fa48("897")) {
        {}
      } else {
        stryCov_9fa48("897");
        toast(stryMutAct_9fa48("898") ? `` : (stryCov_9fa48("898"), `Articles Updated - id: ${articles.id} title: ${articles.title}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("899") ? {} : (stryCov_9fa48("899"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/articles?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("902")) {
        {}
      } else {
        stryCov_9fa48("902");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("905") ? isSuccess || !storybook : stryMutAct_9fa48("904") ? false : stryMutAct_9fa48("903") ? true : (stryCov_9fa48("903", "904", "905"), isSuccess && (stryMutAct_9fa48("906") ? storybook : (stryCov_9fa48("906"), !storybook)))) {
      if (stryMutAct_9fa48("907")) {
        {}
      } else {
        stryCov_9fa48("907");
        return <Navigate to="/articles" />;
      }
    }
    return <BasicLayout>
            <div className="pt-2">
                <h1>Edit Articles</h1>
                {stryMutAct_9fa48("910") ? articles || <ArticlesForm submitAction={onSubmit} buttonLabel={"Update"} initialContents={articles} /> : stryMutAct_9fa48("909") ? false : stryMutAct_9fa48("908") ? true : (stryCov_9fa48("908", "909", "910"), articles && <ArticlesForm submitAction={onSubmit} buttonLabel={stryMutAct_9fa48("911") ? "" : (stryCov_9fa48("911"), "Update")} initialContents={articles} />)}
            </div>
        </BasicLayout>;
  }
}