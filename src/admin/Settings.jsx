import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase/firebase";

function Settings() {
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    storeName: "Manu's Handmade Works",
    whatsapp: "918074326428",
    instagram: "",
    email: "",
    address: "",
    upi: "",
    deliveryCharge: "0",
    themeColor: "#7e22ce",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const ref = doc(db, "settings", "store");

      const snap = await getDoc(ref);

      if (snap.exists()) {
        setSettings(snap.data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const saveSettings = async () => {
    try {
      setLoading(true);

      await setDoc(
        doc(db, "settings", "store"),
        settings
      );

      alert("Settings Saved Successfully");

      setLoading(false);
    } catch (error) {
      console.log(error);

      alert("Unable to save settings");

      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Store Settings
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-5xl">

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="font-semibold">
              Store Name
            </label>

            <input
              name="storeName"
              value={settings.storeName}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              WhatsApp Number
            </label>

            <input
              name="whatsapp"
              value={settings.whatsapp}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Instagram Link
            </label>

            <input
              name="instagram"
              value={settings.instagram}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Email
            </label>

            <input
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              UPI ID
            </label>

            <input
              name="upi"
              value={settings.upi}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Delivery Charge
            </label>

            <input
              name="deliveryCharge"
              value={settings.deliveryCharge}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="font-semibold">
            Store Address
          </label>

          <textarea
            rows="4"
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl p-3"
          />

        </div>

        <div className="mt-6">

          <label className="font-semibold">
            Theme Color
          </label>

          <input
            type="color"
            name="themeColor"
            value={settings.themeColor}
            onChange={handleChange}
            className="w-24 h-12 mt-3"
          />

        </div>

        <div className="mt-10">

          <button
            onClick={saveSettings}
            disabled={loading}
            className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
          >
            {loading ? "Saving..." : "Save Settings"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;