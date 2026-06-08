import dress1 from "../assets/dress1.png";
import dress2 from "../assets/dress2.png";
import dress3 from "../assets/dress3.png";
import dress4 from "../assets/dress4.png";
import dress5 from "../assets/dress5.png";
import dress6 from "../assets/dress6.png";
export function Dresses() {
  return (
    <main
      style={{
        background: "#fffafc",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #fff5f7, #ffffff)",
          padding: "100px 24px",
          borderBottom: "1px solid #f5dce7",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "#db2777",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".8rem",
              marginBottom: "16px",
            }}
          >
            Collection
          </span>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              color: "#3f3f46",
              margin: 0,
            }}
          >
            Dresses
          </h1>

          <p
            style={{
              marginTop: "20px",
              maxWidth: "600px",
              marginInline: "auto",
              color: "#71717a",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            Elegant silhouettes and timeless styles designed
            for every occasion.
          </p>
        </div>
      </section>

      {/* Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {["All", "New", "Popular", "Trending"].map(
              (filter) => (
                <button
                  key={filter}
                  style={{
                    background: "white",
                    border: "1px solid #f5dce7",
                    borderRadius: "999px",
                    padding: "10px 18px",
                    color: "#52525b",
                    cursor: "pointer",
                  }}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          <select
            style={{
              background: "white",
              border: "1px solid #f5dce7",
              borderRadius: "999px",
              padding: "10px 18px",
              color: "#52525b",
              outline: "none",
            }}
          >
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {/* Dress 1 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={dress1}
              alt="Elegant Yellow Summer Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Dresses</p>
              <h3>Elegant Yellow Summer Dress</h3>
              <p style={{ color: "#71717a" }}>
                Crafted for everyday elegance and effortless
                styling.
              </p>
              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.1rem",
                }}
              >
                ₹2,400
              </strong>
            </div>
          </div>

          {/* Dress 2 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={dress2}
              alt="Green Cottagecore Midi Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Dresses</p>
              <h3>Green Cottagecore Midi Dress</h3>
              <p style={{ color: "#71717a" }}>
                A charming design with a cottagecore aesthetic.
              </p>
              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.1rem",
                }}
              >
                ₹2,900
              </strong>
            </div>
          </div>

          {/* Dress 3 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={dress3}
              alt="Pink Plaid Bow Corset Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Dresses</p>
              <h3>Pink Plaid Bow Corset Dress</h3>
              <p style={{ color: "#71717a" }}>
                A charming corset design with a playful bow detail.
              </p>
              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.1rem",
                }}
              >
                ₹3,400
              </strong>
            </div>
          </div>

          {/* Dress 4 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={dress4}
              alt="Beige Plaid Cheongsam Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Dresses</p>
              <h3>Beige Plaid Cheongsam Dress</h3>
              <p style={{ color: "#71717a" }}>
                A traditional-inspired design with a modern twist.
              </p>
              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.1rem",
                }}
              >
                ₹2,700
              </strong>
            </div>
          </div>

          {/* Dress 5 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={dress5}
              alt="Brown Plaid Midi Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Dresses</p>
              <h3>Brown Plaid Midi Dress</h3>
              <p style={{ color: "#71717a" }}>
                A versatile midi-length design with a modern twist.
              </p>
              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.1rem",
                }}
              >
                ₹2,600
              </strong>
            </div>
          </div>

          {/* Dress 6 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={dress6}
              alt="Cream Bow-Shoulder Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Dresses</p>
              <h3>Cream Bow-Shoulder Dress</h3>
              <p style={{ color: "#71717a" }}>
                A charming design with a playful bow detail.
              </p>
              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.1rem",
                }}
              >
                ₹3,200
              </strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}