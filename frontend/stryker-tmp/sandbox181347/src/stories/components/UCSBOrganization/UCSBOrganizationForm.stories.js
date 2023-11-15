// @ts-nocheck
import React from "react";
import OrganizationForm from "main/components/UCSBOrganization/UCSBOrganizationForm";
import { organizationFixtures } from "fixtures/ucsbOrganizationFixtures";

export default {
  title: "components/UCSBOrganization/UCSBOrganizationForm",
  component: OrganizationForm,
};

const Template = (args) => {
  return <OrganizationForm {...args} />;
};

export const Create = Template.bind({});

Create.args = {
  buttonLabel: "Create",
  submitAction: (data) => {
    console.log("Submit was clicked with data: ", data);
    window.alert("Submit was clicked with data: " + JSON.stringify(data));
  },
};

export const Update = Template.bind({});

Update.args = {
  initialContents: organizationFixtures.oneOrganization[0],
  buttonLabel: "Update",
  submitAction: (data) => {
    console.log("Submit was clicked with data: ", data);
    window.alert("Submit was clicked with data: " + JSON.stringify(data));
  },
};
