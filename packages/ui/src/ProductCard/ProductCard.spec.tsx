import { render } from "@testing-library/react";
import { ProductCard } from ".";

describe("ProductCard", () => {
  it("renders", () => {
    const { queryAllByText } = render(
      <ProductCard title="Pokemon Go" description="Pokemon Go game" />
    );
    expect(queryAllByText("Pokemon Go")).toHaveLength(1);
  });
});
