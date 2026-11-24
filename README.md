# Road Trip 2027

A phone-friendly companion app for our July 2027 mountain bike road trip. Switch between three views with the buttons at the top: List, Map, and Ideas.

## The three views

**List**
- Every day of the trip, grouped by leg. Tap a day to expand it and see the drive, rides, meal stop, fun stops, stops the family added, and where we're sleeping.
- Each stop has Directions, Show on map, and Trail info buttons, plus "Mark visited."
- During the trip, today is highlighted and opens automatically.

**Map**
- A full-screen map you can scroll and zoom. Tap a day at the top to zoom to its stops, or "All" for the whole route.
- Tap any pin for details. Teal circle pins are ideas you can vote on.
- **+ Add a spot**: move the map until the pin is on the spot, tap "Put the pin here," then name it, pick a type, and attach it to a day.
- The ◎ button shows where you are.

**Ideas**
- Researched options along the route: fun places to eat, odd roadside stops, and views and rest stops, each with the day it fits, the detour, and details.
- Tap 👍 to vote. The first time, the app asks your name so everyone can see who voted for what.
- Sort by trip order or most votes, and filter by type.
- "Add to plan" puts an idea into that day's list and onto the map.
- Stops the family adds on the map show up at the bottom so everyone can vote on those too.

## Files

Upload all five files to the top level of the repo:

- `index.html`: the app
- `data.js`: the plan, the ideas list, and the checklist (edit this to change anything)
- `config.js`: settings for sharing votes and spots (see below)
- `sync.js`: the code that shares votes and spots when sharing is turned on
- `README.md`: this file

## Publish on GitHub Pages

1. Upload the files to the repository (Add file > Upload files) and commit.
2. Go to Settings > Pages. Set Source to "Deploy from a branch," pick `main` and `/ (root)`, and save.
3. For a custom domain, enter it under Settings > Pages > Custom domain, then add the DNS records GitHub lists.
4. Once the domain works, check "Enforce HTTPS." The ◎ location button only works over HTTPS.

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
- Drive times, distances, coordinates, and hours are approximate. Check each idea's hours before you go; some details came from travel guides and may have changed.
- Parts of this app and its data were drafted with AI assistance, so double-check details before relying on them.
