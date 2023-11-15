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
function MenuItemReviewForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("215") ? "" : (stryCov_9fa48("215"), 'Create')
}) {
  if (stryMutAct_9fa48("216")) {
    {}
  } else {
    stryCov_9fa48("216");
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
    const isodate_regex =
    // Stryker disable next-line Regex
    /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/i;
    return <Form onSubmit={handleSubmit(submitAction)}>
      <Row>
        {stryMutAct_9fa48("259") ? initialContents || <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="id">Id</Form.Label>
              <Form.Control data-testid="MenuItemReviewForm-id" id="id" type="text" {...register('id')} value={initialContents.id} disabled />
            </Form.Group>
          </Col> : stryMutAct_9fa48("258") ? false : stryMutAct_9fa48("257") ? true : (stryCov_9fa48("257", "258", "259"), initialContents && <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="id">Id</Form.Label>
              <Form.Control data-testid="MenuItemReviewForm-id" id="id" type="text" {...register(stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), 'id'))} value={initialContents.id} disabled />
            </Form.Group>
          </Col>)}

        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="itemId">ItemId</Form.Label>
            <Form.Control data-testid="MenuItemReviewForm-itemId" id="itemId" type="text" isInvalid={Boolean(errors.itemId)} {...register(stryMutAct_9fa48("261") ? "" : (stryCov_9fa48("261"), 'itemId'), stryMutAct_9fa48("262") ? {} : (stryCov_9fa48("262"), {
              required: stryMutAct_9fa48("263") ? false : (stryCov_9fa48("263"), true)
            }))} />
            <Form.Control.Feedback type="invalid">
              {stryMutAct_9fa48("266") ? errors.itemId || 'itemId is required.' : stryMutAct_9fa48("265") ? false : stryMutAct_9fa48("264") ? true : (stryCov_9fa48("264", "265", "266"), errors.itemId && (stryMutAct_9fa48("267") ? "" : (stryCov_9fa48("267"), 'itemId is required.')))}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dateReviewed">Date</Form.Label>
            <Form.Control data-testid="MenuItemReviewForm-dateReviewed" id="dateReviewed" type="datetime-local" isInvalid={Boolean(errors.dateReviewed)} {...register(stryMutAct_9fa48("268") ? "" : (stryCov_9fa48("268"), 'dateReviewed'), stryMutAct_9fa48("269") ? {} : (stryCov_9fa48("269"), {
              required: stryMutAct_9fa48("270") ? false : (stryCov_9fa48("270"), true),
              pattern: isodate_regex
            }))} />
            <Form.Control.Feedback type="invalid">
              {stryMutAct_9fa48("273") ? errors.dateReviewed || 'Date Reviewed is required.' : stryMutAct_9fa48("272") ? false : stryMutAct_9fa48("271") ? true : (stryCov_9fa48("271", "272", "273"), errors.dateReviewed && (stryMutAct_9fa48("274") ? "" : (stryCov_9fa48("274"), 'Date Reviewed is required.')))}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="reviewerEmail">Reviewer Email</Form.Label>
            <Form.Control data-testid="MenuItemReviewForm-reviewerEmail" id="reviewerEmail" type="text" isInvalid={Boolean(errors.reviewerEmail)} {...register(stryMutAct_9fa48("275") ? "" : (stryCov_9fa48("275"), 'reviewerEmail'), stryMutAct_9fa48("276") ? {} : (stryCov_9fa48("276"), {
              required: stryMutAct_9fa48("277") ? "" : (stryCov_9fa48("277"), 'Reviewer Email is required.')
            }))} />
            <Form.Control.Feedback type="invalid">
              {stryMutAct_9fa48("278") ? errors.reviewerEmail.message : (stryCov_9fa48("278"), errors.reviewerEmail?.message)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="stars">Stars</Form.Label>
            <Form.Control data-testid="MenuItemReviewForm-stars" id="stars" type="text" isInvalid={Boolean(errors.stars)} {...register(stryMutAct_9fa48("279") ? "" : (stryCov_9fa48("279"), 'stars'), stryMutAct_9fa48("280") ? {} : (stryCov_9fa48("280"), {
              required: stryMutAct_9fa48("281") ? false : (stryCov_9fa48("281"), true)
            }))} />
            <Form.Control.Feedback type="invalid">
              {stryMutAct_9fa48("284") ? errors.stars || 'Stars is required.' : stryMutAct_9fa48("283") ? false : stryMutAct_9fa48("282") ? true : (stryCov_9fa48("282", "283", "284"), errors.stars && (stryMutAct_9fa48("285") ? "" : (stryCov_9fa48("285"), 'Stars is required.')))}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="comments">Comments</Form.Label>
            <Form.Control data-testid="MenuItemReviewForm-comments" id="comments" type="text" isInvalid={Boolean(errors.comments)} {...register(stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), 'comments'), stryMutAct_9fa48("287") ? {} : (stryCov_9fa48("287"), {
              required: stryMutAct_9fa48("288") ? "" : (stryCov_9fa48("288"), 'Comments are required.')
            }))} />
            <Form.Control.Feedback type="invalid">
              {stryMutAct_9fa48("289") ? errors.comments.message : (stryCov_9fa48("289"), errors.comments?.message)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="submit" data-testid="MenuItemReviewForm-submit">
            {buttonLabel}
          </Button>
          <Button variant="Secondary" onClick={stryMutAct_9fa48("290") ? () => undefined : (stryCov_9fa48("290"), () => navigate(stryMutAct_9fa48("291") ? +1 : (stryCov_9fa48("291"), -1)))} data-testid="MenuItemReviewForm-cancel">
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>;
  }
}
export default MenuItemReviewForm;