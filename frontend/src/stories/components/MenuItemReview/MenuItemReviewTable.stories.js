import React from 'react';
import { menuItemReviewFixtures } from 'fixtures/menuItemReviewFixtures';
import { currentUserFixtures } from 'fixtures/currentUserFixtures';
import { rest } from 'msw';
import MenuItemReviewTable from 'main/components/MenuItemReview/MenuItemReviewTable';

export default {
  title: 'components/MenuItemReview/MenuItemReviewTable',
  component: MenuItemReviewTable,
};

const Template = (args) => {
  return <MenuItemReviewTable {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  dates: [],
};

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.args = {
  dates: menuItemReviewFixtures.threeMenuItemReviews,
  currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsAdminUser = Template.bind({});
ThreeItemsAdminUser.args = {
  dates: menuItemReviewFixtures.threeMenuItemReviews,
  currentUser: currentUserFixtures.adminUser,
};

ThreeItemsAdminUser.parameters = {
  msw: [
    rest.delete('/api/MenuItemReview', (req, res, ctx) => {
      window.alert('DELETE: ' + JSON.stringify(req.url));
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
};