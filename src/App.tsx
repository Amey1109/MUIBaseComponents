import { CustomCheckBoxGroup } from "./components/CustomCheckboxGroup";
import { CustomRadioButton } from "./components/CustomRadioButton";

function App() {
  const options = [
    {
      checkboxLabel: "Male",
      checkboxValue: "Male",
    },
    {
      checkboxLabel: "Female",
      checkboxValue: "Female",
    },
  ];
  return (
    <div>
      <CustomCheckBoxGroup
        id="checkbox-text"
        options={options}
        onChangeHandler={(value) => {
          console.log(value);
        }}
        label="foo bar"
      />
    </div>
  );
}

export default App;
