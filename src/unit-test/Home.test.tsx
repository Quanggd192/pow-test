import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { listSpells } from './__mocks/mock-data';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from '../pages/home';

const mockStore = configureMockStore();
const queryClient = new QueryClient();

describe('Test Home', () => {
  
  const store = mockStore({
    spellsState: {
      value: listSpells[0],
      listFavorite: listSpells.slice(0, 4)
    }
  });
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Home />
        </Provider>
      </QueryClientProvider>
    );
  });

  test('HTML content', () => {
    const button = screen.getByTestId('fav-button');
    const homeTitle = screen.getByTestId('home-title');
    fireEvent.click(button);
    expect(homeTitle).toHaveTextContent('Spells');
    expect(button).toHaveTextContent('Favorite');
  });
});
