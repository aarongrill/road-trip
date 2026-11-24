# Road Trip 2027

A phone-friendly companion app for our July 2027 mountain bike road trip. It shows each day's drive, rides, fun stops, meal spots, and where we're sleeping, plus a map and a checklist.

## What's in it

The whole app is a map you can scroll and zoom with your fingers.

- **Day strip** at the top: tap a day to zoom to its stops. Tap "All" for the whole trip. During the trip it opens to today.
- **Pins** for every ride, fun stop, meal spot, and place to sleep. Tap one for details, directions, and trail info.
- **+ Add a spot**: move the map until the pin is on the spot, tap "Put the pin here," then name it, pick a type, and attach it to a day. Your spots can be edited, moved, or deleted.
- **◎ button**: shows where you are (the phone will ask for location permission).
- **Bottom panel**: swipe or tap the handle to open it. It lists the day's plan, your spots, and map filters.

Spots you add and "visited" marks are saved on that phone only. To share spots with someone else, use "Export my spots" on one phone and "Import spots" on the other.

## Files

- `index.html` is the app.
- `data.js` holds the whole plan: places, days, the map route, and the checklist. Edit this file to change anything.

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `road-trip-2027`.
2. Upload `index.html`, `data.js`, and this README to the repository (Add file > Upload files), then commit.
3. Go to Settings > Pages. Under "Build and deployment," set Source to "Deploy from a branch," pick `main` and `/ (root)`, and save.
4. After a minute or two, the app is live at `https://YOUR-USERNAME.github.io/road-trip-2027/`.
5. On each phone, open that link and use "Add to Home Screen" so it opens like an app.

## Privacy

A GitHub Pages site is public to anyone with the link, and a public repository shows its files to everyone. This app includes first names and where we're staying each night. Before publishing, consider:

- Replacing names with initials in `data.js`.
- Leaving out the exact home location (it's set to a general point in northern New Jersey).
- Taking the site down after the trip.

## Notes

- The map uses OpenStreetMap tiles and the Leaflet library, so it needs a data connection.
- Drive times, distances, and coordinates are approximate. Bike park hours for 2027 weren't posted when this was built, so check them in the spring.
- Small parts of this app and its data were drafted with AI assistance; double-check details before relying on them.
