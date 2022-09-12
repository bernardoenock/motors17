import { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeProvider";

import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { Box, Button } from "./styles";

const ThemeSelector: React.FC = () => {
  const { mode, handleTheme } = useContext(ThemeContext);

  return (
    <Box>
      <Button className={mode} onClick={handleTheme}>
        {mode === "light" ? (
          <HiLightBulb size={30} />
        ) : (
          <HiOutlineLightBulb size={30} />
        )}
      </Button>
    </Box>
  );
};

export default ThemeSelector;
