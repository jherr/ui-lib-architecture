import { render } from "@testing-library/react";
import { AppShell } from ".";

describe("AppShell", () => {
  it("renders", () => {
    const { queryAllByText } = render(
      <AppShell
        navLinks={[]}
        title="Foo"
        routes={[{ path: "/", element: () => <div>Hello</div> }]}
      />
    );
    expect(queryAllByText("Foo")).toHaveLength(1);
    expect(queryAllByText("Hello")).toBeTruthy();
  });
});
