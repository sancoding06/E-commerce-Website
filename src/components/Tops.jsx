import top1 from '../assets/top1.png'
import top2 from '../assets/top2.png'
import top3 from '../assets/top3.png'
import top4 from '../assets/top4.png'
import top5 from '../assets/top5.png'
import top6 from '../assets/top6.png'
export function Tops() {
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
            Tops
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
              src={top1}
              alt="Cream Tie Collar Polo Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Tops</p>
              <h3>Cream Tie Collar Polo Top</h3>
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
              src={top2}
              alt="Cream Polka Dot Peplum Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Tops</p>
              <h3>Cream Polka Dot Peplum Top</h3>
              <p style={{ color: "#71717a" }}>
                A charming top with a playful polka dot pattern.
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
              src={top3}
              alt="Lavender Off-Shoulder Ribbed Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Tops</p>
              <h3>Lavender Off-Shoulder Ribbed Top</h3>
              <p style={{ color: "#71717a" }}>
                A stylish top with a modern off-shoulder design.
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
              src={top4}
              alt="Blue Gingham Peplum Cami Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Tops</p>
              <h3>Blue Gingham Peplum Cami Top</h3>
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
              src={top5}
              alt="Black-Silver Sequin Halter Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Tops</p>
              <h3>Black-Silver Sequin Halter Top</h3>
              <p style={{ color: "#71717a" }}>
                A glamorous top with a shimmering sequin design.
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
              src={top6}
              alt="Pink Babydoll Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Tops</p>
              <h3>Pink Babydoll Top</h3>
              <p style={{ color: "#71717a" }}>
                A charming top with a playful babydoll design.
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