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
import BasicLayout from 'main/layouts/BasicLayout/BasicLayout';
import MenuItemReviewForm from 'main/components/MenuItemReview/MenuItemReviewForm';
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from 'main/utils/useBackend';
import { toast } from 'react-toastify';
export default function MenuItemReviewCreatePage({
  storybook = stryMutAct_9fa48("987") ? true : (stryCov_9fa48("987"), false)
}) {
  if (stryMutAct_9fa48("988")) {
    {}
  } else {
    stryCov_9fa48("988");
    const objectToAxiosParams = stryMutAct_9fa48("989") ? () => undefined : (stryCov_9fa48("989"), (() => {
      const objectToAxiosParams = MenuItemReview => stryMutAct_9fa48("990") ? {} : (stryCov_9fa48("990"), {
        url: stryMutAct_9fa48("991") ? "" : (stryCov_9fa48("991"), '/api/MenuItemReview/post'),
        method: stryMutAct_9fa48("992") ? "" : (stryCov_9fa48("992"), 'POST'),
        params: stryMutAct_9fa48("993") ? {} : (stryCov_9fa48("993"), {
          itemId: MenuItemReview.itemId,
          reviewerEmail: MenuItemReview.reviewerEmail,
          stars: MenuItemReview.stars,
          comments: MenuItemReview.comments,
          dateReviewed: MenuItemReview.dateReviewed
        })
      });
      return objectToAxiosParams;
    })());
    const onSuccess = MenuItemReview => {
      if (stryMutAct_9fa48("994")) {
        {}
      } else {
        stryCov_9fa48("994");
        toast(stryMutAct_9fa48("995") ? `` : (stryCov_9fa48("995"), `New MenuItemReview Created - id: ${MenuItemReview.id} itemId: ${MenuItemReview.itemId}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("996") ? {} : (stryCov_9fa48("996"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    ['/api/MenuItemReview/all']);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("999")) {
        {}
      } else {
        stryCov_9fa48("999");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1002") ? isSuccess || !storybook : stryMutAct_9fa48("1001") ? false : stryMutAct_9fa48("1000") ? true : (stryCov_9fa48("1000", "1001", "1002"), isSuccess && (stryMutAct_9fa48("1003") ? storybook : (stryCov_9fa48("1003"), !storybook)))) {
      if (stryMutAct_9fa48("1004")) {
        {}
      } else {
        stryCov_9fa48("1004");
        return <Navigate to="/menuitemreview" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New MenuItemReview</h1>

        <MenuItemReviewForm submitAction={onSubmit} />
      </div>
    </BasicLayout>;
  }
}