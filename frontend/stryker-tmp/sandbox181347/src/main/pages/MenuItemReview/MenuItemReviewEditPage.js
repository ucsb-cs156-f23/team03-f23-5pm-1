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
import { useParams } from 'react-router-dom';
import MenuItemReviewForm from 'main/components/MenuItemReview/MenuItemReviewForm';
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from 'main/utils/useBackend';
import { toast } from 'react-toastify';
export default function MenuItemReviewEditPage({
  storybook = stryMutAct_9fa48("1005") ? true : (stryCov_9fa48("1005"), false)
}) {
  if (stryMutAct_9fa48("1006")) {
    {}
  } else {
    stryCov_9fa48("1006");
    let {
      id
    } = useParams();
    const {
      data: MenuItemReviews,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/MenuItemReview?id=${id}`], stryMutAct_9fa48("1009") ? {} : (stryCov_9fa48("1009"), {
      // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
      method: 'GET',
      url: stryMutAct_9fa48("1011") ? `` : (stryCov_9fa48("1011"), `/api/MenuItemReview`),
      params: stryMutAct_9fa48("1012") ? {} : (stryCov_9fa48("1012"), {
        id
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("1013") ? () => undefined : (stryCov_9fa48("1013"), (() => {
      const objectToAxiosPutParams = MenuItemReview => stryMutAct_9fa48("1014") ? {} : (stryCov_9fa48("1014"), {
        url: stryMutAct_9fa48("1015") ? "" : (stryCov_9fa48("1015"), '/api/MenuItemReview'),
        method: stryMutAct_9fa48("1016") ? "" : (stryCov_9fa48("1016"), 'PUT'),
        params: stryMutAct_9fa48("1017") ? {} : (stryCov_9fa48("1017"), {
          id: MenuItemReview.id
        }),
        data: stryMutAct_9fa48("1018") ? {} : (stryCov_9fa48("1018"), {
          itemId: MenuItemReview.itemId,
          reviewerEmail: MenuItemReview.reviewerEmail,
          stars: MenuItemReview.stars,
          comments: MenuItemReview.comments,
          dateReviewed: MenuItemReview.dateReviewed
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = MenuItemReview => {
      if (stryMutAct_9fa48("1019")) {
        {}
      } else {
        stryCov_9fa48("1019");
        toast(stryMutAct_9fa48("1020") ? `` : (stryCov_9fa48("1020"), `MenuItemReview Updated - id: ${MenuItemReview.id} itemId: ${MenuItemReview.itemId}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("1021") ? {} : (stryCov_9fa48("1021"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/MenuItemReview?id=${id}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1024")) {
        {}
      } else {
        stryCov_9fa48("1024");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1027") ? isSuccess || !storybook : stryMutAct_9fa48("1026") ? false : stryMutAct_9fa48("1025") ? true : (stryCov_9fa48("1025", "1026", "1027"), isSuccess && (stryMutAct_9fa48("1028") ? storybook : (stryCov_9fa48("1028"), !storybook)))) {
      if (stryMutAct_9fa48("1029")) {
        {}
      } else {
        stryCov_9fa48("1029");
        return <Navigate to="/menuitemreview" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Edit MenuItemReview</h1>
        {stryMutAct_9fa48("1032") ? MenuItemReviews || <MenuItemReviewForm initialContents={MenuItemReviews} submitAction={onSubmit} buttonLabel="Update" /> : stryMutAct_9fa48("1031") ? false : stryMutAct_9fa48("1030") ? true : (stryCov_9fa48("1030", "1031", "1032"), MenuItemReviews && <MenuItemReviewForm initialContents={MenuItemReviews} submitAction={onSubmit} buttonLabel="Update" />)}
      </div>
    </BasicLayout>;
  }
}