import React, { useState, useEffect, useMemo, useCallback, useReducer } from "react";


const textReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return action.payload.length <= 200 ? action.payload : state;
    default:
      return state;
  }
};


function useCharacterCount(initialText) {
  const [text, dispatch] = useReducer(textReducer, initialText);
  const [charCount, setCharCount] = useState(text.length);

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const updateText = useCallback((newText) => {
    dispatch({ type: "UPDATE_TEXT", payload: newText });
  }, []);

  const remainingChars = useMemo(() => 200 - charCount, [charCount]);

  return { text, charCount, remainingChars, updateText };
}


function TextAreaApp() {
  const { text, charCount, remainingChars, updateText } = useCharacterCount("");

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Character Counter</h2>
      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        rows="4"
        cols="40"
        
      />
      <p>Characters: {charCount} / 200</p>
      <p>Remaining: {remainingChars}</p>
    </div>
  );
}

export default TextAreaApp;