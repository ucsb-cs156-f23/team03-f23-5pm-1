import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import OrganizationForm from "main/components/UCSBOrganization/UCSBOrganizationForm";
import { organizationFixtures } from "fixtures/ucsbOrganizationFixtures";

import { QueryClient, QueryClientProvider } from "react-query";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("UCSBOrganization tests", () => {
  const queryClient = new QueryClient();

  const expectedHeaders = [
    "orgCode",
    "orgTranslationShort",
    "orgTranslation",
    "inactive",
  ];
  const testId = "OrganizationForm";

  test("renders correctly with no initialContents", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <OrganizationForm />
        </Router>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/Create/)).toBeInTheDocument();

    expectedHeaders.forEach((headerText) => {
      const header = screen.getByText(headerText);
      expect(header).toBeInTheDocument();
    });
  });

  test("renders correctly when passing in initialContents", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <OrganizationForm
            initialContents={organizationFixtures.oneOrganization}
          />
        </Router>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/Create/)).toBeInTheDocument();

    expectedHeaders.forEach((headerText) => {
      const header = screen.getByText(headerText);
      expect(header).toBeInTheDocument();
    });

    expect(await screen.findByTestId(`${testId}-id`)).toBeInTheDocument();
    expect(screen.getByText(`Id`)).toBeInTheDocument();
  });

  test("that navigate(-1) is called when Cancel is clicked", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <OrganizationForm />
        </Router>
      </QueryClientProvider>
    );
    expect(await screen.findByTestId(`${testId}-cancel`)).toBeInTheDocument();
    const cancelButton = screen.getByTestId(`${testId}-cancel`);

    fireEvent.click(cancelButton);

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith(-1));
  });

  test("that the correct validations are performed", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <OrganizationForm />
        </Router>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/Create/)).toBeInTheDocument();
    const submitButton = screen.getByText(/Create/);
    fireEvent.click(submitButton);

    await screen.findByText(/orgCode is required./);
    expect(
      screen.getByText(/orgTranslationShort is required./)
    ).toBeInTheDocument();
    expect(screen.getByText(/orgTranslation is required./)).toBeInTheDocument();
    expect(screen.getByText(/inactive is required./)).toBeInTheDocument();

    const nameInput = screen.getByTestId(`${testId}-orgCode`);
    fireEvent.change(nameInput, { target: { value: "a".repeat(31) } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Max length 30 characters/)).toBeInTheDocument();
    });
  });

  test("No Error messsages on good input", async () => {
    const mockSubmitAction = jest.fn();
    render(
      <Router>
        <OrganizationForm submitAction={mockSubmitAction} />
      </Router>
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
    fireEvent.change(orgCodeField, { target: { value: "TEST CODE" } });
    fireEvent.change(orgTranslationShortField, { target: { value: "TEST" } });
    fireEvent.change(orgTranslationField, {
      target: { value: "TESTING" },
    });
    fireEvent.change(inactiveField, {
      target: { value: false },
    });
    fireEvent.click(submitButton);
    await waitFor(() => expect(mockSubmitAction).toHaveBeenCalled());
    expect(screen.queryByText(/orgCode is required./)).not.toBeInTheDocument();
  });
});
