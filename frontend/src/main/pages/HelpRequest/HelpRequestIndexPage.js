import React from 'react'
import { useBackend } from 'main/utils/useBackend';

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import HelpRequestTable from 'main/components/HelpRequest/HelpRequestTable';
import { Button } from 'react-bootstrap';
import { useCurrentUser , hasRole} from 'main/utils/currentUser';

export default function HelpRequestIndexPage() {

  // Stryker disable all : placeholder for future implementation
  /*return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Index page not yet implemented</h1>
        <p><a href="/placeholder/create">Create</a></p>
        <p><a href="/placeholder/edit/1">Edit</a></p>
      </div>
    </BasicLayout>*/

    const currentUser = useCurrentUser();

    const createButton = () => {
      if (hasRole(currentUser, "ROLE_ADMIN")) {
          return (
              <Button
                  variant="primary"
                  href="/helprequest/create"
                  style={{ float: "right" }}
              >
                  Create HelpRequest 
              </Button>
          )
      } 
    }

    const { data: helprequest, error: _error, status: _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      ["/api/HelpRequest/all"],
      { method: "GET", url: "/api/HelpRequest/all" },
      []
    );

    return (
      <BasicLayout>
        <div className="pt-2">
          {createButton()}
          <h1>HelpRequest</h1>
          <HelpRequestTable helprequest={helprequest} currentUser={currentUser} />
        </div>
      </BasicLayout>

  )
}
