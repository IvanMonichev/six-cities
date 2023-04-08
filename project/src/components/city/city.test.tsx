import City from './city';
import { cities } from '../../constant';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: City', () => {
  it('should be rendered correctly', () => {
    const onClick = jest.fn();

    render(
      <City
        name={cities[0]}
        isActive
        onClick={onClick}
      />);

    expect(screen.getByText(cities[0])).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('tabs__item--active');
  });

  it('onClick should be called when user has chosen a city', async () => {
    const onClick = jest.fn();

    render(
      <City
        name={cities[0]}
        isActive={false}
        onClick={onClick}
      />);

    await userEvent.click(screen.getByRole('link'));

    expect(onClick).toBeCalledWith(cities[0]);
  });
});
