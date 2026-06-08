export function Orders() {
  return (
    <main
      style={{
        background: "#fffafc",
        minHeight: "100vh",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            color: "#3f3f46",
            fontSize: "2.5rem",
          }}
        >
          My Orders
        </h1>

        <p
          style={{
            color: "#71717a",
            marginBottom: "40px",
          }}
        >
          View and manage your recent purchases.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Order 1 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "24px",
              border: "1px solid #f5dce7",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <strong>Order #12841</strong>

              <span
                style={{
                  color: "#16a34a",
                  fontWeight: 600,
                }}
              >
                Delivered
              </span>
            </div>

            <p style={{ color: "#71717a" }}>
              Elegant Floral Dress • Rose Pink • Size M
            </p>

            <p style={{ color: "#71717a" }}>
              Ordered on June 2, 2026
            </p>

            <strong
              style={{
                color: "#db2777",
              }}
            >
              ₹2,499
            </strong>
          </div>

          {/* Order 2 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "24px",
              border: "1px solid #f5dce7",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <strong>Order #12842</strong>

              <span
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                }}
              >
                Shipped
              </span>
            </div>

            <p style={{ color: "#71717a" }}>
              Satin Blouse • Ivory • Size S
            </p>

            <p style={{ color: "#71717a" }}>
              Ordered on June 5, 2026
            </p>

            <strong
              style={{
                color: "#db2777",
              }}
            >
              ₹1,899
            </strong>
          </div>

          {/* Order 3 */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "24px",
              border: "1px solid #f5dce7",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <strong>Order #12843</strong>

              <span
                style={{
                  color: "#f59e0b",
                  fontWeight: 600,
                }}
              >
                Processing
              </span>
            </div>

            <p style={{ color: "#71717a" }}>
              Summer Maxi Dress • Dusty Pink • Size L
            </p>

            <p style={{ color: "#71717a" }}>
              Ordered on June 7, 2026
            </p>

            <strong
              style={{
                color: "#db2777",
              }}
            >
              ₹3,199
            </strong>
          </div>
        </div>
      </div>
    </main>
  );
}