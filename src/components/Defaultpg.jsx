import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export function Defaultpg() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => setUser(data.session?.user ?? null));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#fffafc,#fdf2f8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "white",
          padding: "60px",
          borderRadius: "30px",
          textAlign: "center",
          border: "1px solid #f5dce7",
          boxShadow: "0 15px 40px rgba(219,39,119,.08)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            background: "#fdf2f8",
            color: "#db2777",
            borderRadius: "999px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Welcome
        </span>

        <h1
          style={{
            color: "#3f3f46",
            fontSize: "3.5rem",
            marginBottom: "20px",
          }}
        >
          Fashion Starts Here
        </h1>

        <p
          style={{
            color: "#71717a",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Discover timeless styles, elegant collections, and premium
          fashion curated just for you. Sign up to begin your shopping
          journey or log in to continue exploring.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {user ? (
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                background: "#db2777",
                color: "white",
                padding: "15px 30px",
                borderRadius: "14px",
                fontWeight: "600",
              }}
            >
              Go to Home
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  background: "#db2777",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "14px",
                  fontWeight: "600",
                }}
              >
                Create Account
              </Link>

              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  background: "white",
                  color: "#db2777",
                  padding: "15px 30px",
                  borderRadius: "14px",
                  border: "2px solid #db2777",
                  fontWeight: "600",
                }}
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}