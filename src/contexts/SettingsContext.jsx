import PropTypes from "prop-types";
import {
  createContext,
  useEffect,
  useContext,
  useMemo,
  useCallback,
  useState,
} from "react";

// ----------------------------------------------------------------------

const defaultSettings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeLayout: "vertical",
};

const initialState = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  // Layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error("useSettingsContext must be use inside SettingsProvider");

  return context;
};

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

export function SettingsProvider({ children }) {
  //const [settings, setSettings] = useLocalStorage("settings", defaultSettings);
  const [settings, setSettings] = useState(defaultSettings);
  //const storageAvailable = localStorageAvailable();

  // Mode light - dark
  // const onToggleMode = useCallback(() => {
  //   const themeMode = settings.themeMode === "light" ? "dark" : "light";
  //   setSettings({ ...settings, themeMode });
  // }, [setSettings, settings]);

  // const onChangeMode = useCallback(
  //   (event) => {
  //     const themeMode = event.target.value;
  //     setSettings({ ...settings, themeMode });
  //   },
  //   [setSettings, settings]
  // );

  // Layout
  const onToggleLayout = useCallback(() => {
    const themeLayout =
      settings.themeLayout === "vertical" ? "mini" : "vertical";
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      // Mode
      // onToggleMode,
      //onChangeMode,

      // Layout
      onToggleLayout,
    }),
    [
      settings,
      // Mode
      //onToggleMode,

      // Layout
      onToggleLayout,
    ]
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}
