import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import MenuItemReviewCreatePage from 'main/pages/MenuItemReview/MenuItemReviewCreatePage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import { apiCurrentUserFixtures } from 'fixtures/currentUserFixtures';
import { systemInfoFixtures } from 'fixtures/systemInfoFixtures';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

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
    Navigate: (x) => {
      mockNavigate(x);
      return null;
    },
  };
});

describe('MenuItemReviewCreatePage tests', () => {
  const axiosMock = new AxiosMockAdapter(axios);

  beforeEach(() => {
    axiosMock.reset();
    axiosMock.resetHistory();
    axiosMock
      .onGet('/api/MenuItemReview')
      .reply(200, apiCurrentUserFixtures.userOnly);
    axiosMock
      .onGet('/api/systemInfo')
      .reply(200, systemInfoFixtures.showingNeither);
  });

  test('renders without crashing', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <MenuItemReviewCreatePage />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  test('when you fill in the form and hit submit, it makes a request to the backend', async () => {
    const queryClient = new QueryClient();
    const MenuItemReview = {
      id: 1,
      itemId: 101,
      reviewerEmail: 'lukewli@ucsb.edu',
      stars: 3,
      comments: 'Some Notes',
      dateReviewed: '2022-02-02T00:00',
    };

    axiosMock.onPost('/api/MenuItemReview/post').reply(202, MenuItemReview);
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <MenuItemReviewCreatePage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByTestId('MenuItemReviewForm-itemId')
      ).toBeInTheDocument();
    });

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

    fireEvent.change(itemIdField, { target: { value: 101 } });
    fireEvent.change(starsField, { target: { value: 3 } });
    fireEvent.change(reviewerEmailField, {
      target: { value: 'lukewli@ucsb.edu' },
    });
    fireEvent.change(commentsField, {
      target: { value: 'Some Notes' },
    });
    fireEvent.change(dateReviewedField, {
      target: { value: '2022-02-02T00:00' },
    });

    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post[0].params).toEqual({
      itemId: '101',
      reviewerEmail: 'lukewli@ucsb.edu',
      stars: '3',
      comments: 'Some Notes',
      dateReviewed: '2022-02-02T00:00',
    });

    expect(mockToast).toBeCalledWith(
      'New MenuItemReview Created - id: 1 itemId: 101'
    );
    expect(mockNavigate).toBeCalledWith({ to: '/menuitemreview' });
  });
});
