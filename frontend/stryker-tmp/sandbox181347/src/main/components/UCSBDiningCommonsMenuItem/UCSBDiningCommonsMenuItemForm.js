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
function UCSBDiningCommonsMenuItemForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("709") ? "" : (stryCov_9fa48("709"), "Create")
}) {
  if (stryMutAct_9fa48("710")) {
    {}
  } else {
    stryCov_9fa48("710");
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
    const testIdPrefix = stryMutAct_9fa48("715") ? "" : (stryCov_9fa48("715"), "UCSBDiningCommonsMenuItemForm");
    return <Form onSubmit={handleSubmit(submitAction)}>

            {stryMutAct_9fa48("718") ? initialContents || <Form.Group className="mb-3">
                    <Form.Label htmlFor="id">Id</Form.Label>
                    <Form.Control data-testid={testIdPrefix + "-id"} id="id" type="text" {...register("id")} value={initialContents.id} disabled />
                </Form.Group> : stryMutAct_9fa48("717") ? false : stryMutAct_9fa48("716") ? true : (stryCov_9fa48("716", "717", "718"), initialContents && <Form.Group className="mb-3">
                    <Form.Label htmlFor="id">Id</Form.Label>
                    <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("719") ? "" : (stryCov_9fa48("719"), "-id"))} id="id" type="text" {...register(stryMutAct_9fa48("720") ? "" : (stryCov_9fa48("720"), "id"))} value={initialContents.id} disabled />
                </Form.Group>)}

            <Form.Group className="mb-3">
                <Form.Label htmlFor="diningCommonsCode">diningCommonsCode</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("721") ? "" : (stryCov_9fa48("721"), "-diningCommonsCode"))} id="diningCommonsCode" type="text" isInvalid={Boolean(errors.diningCommonsCode)} {...register(stryMutAct_9fa48("722") ? "" : (stryCov_9fa48("722"), "diningCommonsCode"), stryMutAct_9fa48("723") ? {} : (stryCov_9fa48("723"), {
          required: stryMutAct_9fa48("724") ? "" : (stryCov_9fa48("724"), "Dining commons code is required."),
          maxLength: stryMutAct_9fa48("725") ? {} : (stryCov_9fa48("725"), {
            value: 30,
            message: stryMutAct_9fa48("726") ? "" : (stryCov_9fa48("726"), "Max length 30 characters")
          })
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("727") ? errors.diningCommonsCode.message : (stryCov_9fa48("727"), errors.diningCommonsCode?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="Name">Name</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("728") ? "" : (stryCov_9fa48("728"), "-name"))} id="name" type="text" isInvalid={Boolean(errors.name)} {...register(stryMutAct_9fa48("729") ? "" : (stryCov_9fa48("729"), "name"), stryMutAct_9fa48("730") ? {} : (stryCov_9fa48("730"), {
          required: stryMutAct_9fa48("731") ? "" : (stryCov_9fa48("731"), "Name is required")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("732") ? errors.name.message : (stryCov_9fa48("732"), errors.name?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="Station">Station</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("733") ? "" : (stryCov_9fa48("733"), "-station"))} id="station" type="text" isInvalid={Boolean(errors.station)} {...register(stryMutAct_9fa48("734") ? "" : (stryCov_9fa48("734"), "station"), stryMutAct_9fa48("735") ? {} : (stryCov_9fa48("735"), {
          required: stryMutAct_9fa48("736") ? "" : (stryCov_9fa48("736"), "Station is required")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("737") ? errors.station.message : (stryCov_9fa48("737"), errors.station?.message)}
                </Form.Control.Feedback>
            </Form.Group>


            <Button type="submit" data-testid={testIdPrefix + (stryMutAct_9fa48("738") ? "" : (stryCov_9fa48("738"), "-submit"))}>
                {buttonLabel}
            </Button>
            <Button variant="Secondary" onClick={stryMutAct_9fa48("739") ? () => undefined : (stryCov_9fa48("739"), () => navigate(stryMutAct_9fa48("740") ? +1 : (stryCov_9fa48("740"), -1)))} data-testid={testIdPrefix + (stryMutAct_9fa48("741") ? "" : (stryCov_9fa48("741"), "-cancel"))}>
                Cancel
            </Button>

        </Form>;
  }
}
export default UCSBDiningCommonsMenuItemForm;