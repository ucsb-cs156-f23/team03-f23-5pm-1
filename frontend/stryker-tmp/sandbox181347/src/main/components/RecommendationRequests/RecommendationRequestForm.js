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
function RecommendationRequestForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), "Create")
}) {
  if (stryMutAct_9fa48("389")) {
    {}
  } else {
    stryCov_9fa48("389");
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
    const email_regex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    return <Form onSubmit={handleSubmit(submitAction)}>


            <Row>
                {stryMutAct_9fa48("438") ? initialContents || <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control data-testid="RecommendationRequestForm-id" id="id" type="text" {...register("id")} value={initialContents.id} disabled />
                        </Form.Group>
                    </Col> : stryMutAct_9fa48("437") ? false : stryMutAct_9fa48("436") ? true : (stryCov_9fa48("436", "437", "438"), initialContents && <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control data-testid="RecommendationRequestForm-id" id="id" type="text" {...register(stryMutAct_9fa48("439") ? "" : (stryCov_9fa48("439"), "id"))} value={initialContents.id} disabled />
                        </Form.Group>
                    </Col>)}
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="requesterEmail">Your Email</Form.Label>
                        <Form.Control data-testid="RecommendationRequestForm-requesterEmail" id="requesterEmail" type="text" isInvalid={Boolean(errors.requesterEmail)} {...register(stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), "requesterEmail"), stryMutAct_9fa48("441") ? {} : (stryCov_9fa48("441"), {
              required: stryMutAct_9fa48("442") ? false : (stryCov_9fa48("442"), true),
              pattern: email_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("445") ? errors.requesterEmail?.type === 'required' || 'Your email is required. ' : stryMutAct_9fa48("444") ? false : stryMutAct_9fa48("443") ? true : (stryCov_9fa48("443", "444", "445"), (stryMutAct_9fa48("447") ? errors.requesterEmail?.type !== 'required' : stryMutAct_9fa48("446") ? true : (stryCov_9fa48("446", "447"), (stryMutAct_9fa48("448") ? errors.requesterEmail.type : (stryCov_9fa48("448"), errors.requesterEmail?.type)) === (stryMutAct_9fa48("449") ? "" : (stryCov_9fa48("449"), 'required')))) && (stryMutAct_9fa48("450") ? "" : (stryCov_9fa48("450"), 'Your email is required. ')))}
                            {stryMutAct_9fa48("453") ? errors.requesterEmail?.type === 'pattern' || 'Your email must be valid. ' : stryMutAct_9fa48("452") ? false : stryMutAct_9fa48("451") ? true : (stryCov_9fa48("451", "452", "453"), (stryMutAct_9fa48("455") ? errors.requesterEmail?.type !== 'pattern' : stryMutAct_9fa48("454") ? true : (stryCov_9fa48("454", "455"), (stryMutAct_9fa48("456") ? errors.requesterEmail.type : (stryCov_9fa48("456"), errors.requesterEmail?.type)) === (stryMutAct_9fa48("457") ? "" : (stryCov_9fa48("457"), 'pattern')))) && (stryMutAct_9fa48("458") ? "" : (stryCov_9fa48("458"), 'Your email must be valid. ')))}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="professorEmail">Professor's Email</Form.Label>
                        <Form.Control data-testid="RecommendationRequestForm-professorEmail" id="professorEmail" type="text" isInvalid={Boolean(errors.professorEmail)} {...register(stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), "professorEmail"), stryMutAct_9fa48("460") ? {} : (stryCov_9fa48("460"), {
              required: stryMutAct_9fa48("461") ? false : (stryCov_9fa48("461"), true),
              pattern: email_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("464") ? errors.professorEmail?.type === 'required' || 'Professor email is required. ' : stryMutAct_9fa48("463") ? false : stryMutAct_9fa48("462") ? true : (stryCov_9fa48("462", "463", "464"), (stryMutAct_9fa48("466") ? errors.professorEmail?.type !== 'required' : stryMutAct_9fa48("465") ? true : (stryCov_9fa48("465", "466"), (stryMutAct_9fa48("467") ? errors.professorEmail.type : (stryCov_9fa48("467"), errors.professorEmail?.type)) === (stryMutAct_9fa48("468") ? "" : (stryCov_9fa48("468"), 'required')))) && (stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), 'Professor email is required. ')))}
                            {stryMutAct_9fa48("472") ? errors.professorEmail?.type === 'pattern' || 'Professor email must be valid. ' : stryMutAct_9fa48("471") ? false : stryMutAct_9fa48("470") ? true : (stryCov_9fa48("470", "471", "472"), (stryMutAct_9fa48("474") ? errors.professorEmail?.type !== 'pattern' : stryMutAct_9fa48("473") ? true : (stryCov_9fa48("473", "474"), (stryMutAct_9fa48("475") ? errors.professorEmail.type : (stryCov_9fa48("475"), errors.professorEmail?.type)) === (stryMutAct_9fa48("476") ? "" : (stryCov_9fa48("476"), 'pattern')))) && (stryMutAct_9fa48("477") ? "" : (stryCov_9fa48("477"), 'Professor email must be valid. ')))}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="dateNeeded">Need By Date (iso format)</Form.Label>
                        <Form.Control data-testid="RecommendationRequestForm-dateNeeded" id="dateNeeded" type="datetime-local" isInvalid={Boolean(errors.dateNeeded)} {...register(stryMutAct_9fa48("478") ? "" : (stryCov_9fa48("478"), "dateNeeded"), stryMutAct_9fa48("479") ? {} : (stryCov_9fa48("479"), {
              required: stryMutAct_9fa48("480") ? false : (stryCov_9fa48("480"), true),
              pattern: isodate_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("483") ? errors.dateNeeded?.type === 'required' || 'Need By Date is required. ' : stryMutAct_9fa48("482") ? false : stryMutAct_9fa48("481") ? true : (stryCov_9fa48("481", "482", "483"), (stryMutAct_9fa48("485") ? errors.dateNeeded?.type !== 'required' : stryMutAct_9fa48("484") ? true : (stryCov_9fa48("484", "485"), (stryMutAct_9fa48("486") ? errors.dateNeeded.type : (stryCov_9fa48("486"), errors.dateNeeded?.type)) === (stryMutAct_9fa48("487") ? "" : (stryCov_9fa48("487"), 'required')))) && (stryMutAct_9fa48("488") ? "" : (stryCov_9fa48("488"), 'Need By Date is required. ')))}
                            {/* {errors.dateNeeded?.type === 'pattern' && 'Need By Date must be in ISO format. '} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="dateRequested">Date of Request (iso format)</Form.Label>
                        <Form.Control data-testid="RecommendationRequestForm-dateRequested" id="dateRequested" type="datetime-local" isInvalid={Boolean(errors.dateRequested)} {...register(stryMutAct_9fa48("489") ? "" : (stryCov_9fa48("489"), "dateRequested"), stryMutAct_9fa48("490") ? {} : (stryCov_9fa48("490"), {
              required: stryMutAct_9fa48("491") ? false : (stryCov_9fa48("491"), true),
              pattern: isodate_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("494") ? errors.dateRequested?.type === 'required' || 'Date of Request is required. ' : stryMutAct_9fa48("493") ? false : stryMutAct_9fa48("492") ? true : (stryCov_9fa48("492", "493", "494"), (stryMutAct_9fa48("496") ? errors.dateRequested?.type !== 'required' : stryMutAct_9fa48("495") ? true : (stryCov_9fa48("495", "496"), (stryMutAct_9fa48("497") ? errors.dateRequested.type : (stryCov_9fa48("497"), errors.dateRequested?.type)) === (stryMutAct_9fa48("498") ? "" : (stryCov_9fa48("498"), 'required')))) && (stryMutAct_9fa48("499") ? "" : (stryCov_9fa48("499"), 'Date of Request is required. ')))}
                            {/* {errors.dateRequested?.type === 'pattern' && 'Date of Request must be in ISO format. '} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="explanation">Reason</Form.Label>
                        <Form.Control data-testid="RecommendationRequestForm-explanation" id="explanation" type="text" isInvalid={Boolean(errors.explanation)} {...register(stryMutAct_9fa48("500") ? "" : (stryCov_9fa48("500"), "explanation"), stryMutAct_9fa48("501") ? {} : (stryCov_9fa48("501"), {
              required: stryMutAct_9fa48("502") ? "" : (stryCov_9fa48("502"), "The reason is required.")
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("503") ? errors.explanation.message : (stryCov_9fa48("503"), errors.explanation?.message)}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="done">Done?</Form.Label>
                        <Form.Check data-testid="RecommendationRequestForm-done" id="done" type="checkbox" label="Check if done" {...register(stryMutAct_9fa48("504") ? "" : (stryCov_9fa48("504"), "done"))} isInvalid={Boolean(errors.done)} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button type="submit" data-testid="RecommendationRequestForm-submit">
                        {buttonLabel}
                    </Button>
                    <Button variant="Secondary" onClick={stryMutAct_9fa48("505") ? () => undefined : (stryCov_9fa48("505"), () => navigate(stryMutAct_9fa48("506") ? +1 : (stryCov_9fa48("506"), -1)))} data-testid="RecommendationRequestForm-cancel">
                        Cancel
                    </Button>
                </Col>
            </Row>
        </Form>;
  }
}
export default RecommendationRequestForm;