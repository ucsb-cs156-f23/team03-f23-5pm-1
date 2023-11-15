import React from 'react';
import OurTable, { ButtonColumn } from 'main/components/OurTable';

import { useBackendMutation } from 'main/utils/useBackend';
import {
  cellToAxiosParamsDelete,
  onDeleteSuccess,
} from 'main/utils/RecommendationRequestUtils';
import { useNavigate } from 'react-router-dom';
import { hasRole } from 'main/utils/currentUser';

export default function RecommendationRequestsTable({ requests, currentUser }) {
  const navigate = useNavigate();

  const editCallback = (cell) => {
    navigate(`/recommendationrequests/edit/${cell.row.values.id}`);
  };

  // Stryker disable all : hard to test for query caching

  const deleteMutation = useBackendMutation(
    cellToAxiosParamsDelete,
    { onSuccess: onDeleteSuccess },
    ['/api/recommendationrequests/all']
  );
  // Stryker restore all

  // Stryker disable next-line all : TODO try to make a good test for this
  const deleteCallback = async (cell) => {
    deleteMutation.mutate(cell);
  };

  const columns = [
    {
      Header: 'id',
      accessor: 'id', // accessor is the "key" in the data
    },
    {
      Header: 'Your Email',
      accessor: 'requesterEmail',
    },
    {
      Header: "Professor's Email",
      accessor: 'professorEmail',
    },
    {
      Header: 'Reason',
      accessor: 'explanation',
    },
    {
      Header: 'Need By Date',
      accessor: 'dateNeeded',
    },
    {
      Header: 'Date of Request',
      accessor: 'dateRequested',
    },
    {
      Header: 'Done?',
      // Stryker disable next-line all : TODO try to make a good test for this
      accessor: (row, _rowIndex) => String(row.done), // hack needed for boolean values to show up
    },
  ];

  if (hasRole(currentUser, 'ROLE_ADMIN')) {
    columns.push(
      ButtonColumn(
        'Edit',
        'primary',
        editCallback,
        'RecommendationRequestsTable'
      )
    );
    columns.push(
      ButtonColumn(
        'Delete',
        'danger',
        deleteCallback,
        'RecommendationRequestsTable'
      )
    );
  }

  return (
    <OurTable
      data={requests}
      columns={columns}
      testid={'RecommendationRequestsTable'}
    />
  );
}
