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
function HelpRequestForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("78") ? "" : (stryCov_9fa48("78"), "Create")
}) {
  if (stryMutAct_9fa48("79")) {
    {}
  } else {
    stryCov_9fa48("79");
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
    const boolean_regex = stryMutAct_9fa48("121") ? /^(true|false)/ : stryMutAct_9fa48("120") ? /(true|false)$/ : (stryCov_9fa48("120", "121"), /^(true|false)$/);
    // Stryker disable next-line all
    //const yyyyq_regex = /((19)|(20))\d{2}[1-4]/i; // Accepts from 1900-2099 followed by 1-4.  Close enough.

    return <Form onSubmit={handleSubmit(submitAction)}>


            <Row>

                {stryMutAct_9fa48("124") ? initialContents || <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control data-testid="HelpRequestForm-id" id="id" type="text" {...register("id")} value={initialContents.id} disabled />
                        </Form.Group>
                    </Col> : stryMutAct_9fa48("123") ? false : stryMutAct_9fa48("122") ? true : (stryCov_9fa48("122", "123", "124"), initialContents && <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control data-testid="HelpRequestForm-id" id="id" type="text" {...register(stryMutAct_9fa48("125") ? "" : (stryCov_9fa48("125"), "id"))} value={initialContents.id} disabled />
                        </Form.Group>
                    </Col>)}

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="requesterEmail">Email</Form.Label>
                        <Form.Control data-testid="HelpRequestForm-requesterEmail" id="requesterEmail" type="text" isInvalid={Boolean(errors.requesterEmail)} {...register(stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), "requesterEmail"), stryMutAct_9fa48("127") ? {} : (stryCov_9fa48("127"), {
              required: stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), "Email is required.")
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("129") ? errors.requesterEmail.message : (stryCov_9fa48("129"), errors.requesterEmail?.message)}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="teamId">Team ID</Form.Label>
                        <Form.Control data-testid="HelpRequestForm-teamId" id="teamId" type="text" isInvalid={Boolean(errors.teamId)} {...register(stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), "teamId"), stryMutAct_9fa48("131") ? {} : (stryCov_9fa48("131"), {
              required: stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), "Team ID is required.")
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("133") ? errors.teamId.message : (stryCov_9fa48("133"), errors.teamId?.message)}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="tableOrBreakoutRoom">Table/Breakout Room</Form.Label>
                        <Form.Control data-testid="HelpRequestForm-tableOrBreakoutRoom" id="tableOrBreakoutRoom" type="text" isInvalid={Boolean(errors.tableOrBreakoutRoom)} {...register(stryMutAct_9fa48("134") ? "" : (stryCov_9fa48("134"), "tableOrBreakoutRoom"), stryMutAct_9fa48("135") ? {} : (stryCov_9fa48("135"), {
              required: stryMutAct_9fa48("136") ? "" : (stryCov_9fa48("136"), "Table/Breakout room number is required.")
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("137") ? errors.tableOrBreakoutRoom.message : (stryCov_9fa48("137"), errors.tableOrBreakoutRoom?.message)}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="explanation">Explanation</Form.Label>
                        <Form.Control data-testid="HelpRequestForm-explanation" id="explanation" type="text" isInvalid={Boolean(errors.explanation)} {...register(stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), "explanation"), stryMutAct_9fa48("139") ? {} : (stryCov_9fa48("139"), {
              required: stryMutAct_9fa48("140") ? "" : (stryCov_9fa48("140"), "Explanation is required.")
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("141") ? errors.explanation.message : (stryCov_9fa48("141"), errors.explanation?.message)}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="solved">Solved</Form.Label>
                        <Form.Control data-testid="HelpRequestForm-solved" id="solved" type="text" isInvalid={Boolean(errors.solved)} {...register(stryMutAct_9fa48("142") ? "" : (stryCov_9fa48("142"), "solved"), stryMutAct_9fa48("143") ? {} : (stryCov_9fa48("143"), {
              required: stryMutAct_9fa48("144") ? false : (stryCov_9fa48("144"), true),
              pattern: boolean_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("147") ? errors.solved || "Input is required." : stryMutAct_9fa48("146") ? false : stryMutAct_9fa48("145") ? true : (stryCov_9fa48("145", "146", "147"), errors.solved && (stryMutAct_9fa48("148") ? "" : (stryCov_9fa48("148"), "Input is required.")))}
                            {stryMutAct_9fa48("151") ? errors.solved?.type === 'pattern' || "Must be 'true' or 'false'" : stryMutAct_9fa48("150") ? false : stryMutAct_9fa48("149") ? true : (stryCov_9fa48("149", "150", "151"), (stryMutAct_9fa48("153") ? errors.solved?.type !== 'pattern' : stryMutAct_9fa48("152") ? true : (stryCov_9fa48("152", "153"), (stryMutAct_9fa48("154") ? errors.solved.type : (stryCov_9fa48("154"), errors.solved?.type)) === (stryMutAct_9fa48("155") ? "" : (stryCov_9fa48("155"), 'pattern')))) && (stryMutAct_9fa48("156") ? "" : (stryCov_9fa48("156"), "Must be 'true' or 'false'")))}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="requestTime">Date (iso format)</Form.Label>
                        <Form.Control data-testid="HelpRequestForm-requestTime" id="requestTime" type="datetime-local" isInvalid={Boolean(errors.requestTime)} {...register(stryMutAct_9fa48("157") ? "" : (stryCov_9fa48("157"), "requestTime"), stryMutAct_9fa48("158") ? {} : (stryCov_9fa48("158"), {
              required: stryMutAct_9fa48("159") ? false : (stryCov_9fa48("159"), true),
              pattern: isodate_regex
            }))} />
                        <Form.Control.Feedback type="invalid">
                            {stryMutAct_9fa48("162") ? errors.requestTime || 'Date is required.' : stryMutAct_9fa48("161") ? false : stryMutAct_9fa48("160") ? true : (stryCov_9fa48("160", "161", "162"), errors.requestTime && (stryMutAct_9fa48("163") ? "" : (stryCov_9fa48("163"), 'Date is required.')))}
                            {stryMutAct_9fa48("166") ? errors.solved?.type === 'pattern' || 'Request time must be in ISO format' : stryMutAct_9fa48("165") ? false : stryMutAct_9fa48("164") ? true : (stryCov_9fa48("164", "165", "166"), (stryMutAct_9fa48("168") ? errors.solved?.type !== 'pattern' : stryMutAct_9fa48("167") ? true : (stryCov_9fa48("167", "168"), (stryMutAct_9fa48("169") ? errors.solved.type : (stryCov_9fa48("169"), errors.solved?.type)) === (stryMutAct_9fa48("170") ? "" : (stryCov_9fa48("170"), 'pattern')))) && (stryMutAct_9fa48("171") ? "" : (stryCov_9fa48("171"), 'Request time must be in ISO format')))}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button type="submit" data-testid="HelpRequestForm-submit">
                        {buttonLabel}
                    </Button>
                    <Button variant="Secondary" onClick={stryMutAct_9fa48("172") ? () => undefined : (stryCov_9fa48("172"), () => navigate(stryMutAct_9fa48("173") ? +1 : (stryCov_9fa48("173"), -1)))} data-testid="HelpRequestForm-cancel">
                        Cancel
                    </Button>
                </Col>
            </Row>
            
        </Form>;
  }
}
export default HelpRequestForm;