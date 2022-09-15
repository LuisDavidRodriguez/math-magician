import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalcPage from '../../CalcPage/CalcPage';
import Calculator from '../../Calculator/Calculator';
import Home from '../../Home/Home';
import Quote from '../../Quote/Quote';
import App from '../App';

test('Render the whole app!', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to our page/i);
  expect(linkElement).toBeInTheDocument();
});

test('Calculator firing events', () => {
  // firing user events
  // https://www.robinwieruch.de/react-testing-library/
  // why is better use userEvent instead of fireEvent
  // https://blog-es.mimacom.com/react-testing-library-fireevent-vs-userevent/
  // is pertty weird if you want to get the element by id you can't with jest library
  // but you can do this
  // https://bobbyhadz.com/blog/react-testing-library-find-by-classname
  //
  // get by testId you must add an attribute but only for the elements that will
  // have dinamic data in this case the display will have dinamic data
  // https://testing-library.com/docs/queries/bytestid/
  // this article says that is not so bad and when to use getByTestId
  // https://derekndavis.com/posts/getbytestid-overused-react-testing-library
  // in your react component you must add <p data-testid="display" className="display">
  //
  // they say that the best way is getElementByRole or in my case byText for example the
  // calculator buttos does not have id they have just text we use text 8 to get the button 8
  // but what about if there is another button or component with text 8 is there when it comes
  // into play using testID? I could not find a way to get the buttons and then get the button with
  // 8 inside in that way you get first all the buttons and not a paragraph for example
  // okay yeh I found in the same file that says that in that way we use testID! when we have more
  // other elements with maybe the same info
  // https://derekndavis.com/posts/getbytestid-overused-react-testing-library
  // how to tests lists
  // https://derekndavis.com/posts/testing-lists-react-testing-library
  // snapShots
  // https://jestjs.io/docs/snapshot-testing

  render(<Calculator />);
  // screen.debug();

  userEvent.click(screen.getByText('8'));
  userEvent.click(screen.getByText('9'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('5'));
  userEvent.click(screen.getByText('='));

  expect(screen.getByTestId('display')).toHaveTextContent('94');
});

test('snapshot', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});

test('Quote', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

test('Calc page', () => {
  const tree = render(<CalcPage />);
  expect(tree).toMatchSnapshot();
});
