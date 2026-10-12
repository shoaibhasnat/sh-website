import React, { useEffect, useState } from "react";
import {
  API_GET_POSTS,
  API_CREATE_POST,
  API_UPDATE_POST,
  API_DELETE_POST,
} from "../../../apis/SampleApi";

const cardStyle = {
  width: "min(950px, 92vw)",
  border: "1px solid #e7e7e7",
  borderRadius: 12,
  padding: 16,
  background: "#fff",
};

const buttonStyle = (variant = "primary") => ({
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #ddd",
  cursor: "pointer",
  background: variant === "primary" ? "#111" : "#fff",
  color: variant === "primary" ? "#fff" : "#111",
  fontWeight: 600,
});

const codeBoxStyle = {
  marginTop: 10,
  padding: 12,
  borderRadius: 10,
  background: "#0b1020",
  color: "#d7e3ff",
  border: "1px solid #1f2a44",
  overflow: "auto",
  maxHeight: 260,
  fontSize: 12,
  lineHeight: 1.4,
};

const sectionTitle = {
  fontSize: 14,
  fontWeight: 800,
  letterSpacing: 0.3,
  marginBottom: 8,
};

const ApiDemoUI = () => {
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("idle"); // idle | running | done | error
  const [error, setError] = useState("");

  const [getPosts, setGetPosts] = useState(null);
  const [createdPost, setCreatedPost] = useState(null);
  const [updatedPost, setUpdatedPost] = useState(null);
  const [deletedResp, setDeletedResp] = useState(null);

  const reset = () => {
    setError("");
    setStage("idle");
    setGetPosts(null);
    setCreatedPost(null);
    setUpdatedPost(null);
    setDeletedResp(null);
  };

  const runAll = async () => {
    setLoading(true);
    setStage("running");
    setError("");

    const posts = await API_GET_POSTS();
    setGetPosts(posts);

    // POST
    const created = await API_CREATE_POST({
      title: "Hello",
      body: "This is a sample post",
      userId: 1,
    });
    setCreatedPost(created);

    // PUT
    const updated = await API_UPDATE_POST(1, {
      id: 1,
      title: "Updated title",
      body: "Updated body",
      userId: 1,
    });
    setUpdatedPost(updated);

    // DELETE
    const deleted = await API_DELETE_POST(1);
    setDeletedResp(deleted);

    setStage("done");
    setLoading(false);
  };

  // Auto-run once (like your original)
  useEffect(() => {
    runAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={cardStyle}>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
      >
        <div>
          <div style={{ fontSize: 18, fontWeight: 900 }}>API Demo (CRUD)</div>
          <div style={{ marginTop: 6, color: "#555", fontSize: 13 }}>
            Shows results of <b>GET</b>, <b>POST</b>, <b>PUT</b>, <b>DELETE</b>{" "}
            using your <code>SampleApi</code> functions.
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            style={buttonStyle("secondary")}
            onClick={reset}
            disabled={loading}
            title="Clear results"
          >
            Reset
          </button>
          <button
            style={buttonStyle("primary")}
            onClick={runAll}
            disabled={loading}
            title="Run all requests"
          >
            {loading ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid #e7e7e7",
            background: "#fafafa",
            fontSize: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background:
                stage === "done"
                  ? "#22c55e"
                  : stage === "error"
                    ? "#ef4444"
                    : stage === "running"
                      ? "#f59e0b"
                      : "#9ca3af",
              display: "inline-block",
            }}
          />
          <span style={{ fontWeight: 700 }}>
            Status:{" "}
            {stage === "idle"
              ? "Idle"
              : stage === "running"
                ? "Running"
                : stage === "done"
                  ? "Done"
                  : "Error"}
          </span>
        </div>

        {error ? (
          <div
            style={{
              marginTop: 10,
              padding: 12,
              borderRadius: 10,
              border: "1px solid #fecaca",
              background: "#fff1f2",
              color: "#991b1b",
              fontSize: 13,
            }}
          >
            <b>Error:</b> {error}
          </div>
        ) : null}
      </div>

      {/* GET */}
      <div style={{ marginTop: 16 }}>
        <div style={sectionTitle}>1) GET posts</div>
        <div style={{ color: "#666", fontSize: 12 }}>
          Displaying first 5 items (if array).
        </div>
        <pre style={codeBoxStyle}>
          {getPosts
            ? JSON.stringify(
                Array.isArray(getPosts) ? getPosts.slice(0, 5) : getPosts,
                null,
                2,
              )
            : loading
              ? "Loading..."
              : "No data yet."}
        </pre>
      </div>

      {/* POST */}
      <div style={{ marginTop: 16 }}>
        <div style={sectionTitle}>2) POST create</div>
        <pre style={codeBoxStyle}>
          {createdPost
            ? JSON.stringify(createdPost, null, 2)
            : loading
              ? "Loading..."
              : "No data yet."}
        </pre>
      </div>

      {/* PUT */}
      <div style={{ marginTop: 16 }}>
        <div style={sectionTitle}>3) PUT update (id: 1)</div>
        <pre style={codeBoxStyle}>
          {updatedPost
            ? JSON.stringify(updatedPost, null, 2)
            : loading
              ? "Loading..."
              : "No data yet."}
        </pre>
      </div>

      {/* DELETE */}
      <div style={{ marginTop: 16 }}>
        <div style={sectionTitle}>4) DELETE (id: 1)</div>
        <pre style={codeBoxStyle}>
          {deletedResp
            ? JSON.stringify(deletedResp, null, 2)
            : loading
              ? "Loading..."
              : "No data yet."}
        </pre>
      </div>
    </div>
  );
};

export default ApiDemoUI;
