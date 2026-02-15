export async function getForecast() {
  const weatherTranslations: Record<number, string> = {
    0: "Céu limpo",
    1: "Principalmente limpo",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina com gelo",
    51: "Garoa leve",
    53: "Garoa moderada",
    55: "Garoa intensa",
    61: "Chuva leve",
    63: "Chuva moderada",
    65: "Chuva forte",
    71: "Neve leve",
    73: "Neve moderada",
    75: "Neve forte",
    80: "Pancadas de chuva leves",
    81: "Pancadas de chuva moderadas",
    82: "Pancadas de chuva fortes",
    95: "Tempestade",
  };

  try {
    // João Pessoa (pode mudar depois para cidade dinâmica)
    const latitude = -7.12;
    const longitude = -34.86;

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar clima");
    }

    const data = await res.json();

    if (!data.current_weather) {
      throw new Error("Previsão não encontrada");
    }

    const weatherCode = data.current_weather.weathercode;

    return {
      city: "João Pessoa",
      date: new Date().toISOString().split("T")[0],
      maxTemp: data.daily.temperature_2m_max[0],
      minTemp: data.daily.temperature_2m_min[0],
      avgTemp: data.current_weather.temperature,
      description: weatherTranslations[weatherCode] || "Clima desconhecido",
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
