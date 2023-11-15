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
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function OrganizationForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("771") ? "" : (stryCov_9fa48("771"), "Create")
}) {
  if (stryMutAct_9fa48("772")) {
    {}
  } else {
    stryCov_9fa48("772");
    // Stryker disable all
    const {
      register,
      formState: {
        errors
      },
      handleSubmit
    } = useForm({
      defaultValues: initialContents || {}
    });
    // Stryker restore all

    const navigate = useNavigate();
    const testIdPrefix = stryMutAct_9fa48("777") ? "" : (stryCov_9fa48("777"), "OrganizationForm");
    return <Form onSubmit={handleSubmit(submitAction)}>
      {stryMutAct_9fa48("780") ? initialContents || <Form.Group className="mb-3">
          <Form.Label htmlFor="id">Id</Form.Label>
          <Form.Control data-testid={testIdPrefix + "-id"} id="id" type="text" {...register("id")} value={initialContents.id} disabled />
        </Form.Group> : stryMutAct_9fa48("779") ? false : stryMutAct_9fa48("778") ? true : (stryCov_9fa48("778", "779", "780"), initialContents && <Form.Group className="mb-3">
          <Form.Label htmlFor="id">Id</Form.Label>
          <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("781") ? "" : (stryCov_9fa48("781"), "-id"))} id="id" type="text" {...register(stryMutAct_9fa48("782") ? "" : (stryCov_9fa48("782"), "id"))} value={initialContents.id} disabled />
        </Form.Group>)}
      {/* For orgcode */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="orgCode">orgCode</Form.Label>
        <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("783") ? "" : (stryCov_9fa48("783"), "-orgCode"))} id="orgCode" type="text" isInvalid={Boolean(errors.name)} {...register(stryMutAct_9fa48("784") ? "" : (stryCov_9fa48("784"), "orgCode"), stryMutAct_9fa48("785") ? {} : (stryCov_9fa48("785"), {
          required: stryMutAct_9fa48("786") ? "" : (stryCov_9fa48("786"), "orgCode is required."),
          maxLength: stryMutAct_9fa48("787") ? {} : (stryCov_9fa48("787"), {
            value: 30,
            message: stryMutAct_9fa48("788") ? "" : (stryCov_9fa48("788"), "Max length 30 characters")
          })
        }))} />
        <Form.Control.Feedback type="invalid">
          {stryMutAct_9fa48("789") ? errors.orgCode.message : (stryCov_9fa48("789"), errors.orgCode?.message)}
        </Form.Control.Feedback>
      </Form.Group>

      {/* For orgTranslationShort */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="orgTranslationShort">
          orgTranslationShort
        </Form.Label>
        <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("790") ? "" : (stryCov_9fa48("790"), "-orgTranslationShort"))} id="orgTranslationShort" type="text" isInvalid={Boolean(errors.description)} {...register(stryMutAct_9fa48("791") ? "" : (stryCov_9fa48("791"), "orgTranslationShort"), stryMutAct_9fa48("792") ? {} : (stryCov_9fa48("792"), {
          required: stryMutAct_9fa48("793") ? "" : (stryCov_9fa48("793"), "orgTranslationShort is required.")
        }))} />
        <Form.Control.Feedback type="invalid">
          {stryMutAct_9fa48("794") ? errors.orgTranslationShort.message : (stryCov_9fa48("794"), errors.orgTranslationShort?.message)}
        </Form.Control.Feedback>
      </Form.Group>

      {/* For orgTranslation */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="orgTranslation">orgTranslation</Form.Label>
        <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("795") ? "" : (stryCov_9fa48("795"), "-orgTranslation"))} id="orgTranslation" type="text" isInvalid={Boolean(errors.description)} {...register(stryMutAct_9fa48("796") ? "" : (stryCov_9fa48("796"), "orgTranslation"), stryMutAct_9fa48("797") ? {} : (stryCov_9fa48("797"), {
          required: stryMutAct_9fa48("798") ? "" : (stryCov_9fa48("798"), "orgTranslation is required.")
        }))} />
        <Form.Control.Feedback type="invalid">
          {stryMutAct_9fa48("799") ? errors.orgTranslation.message : (stryCov_9fa48("799"), errors.orgTranslation?.message)}
        </Form.Control.Feedback>
      </Form.Group>

      {/* For Inactive */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="inactive">inactive</Form.Label>
        <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("800") ? "" : (stryCov_9fa48("800"), "-inactive"))} id="inactive" type="text" isInvalid={Boolean(errors.description)} {...register(stryMutAct_9fa48("801") ? "" : (stryCov_9fa48("801"), "inactive"), stryMutAct_9fa48("802") ? {} : (stryCov_9fa48("802"), {
          required: stryMutAct_9fa48("803") ? "" : (stryCov_9fa48("803"), "inactive is required.")
        }))} />
        <Form.Control.Feedback type="invalid">
          {stryMutAct_9fa48("804") ? errors.inactive.message : (stryCov_9fa48("804"), errors.inactive?.message)}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" data-testid={testIdPrefix + (stryMutAct_9fa48("805") ? "" : (stryCov_9fa48("805"), "-submit"))}>
        {buttonLabel}
      </Button>

      <Button variant="Secondary" onClick={stryMutAct_9fa48("806") ? () => undefined : (stryCov_9fa48("806"), () => navigate(stryMutAct_9fa48("807") ? +1 : (stryCov_9fa48("807"), -1)))} data-testid={testIdPrefix + (stryMutAct_9fa48("808") ? "" : (stryCov_9fa48("808"), "-cancel"))}>
        Cancel
      </Button>
    </Form>;
  }
}
export default OrganizationForm;