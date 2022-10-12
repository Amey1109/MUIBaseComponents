import { CustomButton } from "./components/CustomButton";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div>
      <CustomButton
        buttonText="Click"
        onClickHandler={(e) => {
          console.log(e);
        }}
        isIconButton={true}
        Icon={<SearchIcon />}
      />
    </div>
  );
}

export default App;
