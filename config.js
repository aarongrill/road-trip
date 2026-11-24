// Optional: share votes, added spots, and "visited" marks with the whole family.
// Leave firebase as null to keep everything on each phone only.
// See README.md, "Share votes and spots with the family," for setup steps.

window.SYNC_CONFIG = {
  // Paste your Firebase web config here, for example:
  // firebase: {
  //   apiKey: "...",
  //   authDomain: "your-project.firebaseapp.com",
  //   projectId: "your-project",
  //   appId: "..."
  // },
  firebase: null,

  // A long, hard-to-guess code shared by everyone on the trip.
  tripCode: "change-this-to-a-long-random-code"
};
