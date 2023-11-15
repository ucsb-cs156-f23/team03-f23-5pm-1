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
import ArticlesForm from "main/components/Articles/ArticlesForm";
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private long id;

// private String title;
// private String url;
// private String explanation;
// private String email;
// private LocalDateTime dateAdded;
export default function ArticlesCreatePage({
  storybook = stryMutAct_9fa48("865") ? true : (stryCov_9fa48("865"), false)
}) {
  if (stryMutAct_9fa48("866")) {
    {}
  } else {
    stryCov_9fa48("866");
    const objectToAxiosParams = stryMutAct_9fa48("867") ? () => undefined : (stryCov_9fa48("867"), (() => {
      const objectToAxiosParams = articles => stryMutAct_9fa48("868") ? {} : (stryCov_9fa48("868"), {
        url: stryMutAct_9fa48("869") ? "" : (stryCov_9fa48("869"), "/api/articles/post"),
        method: stryMutAct_9fa48("870") ? "" : (stryCov_9fa48("870"), "POST"),
        params: stryMutAct_9fa48("871") ? {} : (stryCov_9fa48("871"), {
          title: articles.title,
          url: articles.url,
          explanation: articles.explanation,
          email: articles.email,
          dateAdded: articles.dateAdded
        })
      });
      return objectToAxiosParams;
    })());
    const onSuccess = articles => {
      if (stryMutAct_9fa48("872")) {
        {}
      } else {
        stryCov_9fa48("872");
        toast(stryMutAct_9fa48("873") ? `` : (stryCov_9fa48("873"), `New articles Created - id: ${articles.id} title: ${articles.title}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("874") ? {} : (stryCov_9fa48("874"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    ["/api/articles/all"] // mutation makes this key stale so that pages relying on it reload
    );

    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("877")) {
        {}
      } else {
        stryCov_9fa48("877");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("880") ? isSuccess || !storybook : stryMutAct_9fa48("879") ? false : stryMutAct_9fa48("878") ? true : (stryCov_9fa48("878", "879", "880"), isSuccess && (stryMutAct_9fa48("881") ? storybook : (stryCov_9fa48("881"), !storybook)))) {
      if (stryMutAct_9fa48("882")) {
        {}
      } else {
        stryCov_9fa48("882");
        return <Navigate to="/articles" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New Article</h1>
        <ArticlesForm submitAction={onSubmit} />
      </div>
    </BasicLayout>;
  }
}