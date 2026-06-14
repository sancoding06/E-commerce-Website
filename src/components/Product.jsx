import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export function Product() {
  const [arr, setArr] = useState([]);

  async function fetchData() {
    const { data } = await supabase
      .from("products")
      .select("*");

    setArr(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main
      style={{
        background: "#fffafc",
        minHeight: "100vh",
        padding: "40px 24px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#3f3f46",
          marginBottom: "40px",
        }}
      >
        Our Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {arr.map((p) => (
          <div
            key={p.id}
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={p.imgurl}
              alt={p.name}
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  color: "#3f3f46",
                  marginTop: 0,
                }}
              >
                {p.name}
              </h3>

              <p
                style={{
                  color: "#71717a",
                  lineHeight: 1.6,
                }}
              >
                {p.description}
              </p>

              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.2rem",
                }}
              >
                ₹{p.price}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}