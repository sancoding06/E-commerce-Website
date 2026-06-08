import bottom1 from "../assets/bottom1.png";
import bottom2 from "../assets/bottom2.png";
import bottom3 from "../assets/bottom3.png";
import bottom4 from "../assets/bottom4.png";
import bottom5 from "../assets/bottom5.png";
import bottom6 from "../assets/bottom6.png";
export function Bottoms() {
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
            Bottoms
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
              src={bottom1}
              alt="Y2K Bow and Star Flare Jeans"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bottoms</p>
              <h3>Y2K Bow and Star Flare Jeans</h3>
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
              src={bottom2}
              alt="Denim Fish-Tail Mini Skirt"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bottoms</p>
              <h3>Denim Fish-Tail Mini Skirt</h3>
              <p style={{ color: "#71717a" }}>
                A classic design for a timeless look.
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
              src={bottom3}
              alt="Navy Apple Embroidered Sweatpants"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bottoms</p>
              <h3>Navy Apple Embroidered Sweatpants</h3>
              <p style={{ color: "#71717a" }}>
                A stylish pair of sweatpants with intricate embroidery.
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
              src={bottom4}
              alt="Gothic Asymmetric Skirt"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bottoms</p>
              <h3>Gothic Asymmetric Skirt</h3>
              <p style={{ color: "#71717a" }}>
                A dramatic design with an asymmetrical hem.
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
              src={bottom5}
              alt="Star Print Distressed Flares"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bottoms</p>
              <h3>Star Print Distressed Flares</h3>
              <p style={{ color: "#71717a" }}>
                A trendy pair of flares with a star print and distressed finish.
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
              src={bottom6}
              alt="Punk Denim Layered Asymmetric Skirt"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bottoms</p>
              <h3>Punk Denim Layered Asymmetric Skirt</h3>
              <p style={{ color: "#71717a" }}>
                A bold design with layered denim and an asymmetrical hem.
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