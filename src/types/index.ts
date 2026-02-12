export type News = {
  title?: string;
  link?: string;
  description?: string;
  date?: string;
  guid?: string;
  image?: string | null;
};

export type Forecast = {
  city: string;
  date: string;
  maxTemp: string;
  minTemp: string;
  avgTemp: string;
  description: string;
};
