import model from '../assets/model.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
export function Home() {
  return (
    <main
      style={{
        background: "#fffafc",
        minHeight: "100vh",
        color: "#3f3f46",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fff5f7 0%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "100px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "320px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "#fce7f3",
                color: "#db2777",
                padding: "8px 16px",
                borderRadius: "999px",
                fontWeight: 600,
              }}
            >
              New Summer Collection
            </span>

            <h1
              style={{
                fontSize: "4.5rem",
                lineHeight: 1,
                marginTop: "28px",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              Fashion
              <br />
              That Feels
              <br />
              Like You.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#71717a",
                maxWidth: "550px",
                lineHeight: 1.8,
              }}
            >
              Discover dresses, tops, accessories, and
              everyday essentials designed to make every
              outfit feel effortless.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/shop"
                style={{
                  background: "#ec4899",
                  color: "white",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: 600,
                }}
              >
                Shop Collection
              </a>

              <a
                href="/new-arrivals"
                style={{
                  border: "1px solid #fbcfe8",
                  color: "#db2777",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: 600,
                }}
              >
                New Arrivals
              </a>
            </div>
          </div>

          {/* Fashion Image Placeholder */}
          <div
            style={{
              flex: 1,
              minWidth: "320px",
            }}
          >
            <div
              style={{
                height: "560px",
                borderRadius: "32px",
                background:
                  "linear-gradient(135deg,#fbcfe8,#f9a8d4)",
                display: "grid",
                placeItems: "center",
                fontSize: "7rem",
              }}
            >
              <img src={model} alt="model" height="560px" width="100%" style={{ borderRadius: "32px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "90px 32px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "48px",
          }}
        >
          Shop By Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "24px",
          }}
        >
          {[
            "👗 Dresses",
            "👚 Tops",
            "👜 Bags",
            "👠 Footwear",
            "💍 Accessories",
            "🧥 Outerwear",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "pink",
                borderRadius: "24px",
                padding: "36px",
                textAlign: "center",
                border: "1px solid #fce7f3",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Featured Collection */}
<section
  style={{
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 32px 90px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "48px",
    }}
  >
    Featured Collection
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
        border: "1px solid #fce7f3",
      }}
    >
      <img
        src={img1}
        alt="Butter Heart Set"
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            marginBottom: "10px",
            color: "#3f3f46",
          }}
        >
          Butter Heart Set
        </h3>

        <p
          style={{
            color: "#71717a",
            marginBottom: "14px",
          }}
        >
          A sweet and pastel set for effortless charm.
        </p>

        <strong
          style={{
            color: "#db2777",
            fontSize: "1.15rem",
          }}
        >
          ₹2,400
        </strong>
      </div>
    </div>

    {/* Product 2 */}
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid #fce7f3",
      }}
    >
      <img
        src={img2}
        alt="Cloud Prep Set"
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            marginBottom: "10px",
            color: "#3f3f46",
          }}
        >
          Cloud Prep Set
        </h3>

        <p
          style={{
            color: "#71717a",
            marginBottom: "14px",
          }}
        >
          A vintage-inspired set for a feminine look.
        </p>

        <strong
          style={{
            color: "#db2777",
            fontSize: "1.15rem",
          }}
        >
          ₹3,700
        </strong>
      </div>
    </div>

    {/* Product 3 */}
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid #fce7f3",
      }}
    >
      <img
        src={img3}
        alt="Mocha Ruffle Set"
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            marginBottom: "10px",
            color: "#3f3f46",
          }}
        >
          Mocha Ruffle Set
        </h3>

        <p
          style={{
            color: "#71717a",
            marginBottom: "14px",
          }}
        >
          Designed for special occasions and elegant evenings.
        </p>

        <strong
          style={{
            color: "#db2777",
            fontSize: "1.15rem",
          }}
        >
          ₹3,900
        </strong>
      </div>
    </div>

    {/* Product 4 */}
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid #fce7f3",
      }}
    >
      <img
        src={img4}
        alt="Sky Bubble Set"
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            marginBottom: "10px",
            color: "#3f3f46",
          }}
        >
          Sky Bubble Set
        </h3>

        <p
          style={{
            color: "#71717a",
            marginBottom: "14px",
          }}
        >
          Comfortable styling for everyday wear.
        </p>

        <strong
          style={{
            color: "#db2777",
            fontSize: "1.15rem",
          }}
        >
          ₹2,950
        </strong>
      </div>
    </div>

    {/* Product 5 */}
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid #fce7f3",
      }}
    >
      <img
        src={img5}
        alt="Lavender Tuttle Set"
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            marginBottom: "10px",
            color: "#3f3f46",
          }}
        >
          Lavender Tuttle Set
        </h3>

        <p
          style={{
            color: "#71717a",
            marginBottom: "14px",
          }}
        >
          A coquettish set for a playful and feminine look.
        </p>

        <strong
          style={{
            color: "#db2777",
            fontSize: "1.15rem",
          }}
        >
          ₹2,700
        </strong>
      </div>
    </div>

    {/* Product 6 */}
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid #fce7f3",
      }}
    >
      <img
        src={img6}
        alt="Maroon Stripe Set"
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            marginBottom: "10px",
            color: "#3f3f46",
          }}
        >
          Maroon Stripe Set
        </h3>

        <p
          style={{
            color: "#71717a",
            marginBottom: "14px",
          }}
        >
          A vibrant set for a bold and confident look.
        </p>

        <strong
          style={{
            color: "#db2777",
            fontSize: "1.15rem",
          }}
        >
          ₹3,200
        </strong>
      </div>
    </div>
  </div>
</section>
      {/* Banner */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px 100px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#ec4899,#f472b6)",
            color: "white",
            borderRadius: "32px",
            padding: "80px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "16px",
            }}
          >
            Up To 40% Off
          </h2>

          <p
            style={{
              marginBottom: "28px",
              opacity: 0.95,
            }}
          >
            Refresh your wardrobe with our latest arrivals.
          </p>

          <a
            href="/sale"
            style={{
              display: "inline-block",
              background: "white",
              color:"#ec4899",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            Shop The Sale
          </a>
        </div>
      </section>
    </main>
  );
}