import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/dashboard");

    } catch (err) {

      setError("Invalid Email or Password");

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 via-pink-50 to-white">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-purple-700">

          Admin Login

        </h1>

        <p className="text-center text-gray-500 mt-3">

          Manu's Handmade Works

        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="w-full border p-4 rounded-xl outline-none focus:border-purple-600"

          />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            className="w-full border p-4 rounded-xl outline-none focus:border-purple-600"

          />

          {error && (

            <p className="text-red-500 text-sm">

              {error}

            </p>

          )}

          <button

            disabled={loading}

            className="w-full bg-linear-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold hover:scale-105 transition"

          >

            {loading ? "Signing In..." : "Login"}

          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;