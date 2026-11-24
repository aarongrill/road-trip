// Shared sync for votes, added spots, and visited marks (optional).
// If config.js has no Firebase config, the app keeps everything on each phone.

const FB = "https://www.gstatic.com/firebasejs/10.12.2/";

function announce(api) {
  window.TripSync = api;
  window.dispatchEvent(new Event("tripsync-ready"));
}

async function start() {
  const cfg = window.SYNC_CONFIG || {};
  if (!cfg.firebase || !cfg.tripCode) { announce({ enabled: false }); return; }

  try {
    const { initializeApp } = await import(FB + "firebase-app.js");
    const { getAuth, signInAnonymously } = await import(FB + "firebase-auth.js");
    const { getFirestore, doc, setDoc, updateDoc, onSnapshot, deleteField } = await import(FB + "firebase-firestore.js");

    const app = initializeApp(cfg.firebase);
    await signInAnonymously(getAuth(app));
    const db = getFirestore(app);
    const ref = doc(db, "trips", cfg.tripCode);
    await setDoc(ref, { updated: Date.now() }, { merge: true });

    const listeners = [];
    onSnapshot(ref, snap => {
      const data = snap.data() || {};
      listeners.forEach(fn => fn({ votes: data.votes || {}, spots: data.spots || {}, done: data.done || {} }));
    }, err => console.warn("Sync error", err));

    const write = obj => updateDoc(ref, Object.assign({ updated: Date.now() }, obj)).catch(err => console.warn("Sync write failed", err));

    announce({
      enabled: true,
      onChange: fn => listeners.push(fn),
      setVote: (itemId, voterKey, name, on) => write({ [`votes.${itemId}.${voterKey}`]: on ? name : deleteField() }),
      setSpot: spot => write({ [`spots.${spot.id}`]: spot }),
      removeSpot: id => write({ [`spots.${id}`]: deleteField() }),
      setDone: (id, on) => write({ [`done.${id}`]: on ? true : deleteField() })
    });
  } catch (err) {
    console.warn("Sync unavailable, using this phone only", err);
    announce({ enabled: false, error: true });
  }
}

start();
