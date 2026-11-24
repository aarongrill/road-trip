// Trip data for the companion app. Edit this file to change the plan.
// Coordinates are approximate. Places are referenced by id from the days below.

window.TRIP = {
  title: "July 2027 Mountain Bike Road Trip",
  start: "2027-07-03",
  end: "2027-07-31",

  places: {
    home:        { name: "Home", lat: 40.735, lng: -74.17, type: "home" },

    // Leg 1
    oakridge:    { name: "Hotel in Oak Ridge, TN", lat: 36.011, lng: -84.27, type: "hotel" },
    windrock:    { name: "Windrock Bike Park", lat: 36.0846, lng: -84.3262, type: "ride", link: "https://exploreoakridge.com/attractions/windrock-bike-park/", note: "Weekend shuttles; warm up on easier lines" },
    frozenhead:  { name: "Frozen Head State Park campground", lat: 36.1219, lng: -84.4972, type: "camp" },
    natbridge:   { name: "Natural Bridge State Park, VA", lat: 37.6276, lng: -79.5432, type: "meal", note: "Picnic by a giant stone arch" },
    dinokingdom: { name: "Dinosaur Kingdom II", lat: 37.649, lng: -79.5248, type: "fun", emoji: "🦕", note: "The Union Army vs. dinosaurs, plus a Bigfoot water-gun shootout. I-81 exit 180" },
    castle:      { name: "Enchanted Castle Studios", lat: 37.6633, lng: -79.5323, type: "fun", emoji: "🏰", note: "Mark Cline’s monster workshop; free to look from the fence" },
    bristol:     { name: "Bristol Motor Speedway", lat: 36.5157, lng: -82.257, type: "fun", emoji: "🏁", note: "Half-mile NASCAR bowl right off I-81" },
    burgess:     { name: "Burgess Falls State Park", lat: 36.0437, lng: -85.5951, type: "meal", note: "Waterfall overlooks, about 20 minutes off I-40" },
    nashville:   { name: "Rebekah’s, Nashville", lat: 36.1627, lng: -86.7816, type: "host" },
    montbell:    { name: "Montgomery Bell State Park", lat: 36.0976, lng: -87.2797, type: "ride", note: "Morning loop before the heat" },
    parthenon:   { name: "The Parthenon", lat: 36.1497, lng: -86.8133, type: "fun", emoji: "🏛️", note: "Full-size replica with a 42-foot Athena" },
    bigriver:    { name: "Big River Crossing, Memphis", lat: 35.1376, lng: -90.0663, type: "meal", note: "Walk out over the Mississippi" },
    pyramid:     { name: "Bass Pro Pyramid", lat: 35.1557, lng: -90.0519, type: "fun", emoji: "🔺", note: "A 32-story pyramid store on I-40" },
    billybass:   { name: "Billy Bass Adoption Center (Flying Fish)", lat: 34.748, lng: -92.265, type: "fun", emoji: "🐟", note: "Hundreds of retired singing fish. Bring one, get free catfish" },
    bikeinn:     { name: "The Bike Inn, Bentonville", lat: 36.341, lng: -94.222, type: "hotel" },
    coler:       { name: "Coler Mountain Bike Preserve", lat: 36.3768, lng: -94.2402, type: "ride", link: "https://www.visitbentonville.com/blog/stories/post/summer-ride-guide/", note: "Bike park feel, bigger jumps" },
    slaughter:   { name: "Slaughter Pen", lat: 36.3735, lng: -94.2185, type: "ride", note: "The classic network, with a jump park" },
    railyard:    { name: "Railyard Bike Park, Rogers", lat: 36.3329, lng: -94.118, type: "ride" },
    walmart:     { name: "Walmart Museum", lat: 36.3729, lng: -94.2088, type: "fun", emoji: "🛒", note: "Sam Walton’s original five-and-dime" },
    kc:          { name: "Aaron’s parents, Kansas City", lat: 39.0997, lng: -94.5786, type: "host" },
    joes:        { name: "Joe’s Kansas City Bar-B-Que", lat: 39.0517, lng: -94.6107, type: "fun", emoji: "🍖", note: "Famous barbecue in a gas station" },
    wilson:      { name: "Wilson Lake, KS", lat: 38.95, lng: -98.53, type: "meal", note: "Clear blue lake in rocky hills" },
    eden:        { name: "Garden of Eden, Lucas, KS", lat: 39.0587, lng: -98.5355, type: "fun", emoji: "⚰️", note: "Concrete folk art; the builder is entombed on site, viewable. 18 miles off I-70" },
    easel:       { name: "World’s Largest Easel, Goodland", lat: 39.352, lng: -101.711, type: "fun", emoji: "🌻", note: "80-foot Van Gogh, half a mile off I-70" },
    casa:        { name: "Casa Bonita, Lakewood", lat: 39.7402, lng: -105.0709, type: "fun", emoji: "🌮", note: "Cliff divers and sopapillas; reservations open in batches" },
    den:         { name: "Denver airport (Stef arrives)", lat: 39.8561, lng: -104.6737, type: "airport" },
    dillon:      { name: "Dillon rental", lat: 39.6303, lng: -106.0434, type: "host" },
    keystone:    { name: "Keystone Bike Park", lat: 39.6076, lng: -105.9439, type: "ride", link: "https://www.keystoneresort.com/blog-articles/bike-park-progression.aspx", note: "The bike park closest to Dillon, 15 minutes away" },
    trestle:     { name: "Trestle Bike Park, Winter Park", lat: 39.8868, lng: -105.7625, type: "ride", link: "https://www.winterparkresort.com/the-mountain/hours-of-operation" },
    rafting:     { name: "Whitewater rafting, Browns Canyon", lat: 38.6519, lng: -106.0472, type: "fun", emoji: "🛶", note: "Family-friendly Class III rapids on the Arkansas River, about 1.5 hours from Dillon. Book for the whole group" },

    // Leg 2
    leadville:   { name: "Leadville", lat: 39.2508, lng: -106.2925, type: "fun", emoji: "⛏️", note: "Highest incorporated city in the US" },
    cottonwood:  { name: "Cottonwood Pass", lat: 38.8283, lng: -106.4092, type: "meal", note: "Picnic on the Continental Divide, 12,126 feet" },
    cbtown:      { name: "Bryant’s, Crested Butte", lat: 38.8697, lng: -106.9878, type: "host" },
    cbpark:      { name: "Crested Butte Mountain Bike Park", lat: 38.8997, lng: -106.9658, type: "ride", link: "https://www.evo.com/blogs/travel-guides/crested-butte-colorado-mountain-bike-trails", note: "Or the 401 Trail with Bryant" },
    blackcanyon: { name: "Black Canyon of the Gunnison, South Rim", lat: 38.5753, lng: -107.7416, type: "meal", note: "About 15 minutes off US-50" },
    mike:        { name: "Mike the Headless Chicken statue", lat: 39.1589, lng: -108.729, type: "fun", emoji: "🐔", note: "He lived 18 months without a head" },
    dinojourney: { name: "Dinosaur Journey, Fruita", lat: 39.1567, lng: -108.7316, type: "fun", emoji: "🦖", note: "Dinosaur museum near I-70" },
    nfd:         { name: "North Fruita Desert Campground", lat: 39.327, lng: -108.699, type: "camp" },
    road18:      { name: "18 Road trails", lat: 39.33, lng: -108.704, type: "ride", link: "https://copmoba.org/wp-content/uploads/2019/04/north-fruita-desert-trail-map.pdf", note: "Ride at dusk and dawn; it’s hot" },
    crystal:     { name: "Crystal Geyser", lat: 38.9384, lng: -110.1354, type: "fun", emoji: "💦", note: "Cold-water geyser on no schedule; dirt road" },
    price:       { name: "Prehistoric Museum, Price", lat: 39.5994, lng: -110.8097, type: "fun", emoji: "🦴", note: "Dinosaurs right on US-6" },
    bridalveil:  { name: "Bridal Veil Falls, Provo Canyon", lat: 40.3426, lng: -111.6018, type: "meal", note: "Waterfall beside US-189" },
    jordanelle:  { name: "Jordanelle State Park", lat: 40.621, lng: -111.421, type: "camp" },
    deervalley:  { name: "Deer Valley", lat: 40.6374, lng: -111.4783, type: "ride", link: "https://www.deervalley.com/things-to-do/activities/mountain-biking" },
    woodward:    { name: "Woodward Park City", lat: 40.7536, lng: -111.5728, type: "ride", note: "Jump laps" },
    penney:      { name: "J.C. Penney Mother Store, Kemmerer", lat: 41.7919, lng: -110.5376, type: "fun", emoji: "🛍️", note: "His first store, from 1902" },
    afton:       { name: "Afton elk antler arch", lat: 42.7246, lng: -110.9318, type: "fun", emoji: "🦌", note: "World’s largest elk antler arch, over US-89" },
    periodic:    { name: "Periodic Spring and Swift Creek", lat: 42.7452, lng: -110.8495, type: "meal", note: "Shaded creek lunch; the on-off cycle runs late Aug to May" },
    grosventre:  { name: "Gros Ventre Campground", lat: 43.616, lng: -110.667, type: "camp" },
    tetonpass:   { name: "Teton Pass trails", lat: 43.497, lng: -110.953, type: "ride", link: "https://trailforks.com/region/teton-pass", note: "Fuzzy Bunny and Lithium are expert-only" },
    jhpark:      { name: "Jackson Hole bike park", lat: 43.5875, lng: -110.8279, type: "ride", note: "Better for mixed abilities" },
    cowboybar:   { name: "Million Dollar Cowboy Bar", lat: 43.4797, lng: -110.762, type: "fun", emoji: "🤠", note: "Saddles for barstools" },
    oxbow:       { name: "Oxbow Bend", lat: 43.8653, lng: -110.548, type: "meal", note: "Mount Moran over the Snake River" },
    faithful:    { name: "Old Faithful", lat: 44.4605, lng: -110.8281, type: "fun", emoji: "♨️", note: "Erupts about every 90 minutes" },
    bigskyhost:  { name: "Wes’s, Big Sky", lat: 45.2618, lng: -111.308, type: "host" },
    bigskypark:  { name: "Big Sky Bike Park", lat: 45.2858, lng: -111.4012, type: "ride", link: "https://www.bigskyresort.com/summer-activities/mountain-biking/bike-the-sky" },

    // Leg 3
    bzn:         { name: "Bozeman airport (Stef and Arlo fly home)", lat: 45.7775, lng: -111.153, type: "airport" },
    dinopark:    { name: "Dinosaur Park, Rapid City", lat: 44.0784, lng: -103.2427, type: "fun", emoji: "🦕", note: "1930s concrete dinosaurs, I-90 exit 57" },
    rushmore:    { name: "Mount Rushmore", lat: 43.8791, lng: -103.4591, type: "fun", emoji: "🗿", note: "Evening lighting ceremony in summer" },
    sylvan:      { name: "Sylvan Lake Campground, Custer SP", lat: 43.8486, lng: -103.5596, type: "camp" },
    custertrails:{ name: "Custer State Park trails", lat: 43.80, lng: -103.45, type: "ride", link: "https://trailforks.com/region/custer-state-park" },
    wall:        { name: "Wall Drug", lat: 43.9925, lng: -102.2416, type: "fun", emoji: "🧊", note: "Free ice water and 5-cent coffee" },
    badlands:    { name: "Badlands Loop Road", lat: 43.7499, lng: -101.9411, type: "fun", emoji: "🏜️", note: "About an hour extra" },
    skeleton:    { name: "Skeleton man walking his dinosaur", lat: 43.9055, lng: -101.0566, type: "fun", emoji: "💀", note: "By 1880 Town, I-90 exit 170" },
    dignity:     { name: "Dignity: Of Earth & Sky", lat: 43.756, lng: -99.331, type: "meal", note: "50-foot statue over the Missouri, at the rest area" },
    corn:        { name: "Corn Palace, Mitchell", lat: 43.7142, lng: -98.0257, type: "fun", emoji: "🌽", note: "Murals made of corn" },
    porter:      { name: "Porter Sculpture Park", lat: 43.664, lng: -97.182, type: "fun", emoji: "🐂", note: "Giant bull head and macabre scrap-metal art, exit 374" },
    siouxfalls:  { name: "Hotel in Sioux Falls", lat: 43.5574, lng: -96.7225, type: "hotel" },
    fallspark:   { name: "Falls Park, Sioux Falls", lat: 43.5575, lng: -96.7228, type: "meal", note: "Waterfalls downtown" },
    giant:       { name: "Jolly Green Giant, Blue Earth", lat: 43.6346, lng: -94.1036, type: "fun", emoji: "🥦", note: "55-foot statue off I-90" },
    spam:        { name: "SPAM Museum, Austin", lat: 43.6696, lng: -92.9752, type: "fun", emoji: "🥫", note: "Free, with samples. I-90 exit 178B" },
    sixpack:     { name: "World’s Largest Six-Pack, La Crosse", lat: 43.8022, lng: -91.2494, type: "fun", emoji: "🍺", note: "Brewery tanks painted as cans" },
    grandad:     { name: "Grandad Bluff, La Crosse", lat: 43.8119, lng: -91.2067, type: "meal", note: "600-foot view over the Mississippi" },
    kalahari:    { name: "Kalahari or Wilderness Resort", lat: 43.6237, lng: -89.7896, type: "hotel" },
    noahs:       { name: "Noah’s Ark Waterpark", lat: 43.61, lng: -89.793, type: "fun", emoji: "🌊", note: "America’s largest outdoor waterpark" },
    devilslake:  { name: "Devil’s Lake State Park", lat: 43.4167, lng: -89.7333, type: "meal", note: "Rocky bluffs around a clear lake" },
    starved:     { name: "Starved Rock Lodge or Ottawa hotel", lat: 41.3175, lng: -88.9937, type: "hotel" },
    berkey:      { name: "Berkey Creamery, State College", lat: 40.8037, lng: -77.865, type: "fun", emoji: "🍦", note: "Penn State’s famous ice cream" },
    sevenpoints: { name: "Seven Points Campground, Raystown", lat: 40.3831, lng: -78.0783, type: "camp" },
    allegrippis: { name: "Allegrippis Trails", lat: 40.37, lng: -78.06, type: "ride", link: "https://www.mtbproject.com/directory/8015882/allegrippis", note: "Fast, flowy stacked loops" },
    hershey:     { name: "Hershey’s Chocolate World", lat: 40.2893, lng: -76.6555, type: "fun", emoji: "🍫", note: "Free chocolate tour ride" }
  },

  // Approximate driving line for the map.
  route: [
    [40.735,-74.17],[40.3,-76.88],[39.6,-77.8],[38.45,-78.87],[37.63,-79.54],[37.27,-79.94],[36.6,-82.2],[36.0,-83.92],[36.011,-84.27],
    [36.0,-85.5],[36.16,-86.78],[35.15,-90.05],[34.75,-92.29],[35.39,-94.4],[36.37,-94.21],[37.08,-94.51],[39.1,-94.58],
    [38.84,-97.61],[38.88,-99.32],[39.35,-101.71],[39.74,-104.99],[39.68,-105.9],[39.63,-106.04],
    [39.25,-106.29],[38.84,-106.13],[38.83,-106.41],[38.66,-106.85],[38.87,-106.99],[38.55,-106.93],[38.48,-107.88],[39.07,-108.55],[39.16,-108.73],
    [38.99,-110.16],[39.6,-110.81],[40.11,-111.65],[40.34,-111.6],[40.51,-111.41],[40.65,-111.5],[41.27,-110.96],[41.79,-110.54],[42.08,-110.96],[42.72,-110.93],[43.17,-111.04],[43.48,-110.76],
    [43.84,-110.51],[44.42,-110.57],[44.46,-110.83],[44.66,-111.1],[45.28,-111.31],[45.68,-111.04],[45.78,-108.5],[44.8,-106.96],[44.29,-105.5],[44.08,-103.23],[43.85,-103.56],
    [43.99,-102.24],[43.8,-99.33],[43.71,-98.03],[43.55,-96.73],[43.65,-93.37],[43.67,-92.97],[43.8,-91.25],[43.62,-89.79],[43.07,-89.4],[42.27,-89.09],[41.32,-88.99],
    [41.5,-87.6],[41.65,-83.54],[41.1,-80.65],[41.15,-77.8],[40.8,-77.86],[40.49,-78.01],[40.38,-78.08],[40.27,-76.88],[40.735,-74.17]
  ],

  days: [
    { date: "2027-07-03", title: "Hit the road", drive: { from: "Home", to: "Oak Ridge, TN", miles: 650, hours: "10" },
      fun: ["dinokingdom","castle","bristol"], meals: [["Lunch","natbridge"]], stay: "oakridge" },
    { date: "2027-07-04", title: "Windrock", ride: { text: "Full day of shuttle laps on the flow and jump lines", places: ["windrock"] }, stay: "frozenhead" },
    { date: "2027-07-05", title: "On to Nashville", drive: { from: "Knoxville", to: "Nashville", miles: 180, hours: "3" }, meals: [["Lunch","burgess"]], stay: "nashville" },
    { date: "2027-07-06", title: "Nashville", ride: { text: "Morning ride before the heat, then the afternoon in town", places: ["montbell"] }, fun: ["parthenon"], stay: "nashville" },
    { date: "2027-07-07", title: "Across the Mississippi", drive: { from: "Nashville", to: "Bentonville, AR", miles: 530, hours: "8" },
      fun: ["pyramid","billybass"], meals: [["Stretch break","bigriver"]], stay: "bikeinn" },
    { date: "2027-07-08", title: "Bentonville", ride: { text: "Coler jump lines in the morning, Slaughter Pen in the afternoon", places: ["coler","slaughter"] }, fun: ["walmart"], stay: "bikeinn" },
    { date: "2027-07-09", title: "To Kansas City", ride: { text: "Morning ride", places: ["railyard"] }, drive: { from: "Bentonville", to: "Kansas City", miles: 215, hours: "3.5" }, fun: ["joes"], stay: "kc" },
    { date: "2027-07-10", title: "Big Kansas day", drive: { from: "Kansas City", to: "Dillon, CO", miles: 670, hours: "10" },
      fun: ["eden","easel","casa"], meals: [["Lunch","wilson"]], stay: "dillon", note: "Stef flies into Denver and takes the shuttle to Dillon.", extra: ["den"] },
    { date: "2027-07-11", title: "Keystone with the cousins", ride: { text: "Full day; keep the first laps easy at altitude", places: ["keystone"] }, stay: "dillon", note: "All the cousins are in Dillon this week." },
    { date: "2027-07-12", title: "Trestle", ride: { text: "Full day, about 75 minutes from Dillon", places: ["trestle"] }, stay: "dillon" },
    { date: "2027-07-13", title: "Rafting day", fun: ["rafting"], stay: "dillon", note: "Whitewater rafting with all the cousins instead of riding." },
    { date: "2027-07-14", title: "Trestle again", ride: { text: "Full day", places: ["trestle"] }, stay: "dillon" },
    { date: "2027-07-15", title: "Keystone", ride: { text: "Full day", places: ["keystone"] }, stay: "dillon" },
    { date: "2027-07-16", title: "Keystone again", ride: { text: "Full day", places: ["keystone"] }, stay: "dillon" },
    { date: "2027-07-17", title: "Over Cottonwood Pass", drive: { from: "Dillon", to: "Crested Butte", miles: 150, hours: "3.5" },
      ride: { text: "Afternoon at the bike park", places: ["cbpark"] }, fun: ["leadville"], meals: [["Lunch","cottonwood"]], stay: "cbtown" },
    { date: "2027-07-18", title: "Crested Butte", ride: { text: "Bike park, or the 401 Trail with Bryant", places: ["cbpark"] }, stay: "cbtown" },
    { date: "2027-07-19", title: "Down to the desert", drive: { from: "Crested Butte", to: "Fruita", miles: 180, hours: "3.5" },
      ride: { text: "Evening ride on 18 Road", places: ["road18"] }, fun: ["mike","dinojourney"], meals: [["Lunch","blackcanyon"]], stay: "nfd" },
    { date: "2027-07-20", title: "Utah", ride: { text: "Dawn ride before the heat", places: ["road18"] }, drive: { from: "Fruita", to: "Park City", miles: 290, hours: "4.5" },
      fun: ["crystal","price"], meals: [["Lunch","bridalveil"]], stay: "jordanelle" },
    { date: "2027-07-21", title: "Deer Valley", ride: { text: "Full day of lift-served trails", places: ["deervalley"] }, stay: "jordanelle" },
    { date: "2027-07-22", title: "Antlers and springs", ride: { text: "Morning jump laps", places: ["woodward"] }, drive: { from: "Park City", to: "Jackson", miles: 280, hours: "5" },
      fun: ["penney","afton"], meals: [["Lunch","periodic"]], stay: "grosventre" },
    { date: "2027-07-23", title: "Tetons", ride: { text: "Teton Pass or the resort bike park", places: ["tetonpass","jhpark"] }, fun: ["cowboybar"], stay: "grosventre" },
    { date: "2027-07-24", title: "Through Yellowstone", ride: { text: "Morning on Teton Pass", places: ["tetonpass"] }, drive: { from: "Jackson", to: "Big Sky", miles: 220, hours: "5" },
      fun: ["faithful"], meals: [["Lunch","oxbow"]], stay: "bigskyhost" },
    { date: "2027-07-25", title: "Big Sky", ride: { text: "Full day; try Tango to Last Waltz", places: ["bigskypark"] }, stay: "bigskyhost" },
    { date: "2027-07-26", title: "Turn for home", drive: { from: "Big Sky", to: "Custer State Park", miles: 620, hours: "9.5" },
      fun: ["dinopark","rushmore"], stay: "sylvan", note: "Drop Stef and Arlo at Bozeman airport in the morning.", extra: ["bzn"] },
    { date: "2027-07-27", title: "Badlands and oddities", ride: { text: "Morning ride from Sylvan Lake", places: ["custertrails"] }, drive: { from: "Custer State Park", to: "Sioux Falls", miles: 390, hours: "6" },
      fun: ["wall","badlands","skeleton","corn","porter"], meals: [["Lunch","dignity"]], stay: "siouxfalls" },
    { date: "2027-07-28", title: "SPAM to slides", drive: { from: "Sioux Falls", to: "Wisconsin Dells", miles: 390, hours: "6" },
      fun: ["giant","spam","sixpack"], meals: [["Breakfast","fallspark"],["Lunch","grandad"]], stay: "kalahari" },
    { date: "2027-07-29", title: "Water park morning", drive: { from: "Wisconsin Dells", to: "Starved Rock", miles: 200, hours: "3.5" },
      fun: ["noahs"], meals: [["Breakfast","devilslake"]], stay: "starved" },
    { date: "2027-07-30", title: "The long one", drive: { from: "Starved Rock", to: "Raystown Lake", miles: 640, hours: "9.5" }, fun: ["berkey"], stay: "sevenpoints" },
    { date: "2027-07-31", title: "Last ride, then home", ride: { text: "Morning on Allegrippis", places: ["allegrippis"] }, drive: { from: "Raystown", to: "Home", miles: 250, hours: "4.5" }, fun: ["hershey"], stay: "home" }
  ],


  // Ideas the family can vote on and add to the plan.
  // cat: "eat" (fun places to eat), "odd" (odd and fun stops), "view" (views and rest stops)
  // day: 0 = July 3 ... 28 = July 31
  ideas: [
    { id: "texastavern", cat: "eat", day: 0, name: "Texas Tavern, Roanoke, VA", lat: 37.2707, lng: -79.9414, detour: "About 10 minutes off I-81", note: "A tiny lunch counter open since 1930. Order a “cheesy western” and a bowl of chili." },
    { id: "luray", cat: "odd", day: 0, name: "Great Stalacpipe Organ, Luray Caverns, VA", lat: 38.6643, lng: -78.4836, detour: "About 25 minutes off I-81", note: "A pipe organ that plays the cave itself: mallets tap stalactites to make music." },
    { id: "sunsphere", cat: "odd", day: 2, name: "Sunsphere, Knoxville", lat: 35.9606, lng: -83.923, detour: "Downtown Knoxville", note: "A giant gold ball left over from the 1982 World’s Fair, with a free observation deck." },
    { id: "princes", cat: "eat", day: 3, name: "Prince’s Hot Chicken, Nashville", lat: 36.17, lng: -86.78, detour: "In Nashville", note: "The family credited with starting Nashville hot chicken. Ask for plain or mild unless you’re brave." },
    { id: "googoo", cat: "eat", day: 3, name: "Goo Goo Chocolate Co., Nashville", lat: 36.1596, lng: -86.7749, detour: "Downtown Nashville", note: "Home of the Goo Goo Cluster, the candy bar sold since 1912." },
    { id: "centralbbq", cat: "eat", day: 4, name: "Central BBQ, Memphis", lat: 35.1302, lng: -90.0465, detour: "A few minutes off I-40", note: "Memphis dry-rub ribs and pulled pork, a good lunch on the long Arkansas day." },
    { id: "littlerock", cat: "odd", day: 4, name: "The actual little rock, Little Rock, AR", lat: 34.7495, lng: -92.268, detour: "Riverfront Park, near the Billy Bass wall", note: "The city is named for a real little rock on the Arkansas River bank, and you can go see it.", src: "Mental Floss" },
    { id: "airship", cat: "eat", day: 5, name: "Airship Coffee at Coler", lat: 36.3768, lng: -94.2402, detour: "Inside the Coler preserve", note: "A café in the middle of the bike preserve. Ride up for coffee and snacks between laps." },
    { id: "gates", cat: "eat", day: 6, name: "Gates Bar-B-Q, Kansas City", lat: 39.0335, lng: -94.5578, detour: "In Kansas City", note: "Kansas City classic where the staff greets you with a loud “Hi, may I help you!” as you walk in." },
    { id: "bryants", cat: "eat", day: 6, name: "Arthur Bryant’s, Kansas City", lat: 39.0915, lng: -94.556, detour: "In Kansas City", note: "Old-school burnt ends and sauce that has fed presidents." },
    { id: "cozy", cat: "eat", day: 7, name: "Cozy Inn, Salina, KS", lat: 38.8411, lng: -97.61, detour: "About 5 minutes off I-70", note: "A six-stool diner open since 1922. Onion-loaded sliders sold by the sack, plus chips and soda. That’s the whole menu.", src: "Kansas Sampler Foundation" },
    { id: "fick", cat: "odd", day: 7, name: "Fick Fossil Museum, Oakley, KS", lat: 39.128, lng: -100.857, detour: "A few minutes off I-70", note: "Fossils and folk art, including pictures made entirely of shark teeth and shells." },
    { id: "genesee", cat: "view", day: 7, name: "Genesee Park bison herd, CO", lat: 39.709, lng: -105.304, detour: "I-70 exit 254", note: "A bison herd grazes right beside I-70 west of Denver. Pull off and look for them." },
    { id: "damb", cat: "eat", day: 8, name: "Dillon Dam Brewery", lat: 39.6307, lng: -106.0446, detour: "In Dillon", note: "Big, easy family dinner spot near the rental." },
    { id: "sapphire", cat: "view", day: 8, name: "Sapphire Point Overlook", lat: 39.586, lng: -106.005, detour: "15 minutes from Dillon", note: "A short, easy loop with views over Dillon Reservoir. A good evening picnic with the cousins." },
    { id: "stash", cat: "eat", day: 14, name: "Secret Stash, Crested Butte", lat: 38.8697, lng: -106.9878, detour: "In town", note: "Pizza in a funky old building full of cushions and odd decor." },
    { id: "hottomato", cat: "eat", day: 16, name: "Hot Tomato Café, Fruita", lat: 39.158, lng: -108.73, detour: "Downtown Fruita", note: "The mountain bikers’ pizza joint in Fruita." },
    { id: "colonm", cat: "view", day: 17, name: "Colorado National Monument", lat: 39.1032, lng: -108.7349, detour: "West entrance is next to Fruita", note: "Red rock canyon views on Rim Rock Drive. Go early, before the heat." },
    { id: "sundance", cat: "eat", day: 17, name: "Sundance Resort, Provo Canyon", lat: 40.392, lng: -111.581, detour: "About 5 minutes off US-189", note: "Robert Redford’s mountain resort. The Owl Bar’s old wooden bar came from a Wyoming saloon linked to Butch Cassidy’s gang." },
    { id: "highwest", cat: "eat", day: 18, name: "High West Saloon, Park City", lat: 40.645, lng: -111.497, detour: "Main Street, Park City", note: "A ski-in saloon in an old livery stable, with a big family-friendly menu." },
    { id: "fossilbutte", cat: "view", day: 19, name: "Fossil Butte National Monument", lat: 41.855, lng: -110.762, detour: "About 15 minutes off US-30", note: "Fish fossils around 50 million years old, with a visitor center and picnic tables." },
    { id: "snakecanyon", cat: "view", day: 19, name: "Snake River Canyon overlooks", lat: 43.25, lng: -110.85, detour: "On US-26/89", note: "Pullouts above the whitewater between Alpine and Hoback Junction. Watch the rafts go by." },
    { id: "persephone", cat: "eat", day: 20, name: "Persephone Bakery, Jackson", lat: 43.4799, lng: -110.758, detour: "In Jackson", note: "Pastries and breakfast before a Teton Pass ride." },
    { id: "stringlake", cat: "view", day: 20, name: "String Lake, Grand Teton", lat: 43.788, lng: -110.729, detour: "About 30 minutes from Jackson", note: "Shallow, clear lake below the Tetons. Easy swimming and picnic spot." },
    { id: "firehole", cat: "view", day: 21, name: "Firehole Canyon Drive, Yellowstone", lat: 44.629, lng: -110.864, detour: "Short one-way side road", note: "A canyon drive past Firehole Falls, just off the main road north of Old Faithful." },
    { id: "corral", cat: "eat", day: 21, name: "Corral Bar, Steakhouse & Motel", lat: 45.16, lng: -111.23, detour: "On US-191 south of Big Sky", note: "Old roadhouse on the drive in from Yellowstone, known for burgers and big portions." },
    { id: "ousel", cat: "view", day: 22, name: "Ousel Falls, Big Sky", lat: 45.2416, lng: -111.3207, detour: "In Big Sky", note: "A short trail to a waterfall, an easy outing on a rest afternoon." },
    { id: "greycliff", cat: "view", day: 23, name: "Greycliff Prairie Dog Town State Park, MT", lat: 45.7617, lng: -109.7897, detour: "Right off I-90 at the Greycliff exit", note: "A black-tailed prairie dog colony with picnic tables, 9 miles east of Big Timber. Please don’t feed them.", src: "Visit Montana" },
    { id: "gamelodge", cat: "eat", day: 23, name: "State Game Lodge, Custer State Park", lat: 43.762, lng: -103.373, detour: "Inside Custer State Park", note: "President Coolidge’s 1927 “Summer White House.” Buffalo is on the menu." },
    { id: "prairiedog", cat: "odd", day: 24, name: "Giant Prairie Dog, Cactus Flat, SD", lat: 43.861, lng: -101.98, detour: "Just off I-90 on the road to the Badlands", note: "A 12-foot concrete prairie dog, with real ones nearby.", src: "Travel South Dakota" },
    { id: "pioneerauto", cat: "odd", day: 24, name: "Pioneer Auto Show, Murdo, SD", lat: 43.888, lng: -100.712, detour: "I-90 exit 192", note: "Family-run since 1954, with Elvis Presley’s motorcycle and the General Lee from “The Dukes of Hazzard.”", src: "Travel South Dakota" },
    { id: "alsoasis", cat: "eat", day: 24, name: "Al’s Oasis, Oacoma, SD", lat: 43.7976, lng: -99.358, detour: "I-90 exit 260", note: "Open since 1919 with 5-cent coffee, buffalo burgers, homemade pie, and a giant buffalo statue out front.", src: "Travel South Dakota" },
    { id: "rudys", cat: "eat", day: 25, name: "Rudy’s Drive-In, La Crosse", lat: 43.817, lng: -91.229, detour: "A few minutes off I-90", note: "Old-school drive-in with carhops on roller skates and homemade root beer." },
    { id: "topsecret", cat: "odd", day: 25, name: "Top Secret, Wisconsin Dells", lat: 43.626, lng: -89.78, detour: "On the Dells strip", note: "A full-size White House built upside down, as if it crash-landed." },
    { id: "packos", cat: "eat", day: 27, web: "https://www.tonypackos.com/", name: "Tony Packo’s, Toledo", lat: 41.6427, lng: -83.516, detour: "I-280 exit 9, off the Ohio Turnpike", note: "Hungarian hot dogs under walls of hot dog buns signed by celebrities, including two real buns signed by Jimmy Carter and Walter Mondale.", src: "Roadside America" },
    { id: "rvhall", cat: "odd", day: 27, name: "RV/MH Hall of Fame, Elkhart, IN", lat: 41.715, lng: -85.978, detour: "Just off the Indiana Toll Road", note: "Vintage campers and motor homes, including some very odd early ones." },
    // Swim stops: water parks, big pools, swimming holes, lakes, and hot springs
    { id: "claytor", cat: "swim", day: 0, name: "Claytor Lake State Park beach, VA", lat: 37.06, lng: -80.62, detour: "Near I-81 exit 101", note: "A sandy lake beach with a bathhouse, a good leg-stretch about halfway through the long first day." },
    { id: "hungrymother", cat: "swim", day: 0, name: "Hungry Mother State Park beach, VA", lat: 36.875, lng: -81.525, detour: "A few minutes off I-81 exit 47 at Marion", note: "A lake beach in the mountains near the Tennessee line, with a snack bar in summer." },
    { id: "cummins", cat: "swim", day: 2, name: "Cummins Falls swimming hole, TN", lat: 36.2496, lng: -85.5716, detour: "About 20 minutes off I-40 near Cookeville", note: "Swim at the base of a 75-foot waterfall. Needs a gorge access permit bought online in advance; the hike down is rugged, and rangers close the gorge when rain is possible.", src: "Tennessee State Parks" },
    { id: "nashshores", cat: "swim", day: 2, name: "Nashville Shores Lakeside Resort", lat: 36.17, lng: -86.6, detour: "Off I-40 east of Nashville", note: "Water park with slides and a lake beach on Percy Priest Lake, on the way into Nashville." },
    { id: "lakefortsmith", cat: "swim", day: 4, name: "Lake Fort Smith State Park pool, AR", lat: 35.7, lng: -94.12, detour: "Just off I-49 at Mountainburg", note: "A state park swimming pool in the Boston Mountains, about an hour before Bentonville. Check summer hours." },
    { id: "melvinford", cat: "swim", day: 4, name: "Melvin Ford Aquatic Center, Bentonville", lat: 36.36, lng: -94.2, detour: "In Bentonville", note: "City outdoor pool with slides, a good cool-down after the long drive in. Check hours." },
    { id: "oceansfun", cat: "swim", day: 6, name: "Oceans of Fun, Kansas City", lat: 39.177, lng: -94.4875, detour: "North Kansas City, off I-435", note: "Big water park next to Worlds of Fun, for an afternoon after the drive up from Bentonville." },
    { id: "wilsonlake", cat: "swim", day: 7, name: "Wilson State Park swim beach, KS", lat: 38.92, lng: -98.5, detour: "About 15 minutes off I-70, near the Garden of Eden", note: "Clear lake water and red rock bluffs, an unexpected beach in the middle of Kansas." },
    { id: "hayspool", cat: "swim", day: 7, name: "Hays Aquatic Park, KS", lat: 38.87, lng: -99.33, detour: "A few minutes off I-70", note: "City water park with slides, near the halfway point of the drive to Colorado. Check hours." },
    { id: "cottonwoodhs", cat: "swim", day: 14, name: "Cottonwood Hot Springs, Buena Vista", lat: 38.8125, lng: -106.224, detour: "On the road to Cottonwood Pass", note: "Rustic hot spring pools right on the route over the pass." },
    { id: "princeton", cat: "swim", day: 14, name: "Mount Princeton Hot Springs", lat: 38.733, lng: -106.161, detour: "About 15 minutes south of Buena Vista", note: "Big hot spring pools plus soaking spots along Chalk Creek. Day passes sell out on summer weekends." },
    { id: "highline", cat: "swim", day: 16, name: "Highline Lake State Park beach", lat: 39.27, lng: -108.84, detour: "About 15 minutes from Fruita", note: "A swim beach near the 18 Road trails, a good way to cool off after a desert ride." },
    { id: "fruitapool", cat: "swim", day: 16, name: "Fruita Community Center pool", lat: 39.16, lng: -108.733, detour: "In Fruita", note: "Indoor and outdoor pools with slides. Check day-pass hours." },
    { id: "crater", cat: "swim", day: 17, name: "Homestead Crater, Midway, UT", lat: 40.5239, lng: -111.485, detour: "About 25 minutes from Park City", note: "Swim in a 90–96°F geothermal spring inside a 55-foot limestone dome. Reservations required.", src: "Visit Utah" },
    { id: "jordanelleswim", cat: "swim", day: 18, name: "Jordanelle State Park beach", lat: 40.62, lng: -111.42, detour: "At the campground", note: "Swim beach right where we’re camping, for after Deer Valley." },
    { id: "astoria", cat: "swim", day: 19, name: "Astoria Hot Springs, WY", lat: 43.3002, lng: -110.7744, detour: "On US-26/89, about 20 minutes south of Jackson", note: "Six mineral pools, including a children’s pool and a cold plunge, on the Snake River right along our route. Reservations recommended.", src: "Hot Springs Guides" },
    { id: "granitehs", cat: "swim", day: 20, name: "Granite Hot Springs pool, WY", lat: 43.3696, lng: -110.4449, detour: "About 10 miles of gravel road off US-189/191 east of Hoback Junction", note: "A hot spring pool below granite cliffs, a classic outing from Jackson." },
    { id: "fireholeswim", cat: "swim", day: 21, name: "Firehole River swim area, Yellowstone", lat: 44.623, lng: -110.865, detour: "On Firehole Canyon Drive", note: "Yellowstone’s river swim spot, warmed by hot springs upstream. It opens only when water levels are safe, so check before going." },
    { id: "sylvanswim", cat: "swim", day: 23, name: "Sylvan Lake, Custer State Park", lat: 43.846, lng: -103.559, detour: "At the campground", note: "Swim among granite boulders at the lake where we’re camping, after the long drive." },
    { id: "keyhole", cat: "swim", day: 23, name: "Keyhole State Park, WY", lat: 44.38, lng: -104.76, detour: "About 15 minutes off I-90 at Moorcroft", note: "A reservoir with a swim beach near Devils Tower, a break late in the 9.5-hour day." },
    { id: "wildwater", cat: "swim", day: 24, name: "Wild Water West, Sioux Falls", lat: 43.547, lng: -96.85, detour: "West edge of Sioux Falls", note: "Water park with slides and a lazy river, for the evening in Sioux Falls. Check hours." },
    { id: "pettibone", cat: "swim", day: 25, name: "Pettibone Beach, La Crosse", lat: 43.81, lng: -91.26, detour: "A few minutes off I-90", note: "A sandy beach on the Mississippi River, right by the Grandad Bluff lunch stop." },
    { id: "devilsbeach", cat: "swim", day: 26, name: "Devil’s Lake beaches, WI", lat: 43.421, lng: -89.731, detour: "About 20 minutes from the Dells", note: "North and south shore beaches under quartzite bluffs, after breakfast at the lake." },
    { id: "dunes", cat: "swim", day: 27, name: "Indiana Dunes State Park beach", lat: 41.66, lng: -87.06, detour: "About 10 minutes off the Indiana Toll Road", note: "Swim in Lake Michigan below big sand dunes, a break early in the long drive to Raystown." },
    { id: "sevenpointsswim", cat: "swim", day: 27, name: "Seven Points Beach, Raystown Lake", lat: 40.38, lng: -78.08, detour: "At the campground", note: "Swim beach on the lake for the end of the long day." },
    { id: "hersheyboard", cat: "swim", day: 28, name: "The Boardwalk at Hersheypark", lat: 40.288, lng: -76.655, detour: "In Hershey, near Chocolate World", note: "Hersheypark’s water park area, if there’s time for one last splash before home. Needs a park ticket." }
  ],


  // Smaller legs for the Map view. from/to are day numbers (0 = July 3).
  stages: [
    { title: "NJ to Tennessee and Windrock", from: 0, to: 1 },
    { title: "Nashville", from: 2, to: 3 },
    { title: "Memphis to Bentonville", from: 4, to: 5 },
    { title: "Kansas City and the drive to Dillon", from: 6, to: 7 },
    { title: "Dillon week with the cousins", from: 8, to: 13 },
    { title: "Crested Butte to Fruita", from: 14, to: 16 },
    { title: "Park City and Deer Valley", from: 17, to: 18 },
    { title: "Jackson and the Tetons", from: 19, to: 20 },
    { title: "Yellowstone to Big Sky", from: 21, to: 22 },
    { title: "Black Hills and Badlands", from: 23, to: 24 },
    { title: "Wisconsin Dells to Starved Rock", from: 25, to: 26 },
    { title: "Raystown Lake and home", from: 27, to: 28 }
  ],


  // Alternate routes the family can compare and vote on. "replaces" is the range of main-plan days (0 = July 3)
  // that the option swaps out. Miles and hours are estimates; the app recalculates user-built routes live.
  alternates: [
    {
      id: "alt_greatlakes_aug1",
      title: "Great Lakes finish: Chicago, Detroit, Niagara (home Aug 1)",
      summary: "Swaps Starved Rock, Raystown, and Hershey for Chicago, Detroit, and Niagara Falls. Adds one day, so we get home Sunday, August 1.",
      replaces: { from: 26, to: 28 },
      days: [
        { date: "2027-07-29", title: "Noah’s Ark, then Chicago", drive: { from: "Wisconsin Dells", to: "Chicago", miles: 195, hours: "3" },
          stay: { name: "Hotel in downtown Chicago", lat: 41.8919, lng: -87.629 },
          stops: [
            { name: "Cloud Gate (“The Bean”), Millennium Park", lat: 41.8827, lng: -87.6233, cat: "see", note: "The giant mirrored sculpture downtown; free." },
            { name: "North Avenue Beach", lat: 41.9134, lng: -87.6249, cat: "swim", note: "Lake Michigan beach with skyline views, a short walk or bike from downtown." },
            { name: "Portillo’s, Chicago", lat: 41.8936, lng: -87.6315, cat: "eat", note: "Chicago Italian beef and hot dogs." }
          ] },
        { date: "2027-07-30", title: "Chicago to Detroit", drive: { from: "Chicago", to: "Detroit", miles: 285, hours: "4.5" },
          stay: { name: "Hotel in downtown Detroit", lat: 42.3314, lng: -83.0458 },
          stops: [
            { name: "Potawatomi Trail, Pinckney Recreation Area", lat: 42.43, lng: -83.97, cat: "ride", note: "Classic Michigan singletrack about 20 minutes off I-94 near Ann Arbor. Check trail status after rain." },
            { name: "American and Lafayette Coney Island", lat: 42.3317, lng: -83.0478, cat: "eat", note: "Two rival Coney dog diners side by side downtown since the early 1900s. Pick a side, or try both.", src: "Visit Detroit" },
            { name: "Belle Isle", lat: 42.342, lng: -82.99, cat: "swim", note: "Island park in the Detroit River with a beach and a famously fast giant slide." }
          ] },
        { date: "2027-07-31", title: "Detroit to Niagara Falls", drive: { from: "Detroit", to: "Niagara Falls, NY", miles: 370, hours: "6" },
          note: "This drive goes around Lake Erie through Ohio. Cutting through Ontario saves about 115 miles and 1.5 hours, but everyone needs border documents (see the note below).",
          stay: { name: "Hotel in Niagara Falls, NY", lat: 43.0896, lng: -79.064 },
          stops: [
            { name: "A Christmas Story House, Cleveland", lat: 41.4686, lng: -81.6873, cat: "see", note: "The actual house from the movie, leg lamp included." },
            { name: "Presque Isle State Park beaches, Erie, PA", lat: 42.155, lng: -80.1, cat: "swim", note: "Sandy Lake Erie beaches just off I-90." },
            { name: "Cave of the Winds, Niagara Falls State Park", lat: 43.082, lng: -79.071, cat: "view", note: "Walkways at the base of Bridal Veil Falls. You will get soaked." }
          ] },
        { date: "2027-08-01", title: "Niagara to home", drive: { from: "Niagara Falls, NY", to: "Home", miles: 390, hours: "6.5" },
          stay: { name: "Home", lat: 40.735, lng: -74.17 },
          stops: [
            { name: "Anchor Bar, Buffalo", lat: 42.9006, lng: -78.8727, cat: "eat", note: "Known as the birthplace of Buffalo wings." },
            { name: "Corning Museum of Glass", lat: 42.1497, lng: -77.0545, cat: "see", note: "Glassblowing shows, right off I-86." },
            { name: "Watkins Glen State Park gorge", lat: 42.3758, lng: -76.871, cat: "view", note: "A trail through a gorge with 19 waterfalls, about 30 minutes off the route." }
          ] }
      ],
      border: "If you cut through Ontario: adults need a passport, passport card, NEXUS card, or enhanced driver’s license; children under 16 can show a birth certificate. Bring the car’s registration and insurance card."
    },
    {
      id: "alt_greatlakes_jul31",
      title: "Great Lakes, still home July 31",
      summary: "Keeps the July 31 return by skipping the Noah’s Ark morning and the Chicago overnight. Chicago becomes a lunch stop. Three big driving days in a row.",
      replaces: { from: 26, to: 28 },
      days: [
        { date: "2027-07-29", title: "Dells to Detroit, via Chicago", drive: { from: "Wisconsin Dells", to: "Detroit", miles: 480, hours: "7.5" },
          note: "Leave the Dells early. This is a long day.",
          stay: { name: "Hotel in downtown Detroit", lat: 42.3314, lng: -83.0458 },
          stops: [
            { name: "Cloud Gate (“The Bean”), Millennium Park", lat: 41.8827, lng: -87.6233, cat: "see", note: "Lunch break downtown." },
            { name: "Portillo’s, Chicago", lat: 41.8936, lng: -87.6315, cat: "eat", note: "Chicago Italian beef and hot dogs." },
            { name: "American and Lafayette Coney Island", lat: 42.3317, lng: -83.0478, cat: "eat", note: "Rival Coney dog diners side by side; open late.", src: "Visit Detroit" }
          ] },
        { date: "2027-07-30", title: "Detroit to Niagara Falls", drive: { from: "Detroit", to: "Niagara Falls, NY", miles: 370, hours: "6" },
          stay: { name: "Hotel in Niagara Falls, NY", lat: 43.0896, lng: -79.064 },
          stops: [
            { name: "Belle Isle", lat: 42.342, lng: -82.99, cat: "swim", note: "Morning swim or giant slide before leaving Detroit." },
            { name: "A Christmas Story House, Cleveland", lat: 41.4686, lng: -81.6873, cat: "see", note: "The house from the movie." },
            { name: "Cave of the Winds, Niagara Falls State Park", lat: 43.082, lng: -79.071, cat: "view", note: "Evening at the falls." }
          ] },
        { date: "2027-07-31", title: "Niagara to home", drive: { from: "Niagara Falls, NY", to: "Home", miles: 390, hours: "6.5" },
          stay: { name: "Home", lat: 40.735, lng: -74.17 },
          stops: [
            { name: "Anchor Bar, Buffalo", lat: 42.9006, lng: -78.8727, cat: "eat", note: "Birthplace of Buffalo wings." },
            { name: "Corning Museum of Glass", lat: 42.1497, lng: -77.0545, cat: "see", note: "Right off I-86." }
          ] }
      ],
      border: "Cutting through Ontario on July 30 saves about 1.5 hours. Adults need a passport, passport card, NEXUS card, or enhanced driver’s license; children under 16 can show a birth certificate."
    }
  ],

  checklist: [
    "Book Sylvan Lake in Custer State Park (reservations open a year ahead)",
    "Confirm dates with Rebekah, Aaron’s parents, Bryant, and Wes",
    "Book Stef’s Denver flight and shuttle, and Stef’s and Arlo’s flights home from Bozeman",
    "Book Browns Canyon rafting for July 13 for the whole group, cousins included",
    "January: book Fruita, Raystown, and Starved Rock",
    "March: book Jordanelle (Park City)",
    "Book hotels: Oak Ridge, The Bike Inn, Sioux Falls, Wisconsin Dells",
    "Book campsites at Frozen Head and Gros Ventre",
    "Try for Casa Bonita reservations when summer dates open",
    "Check 2027 hours for every bike park in the spring",
    "Service the car and bikes; pack spare tubes and parts",
    "Pack camping gear and bear-safe food storage for Jackson",
    "Find an old Billy Bass for the adoption center",
    "Check wildfire smoke before leaving Park City"
  ]
};
