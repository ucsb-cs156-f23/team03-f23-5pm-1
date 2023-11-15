// @ts-nocheck
import React from 'react';
import OrganizationTable from 'main/components/UCSBOrganization/UCSBOrganizationTable';
import { organizationFixtures } from 'fixtures/ucsbOrganizationFixtures';
import { currentUserFixtures } from 'fixtures/currentUserFixtures';
import { rest } from 'msw';

export default {
  title: 'components/UCSBOrganization/UCSBOrganizationTable',
  component: OrganizationTable,
};

const Template = (args) => {
  return <OrganizationTable {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  organizations: [],
};

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.args = {
  organizations: organizationFixtures.threeOrganizations,
  currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsAdminUser = Template.bind({});
ThreeItemsAdminUser.args = {
  organizations: organizationFixtures.threeOrganizations,
  currentUser: currentUserFixtures.adminUser,
};

ThreeItemsAdminUser.parameters = {
  msw: [
    rest.delete('/api/UCSBOrganization', (req, res, ctx) => {
      window.alert('DELETE: ' + JSON.stringify(req.url));
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
};
