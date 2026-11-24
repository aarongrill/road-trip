# Road Trip 2027

A phone-friendly companion app for our July 2027 mountain bike road trip. Switch views with the tabs along the bottom: Today, Map, List, and Ideas. Before the trip it opens on the map; from July 3 to 31 it opens on Today.

## Today

The screen for the road. It shows the current day: the drive with a "Navigate the day" button (Google Maps with the day's stops in route order, ending at tonight's stop), the day's stops in order with the next one highlighted and a "Mark done" button, tonight's stop with directions, ideas along the route, and a preview of tomorrow.

"Near me" finds the closest food, swim stops, attractions, views, or places to sleep from the trip data, using your location (or tonight's stop if location is off), with a Google Maps search for more. Gas opens a live Google Maps search.

Before the trip, Today previews Day 1. Tap any day in the strip at the top to look at that day; tap "All" to go back.

## Filters

Tap "☰ Filter" at the top left to narrow every view at once: 🍴 Food, 🎡 Attractions, 🚵 Biking, 🏊 Swimming, 🏞️ Views & rest stops, and 🛏️ Sleep. Tap "All" to see everything. "💡 Ideas on/off" shows or hides the stops the family can vote on. In the List, days with nothing in the chosen category are hidden, and the rest open automatically.

## Links

Every attraction, restaurant, ride, swim stop, and place to stay has a 🔗 link in every view. If a stop has a `web` address in `data.js`, the link opens that website. Otherwise it opens the stop's Google Maps listing, which shows the website, hours, phone number, and photos. Rides also keep their "Trail info" link. To add a website for any stop, add `web: "https://..."` to it in `data.js`.

## Map, List, and Ideas

**Map**
- The trip is split into 12 smaller legs (for example "Memphis to Bentonville" or "Jackson and the Tetons"). The bottom panel shows one leg at a time; use ◀ and ▶ to move between legs, or pick one from the list on the whole-trip screen.
- The map zooms to the leg, highlights its drives in blue (the rest of the route turns gray), and shows only that leg's stops.
- The panel lists every stop for each day of the leg. Tap a day's heading to zoom to that day, and tap a stop to see its details on the map. "◀ Back" returns to the list.
- The filters at the top narrow both the pins and the list.
- Tap a day at the top to jump to its leg. Tap "All" for the whole trip.
- **+ Add a spot**: move the map until the pin is on the spot, tap "Put the pin here," then name it, pick a type, and attach it to a day.
- The ◎ button shows where you are.
- To change how the legs are split, edit `stages` in `data.js`.
- On a laptop, tablet, or phone turned sideways, the map sits on the left and the leg details on the right, so you see both at once.
- On a phone held upright, the details panel has three heights: peek (mostly map), half (map on top, details below; the default when you open a leg), and full (mostly details). Tap the handle to cycle through them or drag it. Tapping a stop moves it into the visible part of the map.

**List**
- Every day of the trip, grouped by leg. Tap a day to expand it and see the drive, rides, meal stop, fun stops, stops the family added, and where we're sleeping.
- Each stop has Directions, Show on map, and Trail info buttons, plus "Mark visited."
- During the trip, today is highlighted and opens automatically.
- A map preview shows the day you open: that day's drive in solid blue, the day before as a gray dashed line, and the day after as an orange dashed line, with the day's stops as pins. Use ◀ and ▶ to step through days. The 🗺️ Leg 1, Leg 2, and Leg 3 buttons show a whole leg.
- On a phone, the preview stays pinned at the top while the list scrolls under it. On a wider screen, it sits to the right of the list.

**Ideas**
- Researched options along the route: fun places to eat, odd roadside stops, views and rest stops, and swim stops (water parks, pools, swimming holes, lakes, and hot springs), each with the day it fits, the detour, and details.
- Tap 👍 to vote. The first time, the app asks your name so everyone can see who voted for what.
- Sort by trip order or most votes, and filter by type.
- "Add to plan" puts an idea into that day's list and onto the map.
- Stops the family adds on the map show up at the bottom so everyone can vote on those too.

## Files

Upload these files to the top level of the repo:

- `index.html`: the app
- `data.js`: the plan, the ideas list, and the checklist (edit this to change anything)
- `config.js`: settings for sharing votes and spots (see below)
- `sync.js`: the code that shares votes and spots when sharing is turned on
- `sw.js`: saves the app on the phone so it works without a signal
- `manifest.json`, `icon-192.png`, `icon-512.png`: let the app be added to the home screen with its own icon
- `README.md`: this file
- `tools/build-route.mjs`: optional script that builds `route-geometry.js` (see "Route along real roads")

## Publish on GitHub Pages

1. Upload the files to the repository (Add file > Upload files) and commit.
2. Go to Settings > Pages. Set Source to "Deploy from a branch," pick `main` and `/ (root)`, and save.
3. For a custom domain, enter it under Settings > Pages > Custom domain, then add the DNS records GitHub lists.
4. Once the domain works, check "Enforce HTTPS." The ◎ location button only works over HTTPS.

## Offline use and installing on a phone

Much of the route has little or no cell service, so the app saves itself on each phone.

- **Install it:** On iPhone, open the site in Safari, tap Share, then "Add to Home Screen." On Android, open it in Chrome and tap "Install app" or "Add to Home screen." It then opens full screen like an app.
- **What works offline:** the plan, ideas, votes, filters, Today, List, and Ideas. "Done" marks and votes are saved on the phone.
- **Map tiles:** The app saves map areas as you view them, up to about 3,000 tiles. OpenStreetMap's rules don't allow downloading maps in bulk, so before the trip, open each leg on the Map tab while on Wi-Fi and zoom in on the places you'll need. Areas you haven't viewed show a blank background offline, with the route and pins still drawn.
- **Links and directions** (Google Maps, websites) need a signal, though Google Maps works offline if you download areas in the Google Maps app itself.
- An "Offline" bar appears at the top when there's no connection.
- **Updates:** When you upload new files, the app checks for them each time it opens with a signal, so you no longer need a hard refresh.

## Route along real roads

The blue route line follows the actual highways. The first time someone opens the map, the app asks OSRM, a free routing service built on OpenStreetMap, for the road route and saves it on that phone. Until then, or if the service is busy, the map shows a dashed approximate line.

For the most reliable result, build the road route once and upload it, so phones never need to call the routing service:

1. Install Node.js 18 or newer on your computer.
2. In a folder with `data.js` and the `tools` folder, run `node tools/build-route.mjs`.
3. Upload the new `route-geometry.js` file to the repo.

Run it again whenever you change the `route` list in `data.js`. To steer the line onto a particular road, add a point on that road to `route` in driving order.

## Share votes and spots with the family

Out of the box, votes, added spots, and "visited" marks are saved on each phone only. To share them so everyone sees the same votes, connect a free Firebase project. It takes about 15 minutes.

1. Go to the Firebase console (console.firebase.google.com) and create a project. The free Spark plan is enough.
2. Open **Build > Authentication**, click Get started, then under **Sign-in method** enable **Anonymous**.
3. Open **Build > Firestore Database** and create a database.
4. In Firestore, open the **Rules** tab, replace the rules with the block below, and click Publish:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /trips/{tripId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

5. Open **Project settings** (gear icon), scroll to **Your apps**, and add a **Web app** (the `</>` icon). Firebase shows a `firebaseConfig` block.
6. In `config.js`, replace `firebase: null` with that config, and change `tripCode` to a long random code, like a password. Everyone using the site shares this code automatically.
7. Commit `config.js`. Within a minute, the Ideas view should say "Votes and added stops are shared with everyone on the trip."

Notes on sharing:
- The Firebase config isn't a secret; Firebase expects it to be in the page. Protection comes from the rules (only signed-in visitors) and the hard-to-guess trip code.
- Anyone who has the site and the code could add or change votes, so keep it to trip-planning details, not anything sensitive.
- Spots added on a phone before sharing was turned on are uploaded the first time that phone connects.

## Sharing without Firebase

Use Map view, tap "All," open the bottom panel, and choose "Export my spots." Send the file to another phone and use "Import spots" there. Votes don't transfer this way.

## Privacy

A GitHub Pages site is public to anyone with the link, and a public repository shows its files to everyone. This app includes first names and where we're staying each night. Consider replacing names with initials in `data.js`, and take the site down after the trip.

## Notes

- The map uses OpenStreetMap tiles and the Leaflet library, so it needs a data connection.
- After uploading new files, reopen the app with a signal to get the update.
- Drive times, distances, coordinates, and hours are approximate. Check each idea's hours before you go; some details came from travel guides and may have changed.
- Parts of this app and its data were drafted with AI assistance, so double-check details before relying on them.
