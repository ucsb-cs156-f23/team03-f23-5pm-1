import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import OrganizationEditPage from "main/pages/UCSBOrganization/UCSBOrganizationEditPage";

import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import mockConsole from "jest-mock-console";

const mockToast = jest.fn();
jest.mock("react-toastify", () => {
  const originalModule = jest.requireActual("react-toastify");
  return {
    __esModule: true,
    ...originalModule,
    toast: (x) => mockToast(x),
  };
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useParams: () => ({
      orgCode: "ZPR",
    }),
    Navigate: (x) => {
      mockNavigate(x);
      return null;
    },
  };
});

describe("OrganizationEditPage tests", () => {
  describe("when the backend doesn't return data", () => {
    const axiosMock = new AxiosMockAdapter(axios);

    beforeEach(() => {
      axiosMock.reset();
      axiosMock.resetHistory();
      axiosMock
        .onGet("/api/currentUser")
        .reply(200, apiCurrentUserFixtures.userOnly);
      axiosMock
        .onGet("/api/systemInfo")
        .reply(200, systemInfoFixtures.showingNeither);
      axiosMock
        .onGet("/api/organizations", { params: { orgCode: "ZPR" } })
        .timeout();
    });

    const queryClient = new QueryClient();
    test("renders header but table is not present", async () => {
      const restoreConsole = mockConsole();

      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <OrganizationEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );
      await screen.findByText("Edit Organization");
      expect(
        screen.queryByTestId("Organization-orgCode")
      ).not.toBeInTheDocument();
      restoreConsole();
    });
  });

  describe("tests where backend is working normally", () => {
    const axiosMock = new AxiosMockAdapter(axios);

    beforeEach(() => {
      axiosMock.reset();
      axiosMock.resetHistory();
      axiosMock
        .onGet("/api/currentUser")
        .reply(200, apiCurrentUserFixtures.userOnly);
      axiosMock
        .onGet("/api/systemInfo")
        .reply(200, systemInfoFixtures.showingNeither);
      axiosMock
        .onGet("/api/organizations", { params: { orgCode: "ZPR" } })
        .reply(200, {
          orgCode: "ZPR",
          orgTranslationShort: "ZETA PHI RHO",
          orgTranslation: "ZETA-PHI-RHO",
          inactive: "true",
        });
      axiosMock.onPut("/api/organizations").reply(200, {
        orgCode: "zpr",
        orgTranslationShort: "zeta phi rho",
        orgTranslation: "zeta-phi-rho",
        inactive: "false",
      });
    });

    const queryClient = new QueryClient();

    test("Is populated with the data provided", async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <OrganizationEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );

      await screen.findByTestId("OrganizationForm-orgCode");

      const orgCodeField = screen.getByTestId("OrganizationForm-orgCode");
      const orgTranslationShortField = screen.getByTestId(
        "OrganizationForm-orgTranslationShort"
      );
      const orgTranslationField = screen.getByTestId(
        "OrganizationForm-orgTranslation"
      );
      const inactiveField = screen.getByTestId("OrganizationForm-inactive");

      const submitButton = screen.getByTestId("OrganizationForm-submit");

      expect(orgCodeField).toBeInTheDocument();
      expect(orgCodeField).toHaveValue("ZPR");
      expect(orgTranslationShortField).toBeInTheDocument();
      expect(orgTranslationShortField).toHaveValue("ZETA PHI RHO");
      expect(orgTranslationField).toBeInTheDocument();
      expect(orgTranslationField).toHaveValue("ZETA-PHI-RHO");
      expect(inactiveField).toBeInTheDocument();
      expect(inactiveField).toHaveValue("true");

      expect(submitButton).toHaveTextContent("Update");

      fireEvent.change(orgCodeField, {
        target: { value: "zpr" },
      });
      fireEvent.change(orgTranslationShortField, {
        target: { value: "zeta phi rho" },
      });
      fireEvent.change(orgTranslationField, {
        target: { value: "zeta-phi-rho" },
      });
      fireEvent.change(inactiveField, {
        target: { value: "false" },
      });
      fireEvent.click(submitButton);

      await waitFor(() => expect(mockToast).toBeCalled());
      expect(mockToast).toBeCalledWith(
        "Organization Updated - orgCode: zpr orgTranslationShort: zeta phi rho orgTranslation: zeta-phi-rho inactive: false"
      );

      expect(mockNavigate).toBeCalledWith({ to: "/organizations" });

      expect(axiosMock.history.put.length).toBe(1); // times called
      expect(axiosMock.history.put[0].params).toEqual({ orgCode: "zpr" });
      expect(axiosMock.history.put[0].data).toBe(
        JSON.stringify({
          orgCode: "zpr",
          orgTranslationShort: "zeta phi rho",
          orgTranslation: "zeta-phi-rho",
          inactive: "false",
        })
      ); // posted object
    });

    test("Changes when you click Update", async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <OrganizationEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );

      await screen.findByTestId("OrganizationForm-orgCode");

      const orgCodeField = screen.getByTestId("OrganizationForm-orgCode");
      const orgTranslationShortField = screen.getByTestId(
        "OrganizationForm-orgTranslationShort"
      );
      const orgTranslationField = screen.getByTestId(
        "OrganizationForm-orgTranslation"
      );
      const inactiveField = screen.getByTestId("OrganizationForm-inactive");

      const submitButton = screen.getByTestId("OrganizationForm-submit");

      expect(orgCodeField).toHaveValue("ZPR");
      expect(orgTranslationShortField).toHaveValue("ZETA PHI RHO");
      expect(orgTranslationField).toHaveValue("ZETA-PHI-RHO");
      expect(inactiveField).toHaveValue("true");
      expect(submitButton).toBeInTheDocument();

      fireEvent.change(orgCodeField, {
        target: { value: "zpr" },
      });
      fireEvent.change(orgTranslationShortField, {
        target: { value: "ZETA" },
      });
      fireEvent.change(orgTranslationField, {
        target: { value: "zeta" },
      });
      fireEvent.change(inactiveField, {
        target: { value: "false" },
      });
      fireEvent.click(submitButton);

      await waitFor(() => expect(mockToast).toBeCalled());
      expect(mockToast).toBeCalledWith(
        "Organization Updated - orgCode: zpr orgTranslationShort: zeta phi rho orgTranslation: zeta-phi-rho inactive: false"
      );
      expect(mockNavigate).toBeCalledWith({ to: "/organizations" });
    });
  });
});
