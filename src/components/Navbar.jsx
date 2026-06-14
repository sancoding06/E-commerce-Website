export function Navbar() {
  return (
    <nav
      style={{
        background: "#fffafc",
        borderBottom: "1px solid #f5dce7",
        padding: "14px 32px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#3f3f46",
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          LUNA
        </a>

        {/* Search */}
        <div
          style={{
            flex: 1,
            display: "flex",
            maxWidth: "750px",
            height: "48px",
          }}
        >
          <select
            style={{
              border: "1px solid #f5dce7",
              borderRight: "none",
              background: "#fff",
              color: "#71717a",
              padding: "0 14px",
              borderRadius: "999px 0 0 999px",
              outline: "none",
            }}
          >
            <option>All</option>
            <option>Dresses</option>
            <option>Tops</option>
            <option>Accessories</option>
            <option>Footwear</option>
          </select>

          <input
            type="text"
            placeholder="Search dresses, tops, handbags..."
            style={{
              flex: 1,
              border: "1px solid #f5dce7",
              borderLeft: "none",
              borderRight: "none",
              padding: "0 18px",
              outline: "none",
              background: "#fff",
              fontSize: ".95rem",
            }}
          />

          <button
            style={{
              border: "none",
              background: "#ec4899",
              color: "white",
              padding: "0 24px",
              borderRadius: "0 999px 999px 0",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {/* Account */}
        <a
          href="/account"
          style={{
            textDecoration: "none",
            color: "#52525b",
            fontWeight: 600,
          }}
        >
          Account
        </a>

        {/* Add */}
        <a
          href="/add"
          style={{
            textDecoration: "none",
            color: "#52525b",
            fontWeight: 600,
          }}
        >
          Add
        </a>

        {/* Wishlist */}
        <a
          href="/wishlist"
          style={{
            textDecoration: "none",
            color: "#52525b",
            fontWeight: 600,
          }}
        >
          ♡ Wishlist
        </a>

        {/* Cart */}
        <a
          href="/cart"
          style={{
            textDecoration: "none",
            color: "#3f3f46",
            fontWeight: 700,
          }}
        >
          👜 Cart
        </a>
      </div>

      {/* Categories */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "16px auto 0",
          display: "flex",
          gap: "32px",
          color: "#71717a",
          fontSize: ".95rem",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#db2777",
            fontWeight: 700,
          }}
        >
          New Arrivals
        </a>

        <a
          href="/dresses"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Dresses
        </a>

        <a
          href="/tops"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Tops
        </a>

        <a
          href="/bottoms"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Bottoms
        </a>

        <a
          href="/bags"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Bags
        </a>

        <a
          href="/footwear"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Footwear
        </a>

        <a
          href="/product"
          style={{
            textDecoration: "none",
            color: "#ec4899",
            fontWeight: 700,
          }}
        >
          Product
        </a>
      </div>
    </nav>
  );
}