import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setCounter,
  setCounterNote,
} from "../../redux/actions/counterActions";

const ReduxPersistDemo = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
  const counterNote = useSelector((state) => state.counter.note);
  const [inputNote, setInputNote] = useState(counterNote || "");

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleSetRandom = () => {
    const randomValue = Math.floor(Math.random() * 100);
    dispatch(setCounter(randomValue));
  };

  const handleReset = () => {
    dispatch(setCounter(0));
  };

  const handleNoteChange = (e) => {
    const value = e.target.value;
    setInputNote(value);
    dispatch(setCounterNote(value));
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "20px 0",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Redux Persist Demo
      </h2>

      <div
        style={{
          marginBottom: "24px",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "8px",
            color: "#666",
          }}
        >
          Counter Value:
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#2196F3",
            textAlign: "center",
          }}
        >
          {counterValue}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleIncrement}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#da190b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
        >
          Decrement
        </button>
        <button
          onClick={handleSetRandom}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9800")}
        >
          Set Random
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#9E9E9E",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7d7d7d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#9E9E9E")}
        >
          Reset to 0
        </button>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "8px",
            color: "#666",
          }}
        >
          Note (persisted):
        </label>
        <input
          type="text"
          value={inputNote}
          onChange={handleNoteChange}
          placeholder="Enter a note that will persist after refresh..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "12px",
          backgroundColor: "#E3F2FD",
          borderRadius: "6px",
          fontSize: "14px",
          color: "#1976D2",
          textAlign: "center",
        }}
      >
        💡 Try changing the counter and note, then refresh the page. The values
        should persist!
      </div>
    </div>
  );
};

export default ReduxPersistDemo;
