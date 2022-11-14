import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { listSpells, spellDetail } from './__mocks/mock-data';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'
import SpellDetail from '../pages/spell-detail';
import * as hooks from '../hooks/spell-detail'
const mockStore = configureMockStore();
// jest.mock('react', () => ({
//   useSpellDetail: () => {
//     spellDetail: {
//       index: 'acid-splash'
//     }
//   }
// }))

// jest.mock('react-query', () => ({
//   useQuery: jest.fn().mockReturnValue(({ data: {index: 'acid-arrow'}, isLoading: false,error:{} }))
// }));


// this mock can be improved depending on the consumer component
jest.mock("../hooks/spell-detail.ts", () => {
  return jest.fn(() => ({
    spellDetail:spellDetail
  }))
});

const queryClient = new QueryClient();

describe('Test ListActionDropdown', () => {
  
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
          <SpellDetail />
        </Provider>
      </QueryClientProvider>
    );
  });

  test('HTML content', () => {

    const button = screen.getByTestId('fav-detail-button');
    const spellName = screen.getByTestId('spell_name');
    expect(spellName).toHaveTextContent("Acid Arrow");
    expect(button).toHaveTextContent("Favorite");
  });
});
