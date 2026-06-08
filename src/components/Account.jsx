export function Account() {
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
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            border: "1px solid #f5dce7",
          }}
        >
          <h1
            style={{
              marginTop: 0,
              marginBottom: "8px",
              color: "#3f3f46",
            }}
          >
            My Profile
          </h1>

        

          {/* Avatar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#fbcfe8",
              }}
            />

            <button
              style={{
                border: "none",
                background: "#ec4899",
                color: "white",
                padding: "12px 18px",
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Change Photo
            </button>
          </div>

          {/* Form */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#52525b",
                  fontWeight: 500,
                }}
              >
                First Name
              </label>

              <input
                defaultValue="Sarah"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #f5dce7",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#52525b",
                  fontWeight: 500,
                }}
              >
                Last Name
              </label>

              <input
                defaultValue="Johnson"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #f5dce7",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#52525b",
                  fontWeight: 500,
                }}
              >
                Email
              </label>

              <input
                defaultValue="sarah@email.com"
                type="email"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #f5dce7",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#52525b",
                  fontWeight: 500,
                }}
              >
                Phone Number
              </label>

              <input
                defaultValue="+91 98765 43210"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #f5dce7",
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#52525b",
                  fontWeight: 500,
                }}
              >
                Address
              </label>

              <textarea
                rows={4}
                defaultValue="123 Fashion Street, Mumbai"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #f5dce7",
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <button
              style={{
                background: "#ec4899",
                color: "white",
                border: "none",
                padding: "14px 24px",
                borderRadius: "999px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>

            <button
              style={{
                background: "white",
                color: "#71717a",
                border: "1px solid #f5dce7",
                padding: "14px 24px",
                borderRadius: "999px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}