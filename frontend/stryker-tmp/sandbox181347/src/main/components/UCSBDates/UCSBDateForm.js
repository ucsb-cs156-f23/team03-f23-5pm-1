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
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function UCSBDateForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("601") ? "" : (stryCov_9fa48("601"), "Create")
}) {
  if (stryMutAct_9fa48("602")) {
    {}
  } else {
    stryCov_9fa48("602");
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

    // For explanation, see: https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
    // Note that even this complex regex may still need some tweaks

    // Stryker disable next-line Regex
    const isodate_regex = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/i;

    // Stryker disable next-line all
    const yyyyq_regex = /((19)|(20))\d{2}[1-4]/i; // Accepts from 1900-2099 followed by 1-4.  Close enough.

    return <Form onSubmit={handleSubmit(submitAction)}>


            <Row>

                {stryMutAct_9fa48("648") ? initialContents || <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control data-testid="UCSBDateForm-id" id="id" type="text" {...register("id")} value={initialContents.id} disabled />
                        </Form.Group>
                    </Col> : stryMutAct_9fa48("647") ? false : stryMutAct_9fa48("646") ? true : (stryCov_9fa48("646", "647", "648"), initialContents && <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control data-testid="UCSBDateForm-id" id="id" type="text" {...register(stryMutAct_9fa48("649") ? "" : (stryCov_9fa48("649"), "id"))} value={initialContents.id} disabled />
                        </Form.Group>
                    </Col>)}

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="quarterYYYYQ">Quarter YYYYQ</Form.Label>
                        <Form.Control data-testid="UCSBDateForm-quarterYYYYQ" id="quarterYYYYQ" type="text" isInvalid={Boolean(errors.quarterYYYYQ)} {...register(stryMutAct_9fa48("650") ? "" : (stryCov_9fa48("650"), "quarterYYYYQ"), stryMutAct_9fa48("651") ? {} : (stryCov_9fa48("651"), {
              required: stryMutAct_9fa48("652") ? false : (stryCov_9fa48("652"), true),
              pattern: yyyyq_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("655") ? errors.quarterYYYYQ || 'QuarterYYYYQ is required. ' : stryMutAct_9fa48("654") ? false : stryMutAct_9fa48("653") ? true : (stryCov_9fa48("653", "654", "655"), errors.quarterYYYYQ && (stryMutAct_9fa48("656") ? "" : (stryCov_9fa48("656"), 'QuarterYYYYQ is required. ')))}
                            {stryMutAct_9fa48("659") ? errors.quarterYYYYQ?.type === 'pattern' || 'QuarterYYYYQ must be in the format YYYYQ, e.g. 20224 for Fall 2022' : stryMutAct_9fa48("658") ? false : stryMutAct_9fa48("657") ? true : (stryCov_9fa48("657", "658", "659"), (stryMutAct_9fa48("661") ? errors.quarterYYYYQ?.type !== 'pattern' : stryMutAct_9fa48("660") ? true : (stryCov_9fa48("660", "661"), (stryMutAct_9fa48("662") ? errors.quarterYYYYQ.type : (stryCov_9fa48("662"), errors.quarterYYYYQ?.type)) === (stryMutAct_9fa48("663") ? "" : (stryCov_9fa48("663"), 'pattern')))) && (stryMutAct_9fa48("664") ? "" : (stryCov_9fa48("664"), 'QuarterYYYYQ must be in the format YYYYQ, e.g. 20224 for Fall 2022')))}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="localDateTime">Date (iso format)</Form.Label>
                        <Form.Control data-testid="UCSBDateForm-localDateTime" id="localDateTime" type="datetime-local" isInvalid={Boolean(errors.localDateTime)} {...register(stryMutAct_9fa48("665") ? "" : (stryCov_9fa48("665"), "localDateTime"), stryMutAct_9fa48("666") ? {} : (stryCov_9fa48("666"), {
              required: stryMutAct_9fa48("667") ? false : (stryCov_9fa48("667"), true),
              pattern: isodate_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("670") ? errors.localDateTime || 'LocalDateTime is required. ' : stryMutAct_9fa48("669") ? false : stryMutAct_9fa48("668") ? true : (stryCov_9fa48("668", "669", "670"), errors.localDateTime && (stryMutAct_9fa48("671") ? "" : (stryCov_9fa48("671"), 'LocalDateTime is required. ')))}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>

                <Col>



                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control data-testid="UCSBDateForm-name" id="name" type="text" isInvalid={Boolean(errors.name)} {...register(stryMutAct_9fa48("672") ? "" : (stryCov_9fa48("672"), "name"), stryMutAct_9fa48("673") ? {} : (stryCov_9fa48("673"), {
              required: stryMutAct_9fa48("674") ? "" : (stryCov_9fa48("674"), "Name is required.")
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("675") ? errors.name.message : (stryCov_9fa48("675"), errors.name?.message)}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button type="submit" data-testid="UCSBDateForm-submit">
                        {buttonLabel}
                    </Button>
                    <Button variant="Secondary" onClick={stryMutAct_9fa48("676") ? () => undefined : (stryCov_9fa48("676"), () => navigate(stryMutAct_9fa48("677") ? +1 : (stryCov_9fa48("677"), -1)))} data-testid="UCSBDateForm-cancel">
                        Cancel
                    </Button>
                </Col>
            </Row>
        </Form>;
  }
}
export default UCSBDateForm;