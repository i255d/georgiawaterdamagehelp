export type City = {
  slug: string;
  name: string;
  county: string;
  title: string;
  description: string;
  neighborhoods: string[];
  about: string;
  causes: string[];
};

export const cities: City[] = [
  {
    slug: "dacula",
    name: "Dacula",
    county: "Gwinnett County",
    title: "Water damage restoration in Dacula, GA",
    description:
      "Burst pipes, leaks, and storm water in Dacula and ZIP 30019. Tell us what happened. We send your request to a local restoration company.",
    neighborhoods: ["Harbins Road", "Hamilton Mill", "Apalachee", "Dacula Road"],
    about:
      "Most Dacula calls we hear about are in 30019 — Hamilton Mill, Harbins Road, and the newer streets off Dacula Road. Slab homes and crawl-space houses both show up. A washing-machine hose or a supply line under a sink is as common as a storm leak after a hard Gwinnett rain.",
    causes: [
      "Supply-line and ice-maker leaks in newer kitchens",
      "Washing-machine hoses in garage laundry rooms",
      "Storm water at windows, sliding doors, and low lots",
      "Water heaters that fail in garages and closets",
    ],
  },
  {
    slug: "hamilton-mill",
    name: "Hamilton Mill",
    county: "Gwinnett County",
    title: "Water damage restoration in Hamilton Mill, GA",
    description:
      "Burst pipe, leak, or storm water in Hamilton Mill, off I-85 at Exit 120. Call or send what happened.",
    neighborhoods: ["Highpointe", "Glenaire", "Lake Forest", "Grove Park"],
    about:
      "Hamilton Mill sits off I-85 at Exit 120. Homes started going up in the mid-1990s, so water heaters, roofs, and air conditioners are on their second life. A leak upstairs in a two-story house can come through the ceiling below.",
    causes: [
      "Water heaters that fail in garages and closets",
      "Air conditioner drain lines that overflow into the ceiling",
      "Washing-machine hoses and ice-maker lines",
      "Upstairs leaks that reach the rooms below",
    ],
  },
  {
    slug: "lawrenceville",
    name: "Lawrenceville",
    county: "Gwinnett County",
    title: "Water damage restoration in Lawrenceville, GA",
    description:
      "Burst pipe, leak, or storm water in Lawrenceville, GA 30043, 30044, 30045, 30046. Call or send what happened.",
    neighborhoods: ["Downtown Lawrenceville", "Collins Hill", "Sugarloaf", "Old Norcross"],
    about:
      "Lawrenceville is the county seat. Many homes were built in the late 1980s and 1990s, so water heaters, supply lines, and washer hoses are wearing out. Wolf Creek and Pew Creek make the south and west sides more likely to see outside water.",
    causes: [
      "Water heaters that fail in garages and closets",
      "Washing-machine hoses and refrigerator lines",
      "Creek water in south and west Lawrenceville",
      "Roof and window leaks after a fast storm",
    ],
  },
  {
    slug: "snellville",
    name: "Snellville",
    county: "Gwinnett County",
    title: "Water damage restoration in Snellville, GA",
    description:
      "Burst pipe, leak, or storm water in Snellville, GA 30078 and 30039. Call or send what happened.",
    neighborhoods: ["The Grove", "Briscoe Park", "Lenora", "Norris Lake"],
    about:
      "Snellville was built mostly in the 1980s and 1990s, so many homes are 30 to 45 years old. Water heaters, supply lines, and washer hoses wear out, and a crawl space can hold a leak for a long time before it shows.",
    causes: [
      "Water heaters that fail in garages and closets",
      "Washing-machine hoses and refrigerator lines",
      "Slow leaks in crawl spaces",
      "Storm water and roof leaks after a hard rain",
    ],
  },
  {
    slug: "buford",
    name: "Buford",
    county: "Gwinnett County",
    title: "Water damage restoration in Buford, GA",
    description:
      "Buford and Lake Lanier-area water damage help. Burst pipes, appliance leaks, and storm water — request a local restoration callback.",
    neighborhoods: ["Mall of Georgia", "Friendship Road", "Lake Lanier"],
    about:
      "Buford sits close to Lake Lanier, so summer humidity keeps wet rooms from drying on their own. Homes near the Mall of Georgia and Friendship Road get the same burst-pipe and appliance jobs as the rest of Gwinnett, plus storm water when a roof or window lets rain in.",
    causes: [
      "Humidity that keeps a “small” leak wet for days",
      "Appliance and water-heater failures",
      "Storm and roof leaks",
      "Finished basements or lower levels that take runoff",
    ],
  },
  {
    slug: "duluth",
    name: "Duluth",
    county: "Gwinnett County",
    title: "Water damage restoration in Duluth, GA",
    description:
      "Burst pipe, leak, or storm water in Duluth, GA 30096 and 30097. Houses, townhomes, and condos. Call or send what happened.",
    neighborhoods: ["Town Green", "Pleasant Hill", "Peachtree Industrial", "Sugarloaf Country Club", "Cardinal Lake"],
    about:
      "Duluth has more townhomes, condos, and apartments than most of Gwinnett, so a leak in one unit often ends up in another. The typical house was built around 1992, old enough for water heaters and hoses to be on their second round or past it.",
    causes: [
      "Leaks from the unit above",
      "Water heaters that fail in garages and closets",
      "Washing-machine hoses and refrigerator lines",
      "Outside water at ground-floor doors in heavy rain",
    ],
  },
  {
    slug: "suwanee",
    name: "Suwanee",
    county: "Gwinnett County",
    title: "Water damage restoration in Suwanee, GA",
    description:
      "Burst pipe, leak, or creek water in Suwanee, GA 30024. Call or send what happened.",
    neighborhoods: ["Town Center", "Old Town", "Morningview", "Laurel Springs", "The River Club"],
    about:
      "The railroad tracks split Suwanee into Town Center and Old Town. Most houses outside Old Town were built from the mid-1990s on, so water heaters and hoses are wearing out. Old Town has many septic systems, and Suwanee Creek floods the greenway in heavy rain.",
    causes: [
      "Water heaters that fail in garages and closets",
      "Washing-machine hoses and refrigerator lines",
      "Creek water near the greenway",
      "Septic backups in Old Town",
    ],
  },
  {
    slug: "loganville",
    name: "Loganville",
    county: "Gwinnett / Walton",
    title: "Water damage restoration in Loganville, GA",
    description:
      "Loganville burst pipes, basement water, and storm cleanup. Request help and a nearby restoration company can call you.",
    neighborhoods: ["Highway 78", "Rosebud", "Grayson border"],
    about:
      "Loganville sits on the Gwinnett–Walton line. Highway 78, Rosebud, and the Grayson border all come through. Basement and terrace-level water shows up more here than in a slab-only subdivision. If the water is coming from the yard or a sump, say that on the form.",
    causes: [
      "Terrace-level and basement seepage",
      "Burst pipes in colder snaps",
      "Appliance leaks",
      "Yard runoff after a long rain",
    ],
  },
  {
    slug: "grayson",
    name: "Grayson",
    county: "Gwinnett County",
    title: "Water damage restoration in Grayson, GA",
    description:
      "Grayson water damage, water cleanup, and leak extraction. Local Gwinnett follow-up after you send the form.",
    neighborhoods: ["Grayson Highway", "Pharrs Road", "Tribble Mill"],
    about:
      "Grayson is small, so a leak is usually in a house near Grayson Highway, Pharrs Road, or toward Tribble Mill. Same jobs as the rest of south Gwinnett: a hose, a toilet, a water heater, or rain that found a weak window.",
    causes: [
      "Toilet and supply-line leaks",
      "Water heaters",
      "Storm leaks",
      "Wet carpet that was never pulled after a prior leak",
    ],
  },
  {
    slug: "lilburn",
    name: "Lilburn",
    county: "Gwinnett County",
    title: "Water damage restoration in Lilburn, GA",
    description:
      "Lilburn water damage restoration for flooded rooms, burst pipes, and storms. We send exclusive requests to a local crew.",
    neighborhoods: ["Lawrenceville Highway", "Killian Hill", "Rivermist"],
    about:
      "Lilburn has a lot of 1970s–1990s houses along Lawrenceville Highway, Killian Hill, and Rivermist. Older plumbing and water heaters fail. If the house has a finished basement, water can sit in carpet and at the base of walls overnight.",
    causes: [
      "Older water heaters and supply lines",
      "Finished-basement flooding",
      "Washing-machine leaks",
      "Roof and chimney leaks in storms",
    ],
  },
  {
    slug: "winder",
    name: "Winder",
    county: "Barrow County",
    title: "Water damage restoration in Winder, GA",
    description:
      "Winder and Barrow County water cleanup help. Burst pipes, leaks, and storm water — send the form for a local callback.",
    neighborhoods: ["Downtown Winder", "Atlanta Highway", "Auburn Road"],
    about:
      "Winder and Barrow County sit just east of Gwinnett. Downtown Winder, Atlanta Highway, and Auburn Road are the usual ZIPs. The shops we send to will say if they cover you. If they do not, we do not pretend they do.",
    causes: [
      "Burst pipes and well or city-line issues",
      "Appliance leaks",
      "Storm and roof leaks",
      "Water in older crawl spaces",
    ],
  },
  {
    slug: "gwinnett-county",
    name: "Gwinnett County",
    county: "Gwinnett County",
    title: "Water damage restoration in Gwinnett County, GA",
    description:
      "Gwinnett-wide water damage help — Dacula, Lawrenceville, Snellville, Buford, and nearby cities. One form for a local restoration callback.",
    neighborhoods: ["Dacula", "Lawrenceville", "Snellville", "Buford", "Duluth", "Suwanee"],
    about:
      "Gwinnett is the first county this site is built for. Dacula, Lawrenceville, Snellville, Buford, Duluth, and Suwanee are the core. If your city is not listed, send the ZIP anyway. A local shop will tell you if they can come.",
    causes: [
      "Burst pipes and failed water heaters",
      "Appliance and ice-maker leaks",
      "Toilet and drain overflows",
      "Storm water after a Gwinnett downpour",
    ],
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    county: "Metro Atlanta",
    title: "Water damage restoration in Atlanta, GA",
    description:
      "Atlanta water damage restoration requests. We focus first on Gwinnett and nearby suburbs, then metro Atlanta.",
    neighborhoods: ["Buckhead", "Midtown", "East Atlanta", "West Midtown"],
    about:
      "This site is Gwinnett-first. Atlanta pages exist because people search “water damage restoration Atlanta.” If you are in the city proper — Buckhead, Midtown, East Atlanta, West Midtown — send the ZIP. Coverage depends on the shop we send the request to, not on a promise we can be there in 60 minutes.",
    causes: [
      "Condo and townhome leaks from the unit above",
      "Burst pipes in older buildings",
      "Appliance leaks",
      "Storm water at flat roofs and windows",
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
