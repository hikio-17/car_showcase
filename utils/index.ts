import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
   const  headers= {
      'X-RapidAPI-Key': 'd2ab706c5fmsh7ca166a26f2320bp16a4cbjsn91c5f389d2c6',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
   }

   const { manufacturer, year, fuel, limit, model } = filters;

   const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
      headers,
   });

   const cars = await response.json();

   return cars;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50;

   const mileageFactor = 0.1;

   const ageFactor = 0.05;

   const mileageRate = city_mpg * mileageFactor;
   const ageRate = (new Date().getFullYear() - year) * ageFactor;

   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

   return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
   const url = new URL('https://cdn.imagin.studio/getimage');

   const { make, year, model } = car;

   url.searchParams.append('customer', 'hrjavascript-mastery');
   url.searchParams.append('make', make);
   url.searchParams.append('modelFamily', model.split(' ')[0]);
   url.searchParams.append('zoomType', 'fullscreen');
   url.searchParams.append('modelYear', `${year}`);
   url.searchParams.append('angle', `${angle}`);

   return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
   const searchParams = new URLSearchParams(window.location.search);

   searchParams.set(type, value);

   const newPathname = `${window.location.pathname}?${searchParams.toString()}`

   return newPathname;
}