import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'main/pages/HomePage';
import ProfilePage from 'main/pages/ProfilePage';
import AdminUsersPage from 'main/pages/AdminUsersPage';

import UCSBDatesIndexPage from 'main/pages/UCSBDates/UCSBDatesIndexPage';
import UCSBDatesCreatePage from 'main/pages/UCSBDates/UCSBDatesCreatePage';
import UCSBDatesEditPage from 'main/pages/UCSBDates/UCSBDatesEditPage';

import RecommendationRequestsIndexPage from 'main/pages/RecommendationRequests/RecommendationRequestsIndexPage';
import RecommendationRequestsCreatePage from 'main/pages/RecommendationRequests/RecommendationRequestsCreatePage';
import RecommendationRequestsEditPage from 'main/pages/RecommendationRequests/RecommendationRequestsEditPage';

import RestaurantIndexPage from 'main/pages/Restaurants/RestaurantIndexPage';
import RestaurantCreatePage from 'main/pages/Restaurants/RestaurantCreatePage';
import RestaurantEditPage from 'main/pages/Restaurants/RestaurantEditPage';

import UCSBOrganizationIndexPage from 'main/pages/UCSBOrganization/UCSBOrganizationIndexPage';
import UCSBOrganizationCreatePage from 'main/pages/UCSBOrganization/UCSBOrganizationCreatePage';
import UCSBOrganizationEditPage from 'main/pages/UCSBOrganization/UCSBOrganizationEditPage';

import HelpRequestIndexPage from 'main/pages/HelpRequest/HelpRequestIndexPage';
import HelpRequestCreatePage from 'main/pages/HelpRequest/HelpRequestCreatePage';
import HelpRequestEditPage from 'main/pages/HelpRequest/HelpRequestEditPage';

import MenuItemReviewIndexPage from 'main/pages/MenuItemReview/MenuItemReviewIndexPage';
import MenuItemReviewCreatePage from 'main/pages/MenuItemReview/MenuItemReviewCreatePage';
import MenuItemReviewEditPage from 'main/pages/MenuItemReview/MenuItemReviewEditPage';

import ArticlesIndexPage from 'main/pages/Articles/ArticlesIndexPage';
import ArticlesCreatePage from 'main/pages/Articles/ArticlesCreatePage';
import ArticlesEditPage from 'main/pages/Articles/ArticlesEditPage';

import UCSBDiningCommonsMenuItemIndexPage from 'main/pages/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemIndexPage';
import UCSBDiningCommonsMenuItemCreatePage from 'main/pages/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemCreatePage';
import UCSBDiningCommonsMenuItemEditPage from 'main/pages/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemEditPage';

import { hasRole, useCurrentUser } from 'main/utils/currentUser';

import 'bootstrap/dist/css/bootstrap.css';
// import ArticlesIndexPage from "main/pages/Articles/ArticlesIndexPage";

function App() {
  const { data: currentUser } = useCurrentUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <Route exact path="/admin/users" element={<AdminUsersPage />} />
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route exact path="/ucsbdates" element={<UCSBDatesIndexPage />} />
          </>
        )}

        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/ucsbdates/edit/:id"
              element={<UCSBDatesEditPage />}
            />
            <Route
              exact
              path="/ucsbdates/create"
              element={<UCSBDatesCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route
              exact
              path="/restaurants"
              element={<RestaurantIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/restaurants/edit/:id"
              element={<RestaurantEditPage />}
            />
            <Route
              exact
              path="/restaurants/create"
              element={<RestaurantCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route
              exact
              path="/organizations"
              element={<UCSBOrganizationIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/organizations/edit/:orgCode"
              element={<UCSBOrganizationEditPage />}
            />
            <Route
              exact
              path="/organizations/create"
              element={<UCSBOrganizationCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route
              exact
              path="/menuitemreview"
              element={<MenuItemReviewIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/menuitemreview/edit/:id"
              element={<MenuItemReviewEditPage />}
            />
            <Route
              exact
              path="/menuitemreview/create"
              element={<MenuItemReviewCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route exact path="/articles" element={<ArticlesIndexPage />} />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/articles/edit/:id"
              element={<ArticlesEditPage />}
            />
            <Route
              exact
              path="/articles/create"
              element={<ArticlesCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route
              exact
              path="/ucsbdiningcommonsmenuitem"
              element={<UCSBDiningCommonsMenuItemIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/ucsbdiningcommonsmenuitem/edit/:id"
              element={<UCSBDiningCommonsMenuItemEditPage />}
            />
            <Route
              exact
              path="/ucsbdiningcommonsmenuitem/create"
              element={<UCSBDiningCommonsMenuItemCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route
              exact
              path="/recommendationrequests"
              element={<RecommendationRequestsIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/recommendationrequests/edit/:id"
              element={<RecommendationRequestsEditPage />}
            />
            <Route
              exact
              path="/recommendationrequests/create"
              element={<RecommendationRequestsCreatePage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_USER') && (
          <>
            <Route
              exact
              path="/helprequest"
              element={<HelpRequestIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, 'ROLE_ADMIN') && (
          <>
            <Route
              exact
              path="/helprequest/edit/:id"
              element={<HelpRequestEditPage />}
            />
            <Route
              exact
              path="/helprequest/create"
              element={<HelpRequestCreatePage />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
