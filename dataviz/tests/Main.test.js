import {render, screen} from '@testing-library/react'
import Main from "../src/Components/Main/Main";

test("renders the Main page", () => {
    render(<Main />);
});
test("Check black variable", () => {
    expect(black).toBe(typeof Object)
});