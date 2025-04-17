"use client";

import { useEffect, useState } from "react"
import axios from "axios"
import { Cloud, CloudRain, Sun, Wind } from "lucide-react"
import UpdateCard from "./update-card"

export default function WeatherInfo() {
  const [weather, setWeather] = useState<any>(null)

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  const CITY = "Kolhapur"

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
        )
        setWeather(res.data)
      } catch (error) {
        console.error("Failed to fetch weather:", error)
      }
    }

    fetchWeather()
  }, [])

  if (!weather) {
    return (
      <UpdateCard title="Weather Info" icon={<Sun />} color="bg-brand-blue">
        <div className="flex justify-center items-center h-24">
          <svg className="animate-spin h-6 w-6 text-blue-500" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        </div>
      </UpdateCard>
    )
  }

  const temp = weather.current.temp_c
  const condition = weather.current.condition.text
  const iconUrl = "https:" + weather.current.condition.icon
  const wind = weather.current.wind_kph
  const cloud = weather.current.cloud
  const lastUpdated = weather.current.last_updated
  const isRainy = condition.toLowerCase().includes("rain")

  return (
    <UpdateCard title="Weather Info" icon={<Sun className="h-5 w-5" />} color="bg-brand-blue">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{temp}°C</h3>
            <p className="text-sm text-gray-600">{condition}</p>
            <p className="text-xs text-gray-400 mt-1">Last updated: {lastUpdated}</p>
          </div>
          <img src={iconUrl} alt={condition} className="h-12 w-12" />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-gray-50 rounded-lg">
            <Wind className="h-5 w-5 mx-auto text-gray-500" />
            <p className="text-xs mt-1">{wind} km/h</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-lg">
            <CloudRain className="h-5 w-5 mx-auto text-gray-500" />
            <p className="text-xs mt-1">{isRainy ? "Yes" : "No"}</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-lg">
            <Cloud className="h-5 w-5 mx-auto text-gray-500" />
            <p className="text-xs mt-1">{cloud}%</p>
          </div>
        </div>

        <div className="text-sm">
          <p>{isRainy ? "It may rain today. Take precautions!" : "Good day for farming activities."}</p>
        </div>
      </div>
    </UpdateCard>
  )
}
