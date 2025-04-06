"use client";
import React, { useEffect, useState } from "react";
import { getSkipsByLocation } from "../lib/api";

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      setError(false);

      const data = await getSkipsByLocation("NR32", "Lowestoft");
      // setSkips(data);
      // setLoading(false);
      console.log("length", data.length);
      if (data.length === 0) {
        setError(true);
      }
      setSkips(data);
      setLoading(false);
    };

    fetchSkips();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Available Skips</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">
          Could not load skips. Please try again later.
        </p>
      ) : skips.length === 0 ? (
        <p>No skips available for this location.</p>
      ) : (
        <ul className="space-y-3">
          {skips.map((skip) => (
            <li key={skip.id} className="p-4 border rounded">
              <strong>Size:</strong> {skip.size} yd³ — <strong>Price:</strong>{" "}
              {skip.price_before_vat
                ? `£${skip.price_before_vat}`
                : "Price on request"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkipSelector;
