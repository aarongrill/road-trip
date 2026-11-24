# Road Trip 2027

A phone-friendly companion app for our July 2027 mountain bike road trip. It shows each day's drive, rides, fun stops, meal spots, and where we're sleeping, plus a map and a checklist.

## What's in it

Switch between two views with the List and Map buttons at the top. The app remembers which one you used last.

**List view**
- Every day of the trip, grouped by leg. Tap a day to expand it and see the drive, rides, meal stop, fun stops, your own spots, and where you're sleeping.
- Each stop has Directions, Show on map, and Trail info buttons, plus "Mark visited" for fun stops and meal spots.
- Expand all or Collapse all at the top. During the trip, today is highlighted and opens automatically.

**Map view**
- A full-screen map you can scroll and zoom. Tap a day at the top to zoom to its stops, or "All" for the whole route.
- Tap any pin for details, directions, and trail info.
- **+ Add a spot**: move the map until the pin is on the spot, tap "Put the pin here," then name it, pick a type, and attach it to a day. Your spots can be edited, moved, or deleted.
- The ◎ button shows where you are.

The day strip at the top works in both views: in the list it jumps to that day.

Spots you add and "visited" marks are saved on that phone only. To share spots, use "Export my spots" on one phone (Map view, "All," then open the bottom panel) and "Import spots" on the other.

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
