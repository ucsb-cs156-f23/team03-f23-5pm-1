// @ts-nocheck
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import MenuItemReviewEditPage from 'main/pages/MenuItemReview/MenuItemReviewEditPage';
import { apiCurrentUserFixtures } from 'fixtures/currentUserFixtures';
import { systemInfoFixtures } from 'fixtures/systemInfoFixtures';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import mockConsole from 'jest-mock-console';

const mockToast = jest.fn();
jest.mock('react-toastify', () => {
  const originalModule = jest.requireActual('react-toastify');
  return {
    __esModule: true,
    ...originalModule,
    toast: (x) => mockToast(x),
  };
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...originalModule,
    useParams: () => ({
      id: 17,
    }),
    Navigate: (x) => {
      mockNavigate(x);
      return null;
    },
  };
});

describe('MenuItemReviewEditPage tests', () => {
  describe("when the backend doesn't return data", () => {
    const axiosMock = new AxiosMockAdapter(axios);

    beforeEach(() => {
      axiosMock.reset();
      axiosMock.resetHistory();
      axiosMock
        .onGet('/api/currentUser')
        .reply(200, apiCurrentUserFixtures.userOnly);
      axiosMock
        .onGet('/api/systemInfo')
        .reply(200, systemInfoFixtures.showingNeither);
      axiosMock.onGet('/api/MenuItemReview', { params: { id: 17 } }).timeout();
    });

    const queryClient = new QueryClient();
    test('renders header but table is not present', async () => {
      const restoreConsole = mockConsole();

      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <MenuItemReviewEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );
      await screen.findByText('Edit MenuItemReview');
      expect(
        screen.queryByTestId('MenuItemReviewForm-itemId')
      ).not.toBeInTheDocument();
      restoreConsole();
    });
  });

  describe('tests where backend is working normally', () => {
    const axiosMock = new AxiosMockAdapter(axios);

    beforeEach(() => {
      axiosMock.reset();
      axiosMock.resetHistory();
      axiosMock
        .onGet('/api/currentUser')
        .reply(200, apiCurrentUserFixtures.userOnly);
      axiosMock
        .onGet('/api/systemInfo')
        .reply(200, systemInfoFixtures.showingNeither);
      axiosMock
        .onGet('/api/MenuItemReview', { params: { id: 17 } })
        .reply(200, {
          id: 17,
          itemId: 101,
          reviewerEmail: 'lukewli@ucsb.edu',
          stars: 3,
          comments: 'Notes',
          dateReviewed: '2022-03-14T15:00',
        });
      axiosMock.onPut('/api/MenuItemReview').reply(200, {
        id: '17',
        itemId: '101',
        reviewerEmail: 'lukewli@ucsb.edu',
        stars: '3',
        comments: 'Notes',
        dateReviewed: '2022-03-14T15:00',
      });
    });

    const queryClient = new QueryClient();
    test('renders without crashing', () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <MenuItemReviewEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );
    });

    test('Is populated with the data provided', async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <MenuItemReviewEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );

      await waitFor(() => {
        expect(
          screen.getByTestId('MenuItemReviewForm-itemId')
        ).toBeInTheDocument();
      });

      const idField = screen.getByTestId('MenuItemReviewForm-id');
      const itemIdField = screen.getByTestId('MenuItemReviewForm-itemId');
      const starsField = screen.getByTestId('MenuItemReviewForm-stars');
      const reviewerEmailField = screen.getByTestId(
        'MenuItemReviewForm-reviewerEmail'
      );
      const dateReviewedField = screen.getByTestId(
        'MenuItemReviewForm-dateReviewed'
      );
      const commentsField = screen.getByTestId('MenuItemReviewForm-comments');
      const submitButton = screen.getByTestId('MenuItemReviewForm-submit');

      expect(idField).toHaveValue('17');
      expect(itemIdField).toHaveValue('101');
      expect(starsField).toHaveValue('3');
      expect(reviewerEmailField).toHaveValue('lukewli@ucsb.edu');
      expect(commentsField).toHaveValue('Notes');
      expect(dateReviewedField).toHaveValue('2022-03-14T15:00');
      expect(submitButton).toBeInTheDocument();
    });

    test('Changes when you click Update', async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <MenuItemReviewEditPage />
          </MemoryRouter>
        </QueryClientProvider>
      );

      await waitFor(() => {
        expect(
          screen.getByTestId('MenuItemReviewForm-itemId')
        ).toBeInTheDocument();
      });

      const idField = screen.getByTestId('MenuItemReviewForm-id');
      const itemIdField = screen.getByTestId('MenuItemReviewForm-itemId');
      const starsField = screen.getByTestId('MenuItemReviewForm-stars');
      const reviewerEmailField = screen.getByTestId(
        'MenuItemReviewForm-reviewerEmail'
      );
      const dateReviewedField = screen.getByTestId(
        'MenuItemReviewForm-dateReviewed'
      );
      const commentsField = screen.getByTestId('MenuItemReviewForm-comments');
      const submitButton = screen.getByTestId('MenuItemReviewForm-submit');

      expect(idField).toHaveValue('17');
      expect(itemIdField).toHaveValue('101');
      expect(starsField).toHaveValue('3');
      expect(reviewerEmailField).toHaveValue('lukewli@ucsb.edu');
      expect(commentsField).toHaveValue('Notes');
      expect(dateReviewedField).toHaveValue('2022-03-14T15:00');
      expect(submitButton).toBeInTheDocument();

      fireEvent.change(itemIdField, { target: { value: 102 } });
      fireEvent.change(starsField, { target: { value: 4 } });
      fireEvent.change(reviewerEmailField, {
        target: { value: 'lukewli2@ucsb.edu' },
      });
      fireEvent.change(commentsField, {
        target: { value: 'Some Notes' },
      });
      fireEvent.change(dateReviewedField, {
        target: { value: '2022-02-02T00:00' },
      });

      fireEvent.click(submitButton);

      await waitFor(() => expect(mockToast).toBeCalled());
      expect(mockToast).toBeCalledWith(
        'MenuItemReview Updated - id: 17 itemId: 101'
      );
      expect(mockNavigate).toBeCalledWith({ to: '/menuitemreview' });

      expect(axiosMock.history.put.length).toBe(1); // times called
      expect(axiosMock.history.put[0].params).toEqual({ id: 17 });
      expect(axiosMock.history.put[0].data).toBe(
        JSON.stringify({
          itemId: '102',
          reviewerEmail: 'lukewli2@ucsb.edu',
          stars: '4',
          comments: 'Some Notes',
          dateReviewed: '2022-02-02T00:00',
        })
      ); // posted object
    });
  });
});
