import React from 'react';
import OurTable, { ButtonColumn } from 'main/components/OurTable';

import { useBackendMutation } from 'main/utils/useBackend';
import {
  cellToAxiosParamsDelete,
  onDeleteSuccess,
} from 'main/utils/MenuItemReviewUtils';
import { useNavigate } from 'react-router-dom';
import { hasRole } from 'main/utils/currentUser';

export default function MenuItemReviewTable({ menuItemReviews, currentUser }) {
  const navigate = useNavigate();

  const editCallback = (cell) => {
    navigate(`/MenuItemReview/edit/${cell.row.values.id}`);
  };

  // Stryker disable all : hard to test for query caching

  const deleteMutation = useBackendMutation(
    cellToAxiosParamsDelete,
    { onSuccess: onDeleteSuccess },
    ['/api/MenuItemReview/all']
  );
  // Stryker restore all

  // Stryker disable next-line all : TODO try to make a good test for this
  const deleteCallback = async (cell) => {
    deleteMutation.mutate(cell);
  };

  // Stryker restore all

  const columns = [
    {
      Header: 'id',
      accessor: 'id', // accessor is the "key" in the data
    },
    {
      Header: 'itemId',
      accessor: 'itemId',
    },
    {
      Header: 'reviewerEmail',
      accessor: 'reviewerEmail',
    },
    {
      Header: 'stars',
      accessor: 'stars',
    },
    {
      Header: 'dateReviewed',
      accessor: 'dateReviewed',
    },
    {
      Header: 'comments',
      accessor: 'comments',
    },
  ];

  if (hasRole(currentUser, 'ROLE_ADMIN')) {
    columns.push(
      ButtonColumn('Edit', 'primary', editCallback, 'MenuItemReviewTable')
    );
    columns.push(
      ButtonColumn('Delete', 'danger', deleteCallback, 'MenuItemReviewTable')
    );
  }

  return (
    <OurTable
      data={menuItemReviews}
      columns={columns}
      testid={'MenuItemReviewTable'}
    />
  );
}
