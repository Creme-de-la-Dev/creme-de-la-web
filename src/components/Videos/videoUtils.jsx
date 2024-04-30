export const secretUrls = {
    "AKON": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "40NG": "https://www.youtube.com/watch?v=EXJwNBu4FP8",
    "CDLW": "https://www.youtube.com/watch?v=LSGti-GPSdU",
    "LR2T": "https://www.youtube.com/watch?v=4OnZCdgO9YM",
    "@1BH": "https://www.youtube.com/watch?v=AZdHSGHQd2Q"

   };
   
   export function getSecretUrlByCode(code) {
    return secretUrls[code] || "https://youtu.be/lLOBedFymoA?si=x1ifdiQ8LGUjqTdF&t=25";
   }
   