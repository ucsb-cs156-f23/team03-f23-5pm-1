// @ts-nocheck
import React from 'react';
import { apiCurrentUserFixtures } from 'fixtures/currentUserFixtures';
import { systemInfoFixtures } from 'fixtures/systemInfoFixtures';
import { rest } from 'msw';

import OrganizationEditPage from 'main/pages/UCSBOrganization/UCSBOrganizationEditPage';
import { organizationFixtures } from 'fixtures/ucsbOrganizationFixtures';

export default {
  title: 'page//UCSBOrganization/UCSBOrganizationEditPage',
  component: OrganizationEditPage,
};

const Template = () => <OrganizationEditPage storybook={true} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get('/api/currentUser', (_req, res, ctx) => {
      return res(ctx.json(apiCurrentUserFixtures.userOnly));
    }),
    rest.get('/api/systemInfo', (_req, res, ctx) => {
      return res(ctx.json(systemInfoFixtures.showingNeither));
    }),
    rest.get('/api/UCSBOrganization', (_req, res, ctx) => {
      return res(ctx.json(organizationFixtures.threeOrganizations[0]));
    }),
    rest.put('/api/UCSBOrganization', async (req, res, ctx) => {
      var reqBody = await req.text();
      window.alert('PUT: ' + req.url + ' and body: ' + reqBody);
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
};
