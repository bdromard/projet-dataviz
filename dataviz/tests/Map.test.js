
import {Map, MapContainer, Popup, getRandomColor, testColor, adaPosition, redOptions, fillBlueOptions, purpleOptions} from '../src/Components/Map/Map'
// const getRandomColor = require('../src/Components/Map/Map');
import renderer from 'react-test-renderer'

jest.mock('leaflet');
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }))

const consoleLog = jest.fn(console.log)



test("Check test color value", () => {
    expect(testColor.color).toBe('#05D27C')
});

test("Check if Ada coordinates are passed", () => {
    expect(adaPosition.length).toBe(2)
});
test("Check color options", () => {
    expect(redOptions.color).toBe('red');
    expect(fillBlueOptions.fillColor).toBe('blue');
    expect(purpleOptions.color).toBe('purple');
});
test("Test getRandomColor() function", () => {
    expect(typeof getRandomColor()).toBe("string");
});
test("Test Map() function", () => {
    Map(consoleLog);
    expect(consoleLog).toHaveBeenCalled();
});

it('Renders correctly', () => {
    const tree = renderer
        .create("<MapContainer></MapContainer>")
        .toJSON();
    expect(tree).toMatchSnapshot()
});
