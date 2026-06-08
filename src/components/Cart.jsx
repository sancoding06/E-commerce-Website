import cart1 from "../assets/cart1.png"
import cart2 from "../assets/cart2.png"
export function Cart() {
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
          Shopping Cart
        </h1>

        <p
          style={{
            color: "#71717a",
            marginTop: "16px",
            fontSize: "1.1rem",
          }}
        >
          Review your selections before checkout.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "32px",
        }}
      >
        {/* Cart Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              background: "white",
              border: "1px solid #f5dce7",
              borderRadius: "24px",
              padding: "24px",
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <img
              src={cart1}
              alt="Elegant Summer Dress"
              style={{
                width: "160px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  marginTop: 0,
                  color: "#3f3f46",
                }}
              >
                Floral Spagehetti Strap Tank Top
              </h3>

              <p style={{ color: "#71717a" }}>
                Size M • Rose Pink
              </p>

              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.15rem",
                }}
              >
                ₹2,499
              </strong>
            </div>

            <div
              style={{
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#71717a",
                  marginBottom: "10px",
                }}
              >
                Qty
              </p>

              <div
                style={{
                  border: "1px solid #f5dce7",
                  borderRadius: "999px",
                  padding: "8px 16px",
                }}
              >
                1
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div
            style={{
              background: "white",
              border: "1px solid #f5dce7",
              borderRadius: "24px",
              padding: "24px",
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <img
              src={cart2}
              alt="Bag"
              style={{
                width: "160px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  marginTop: 0,
                  color: "#3f3f46",
                }}
              >
                Butter Yelloe Cherry Charm Bag
              </h3>

              <p style={{ color: "#71717a" }}>
                Size S 
              </p>

              <strong
                style={{
                  color: "#db2777",
                  fontSize: "1.15rem",
                }}
              >
                ₹1,499
              </strong>
            </div>

            <div
              style={{
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#71717a",
                  marginBottom: "10px",
                }}
              >
                Qty
              </p>

              <div
                style={{
                  border: "1px solid #f5dce7",
                  borderRadius: "999px",
                  padding: "8px 16px",
                }}
              >
                1
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div
          style={{
            background: "white",
            border: "1px solid #f5dce7",
            borderRadius: "24px",
            padding: "28px",
            height: "fit-content",
            position: "sticky",
            top: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#3f3f46",
            }}
          >
            Order Summary
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              color: "#71717a",
            }}
          >
            <span>Subtotal</span>
            <span>₹3,998</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              color: "#71717a",
            }}
          >
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "24px",
              color: "#71717a",
            }}
          >
            <span>Tax</span>
            <span>₹200</span>
          </div>

          <hr
            style={{
              border: 0,
              borderTop: "1px solid #f5dce7",
              marginBottom: "24px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <strong>Total</strong>
            <strong
              style={{
                color: "#db2777",
                fontSize: "1.2rem",
              }}
            >
              ₹4,198
            </strong>
          </div>

          <button
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "16px",
              background: "#db2777",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </section>
    </main>
  );
}