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
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function RestaurantForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), "Create")
}) {
  if (stryMutAct_9fa48("548")) {
    {}
  } else {
    stryCov_9fa48("548");
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
    const testIdPrefix = stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), "RestaurantForm");
    return <Form onSubmit={handleSubmit(submitAction)}>

            {stryMutAct_9fa48("556") ? initialContents || <Form.Group className="mb-3">
                    <Form.Label htmlFor="id">Id</Form.Label>
                    <Form.Control data-testid={testIdPrefix + "-id"} id="id" type="text" {...register("id")} value={initialContents.id} disabled />
                </Form.Group> : stryMutAct_9fa48("555") ? false : stryMutAct_9fa48("554") ? true : (stryCov_9fa48("554", "555", "556"), initialContents && <Form.Group className="mb-3">
                    <Form.Label htmlFor="id">Id</Form.Label>
                    <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("557") ? "" : (stryCov_9fa48("557"), "-id"))} id="id" type="text" {...register(stryMutAct_9fa48("558") ? "" : (stryCov_9fa48("558"), "id"))} value={initialContents.id} disabled />
                </Form.Group>)}

            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), "-name"))} id="name" type="text" isInvalid={Boolean(errors.name)} {...register(stryMutAct_9fa48("560") ? "" : (stryCov_9fa48("560"), "name"), stryMutAct_9fa48("561") ? {} : (stryCov_9fa48("561"), {
          required: stryMutAct_9fa48("562") ? "" : (stryCov_9fa48("562"), "Name is required."),
          maxLength: stryMutAct_9fa48("563") ? {} : (stryCov_9fa48("563"), {
            value: 30,
            message: stryMutAct_9fa48("564") ? "" : (stryCov_9fa48("564"), "Max length 30 characters")
          })
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("565") ? errors.name.message : (stryCov_9fa48("565"), errors.name?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("566") ? "" : (stryCov_9fa48("566"), "-description"))} id="description" type="text" isInvalid={Boolean(errors.description)} {...register(stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), "description"), stryMutAct_9fa48("568") ? {} : (stryCov_9fa48("568"), {
          required: stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), "Description is required.")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("570") ? errors.description.message : (stryCov_9fa48("570"), errors.description?.message)}
                </Form.Control.Feedback>
            </Form.Group>


            <Button type="submit" data-testid={testIdPrefix + (stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), "-submit"))}>
                {buttonLabel}
            </Button>
            <Button variant="Secondary" onClick={stryMutAct_9fa48("572") ? () => undefined : (stryCov_9fa48("572"), () => navigate(stryMutAct_9fa48("573") ? +1 : (stryCov_9fa48("573"), -1)))} data-testid={testIdPrefix + (stryMutAct_9fa48("574") ? "" : (stryCov_9fa48("574"), "-cancel"))}>
                Cancel
            </Button>

        </Form>;
  }
}
export default RestaurantForm;