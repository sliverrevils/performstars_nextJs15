// import { getPlayersAllCountrys } from "@/lib/Actions/player";
// import { countries, flagUrls } from "country-flags-svg";

// type CachedFlags = Record<string, string>;

// global.flagCache = {};

// export const preloadFlags = async (): Promise<CachedFlags> => {
//     const countriesDBAll = await getPlayersAllCountrys();
//     const uncachedCountries = countriesDBAll.filter((country) => !global.flagCache[country]);

//     await Promise.all(
//         uncachedCountries.map(async (country) => {
//             const flagUrl = countries.find((c) => c.iso2 === country)?.flag;
//             if (!flagUrl) {
//                 console.warn(`Флаг для страны "${country}" не найден.`);
//                 return;
//             }

//             try {
//                 // Загружаем флаг как Blob
//                 const response = await fetch(flagUrl);
//                 if (!response.ok) {
//                     // throw new Error(`Ошибка загрузки флага для "${country}": ${response.statusText}`);
//                     return;
//                 }
//                 const arrayBuffer = await response.arrayBuffer();

//                 // Преобразуем ArrayBuffer в Base64
//                 const base64Flag = Buffer.from(arrayBuffer).toString("base64");
//                 const mimeType = response.headers.get("Content-Type") || "image/png"; // Определяем MIME-тип
//                 const dataUrl = `data:${mimeType};base64,${base64Flag}`;

//                 // Кэшируем результат
//                 global.flagCache = dataUrl;
//             } catch (error) {
//                 console.error(`Ошибка предзагрузки флага для "${country}":`, error);
//             }
//         })
//     );

//     console.log("ALL CASH", global.flagCache);

//     return global.flagCache;
// };

// export const getCachedFlag = (country: string): string | undefined => {
//     console.log(country, global.flagCache[country], global.flagCache);
//     return global.flagCache[country];
// };
