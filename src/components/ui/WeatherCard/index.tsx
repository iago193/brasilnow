"use client";

import { Forecast } from "@/types";

type PropForecast = {
  forecast: Forecast;
};

export default function WeatherCard({ forecast }: PropForecast) {
  return (
    <section className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-6 text-white shadow-2xl transition hover:scale-[1.02] duration-300">
      {/* Cidade */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm opacity-80">{forecast.date}</span>
      </div>

      {/* Temperatura Principal */}
      <div className="text-center mb-6">
        <p className="text-5xl font-bold leading-none">{forecast.avgTemp}°</p>
        <p className="text-sm mt-2 opacity-90 capitalize">
          {forecast.description}
        </p>
      </div>

      {/* Min / Max */}
      <div className="flex justify-between text-sm border-t border-white/30 pt-4">
        <span>⬇ {forecast.minTemp}°C</span>
        <span>⬆ {forecast.maxTemp}°C</span>
      </div>
    </section>
  );
}
