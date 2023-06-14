"use client";
import { createContext, useReducer } from "react";

type StateType = {
  theme: string;
  fontSize: number;
};

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload?: number;
// };

//Discriminated Unions
type ColorActionType = {
  type: "CHANGE_THEME";
};
type SizeActionType = {
  type: "CHANGE_FONTSIZE";
  payload: number;
};

type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
