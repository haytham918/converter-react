import { useState } from "react";
import Select from "react-select";
import "./Units.css";
const Length = [
  { label: "Nanometer", value: 1 },
  { label: "Micrometer", value: 1000 },
  { label: "Millimeter", value: 1000000 },
  { label: "Centimeter", value: 10e7 },
  { label: "Meter", vaue: 10e9 },
  { label: "Kilometer", value: 10e12 },
  { label: "Inch", value: 2.54 * 10e7 },
  { label: "Foot", value: 3.048 * 10e8 },
  { label: "Yard", value: 9.144 * 10e8 },
  { label: "Mile", value: 1.609 * 10e12 },
  { label: "Nautical Mile", value: 1.852 * 10e12 },
];
const Mass = [
  { label: "Microgram", value: 1 },
  { label: "Milligram", value: 1000 },
  { label: "Gram", value: 10e6 },
  { label: "Kilogram", value: 10e9 },
  { label: "Metric Ton", value: 10e12 },
  { label: "Ounce", value: 2.835 * 10e7 },
  { label: "Pound", value: 4.536 * 10e8 },
  { label: "Stone", value: 6.35 * 10e9 },
  { label: "US Ton", value: 9.072 * 10e11 },
  { label: "Imperial Ton", value: 1.016 * 10e12 },
];

const Speed = [
  { label: "Kilometer per hour", value: 1 },
  { label: "Meter per second", value: 3.6 },
  { label: "Foot per second", value: 1.09728 },
  { label: "Miles per hour", value: 1.60934 },
  { label: "Knot", value: 1.852 },
];

const Time = [
  { label: "Nanosecond", value: 1 },
  { label: "Microsecond", value: 1000 },
  { label: "Millisecond", value: 10e6 },
  { label: "Second", value: 10e9 },
  { label: "Minute", value: 6 * 10e10 },
  { label: "Hour", value: 3.6 * 10e12 },
  { label: "Day", value: 8.64 * 10e13 },
  { label: "Week", value: 6.048 * 10e14 },
  { label: "Month", value: 2.628 * 10e15 },
  { label: "Year", value: 3.154 * 10e16 },
  { label: "Decade", value: 3.154 * 10e17 },
  { label: "Century", value: 3.154 * 10e18 },
];
const Temperature = [
  { label: "Kelvin", value: 0 },
  { label: "Celsius", value: 0 },
  { label: "Fahrenheit", value: 0 },
];

const Frequency = [
  { label: "Hertz", value: 1 },
  { label: "KiloHertz", value: 1000 },
  { label: "MegaHertz", value: 10e6 },
  { label: "Gigahertz", value: 10e9 },
];

const Fuel_Economy = [
  { label: "Miles per gallon(Imperial)", value: 1 },
  { label: "Miles per gallon", value: 1.20095 },
  { label: "Kilometer per liter", value: 2.82481 },
  { label: "Liter per 100 kilometers", value: 282.481 },
];
const Plane_Angle = [
  { label: "Second of arc", value: 1 },
  { label: "Degree", value: 3600 },
  { label: "Gradian", value: 3240 },
  { label: "Milliradian", value: 206.265 },
  { label: "Minute of arc", value: 60 },
  { label: "Radian", value: 206265 },
];
const Pressure = [
  { label: "Pascal", value: 1 },
  { label: "Atmosphere", value: 101325 },
  { label: "Bar", value: 100000 },
  { label: "Pound-force per square inch", value: 6894.76 },
  { label: "Torr", value: 133.322 },
];
const Energy = [
  { label: "Electronvolt", value: 1 },
  { label: "Joule", value: 6.242 * 10e18 },
  { label: "Kilojoule", value: 6.242 * 10e21 },
  { label: "Gram calorie", value: 2.611 * 10e19 },
  { label: "Kilocalorie", value: 2.611 * 10e22 },
  { label: "Watt hour", value: 2.247 * 10e22 },
  { label: "Kilowatt hour", value: 2.247 * 10e25 },
  { label: "British thermal unit", value: 6.585 * 10e21 },
  { label: "US therm", value: 6.584 * 10e26 },
  { label: "Foot-pound", value: 8.462 * 10e18 },
];
const Area = [
  { label: "Square inch", value: 1 },
  { label: "Acre", value: 6.273 * 10e6 },
  { label: "Hectare", value: 1.55 * 10e7 },
  { label: "Square foot", value: 144 },
  { label: "Square yard", value: 1296 },
  { label: "Square mile", value: 4.014 * 10e9 },
  { label: "Square meter", value: 1550 },
  { label: "Square kilometer", value: 1.55 * 10e9 },
];
const Data_Transfer_Rate = [
  { label: "Bit per second", value: 1 },
  { label: "Kilobit per second", value: 1000 },
  { label: "Kilobyte per second", value: 8000 },
  { label: "Kibibit per second", value: 1024 },
  { label: "Megabit per second", value: 10e6 },
  { label: "Megabyte per second", value: 8 * 10e6 },
  { label: "Mebibit per second", value: 1.049 * 10e6 },
  { label: "Gigabit per second", value: 10e9 },
  { label: "Gigabyte per second", value: 8 * 10e9 },
  { label: "Gibibit per second", value: 1.074 * 10e9 },
  { label: "Terabit per second", value: 10e12 },
  { label: "Terabyte per second", value: 8 * 10e12 },
  { label: "Tebibit per second", value: 1.1 * 10e12 },
];

