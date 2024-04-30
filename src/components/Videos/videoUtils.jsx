export const secretUrls = {
    "AKON": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "40NG": "https://www.youtube.com/watch?v=EXJwNBu4FP8",
    "CDLW": "https://www.youtube.com/watch?v=LSGti-GPSdU",
    "???!": "https://www.youtube.com/watch?v=4OnZCdgO9YM"
    
   };
   
   export function getSecretUrlByCode(code) {
    return secretUrls[code] || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Default URL if code not found
   }
   