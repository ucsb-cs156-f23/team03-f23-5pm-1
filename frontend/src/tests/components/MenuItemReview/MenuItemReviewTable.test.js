import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import MenuItemReviewTable from 'main/components/MenuItemReview/MenuItemReviewTable';
import { menuItemReviewFixtures } from 'fixtures/menuItemReviewFixtures';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { currentUserFixtures } from 'fixtures/currentUserFixtures';
import { useBackendMutation } from 'main/utils/useBackend';
import { getAllByText } from '@testing-library/dom';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

jest.mock('main/utils/useBackend');

describe('UserTable tests', () => {
  const queryClient = new QueryClient();

  test('Has the expected column headers and content for ordinary user', () => {
    const currentUser = currentUserFixtures.userOnly;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <MenuItemReviewTable
            menuItemReviews={menuItemReviewFixtures.threeMenuItemReviews}
            currentUser={currentUser}
          />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const expectedHeaders = [
      'id',
      'itemId',
      'reviewerEmail',
      'stars',
      'dateReviewed',
      'comments',
    ];
    const expectedFields = [
      'id',
      'itemId',
      'reviewerEmail',
      'stars',
      'dateReviewed',
      'comments',
    ];
    const testId = 'MenuItemReviewTable';

    expectedHeaders.forEach((headerText) => {
      const header = screen.getByText(headerText);
      expect(header).toBeInTheDocument();
    });

    expectedFields.forEach((field) => {
      const header = screen.getByTestId(`${testId}-cell-row-0-col-${field}`);
      expect(header).toBeInTheDocument();
    });

    expect(screen.getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent(
      '2'
    );
    expect(screen.getByTestId(`${testId}-cell-row-1-col-id`)).toHaveTextContent(
      '3'
    );

    const editButton = screen.queryByTestId(
      `${testId}-cell-row-0-col-Edit-button`
    );
    expect(editButton).not.toBeInTheDocument();

    const deleteButton = screen.queryByTestId(
      `${testId}-cell-row-0-col-Delete-button`
    );
    expect(deleteButton).not.toBeInTheDocument();

    const firstReview = menuItemReviewFixtures.threeMenuItemReviews[0];

    expect(screen.getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent(
      firstReview.id.toString()
    );
    // Do the same for other fields
    expect(
      screen.getByTestId(`${testId}-cell-row-0-col-itemId`)
    ).toHaveTextContent(firstReview.itemId);
    expect(
      screen.getByTestId(`${testId}-cell-row-0-col-reviewerEmail`)
    ).toHaveTextContent(firstReview.reviewerEmail);
    expect(
      screen.getByTestId(`${testId}-cell-row-0-col-stars`)
    ).toHaveTextContent(firstReview.stars.toString());
    expect(
      screen.getByTestId(`${testId}-cell-row-0-col-dateReviewed`)
    ).toHaveTextContent(firstReview.dateReviewed);
    expect(
      screen.getByTestId(`${testId}-cell-row-0-col-comments`)
    ).toHaveTextContent(firstReview.comments);
  });

  test('Has the expected colum headers and content for adminUser', () => {
    const currentUser = currentUserFixtures.adminUser;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <MenuItemReviewTable
            menuItemReviews={menuItemReviewFixtures.threeMenuItemReviews}
            currentUser={currentUser}
          />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const expectedHeaders = [
      'id',
      'itemId',
      'reviewerEmail',
      'stars',
      'dateReviewed',
      'comments',
    ];
    const expectedFields = [
      'id',
      'itemId',
      'reviewerEmail',
      'stars',
      'dateReviewed',
      'comments',
    ];
    const testId = 'MenuItemReviewTable';

    expectedHeaders.forEach((headerText) => {
      const header = screen.getByText(headerText);
      expect(header).toBeInTheDocument();
    });

    expectedFields.forEach((field) => {
      const header = screen.getByTestId(`${testId}-cell-row-0-col-${field}`);
      expect(header).toBeInTheDocument();
    });

    expect(screen.getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent(
      '2'
    );
    expect(screen.getByTestId(`${testId}-cell-row-1-col-id`)).toHaveTextContent(
      '3'
    );

    const editButton = screen.getByTestId(
      `${testId}-cell-row-0-col-Edit-button`
    );
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveClass('btn-primary');

    const deleteButton = screen.getByTestId(
      `${testId}-cell-row-0-col-Delete-button`
    );
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass('btn-danger');
  });

  test('Edit button navigates to the edit page for admin user', async () => {
    const currentUser = currentUserFixtures.adminUser;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <MenuItemReviewTable
            menuItemReviews={menuItemReviewFixtures.threeMenuItemReviews}
            currentUser={currentUser}
          />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByTestId(`MenuItemReviewTable-cell-row-0-col-id`)
      ).toHaveTextContent('2');
    });

    const editButton = screen.getByTestId(
      `MenuItemReviewTable-cell-row-0-col-Edit-button`
    );
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);

    await waitFor(() =>
      expect(mockedNavigate).toHaveBeenCalledWith('/MenuItemReview/edit/2')
    );
  });

  test('calls deleteMutation when delete button is clicked', async () => {
    const currentUser = currentUserFixtures.adminUser;
    // Arrange
    const mockMutate = jest.fn();
    useBackendMutation.mockReturnValue({
      mutate: mockMutate,
    });
    const { getAllByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <MenuItemReviewTable
            menuItemReviews={[menuItemReviewFixtures.oneMenuItemReview]}
            currentUser={currentUser}
          />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // Act
    const deleteButtons = getAllByText('Delete');
    fireEvent.click(deleteButtons[1]);

    // Assert
    expect(mockMutate).toHaveBeenCalled();
  });
});
