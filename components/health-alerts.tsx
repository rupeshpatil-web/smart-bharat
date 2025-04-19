"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import UpdateCard from "./update-card";

interface Alert {
  id: string;
  title: string;
  message: string;
  icon: "warning" | "pill" | "other";
}

export default function HealthAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_HEALTH_API_KEY;
  const API_URL = "/api/health-alerts"; // or your actual endpoint

  useEffect(() => {
    if (!API_KEY) {
      setError("API key not configured.");
      setLoading(false);
      return;
    }

    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((res) => {
        setAlerts(res.data.alerts || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching health alerts:", err);
        setError("Failed to load health alerts.");
        setLoading(false);
      });
  }, [API_KEY]);

  return (
    <div className="space-y-4">
      <UpdateCard title="Health Alert" icon={<Heart className="h-5 w-5" />} color="bg-red-500">
        {loading && <p className="text-sm text-gray-500">Loading health alerts...</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}
        {!loading && !error && alerts.length === 0 && (
          <p className="text-sm text-gray-500">No current health alerts.</p>
        )}

        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-2">
              {renderIcon(alert.icon)}
              <div>
                <h3 className="font-medium">{alert.title}</h3>
                <p className="text-sm text-gray-600">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </UpdateCard>
    </div>
  );
}

function renderIcon(type: string): JSX.Element | null {
  switch (type) {
    case "warning":
      return <span className="text-yellow-500 mt-0.5">⚠️</span>;
    case "pill":
      return <span className="text-blue-500 mt-0.5">💊</span>;
    default:
      return <span className="text-gray-400 mt-0.5">📢</span>;
  }
}
