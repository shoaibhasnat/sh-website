import ApiDemoUI from "../../ui/api-demo-ui/ApiDemoUI";

const ApiDemoMain = () => {
  return (
    <div
      style={{
        marginTop: "90px",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 900 }}>
        API Demo (CRUD Operations)
      </div>
      <ApiDemoUI />
    </div>
  );
};

export default ApiDemoMain;
