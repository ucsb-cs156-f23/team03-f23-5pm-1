import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import RecommendationRequestForm from "main/components/RecommendationRequests/RecommendationRequestForm";
import { recommendationRequestsFixtures } from "fixtures/recommendationRequestsFixtures";
import { BrowserRouter as Router } from "react-router-dom";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe("RecommendationRequestForm tests", () => {

    test("renders correctly", async () => {

        render(
            <Router  >
                <RecommendationRequestForm />
            </Router>
        );
        await screen.findByText(/Your Email/);
        await screen.findByText(/Create/);
    });


    test("renders correctly when passing in a RecommendationRequest", async () => {

        render(
            <Router  >
                <RecommendationRequestForm initialContents={recommendationRequestsFixtures.oneRequest} />
            </Router>
        );
        await screen.findByTestId(/RecommendationRequestForm-id/);
        expect(screen.getByText(/Id/)).toBeInTheDocument();
        expect(screen.getByTestId(/RecommendationRequestForm-id/)).toHaveValue("1");
    });

    test("Correct Error messsages on missing input", async () => {

        render(
            <Router  >
                <RecommendationRequestForm />
            </Router>
        );
        await screen.findByTestId("RecommendationRequestForm-submit");
        const submitButton = screen.getByTestId("RecommendationRequestForm-submit");

        fireEvent.click(submitButton);

        await screen.findByText(/Your email is required/);
        expect(screen.getByText(/Professor email is required/)).toBeInTheDocument();
        expect(screen.getByText(/Need By Date is required/)).toBeInTheDocument();
        expect(screen.getByText(/Date of Request is required/)).toBeInTheDocument();
        expect(screen.getByText(/The reason is required/)).toBeInTheDocument();
        expect(screen.getByText(/Your email is required/)).toBeInTheDocument();

    });

    test("Correct Error messsages on bad input", async () => {

        render(
            <Router  >
                <RecommendationRequestForm />
            </Router>
        );
        await screen.findByTestId("RecommendationRequestForm-dateRequested");
        const requesterEmailField = screen.getByTestId("RecommendationRequestForm-requesterEmail");
        const professorEmailField = screen.getByTestId("RecommendationRequestForm-professorEmail");
        const submitButton = screen.getByTestId("RecommendationRequestForm-submit");

        fireEvent.change(requesterEmailField, { target: { value: 'bad-emailInput' } });
        fireEvent.change(professorEmailField, { target: { value: 'bad-emailInput' } });
        
        fireEvent.click(submitButton);

        await screen.findByText(/Your email must be valid/);
        expect(screen.getByText(/Professor email must be valid/)).toBeInTheDocument();

        expect(screen.queryByText(/Your email is required/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Professor email is required/)).not.toBeInTheDocument();
    });


    test("No Error messsages on good input", async () => {

        const mockSubmitAction = jest.fn();


        render(
            <Router  >
                <RecommendationRequestForm submitAction={mockSubmitAction} />
            </Router>
        );
        await screen.findByTestId("RecommendationRequestForm-requesterEmail");

        const requesterEmailField = screen.getByTestId("RecommendationRequestForm-requesterEmail");
        const professorEmailField = screen.getByTestId("RecommendationRequestForm-professorEmail");
        const dateNeededField = screen.getByTestId("RecommendationRequestForm-dateNeeded");
        const dateRequestedField = screen.getByTestId("RecommendationRequestForm-dateRequested");
        const explanationField = screen.getByTestId("RecommendationRequestForm-explanation");
        const submitButton = screen.getByTestId("RecommendationRequestForm-submit");

        fireEvent.change(requesterEmailField, { target: { value: 'yvangala@ucsb.edu' } });
        fireEvent.change(professorEmailField, { target: { value: 'phillConrad@ucsb.edu' } });
        fireEvent.change(dateNeededField, { target: { value: '2022-01-02T12:00' } });
        fireEvent.change(dateRequestedField, { target: { value: '2022-01-02T12:00' } });
        fireEvent.change(explanationField, { target: { value: 'Masters at UC Santa Barbie' } });
        fireEvent.click(submitButton);

        await waitFor(() => expect(mockSubmitAction).toHaveBeenCalled());

        expect(screen.queryByText(/is required/)).not.toBeInTheDocument();
        expect(screen.queryByText(/email must be valid/)).not.toBeInTheDocument();
        expect(screen.queryByText(/must be in ISO format/)).not.toBeInTheDocument();

    });


    test("that navigate(-1) is called when Cancel is clicked", async () => {

        render(
            <Router  >
                <RecommendationRequestForm />
            </Router>
        );
        await screen.findByTestId("RecommendationRequestForm-cancel");
        const cancelButton = screen.getByTestId("RecommendationRequestForm-cancel");

        fireEvent.click(cancelButton);

        await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith(-1));

    });

});


