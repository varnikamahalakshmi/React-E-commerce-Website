import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StoreLayout from "../components/StoreLayout";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import { useWishlist } from "../context/WishlistContext";
import { useOrders } from "../context/OrderContext";

type Profile = {
  name: string;
  email: string;
  phone: string;
  address: string;
  photo: string;
};

const defaultProfile: Profile = {
  name: "Priya Sharma",
  email: "priya@example.com",
  phone: "+91 98765 43210",
  address:
    "14 Rose Avenue, Indiranagar, Bengaluru, Karnataka 560038",
  photo: "",
};

const readProfile = (): Profile => {
  try {
    return {
      ...defaultProfile,
      ...(JSON.parse(
        localStorage.getItem("lumora-profile") ?? "{}"
      ) as Partial<Profile>),
    };
  } catch {
    return defaultProfile;
  }
};

/* ================= PROFILE PAGE ================= */

export function ProfilePage() {
  const [profile, setProfile] =
    useState<Profile>(readProfile);

  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "lumora-profile",
      JSON.stringify(profile)
    );
  }, [profile]);

  const upload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () =>
      setProfile((current) => ({
        ...current,
        photo: String(reader.result),
      }));

    reader.readAsDataURL(file);
  };

  const logout = () => {
    localStorage.removeItem("lumora-session");
    navigate("/login");
  };

  return (
    <StoreLayout>
      <main className="account-page">

        <aside>
          <div className="profile-avatar">
            {profile.photo ? (
              <ProductImage
                src={profile.photo}
                alt="Profile"
              />
            ) : (
              profile.name.charAt(0)
            )}
          </div>

          <h2>
            Hi, {profile.name.split(" ")[0]}
          </h2>

          <Link to="/profile">
            My Profile
          </Link>

          <Link to="/orders">
            My Orders
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <button
            className="text-button"
            onClick={logout}
          >
            Logout
          </button>
        </aside>

        <section>

          <div className="section-heading">
            <h1>My Profile</h1>

            <button
              className="text-button"
              onClick={() =>
                setEditing((value) => !value)
              }
            >
              {editing ? "Cancel" : "Edit profile"}
            </button>
          </div>

          {editing ? (
            <form
              className="profile-form"
              onSubmit={(event) => {
                event.preventDefault();
                setEditing(false);
              }}
            >

              <label>
                Profile photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={upload}
                />
              </label>

              <label>
                Full name
                <input
                  value={profile.name}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      name: event.target.value,
                    })
                  }
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={profile.email}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      email: event.target.value,
                    })
                  }
                />
              </label>

              <label>
                Phone
                <input
                  value={profile.phone}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      phone: event.target.value,
                    })
                  }
                />
              </label>

              <label>
                Address
                <textarea
                  value={profile.address}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      address: event.target.value,
                    })
                  }
                />
              </label>

              <button className="primary-button">
                Save changes
              </button>

            </form>
          ) : (
            <>
              <div className="info-card">
                <h3>Personal information</h3>

                <p>
                  <b>{profile.name}</b>
                </p>

                <p>
                  {profile.email} · {profile.phone}
                </p>
              </div>

              <div className="info-card">
                <h3>Saved address</h3>

                <p>
                  Home · {profile.address}
                </p>
              </div>
            </>
          )}

        </section>

      </main>
    </StoreLayout>
  );
}

/* ================= WISHLIST PAGE ================= */

export function WishlistPage() {
  const { items } = useWishlist();

  return (
    <StoreLayout>
      <main className="listing-page">

        <h1>My Wishlist</h1>

        {items.length ? (
          <div className="product-grid">

            {items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="empty-category">

            <h2>Your wishlist is empty</h2>

            <p>
              Tap the heart on any product to save it here.
            </p>

            <Link
              className="primary-button"
              to="/"
            >
              Explore products
            </Link>

          </div>
        )}

      </main>
    </StoreLayout>
  );
}

/* ================= ORDERS PAGE ================= */

export function OrdersPage() {
  const { orders, cancelOrder } = useOrders();

  const handleCancelOrder = (orderId: string) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    cancelOrder(orderId);
  };

  return (
    <StoreLayout>
      <main className="listing-page">

        <h1>My Orders</h1>

        {orders.length ? (
          <div className="orders-list">

            {orders.map((order) => (

              <article
                className="order-card"
                key={order.id}
              >

                {/* PRODUCT IMAGE */}

                <ProductImage
                  src={order.items[0].image}
                  alt={order.items[0].title}
                />

                {/* ORDER DETAILS */}

                <div className="order-details">

                  <h3>
                    {order.items
                      .map((item) => item.title)
                      .join(", ")}
                  </h3>

                  <p>
                    Order #{order.id}
                  </p>

                  <p>
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p>
                    Quantity:{" "}
                    {order.items.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}
                  </p>

                  <p>
                    Payment:{" "}
                    <b>{order.paymentMethod}</b>
                  </p>

                  {/* STATUS */}

                  <b
                    className={
                      order.status === "Cancelled"
                        ? "cancelled"
                        : "delivered"
                    }
                  >
                    {order.status}
                  </b>

                </div>

                {/* PRICE + CANCEL */}

                <div className="order-actions">

                  <strong>
                    ₹{order.total}
                  </strong>

                  {order.status !== "Cancelled" && (
                    <button
                      className="cancel-order-button"
                      onClick={() =>
                        handleCancelOrder(order.id)
                      }
                    >
                      Cancel Order
                    </button>
                  )}

                </div>

              </article>

            ))}

          </div>
        ) : (
          <div className="empty-category">

            <h2>No orders yet</h2>

            <p>
              Your completed purchases will appear here.
            </p>

            <Link
              className="primary-button"
              to="/"
            >
              Start shopping
            </Link>

          </div>
        )}

      </main>
    </StoreLayout>
  );
}

/* ================= AUTH PAGE ================= */

export function AuthPage({
  mode,
}: {
  mode: "login" | "register";
}) {
  const register = mode === "register";

  const navigate = useNavigate();

  const submit = () => {
    localStorage.setItem(
      "lumora-session",
      "active"
    );

    navigate("/profile");
  };

  return (
    <StoreLayout>
      <main className="auth-page">

        <form
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >

          <h1>
            {register
              ? "Create your account"
              : "Welcome back"}
          </h1>

          <p>
            {register
              ? "Start shopping with Lumora."
              : "Sign in to continue shopping."}
          </p>

          {register && (
            <input
              required
              placeholder="Full name"
            />
          )}

          <input
            required
            type="email"
            placeholder="Email address"
          />

          <input
            required
            type="password"
            placeholder="Password"
          />

          <button className="primary-button">
            {register
              ? "Create account"
              : "Login"}
          </button>

          <p>
            {register
              ? "Already have an account?"
              : "New to Lumora?"}{" "}

            <Link
              to={
                register
                  ? "/login"
                  : "/register"
              }
            >
              {register
                ? "Login"
                : "Register"}
            </Link>
          </p>

        </form>

      </main>
    </StoreLayout>
  );
}