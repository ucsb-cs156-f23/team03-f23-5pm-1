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
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private long id;

// private String title;
// private String url;
// private String explanation;
// private String email;
// private LocalDateTime dateAdded;
function ArticlesForm({
  initialContents,
  submitAction,
  buttonLabel = stryMutAct_9fa48("0") ? "" : (stryCov_9fa48("0"), "Create")
}) {
  if (stryMutAct_9fa48("1")) {
    {}
  } else {
    stryCov_9fa48("1");
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
    const testIdPrefix = stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), "ArticlesForm");
    return <Form onSubmit={handleSubmit(submitAction)}>

            {stryMutAct_9fa48("9") ? initialContents || <Form.Group className="mb-3">
                    <Form.Label htmlFor="id">Id</Form.Label>
                    <Form.Control data-testid={testIdPrefix + "-id"} id="id" type="text" {...register("id")} value={initialContents.id} disabled />
                </Form.Group> : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), initialContents && <Form.Group className="mb-3">
                    <Form.Label htmlFor="id">Id</Form.Label>
                    <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), "-id"))} id="id" type="text" {...register(stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), "id"))} value={initialContents.id} disabled />
                </Form.Group>)}

            <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), "-title"))} id="title" type="text" isInvalid={Boolean(errors.title)} {...register(stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), "title"), stryMutAct_9fa48("14") ? {} : (stryCov_9fa48("14"), {
          required: stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), "Title is required."),
          maxLength: stryMutAct_9fa48("16") ? {} : (stryCov_9fa48("16"), {
            value: 30,
            message: stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), "Max length 30 characters")
          })
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("18") ? errors.title.message : (stryCov_9fa48("18"), errors.title?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="url">URL</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), "-url"))} id="url" type="text" isInvalid={Boolean(errors.url)} {...register(stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), "url"), stryMutAct_9fa48("21") ? {} : (stryCov_9fa48("21"), {
          required: stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), "URL is required.")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("23") ? errors.url.message : (stryCov_9fa48("23"), errors.url?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="explanation">Explanation</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), "-explanation"))} id="explanation" type="text" isInvalid={Boolean(errors.explanation)} {...register(stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), "explanation"), stryMutAct_9fa48("26") ? {} : (stryCov_9fa48("26"), {
          required: stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), "Explanation is required.")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("28") ? errors.explanation.message : (stryCov_9fa48("28"), errors.explanation?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), "-email"))} id="email" type="text" isInvalid={Boolean(errors.email)} {...register(stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), "email"), stryMutAct_9fa48("31") ? {} : (stryCov_9fa48("31"), {
          required: stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), "Email is required.")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("33") ? errors.email.message : (stryCov_9fa48("33"), errors.email?.message)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="dateAdded">Date Added</Form.Label>
                <Form.Control data-testid={testIdPrefix + (stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), "-dateAdded"))} id="dateAdded" type="datetime-local" isInvalid={Boolean(errors.dateAdded)} {...register(stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), "dateAdded"), stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
          required: stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), "Date Added is required.")
        }))} />
                <Form.Control.Feedback type="invalid">
                    {stryMutAct_9fa48("38") ? errors.dateAdded.message : (stryCov_9fa48("38"), errors.dateAdded?.message)}
                </Form.Control.Feedback>
            </Form.Group>



            <Button type="submit" data-testid={testIdPrefix + (stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), "-submit"))}>
                {buttonLabel}
            </Button>
            <Button variant="Secondary" onClick={stryMutAct_9fa48("40") ? () => undefined : (stryCov_9fa48("40"), () => navigate(stryMutAct_9fa48("41") ? +1 : (stryCov_9fa48("41"), -1)))} data-testid={testIdPrefix + (stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), "-cancel"))}>
                Cancel
            </Button>

        </Form>;
  }
}
export default ArticlesForm;