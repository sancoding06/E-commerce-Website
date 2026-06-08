import salebanner from "../assets/salebanner.png";
import sale1 from "../assets/sale1.png";
import sale2 from "../assets/sale2.png";
import sale3 from "../assets/sale3.png";
export function Sale() {
  return (
    <main
      style={{
        background: "#fffafc",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background:
            "pink",
          color: "white",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
            Limited Time Offer
          </span>

          <h1
            style={{
              fontSize: "4.5rem",
              margin: "20px 0",
            }}
          >
            Summer Sale
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            Discover exclusive styles with up to 50% off on
            selected collections.
          </p>

          <button
            style={{
              marginTop: "30px",
              background: "white",
              color: "#ec4899",
              border: "none",
              padding: "14px 30px",
              borderRadius: "999px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Sale Banner */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "50px auto",
          padding: "0 24px",
        }}
      >
        <img
          src={salebanner}
          alt="Summer Sale Banner"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "32px",
            display: "block",
          }}
        />
      </section>

      {/* Featured Sale Products */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#3f3f46",
            marginBottom: "50px",
          }}
        >
          Featured Deals
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {/* Product 1 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={sale1}
              alt="Floral Midi Dress"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <span
                style={{
                  background: "#fdf2f8",
                  color: "#db2777",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: ".85rem",
                }}
              >
                40% OFF
              </span>

              <h3
                style={{
                  color: "#3f3f46",
                }}
              >
                Floral Midi Dress
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <strong
                  style={{
                    color: "#db2777",
                    fontSize: "1.2rem",
                  }}
                >
                  ₹1,799
                </strong>

                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#a1a1aa",
                  }}
                >
                  ₹2,999
                </span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={sale2}
              alt="Classic Blouse"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <span
                style={{
                  background: "#fdf2f8",
                  color: "#db2777",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: ".85rem",
                }}
              >
                35% OFF
              </span>

              <h3
                style={{
                  color: "#3f3f46",
                }}
              >
                Classic Blouse
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <strong
                  style={{
                    color: "#db2777",
                    fontSize: "1.2rem",
                  }}
                >
                  ₹1,299
                </strong>

                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#a1a1aa",
                  }}
                >
                  ₹1,999
                </span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #f5dce7",
            }}
          >
            <img
              src={sale3}
              alt="Premium Handbag"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <span
                style={{
                  background: "#fdf2f8",
                  color: "#db2777",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: ".85rem",
                }}
              >
                45% OFF
              </span>

              <h3
                style={{
                  color: "#3f3f46",
                }}
              >
                Premium Handbag
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <strong
                  style={{
                    color: "#db2777",
                    fontSize: "1.2rem",
                  }}
                >
                  ₹2,199
                </strong>

                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#a1a1aa",
                  }}
                >
                  ₹3,999
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}