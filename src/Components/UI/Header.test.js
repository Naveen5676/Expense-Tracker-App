import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Store/MainStore";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  test("renders Welcome text", () => {
    //Arrange
    render(
      <Provider store={store}>
        {" "}
        {/* Wrap your component with Provider */}
        <Header />
      </Provider>
    );
    //Act
    //.... nothing

    //Assert
    const welcomeText = screen.getByText("Welcome To Expense Tracker", {
      exact: false,
    });
    expect(welcomeText).toBeInTheDocument();

    const h1text = screen.getByText("test", { exact: false });
    expect(h1text).toBeInTheDocument();
  });
  test("h1 text", () => {
    //Arrange
    render(
      <Provider store={store}>
        {" "}
        {/* Wrap your component with Provider */}
        <Header />
      </Provider>
    );
    //Act
    //.... nothing

    //Assert
    const h1text = screen.getByText("test", { exact: false });
    expect(h1text).toBeInTheDocument();
  });

  test("premium button", () => {
    //Arrange
    render(
      <Provider store={store}>
        {/* Wrap your component with Provider */}
        <Header />
      </Provider>
    );

    //Act
    const button = screen.queryByRole('button', { name: /Activate Premium/i });
    if (button) {
    userEvent.click(button);

    //Assert
    const outputelement = screen.getByText('Premium Activated', {exact:false});
    expect(outputelement).toBeInTheDocument();
    }
  });
});
