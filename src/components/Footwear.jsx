import footwear1 from "../assets/footwear1.png";
import footwear2 from "../assets/footwear2.png";
import footwear3 from "../assets/footwear3.png";
import footwear4 from "../assets/footwear4.png";
import footwear5 from "../assets/footwear5.png";
import footwear6 from "../assets/footwear6.png";
export function Footwear() {
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
            Footwear
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
              src={footwear1}
              alt="Cherry Red Platform Pumps"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Footwear</p>
              <h3>Cherry Red Platform Pumps</h3>
              <p style={{ color: "#71717a" }}>
                Elevate your style with these stunning platform pumps.
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
              src={footwear2}
              alt="Baby Blue Bow Gem Heels"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Footwear</p>
              <h3>Baby Blue Bow Gem Heels</h3>
              <p style={{ color: "#71717a" }}>
                Add a touch of elegance to your ensemble with these beautiful heels.
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
              src={footwear3}
              alt="Pink Satin Lace-Up Platforms"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Footwear</p>
              <h3>Pink Satin Lace-Up Platforms</h3>
              <p style={{ color: "#71717a" }}>
                Princess-core heels that scream elegance and whimsy.
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
              src={footwear4}
              alt="White Chunky Loafers"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Footwear</p>
              <h3>White Chunky Loafers</h3>
              <p style={{ color: "#71717a" }}>
                Comfortable and stylish loafers for everyday wear.
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
              src={footwear5}
              alt="Brown Suede Prada Platforms"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Footwear</p>
              <h3>Brown Suede Prada Platforms</h3>
              <p style={{ color: "#71717a" }}>
                Elegant platform loafers with a touch of sophistication.
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
              src={footwear6}
              alt="Lavender Satin Versace Platforms"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Footwear</p>
              <h3>Lavender Satin Versace Platforms</h3>
              <p style={{ color: "#71717a" }}>
                Stylish boots with a romantic bow detail.
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