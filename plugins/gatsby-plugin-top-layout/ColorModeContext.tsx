import * as React from 'react';

interface ColorMode {
  toggleColorMode: () => void;
}

const ColorModeContext = React.createContext<ColorMode>({
  toggleColorMode: () => {
    // nothing
  },
});

export function useColorMode(): ColorMode {
  const colorMode = React.useContext(ColorModeContext);
  return colorMode;
}

export default ColorModeContext;
