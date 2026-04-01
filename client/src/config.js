const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://e-commerse-s1.onrender.com/"
    : "http://localhost:5000";

export default BASE_URL;