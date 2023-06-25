export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'ff3d7a0221msh23a753273110837p1f03bcjsn3d9c303a8b98',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const milageFactor = 0.1;
  const ageFactor = 0.05;

  const milageRate = city_mpg * milageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + milageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}