export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0a",
      color: "white",
      padding: "24px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>
        My Website is Live
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#b3b3b3", marginBottom: "24px" }}>
        This homepage replaced the default Next.js starter page successfully.
      </p>
      <a
        href="#"
        style={{
          padding: "12px 20px",
          borderRadius: "10px",
          background: "white",
          color: "black",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Get Started
      </a>
    </main>
  );
}
