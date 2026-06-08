import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import bag3 from "../assets/bag3.png";
import bag4 from "../assets/bag4.png";
import bag5 from "../assets/bag5.png";
import bag6 from "../assets/bag6.png";
export function Bags() {
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
            Bags
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
              src={bag1}
              alt="Silver Satin Pink Lace-Up Shoulder Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bags</p>
              <h3>Silver Satin Pink Lace-Up Shoulder Bag</h3>
              <p style={{ color: "#71717a" }}>
                A stylish shoulder bag with a satin finish and pink lace-up details.
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
              src={bag2}
              alt="Cream Buckle Hobo Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bags</p>
              <h3>Cream Buckle Hobo Bag</h3>
              <p style={{ color: "#71717a" }}>
                A versatile hobo bag with a cream finish and elegant buckle details.
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
              src={bag3}
              alt="Denim Star Patch Chain Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bags</p>
              <h3>Denim Star Patch Chain Bag</h3>
              <p style={{ color: "#71717a" }}>
                A trendy bag with a denim finish and star patch details.
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
              src={bag4}
              alt="Pink Punk Buckle Chain Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bags</p>
              <h3>Pink Punk Buckle Chain Bag</h3>
              <p style={{ color: "#71717a" }}>
                A trendy bag with a pink finish and punk-inspired buckle details.
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
              src={bag5}
              alt="Black Satin Bow Knot Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bags</p>
              <h3>Black Satin Bow Knot Bag</h3>
              <p style={{ color: "#71717a" }}>
                A elegant bag with a black satin finish and bow knot details.
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
              src={bag6}
              alt="Leopard Print Crescent Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}>
              <p style={{ color: "#a1a1aa" }}>Bags</p>
              <h3>Leopard Print Crescent Bag</h3>
              <p style={{ color: "#71717a" }}>
                A stylish bag with a leopard print and crescent moon details.
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