export async function getForecast() {
  const weatherTranslations: Record<string, string> = {
    "Patchy rain nearby": "Chuva fraca nas proximidades",
    "Light rain": "Chuva leve",
    "Moderate rain": "Chuva moderada",
    "Heavy rain": "Chuva forte",
    "Partly cloudy": "Parcialmente nublado",
    Cloudy: "Nublado",
    Sunny: "Ensolarado",
    Clear: "Céu limpo",
    Overcast: "Encoberto",
  };

  try {
    const res = await fetch("https://wttr.in/?format=j1");

    if (!res.ok) {
      throw new Error("Erro na api wttr.in");
    }

    const data = await res.json();

    if (!data.weather || !data.weather.length) {
      throw new Error("Previsão não encontrada");
    }

    const today = data.weather[0];
    const city = data.nearest_area[0].areaName[0].value;

    const descriptionEn = today.hourly[4].weatherDesc[0].value;
    const description = weatherTranslations[descriptionEn] || descriptionEn;

    return {
      city,
      date: today.date,
      maxTemp: today.maxtempC,
      minTemp: today.mintempC,
      avgTemp: today.avgtempC,
      description,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
