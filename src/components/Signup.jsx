import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

export function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#fffafc,#fdf2f8)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "40px",
          borderRadius: "24px",
          border: "1px solid #f5dce7",
          boxShadow: "0 15px 40px rgba(219,39,119,.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#3f3f46",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            marginBottom: "18px",
            border: "1px solid #f3d4e1",
            borderRadius: "14px",
            fontSize: "1rem",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            marginBottom: "18px",
            border: "1px solid #f3d4e1",
            borderRadius: "14px",
            fontSize: "1rem",
          }}
        />

        {error && (
          <p
            style={{
              color: "#dc2626",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {error}
          </p>
        )}

        <button
          onClick={submit}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            background: "#db2777",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p
          style={{
            marginTop: "24px",
            textAlign: "center",
            color: "#71717a",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#db2777",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}