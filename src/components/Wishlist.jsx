import wish1 from '../assets/wish1.png';
import wish2 from '../assets/wish2.png';
import wish3 from '../assets/wish3.png'
export function Wishlist() {
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
          padding: "80px 24px 40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            margin: 0,
            color: "#3f3f46",
          }}
        >
          My Wishlist
        </h1>

        <p
          style={{
            color: "#71717a",
            marginTop: "16px",
            fontSize: "1.1rem",
          }}
        >
          Save your favorite pieces and shop them later.
        </p>
      </section>

      {/* Wishlist Items */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={wish1}
              alt="Pink Rose Ruffled Mesh Top"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  marginTop: 0,
                  color: "#3f3f46",
                }}
              >
                Pink Rose Ruffled Mesh Top
              </h3>

              <p
                style={{
                  color: "#71717a",
                }}
              >
                A timeless silhouette perfect for special
                occasions.
              </p>

              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.15rem",
                }}
              >
                ₹2,400
              </strong>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px",
                  background: "#db2777",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={wish2}
              alt="White Pearl Charm Bag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  marginTop: 0,
                  color: "#3f3f46",
                }}
              >
                White Pearl Charm Bag
              </h3>

              <p
                style={{
                  color: "#71717a",
                }}
              >
                Sophisticated styling for everyday elegance.
              </p>

              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.15rem",
                }}
              >
                ₹1,400
              </strong>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px",
                  background: "#db2777",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={wish3}
              alt="Cherry Print Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  marginTop: 0,
                  color: "#3f3f46",
                }}
              >
                Cherry Print Dress
              </h3>

              <p
                style={{
                  color: "#71717a",
                }}
              >
                A versatile coquette cottagecore dress designed for every look.
              </p>

              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.15rem",
                }}
              >
                ₹2,900
              </strong>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px",
                  background: "#db2777",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}