import { createContext } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { palette, theme } from "./themes";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
	const [currentPalette, setCurrentPalette] = useState(palette.light);

	function toggleTheme() {
		setCurrentPalette(currentPalette === palette.light ? palette.dark : palette.light)
	}

	return(
		<ThemeContext.Provider value={{toggleTheme, currentPalette}}>
			<ThemeProvider theme={{...theme, palette: currentPalette}}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
}