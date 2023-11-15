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
import { Navigate } from 'react-router-dom';
import { useBackend, useBackendMutation } from 'main/utils/useBackend';
import { toast } from 'react-toastify';
import OrganizationForm from 'main/components/UCSBOrganization/UCSBOrganizationForm';
export default function OrganizationEditPage({
  storybook = stryMutAct_9fa48("1317") ? true : (stryCov_9fa48("1317"), false)
}) {
  if (stryMutAct_9fa48("1318")) {
    {}
  } else {
    stryCov_9fa48("1318");
    let {
      orgCode
    } = useParams();
    const {
      data: organization,
      _error,
      _status
    } = useBackend(
    // Stryker disable next-line all : don't test internal caching of React Query
    [`/api/UCSBOrganization?orgCode=${orgCode}`], stryMutAct_9fa48("1321") ? {} : (stryCov_9fa48("1321"), {
      // Stryker disable next-line all : GET is the default, so mutating this to "" doesn't introduce a bug
      method: 'GET',
      url: stryMutAct_9fa48("1323") ? `` : (stryCov_9fa48("1323"), `/api/UCSBOrganization`),
      params: stryMutAct_9fa48("1324") ? {} : (stryCov_9fa48("1324"), {
        orgCode
      })
    }));
    const objectToAxiosPutParams = stryMutAct_9fa48("1325") ? () => undefined : (stryCov_9fa48("1325"), (() => {
      const objectToAxiosPutParams = organization => stryMutAct_9fa48("1326") ? {} : (stryCov_9fa48("1326"), {
        url: stryMutAct_9fa48("1327") ? "" : (stryCov_9fa48("1327"), '/api/UCSBOrganization'),
        method: stryMutAct_9fa48("1328") ? "" : (stryCov_9fa48("1328"), 'PUT'),
        params: stryMutAct_9fa48("1329") ? {} : (stryCov_9fa48("1329"), {
          orgCode: organization.orgCode
        }),
        data: stryMutAct_9fa48("1330") ? {} : (stryCov_9fa48("1330"), {
          orgCode: organization.orgCode,
          orgTranslationShort: organization.orgTranslationShort,
          orgTranslation: organization.orgTranslation,
          inactive: organization.inactive
        })
      });
      return objectToAxiosPutParams;
    })());
    const onSuccess = organization => {
      if (stryMutAct_9fa48("1331")) {
        {}
      } else {
        stryCov_9fa48("1331");
        toast(stryMutAct_9fa48("1332") ? `` : (stryCov_9fa48("1332"), `Organization Updated - orgCode: ${organization.orgCode} orgTranslationShort: ${organization.orgTranslationShort} orgTranslation: ${organization.orgTranslation} inactive: ${organization.inactive}`));
      }
    };
    const mutation = useBackendMutation(objectToAxiosPutParams, stryMutAct_9fa48("1333") ? {} : (stryCov_9fa48("1333"), {
      onSuccess
    }),
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/UCSBOrganization?orgCode=${orgCode}`]);
    const {
      isSuccess
    } = mutation;
    const onSubmit = async data => {
      if (stryMutAct_9fa48("1336")) {
        {}
      } else {
        stryCov_9fa48("1336");
        mutation.mutate(data);
      }
    };
    if (stryMutAct_9fa48("1339") ? isSuccess || !storybook : stryMutAct_9fa48("1338") ? false : stryMutAct_9fa48("1337") ? true : (stryCov_9fa48("1337", "1338", "1339"), isSuccess && (stryMutAct_9fa48("1340") ? storybook : (stryCov_9fa48("1340"), !storybook)))) {
      if (stryMutAct_9fa48("1341")) {
        {}
      } else {
        stryCov_9fa48("1341");
        return <Navigate to="/organizations" />;
      }
    }
    return <BasicLayout>
      <div className="pt-2">
        <h1>Edit Organization</h1>
        {stryMutAct_9fa48("1344") ? organization || <OrganizationForm submitAction={onSubmit} buttonLabel={'Update'} initialContents={organization} /> : stryMutAct_9fa48("1343") ? false : stryMutAct_9fa48("1342") ? true : (stryCov_9fa48("1342", "1343", "1344"), organization && <OrganizationForm submitAction={onSubmit} buttonLabel={stryMutAct_9fa48("1345") ? "" : (stryCov_9fa48("1345"), 'Update')} initialContents={organization} />)}
      </div>
    </BasicLayout>;
  }
}