const Volume = [
  { label: "Milliliter", value: 1 },
  { label: "Liter", value: 1000 },
  { label: "Cubic meter", value: 10e6 },
  { label: "Cubic Inch", value: 16.3871 },
  { label: "Cubic foot", value: 28316.8 },
  { label: "Imperial teaspoon", value: 5.91939 },
  { label: "Imperial tablespoon", value: 17.7582 },
  { label: "Imperial fluid ounce", value: 28.4131 },
  { label: "Imperial cup", value: 284.131 },
  { label: "Imperial pint", value: 568.261 },
  { label: "Imperial quart", value: 1136.52 },
  { label: "Imperial gallon", value: 4546.09 },
  { label: "US teaspoon", value: 4.92892 },
  { label: "US tablespoon", value: 14.7868 },
  { label: "US fluid ounce", value: 29.5735 },
  { label: "US legal cup", value: 240 },
  { label: "US liquid pint", value: 473.176 },
  { label: "US liquid quart", value: 946.353 },
  { label: "US liquid gallon", value: 3785.41 },
];
const Digital_Storage = [
  { label: "Bit", value: 1 },
  { label: "Kilobit", value: 1000 },
  { label: "Kibibit", value: 1024 },
  { label: "Megabit", value: 10e6 },
  { label: "Mebibit", value: 1.049 * 10e6 },
  { label: "Gigabit", value: 10e9 },
  { label: "Gibibit", value: 1.074 * 10e9 },
  { label: "Terabit", value: 10 * 12 },
  { label: "Tebibit", value: 1.1 * (10 * 12) },
  { label: "Petabit", value: 10e15 },
  { label: "Pebibit", value: 1.126 * 10e15 },
  { label: "Byte", value: 8 },
  { label: "Kilobyte", value: 8000 },
  { label: "Kibibyte", value: 8192 },
  { label: "Megabyte", value: 8 * 10e6 },
  { label: "Mebibyte", value: 8.389 * 10e6 },
  { label: "Gigabyte", value: 8 * 10e9 },
  { label: "Gigibyte", value: 8.59 * 10e9 },
  { label: "Terabyte", value: 8 * 10e12 },
  { label: "Tebibyte", value: 8.796 * 10e12 },
  { label: "Petabyte", value: 8 * 10e15 },
  { label: "Pebibyte", value: 9.007 * 10e15 },
];

const units_kind = [
  { label: "Area", value: Area },
  { label: "Digital_Storage", value: Digital_Storage },
  { label: "Fuel_Economy", value: Fuel_Economy },
  { label: "Length", value: Length },
  { label: "Mass", value: Mass },
  { label: "Time", value: Time },
  { label: "Speed", value: Speed },
  { label: "Volume", value: Volume },
  { label: "Data_Transfer_Rate", value: Data_Transfer_Rate },
  { label: "Energy", value: Energy },
  { label: "Pressure", value: Pressure },
  { label: "Plane_Angle", value: Plane_Angle },
  { label: "Temperature", value: Temperature },
  { label: "Frequency", value: Frequency },
];

const Units = () => {
  const converter = (the_dictionary, value_before, before, after) => {
    let formula, value_after, conversion;
    if (before === "Liter per 100 kilometers") {
      formula = `${282.481 / the_dictionary[after]}/x`;
      value_after =
        the_dictionary[before] / the_dictionary[after] / value_before;
      conversion = { formula: formula, value_after: value_after };
    } else if (after === "Liter per 100 kilometers") {
      formula = `${282.481 / the_dictionary[before]}/x`;
      value_after =
        the_dictionary[after] / the_dictionary[before] / value_before;
      conversion = { formula: formula, value_after: value_after };
    } else {
      formula = the_dictionary[before] / the_dictionary[after];
      value_after = formula * value_before;
      conversion = { formula: formula, value_after: value_after };
    }
    return conversion;
  };

  const temperature = (value_before, before, after) => {
    let formula, value_after, conversion;
    if (before === "Celsius") {
      if (after === "Kelvin") {
        formula = "x + 273.15";
        value_after = value_before + 273.15;
      } else {
        formula = "x*(1.8) + 32";
        value_after = value_before * 1.8 + 32;
      }
    } else if (before === "Kelvin") {
      if (after === "Celsius") {
        formula = "x - 273.15";
        value_after = value_before - 273.15;
      } else {
        formula = "(x-273.15) * (1.8) + 32";
        value_after = (value_before - 273.15) * 1.8 + 32;
      }
    } else if (before === "Fahrenheit") {
      if (after === "Celsius") {
        formula = "(x-32) * 5/9 ";
        value_after = ((value_before - 32) * 5) / 9;
      } else {
        formula = "(x-32) * 5/9 + 273.15";
        value_after = ((value_before - 32) * 5) / 9 + 273.15;
      }
    }
    conversion = { formula: formula, value_after: value_after };
    return conversion;
  };

  const [kind, setKind] = useState(null);

  const kindHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1 className="header">Unit Conversion</h1>
      <h2 className="description">
        Conversion Between Different Measurement Units
      </h2>

      <div className="unit-container">
        <div className="kind-container">
          <h4 className="kind-text">Select Measurement</h4>
          <div className="kind-dropdown">
            <Select
              options={units_kind}
              onChange={kindHandler}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: "green",
                  borderRadius: "0.5rem",
                  fontSize: "120%",
                  textAlign: "center",
                  fontWeight: 900,
                  fontFamily: "Verdana",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Units;
