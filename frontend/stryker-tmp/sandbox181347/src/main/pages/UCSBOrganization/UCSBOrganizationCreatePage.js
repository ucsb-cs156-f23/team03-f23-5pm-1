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
import OrganizationForm from 'main/components/UCSBOrganization/UCSBOrganizationForm';
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from 'main/utils/useBackend';
import { toast } from 'react-toastify';
export default function UCSBOrganizationCreatePage({
  storybook = stryMutAct_9fa48("1299") ? true : (stryCov_9fa48("1299"), false)
}) {
  if (stryMutAct_9fa48("1300")) {
    {}
  } else {
    stryCov_9fa48("1300");
    const objectToAxiosParams = stryMutAct_9fa48("1301") ? () => undefined : (stryCov_9fa48("1301"), (() => {
      const objectToAxiosParams = organization => stryMutAct_9fa48("1302") ? {} : (stryCov_9fa48("1302"), {
        url: stryMutAct_9fa48("1303") ? "" : (stryCov_9fa48("1303"), '/api/UCSBOrganization/post'),
        method: stryMutAct_9fa48("1304") ? "" : (stryCov_9fa48("1304"), 'POST'),
        params: stryMutAct_9fa48("1305") ? {} : (stryCov_9fa48("1305"), {
          orgCode: organization.orgCode,
          orgTranslationShort: organization.orgTranslationShort,
          orgTranslation: organization.orgTranslation,
          inactive: organization.inactive
        })
      });
      return objectToAxiosParams;
    })());
    const onSuccess = organization => {
      if (stryMutAct_9fa48("1306")) {
        {}
      } else {
        stryCov_9fa48("1306");
        toast(stryMutAct_9fa48("1307") ? `` : (stryCov_9fa48("1307"), `New organization Created - orgCode: ${organization.orgCode} orgTranslationShort: ${organization.orgTranslationShort} orgTranslation: ${organization.orgTranslation} inactive: ${organization.inactive}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("1308") ? {} : (stryCov_9fa48("1308"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    ['/api/UCSBOrganization/all'] // mutation makes this key stale so that pages relying on it reload
    );

    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1311")) {
        {}
      } else {
        stryCov_9fa48("1311");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1314") ? isSuccess || !storybook : stryMutAct_9fa48("1313") ? false : stryMutAct_9fa48("1312") ? true : (stryCov_9fa48("1312", "1313", "1314"), isSuccess && (stryMutAct_9fa48("1315") ? storybook : (stryCov_9fa48("1315"), !storybook)))) {
      if (stryMutAct_9fa48("1316")) {
        {}
      } else {
        stryCov_9fa48("1316");
        return <Navigate to="/organizations" />;
      }
    }

    // Stryker disable all : placeholder for future implementation
    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New Organization</h1>
        <OrganizationForm submitAction={onSubmit} />
      </div>
    </BasicLayout>;
  }
}