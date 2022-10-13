import { CustomButtonGroup } from "./components/CustomButtonGroup";

function App() {
  const ButtonGroupArray = [
    {
      id: "LeftButton",
      buttonLabel: "Left",
      buttonOnClick: () => alert("Left"),
    },
    {
      id: "MiddleButton",
      buttonLabel: "Middle",
      buttonOnClick: () => alert("Middle"),
    },
    {
      id: "RightButton",
      buttonLabel: "Right",
      buttonOnClick: () => alert("Right"),
    },
  ];

  return (
    <div>
      <CustomButtonGroup  id="Button Group Test" buttonsArray={ButtonGroupArray} />
    </div>
  );
}

export default App;
