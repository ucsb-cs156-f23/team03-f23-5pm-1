import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import RecommendationRequestsCreatePage from "main/pages/RecommendationRequests/RecommendationRequestsCreatePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const mockToast = jest.fn();
jest.mock('react-toastify', () => {
    const originalModule = jest.requireActual('react-toastify');
    return {
        __esModule: true,
        ...originalModule,
        toast: (x) => mockToast(x)
    };
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        Navigate: (x) => { mockNavigate(x); return null; }
    };
});

describe("RecommendationRequestsCreatePage tests", () => {

    const axiosMock =new AxiosMockAdapter(axios);

    beforeEach(() => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    });

    test("renders without crashing", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationRequestsCreatePage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

    test("when you fill in the form and hit submit, it makes a request to the backend", async () => {

        const queryClient = new QueryClient();
        const recommendationRequest = {
            id: 17,
            requesterEmail: "yvangala@ucsb.edu",
            professorEmail: "PhillConrad@ucsb.edu",
            explanation: "Masters at UC Santa Barbie",
            dateNeeded: "2022-01-02T12:00",
            dateRequested: "2022-01-02T12:00",
            done: false,
        };

        axiosMock.onPost("/api/recommendationrequests/post").reply( 202, recommendationRequest );

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationRequestsCreatePage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("RecommendationRequestForm-requesterEmail")).toBeInTheDocument();
        });

        const requesterEmailField = screen.getByTestId("RecommendationRequestForm-requesterEmail");
        const professorEmailField = screen.getByTestId("RecommendationRequestForm-professorEmail");
        const dateNeededField = screen.getByTestId("RecommendationRequestForm-dateNeeded");
        const dateRequestedField = screen.getByTestId("RecommendationRequestForm-dateRequested");
        const explanationField = screen.getByTestId("RecommendationRequestForm-explanation");
        const submitButton = screen.getByTestId("RecommendationRequestForm-submit");

        fireEvent.change(requesterEmailField, { target: { value: 'yvangala@ucsb.edu' } });
        fireEvent.change(professorEmailField, { target: { value: 'PhillConrad@ucsb.edu' } });
        fireEvent.change(dateNeededField, { target: { value: '2022-01-02T12:00' } });
        fireEvent.change(dateRequestedField, { target: { value: '2022-01-02T12:00' } });
        fireEvent.change(explanationField, { target: { value: 'Masters at UC Santa Barbie' } });
        fireEvent.click(submitButton);


        expect(submitButton).toBeInTheDocument();

        fireEvent.click(submitButton);

        await waitFor(() => expect(axiosMock.history.post.length).toBe(2));

        expect(axiosMock.history.post[0].params).toEqual(
            {
            "requesterEmail": "yvangala@ucsb.edu",
            "professorEmail": "PhillConrad@ucsb.edu",
            "explanation": "Masters at UC Santa Barbie",
            "dateNeeded": "2022-01-02T12:00",
            "dateRequested": "2022-01-02T12:00",
            "done": false,
        });
        
        expect(mockToast).toBeCalledWith("New recommendationRequest Created - id: 17 by: yvangala@ucsb.edu");
        expect(mockNavigate).toBeCalledWith({ "to": "/recommendationrequests" });
    });


});


