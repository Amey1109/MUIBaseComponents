import { CustomSelect } from "./components/CustomSelect";

function App() {
  const options = [
    {
      optionValue: "IN",
      optionLabel: "India",
    },
    {
      optionValue: "AU",
      optionLabel: "Australia",
    },
    {
      optionValue: "USA",
      optionLabel: "United States",
    },
  ];
  return (
    <div>
      <CustomSelect
        id="Test"
        optionsArray={options}
        label="Select Country"
        onChangeHandler={(e) => {
          console.log("->", e);
        }}
        isMultiSelect
      />
    </div>
  );
}

export default App;
