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
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { hasRole } from 'main/utils/currentUser';
import AppNavbarLocalhost from 'main/components/Nav/AppNavbarLocalhost';
export default function AppNavbar({
  currentUser,
  systemInfo,
  doLogout,
  currentUrl = window.location.href
}) {
  if (stryMutAct_9fa48("329")) {
    {}
  } else {
    stryCov_9fa48("329");
    return <>
      {stryMutAct_9fa48("332") ? currentUrl.startsWith('http://localhost:3000') || currentUrl.startsWith('http://127.0.0.1:3000') || <AppNavbarLocalhost url={currentUrl} /> : stryMutAct_9fa48("331") ? false : stryMutAct_9fa48("330") ? true : (stryCov_9fa48("330", "331", "332"), (stryMutAct_9fa48("334") ? currentUrl.startsWith('http://localhost:3000') && currentUrl.startsWith('http://127.0.0.1:3000') : stryMutAct_9fa48("333") ? true : (stryCov_9fa48("333", "334"), (stryMutAct_9fa48("335") ? currentUrl.endsWith('http://localhost:3000') : (stryCov_9fa48("335"), currentUrl.startsWith(stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), 'http://localhost:3000')))) || (stryMutAct_9fa48("337") ? currentUrl.endsWith('http://127.0.0.1:3000') : (stryCov_9fa48("337"), currentUrl.startsWith(stryMutAct_9fa48("338") ? "" : (stryCov_9fa48("338"), 'http://127.0.0.1:3000')))))) && <AppNavbarLocalhost url={currentUrl} />)}
      <Navbar expand="xl" variant="dark" bg="dark" sticky="top" data-testid="AppNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Example
          </Navbar.Brand>

          <Navbar.Toggle />

          <Nav className="me-auto">
            {stryMutAct_9fa48("341") ? systemInfo?.springH2ConsoleEnabled || <>
                <Nav.Link href="/h2-console">H2Console</Nav.Link>
              </> : stryMutAct_9fa48("340") ? false : stryMutAct_9fa48("339") ? true : (stryCov_9fa48("339", "340", "341"), (stryMutAct_9fa48("342") ? systemInfo.springH2ConsoleEnabled : (stryCov_9fa48("342"), systemInfo?.springH2ConsoleEnabled)) && <>
                <Nav.Link href="/h2-console">H2Console</Nav.Link>
              </>)}
            {stryMutAct_9fa48("345") ? systemInfo?.showSwaggerUILink || <>
                <Nav.Link href="/swagger-ui/index.html">Swagger</Nav.Link>
              </> : stryMutAct_9fa48("344") ? false : stryMutAct_9fa48("343") ? true : (stryCov_9fa48("343", "344", "345"), (stryMutAct_9fa48("346") ? systemInfo.showSwaggerUILink : (stryCov_9fa48("346"), systemInfo?.showSwaggerUILink)) && <>
                <Nav.Link href="/swagger-ui/index.html">Swagger</Nav.Link>
              </>)}
          </Nav>

          <>
            {/* be sure that each NavDropdown has a unique id and data-testid  */}
          </>

          <Navbar.Collapse className="justify-content-between">
            <Nav className="mr-auto">
              {stryMutAct_9fa48("349") ? hasRole(currentUser, 'ROLE_ADMIN') || <NavDropdown title="Admin" id="appnavbar-admin-dropdown" data-testid="appnavbar-admin-dropdown">
                  <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
                </NavDropdown> : stryMutAct_9fa48("348") ? false : stryMutAct_9fa48("347") ? true : (stryCov_9fa48("347", "348", "349"), hasRole(currentUser, stryMutAct_9fa48("350") ? "" : (stryCov_9fa48("350"), 'ROLE_ADMIN')) && <NavDropdown title="Admin" id="appnavbar-admin-dropdown" data-testid="appnavbar-admin-dropdown">
                  <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
                </NavDropdown>)}
            </Nav>
            {stryMutAct_9fa48("353") ? currentUser && currentUser.loggedIn || <>
                <Nav.Link as={Link} to="/restaurants">
                  Restaurants
                </Nav.Link>
                <Nav.Link as={Link} to="/ucsbdates">
                  UCSB Dates
                </Nav.Link>
                <Nav.Link as={Link} to="/recommendationrequests">
                  Recommendation Requests
                </Nav.Link>
                <Nav.Link as={Link} to="/organizations">
                  UCSB Organizations
                </Nav.Link>
                <Nav.Link as={Link} to="/menuitemreview">
                  Menu Item Reviews
                </Nav.Link>
                <Nav.Link as={Link} to="/articles">
                  Articles
                </Nav.Link>
                <Nav.Link as={Link} to="/ucsbdiningcommonsmenuitem">
                  UCSBDiningCommonsMenuItem
                </Nav.Link>
                <Nav.Link as={Link} to="/helprequest">
                  Help Requests
                </Nav.Link>
              </> : stryMutAct_9fa48("352") ? false : stryMutAct_9fa48("351") ? true : (stryCov_9fa48("351", "352", "353"), (stryMutAct_9fa48("355") ? currentUser || currentUser.loggedIn : stryMutAct_9fa48("354") ? true : (stryCov_9fa48("354", "355"), currentUser && currentUser.loggedIn)) && <>
                <Nav.Link as={Link} to="/restaurants">
                  Restaurants
                </Nav.Link>
                <Nav.Link as={Link} to="/ucsbdates">
                  UCSB Dates
                </Nav.Link>
                <Nav.Link as={Link} to="/recommendationrequests">
                  Recommendation Requests
                </Nav.Link>
                <Nav.Link as={Link} to="/organizations">
                  UCSB Organizations
                </Nav.Link>
                <Nav.Link as={Link} to="/menuitemreview">
                  Menu Item Reviews
                </Nav.Link>
                <Nav.Link as={Link} to="/articles">
                  Articles
                </Nav.Link>
                <Nav.Link as={Link} to="/ucsbdiningcommonsmenuitem">
                  UCSBDiningCommonsMenuItem
                </Nav.Link>
                <Nav.Link as={Link} to="/helprequest">
                  Help Requests
                </Nav.Link>
              </>)}
            <Nav className="ml-auto">
              {(stryMutAct_9fa48("358") ? currentUser || currentUser.loggedIn : stryMutAct_9fa48("357") ? false : stryMutAct_9fa48("356") ? true : (stryCov_9fa48("356", "357", "358"), currentUser && currentUser.loggedIn)) ? <>
                  <Navbar.Text className="me-3" as={Link} to="/profile">
                    Welcome, {currentUser.root.user.email}
                  </Navbar.Text>
                  <Button onClick={doLogout}>Log Out</Button>
                </> : <Button href="/oauth2/authorization/google">Log In</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>;
  }
}