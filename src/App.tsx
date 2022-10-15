import { CustomRadioButton } from "./components/CustomRadioButton";

function App() {
  const options = [
    {
      radioLabel: "Male",
      radioValue: "Male",
    },
    {
      radioLabel: "Female",
      radioValue: "Female",
    },
  ];
  return (
    <div>
      <CustomRadioButton
        id="test-radio"
        onChangeHandler={(value) => {
          console.log(value, "<--");
        }}
        options={options}
        label={"Select Gender"}
        color={"error"}
      />
    </div>
  );
}

export default App;
