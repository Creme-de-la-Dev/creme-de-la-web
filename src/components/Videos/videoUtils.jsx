export const secretUrls = {
    "----": "https://youtu.be/HEW9E0R1yn8?si=KThRCwhqK7sy1XtG&t=1",
    "AKON": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "40NG": "https://www.youtube.com/watch?v=EXJwNBu4FP8",
    "LR2T": "https://www.youtube.com/watch?v=4OnZCdgO9YM",
    "@1BH": "https://www.youtube.com/watch?v=AZdHSGHQd2Q",
    "7!9*": "https://www.youtube.com/watch?v=dx_5Y1rah3E",

   };
   
   export function getSecretUrlByCode(code) {
    return secretUrls[code] || "https://youtu.be/lLOBedFymoA?si=x1ifdiQ8LGUjqTdF&t=25";
   }
   