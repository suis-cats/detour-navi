import React from "react";

const DetourSuggestionPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Detour Suggestion Page</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button style={{ padding: "1rem", fontSize: "1rem" }}>Button 1</button>
        <button style={{ padding: "1rem", fontSize: "1rem" }}>Button 2</button>
      </div>
    </div>
  );
};

export default DetourSuggestionPage;
