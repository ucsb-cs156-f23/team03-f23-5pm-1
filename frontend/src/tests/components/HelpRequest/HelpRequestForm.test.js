import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import HelpRequestForm from "main/components/HelpRequest/HelpRequestForm";
import { helpRequestFixtures } from "fixtures/helpRequestFixtures";
import { BrowserRouter as Router } from "react-router-dom";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe("HelpRequestForm tests", () => {

    test("renders correctly", async () => {

        render(
            <Router  >
                <HelpRequestForm />
            </Router>
        );
        await screen.findByText(/Email/); // might need to change
        await screen.findByText(/Create/);
    });


    test("renders correctly when passing in a HelpRequest", async () => {

        render(
            <Router  >
                <HelpRequestForm initialContents={helpRequestFixtures.oneHelpRequest} />
            </Router>
        );
        await screen.findByTestId(/HelpRequestForm-id/);
        expect(screen.getByText(/Id/)).toBeInTheDocument();
        expect(screen.getByTestId(/HelpRequestForm-id/)).toHaveValue("1");
    });


    test("Correct Error messsages on bad input", async () => {

        render(
            <Router  >
                <HelpRequestForm initialContents={helpRequestFixtures.oneHelpRequest}/>
            </Router>
        );
        await screen.findByTestId("HelpRequestForm-solved");
        //const quarterYYYYQField = screen.getByTestId("HelpRequestForm-quarterYYYYQ");
        const requestTimeField = screen.getByTestId("HelpRequestForm-requestTime");
        const solvedField = screen.getByTestId("HelpRequestForm-solved");
        const submitButton = screen.getByTestId("HelpRequestForm-submit");

        fireEvent.change(solvedField, { target: { value: 'bad-input' } });
        fireEvent.change(requestTimeField, { target: { value: 'bad-input' } });
        fireEvent.click(submitButton);

        await screen.findByText(/Must be 'true' or 'false'/);
        await screen.findByText(/Request time must be in ISO format/);
        
        fireEvent.change(requestTimeField, { target: { value: '2022-01-02T12:00' } });
        
        const badSolvedInputs = ["falseee", "tttrue", "bad-input"];
        for (const solvedInput of badSolvedInputs) {
            fireEvent.change(solvedField, { target: { value: solvedInput } });
            fireEvent.click(submitButton);
            await waitFor(() => { expect(screen.getByText(/Must be 'true' or 'false'/)).toBeInTheDocument()});
        }
    });

    test("Correct Error messsages on missing input", async () => {

        render(
            <Router  >
                <HelpRequestForm />
            </Router>
        );
        await screen.findByTestId("HelpRequestForm-submit");
        const submitButton = screen.getByTestId("HelpRequestForm-submit");

        fireEvent.click(submitButton);

        await screen.findByText(/Email is required./);
        expect(screen.getByText(/Team ID is required./)).toBeInTheDocument();
        expect(screen.getByText(/Table\/Breakout room number is required./)).toBeInTheDocument();
        expect(screen.getByText(/Explanation is required./)).toBeInTheDocument();
        expect(screen.getByText(/Input is required./)).toBeInTheDocument();
        expect(screen.getByText(/Date is required./)).toBeInTheDocument();

    });

    test("No Error messsages on good input", async () => {

        const mockSubmitAction = jest.fn();


        render(
            <Router  >
                <HelpRequestForm submitAction={mockSubmitAction} />
            </Router>
        );
        await screen.findByTestId("HelpRequestForm-requesterEmail");

        const requesterEmailField = screen.getByTestId("HelpRequestForm-requesterEmail");
        const teamIdField = screen.getByTestId("HelpRequestForm-teamId");
        const tableOrBreakoutRoomField = screen.getByTestId("HelpRequestForm-tableOrBreakoutRoom");
        const explanationField = screen.getByTestId("HelpRequestForm-explanation");
        const solvedField = screen.getByTestId("HelpRequestForm-solved");
        const requestTimeField = screen.getByTestId("HelpRequestForm-requestTime");
        const submitButton = screen.getByTestId("HelpRequestForm-submit");

        fireEvent.change(requesterEmailField, { target: { value: '20221' } });
        fireEvent.change(teamIdField, { target: { value: 'f23-8pm-1' } });
        fireEvent.change(tableOrBreakoutRoomField, { target: { value: '4' } });
        fireEvent.change(explanationField, { target: { value: 'Need help with team' } });
        fireEvent.change(solvedField, { target: { value: 'true' } });
        fireEvent.change(requestTimeField, { target: { value: '2022-01-02T12:00' } });
        fireEvent.click(submitButton);

        await waitFor(() => expect(mockSubmitAction).toHaveBeenCalled());

        expect(screen.queryByText(/Must be 'true' or 'false'/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Request time must be in ISO format/)).not.toBeInTheDocument();

    });


    test("that navigate(-1) is called when Cancel is clicked", async () => {

        render(
            <Router  >
                <HelpRequestForm />
            </Router>
        );
        await screen.findByTestId("HelpRequestForm-cancel");
        const cancelButton = screen.getByTestId("HelpRequestForm-cancel");

        fireEvent.click(cancelButton);

        await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith(-1));

    });

});


