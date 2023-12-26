const parksData = [
  {
    parkId: 'acad',
    parkName: 'Acadia National Park',
    parkStates: 'ME',
    parkDescription:
      "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 4 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg',
  },
  {
    parkId: 'arch',
    parkName: 'Arches National Park',
    parkStates: 'UT',
    parkDescription:
      'Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg',
  },
  {
    parkId: 'badl',
    parkName: 'Badlands National Park',
    parkStates: 'SD',
    parkDescription:
      'The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient horses and rhinos once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C82EE63-1DD8-B71B-0BD6EE0FDCB5D402.jpg',
  },
  {
    parkId: 'bibe',
    parkName: 'Big Bend National Park',
    parkStates: 'TX',
    parkDescription:
      'There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and species diversity is the best in the country. This magical place is Big Bend...',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/8BF8356B-BB63-76A4-19F5296EF94C96B4.jpg',
  },
  {
    parkId: 'bisc',
    parkName: 'Biscayne National Park',
    parkStates: 'FL',
    parkDescription:
      'Within sight of Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Evidence of 10,000 years of human history is here too; from prehistoric tribes to shipwrecks, and pineapple farmers to presidents. For many, the park is a boating, fishing, and diving destination, while others enjoy a warm breeze and peaceful scenery.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C8717A4-1DD8-B71B-0B2EED68CFA7E008.jpg',
  },
  {
    parkId: 'blca',
    parkName: 'Black Canyon Of The Gunnison National Park',
    parkStates: 'CO',
    parkDescription:
      'Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison National Park exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C81655F-1DD8-B71B-0B4BCFFDB74EE723.jpg',
  },
  {
    parkId: 'brca',
    parkName: 'Bryce Canyon National Park',
    parkStates: 'UT',
    parkDescription:
      "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/61F08520-E14F-18F2-BF5F3D89482631BD.jpg',
  },
  {
    parkId: 'cany',
    parkName: 'Canyonlands National Park',
    parkStates: 'UT',
    parkDescription:
      'Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7A525D-1DD8-B71B-0B8E59D2EB39F6D0.jpg',
  },
  {
    parkId: 'care',
    parkName: 'Capitol Reef National Park',
    parkStates: 'UT',
    parkDescription:
      'Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C82E3C7-1DD8-B71B-0B4181834EE46AED.jpg',
  },
  {
    parkId: 'cave',
    parkName: 'Carlsbad Caverns National Park',
    parkStates: 'NM',
    parkDescription:
      'High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/29C3C977-AAE6-B7FD-3C107828D704A5CB.jpg',
  },
  {
    parkId: 'chis',
    parkName: 'Channel Islands National Park',
    parkStates: 'CA',
    parkDescription:
      'Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/8DE774D1-CB22-37F2-D826E3F0A73D303A.jpg',
  },
  {
    parkId: 'cong',
    parkName: 'Congaree National Park',
    parkStates: 'SC',
    parkDescription:
      'Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C862C60-1DD8-B71B-0BB65F7B652BA840.jpg',
  },
  {
    parkId: 'crla',
    parkName: 'Crater Lake National Park',
    parkStates: 'OR',
    parkDescription:
      'Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity—fed by rain and snow, it’s the deepest lake in the USA and one of the most pristine on Earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0BEECDD24771C381.jpg',
  },
  {
    parkId: 'cuva',
    parkName: 'Cuyahoga Valley National Park',
    parkStates: 'OH',
    parkDescription:
      'Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/F7425874-D97F-BFD6-36581A36C8A7FF0D.jpg',
  },
  {
    parkId: 'deva',
    parkName: 'Death Valley National Park',
    parkStates: 'CA,NV',
    parkDescription:
      'In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life thrives in Death Valley.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/010A933C-95B1-CBCD-D6D64D47D5B81E76.jpg',
  },
  {
    parkId: 'drto',
    parkName: 'Dry Tortugas National Park',
    parkStates: 'FL',
    parkDescription:
      'Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands. Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C81050F-1DD8-B71B-0B45EDC68B621860.jpg',
  },
  {
    parkId: 'ever',
    parkName: 'Everglades National Park',
    parkStates: 'FL',
    parkDescription:
      'Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee, American crocodile, and the elusive Florida panther. An international treasure as well - a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/17EC840E-9926-2E09-F2DD47A282915BBB.jpg',
  },
  {
    parkId: 'jeff',
    parkName: 'Gateway Arch National Park',
    parkStates: 'MO',
    parkDescription:
      "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/200BA7E6-D782-9A97-A8C36AC178DEB31C.jpg',
  },
  {
    parkId: 'glac',
    parkName: 'Glacier National Park',
    parkStates: 'MT',
    parkDescription:
      'A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes. With over 700 miles of trails, Glacier is a paradise for adventurous visitors seeking wilderness steeped in human history. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/C20E6CD3-CDF7-B3AB-8448CDCD7FD590FF.jpg',
  },
  {
    parkId: 'grca',
    parkName: 'Grand Canyon National Park',
    parkStates: 'AZ',
    parkDescription:
      'Grand Canyon National Park, in Northern Arizona, encompasses 278 miles (447 km) of the Colorado River and adjacent uplands. Located on ancestral homeland of 11 Associated Tribes, Grand Canyon is one of the most spectacular examples of erosion anywhere in the world—unmatched in the incomparable vistas it offers visitors from the rims. The South Rim is open. The North Rim is CLOSED for the winter.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg',
  },
  {
    parkId: 'grte',
    parkName: 'Grand Teton National Park',
    parkStates: 'WY',
    parkDescription:
      'Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7FA4C5-1DD8-B71B-0B7FCC54E43FEE79.jpg',
  },
  {
    parkId: 'grba',
    parkName: 'Great Basin National Park',
    parkStates: 'NV',
    parkDescription:
      "From the 13,063-foot summit of Wheeler Peak to the sagebrush-covered foothills, Great Basin National Park hosts a sample of the incredible diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a lot more than just desert here.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/FD29737E-9549-8EF4-90C1076486DE559A.jpeg',
  },
  {
    parkId: 'grsm',
    parkName: 'Great Smoky Mountains National Park',
    parkStates: 'NC,TN',
    parkDescription:
      "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park. Plan your visit today!",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg',
  },
  {
    parkId: 'gumo',
    parkName: 'Guadalupe Mountains National Park',
    parkStates: 'TX',
    parkDescription:
      "Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other. Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C825533-1DD8-B71B-0B6FDF436F604A3C.jpg',
  },
  {
    parkId: 'hale',
    parkName: 'Haleakalā National Park',
    parkStates: 'HI',
    parkDescription:
      'This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3D05E583-1DD8-B71B-0BBFF82F7F78AF6A.jpg',
  },
  {
    parkId: 'havo',
    parkName: 'Hawaiʻi Volcanoes National Park',
    parkStates: 'HI',
    parkDescription:
      "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cherished cultural landscapes in the world. Extending from sea level to 13,680 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa - and is a designated International Biosphere Reserve and UNESCO World Heritage Site.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/C4E8415A-08E5-5976-833F494FFCA3FFE6.jpg',
  },
  {
    parkId: 'hosp',
    parkName: 'Hot Springs National Park',
    parkStates: 'AR',
    parkDescription:
      'Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years. Ancient thermal springs, mountain views, incredible geology, forested hikes, and abundant creeks – all in the middle of town – make Hot Springs National Park a unique and beautiful destination.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/C0D8DFDD-F151-C5B0-3004B0088C98BA5A.jpg',
  },
  {
    parkId: 'indu',
    parkName: 'Indiana Dunes National Park',
    parkStates: 'IN',
    parkDescription:
      "Lake Michigan's might has influenced Indiana Dunes for millennia. Wind and waves have shaped the land, leaving a rich mosaic of habitats along these 15 miles of Indiana coast. Over 50 miles of trails lead through shifting sand dunes, quiet woodlands, sunny prairies and lush wetlands. Known for its striking plant and bird diversity, it's easy to find inspiration throughout the park’s 15,000 acres.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/9253EDFB-AAFD-E111-B985CD2747F5C48F.jpg',
  },
  {
    parkId: 'isro',
    parkName: 'Isle Royale National Park',
    parkStates: 'MI',
    parkDescription:
      'Explore a rugged, isolated island far from our connected communities. Isle Royale offers adventures for backpackers, hikers, boaters, paddlers, and divers. Cross Lake Superior and make a commitment: Become a part of this island, and let it become a part of you. Find peace and refuge in island wilderness – because Isle Royale, in turn, finds refuge in us. Help Isle Royale stay wild.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/6059CAD8-02E8-2E00-2922DF84800167E0.jpg',
  },
  {
    parkId: 'jotr',
    parkName: 'Joshua Tree National Park',
    parkStates: 'CA',
    parkDescription:
      'Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself!',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/306D0D93-9CCA-76E1-AD48268F8D7A7E3E.jpg',
  },
  {
    parkId: 'kefj',
    parkName: 'Kenai Fjords National Park',
    parkStates: 'AK',
    parkDescription:
      "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg',
  },
  {
    parkId: 'kova',
    parkName: 'Kobuk Valley National Park',
    parkStates: 'AK',
    parkDescription:
      'Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Thousands of caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current corridor for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7A1214-1DD8-B71B-0B00D823BD9BF4CF.jpg',
  },
  {
    parkId: 'lavo',
    parkName: 'Lassen Volcanic National Park',
    parkStates: 'CA',
    parkDescription:
      'Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C873811-1DD8-B71B-0B9C62ED8E12E7B5.jpg',
  },
  {
    parkId: 'maca',
    parkName: 'Mammoth Cave National Park',
    parkStates: 'KY',
    parkDescription:
      "Rolling hills, deep river valleys, and the world's longest known cave system. Mammoth Cave National Park is home to thousands of years of human history and a rich diversity of plant and animal life, earning it the title of UNESCO World Heritage Site and International Biosphere Reserve.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/95EAA431-F26B-66EB-E9E6B108F47F70B0.jpg',
  },
  {
    parkId: 'meve',
    parkName: 'Mesa Verde National Park',
    parkStates: 'CO',
    parkDescription:
      'For over 700 years, the Ancestral Pueblo people built thriving communities on the mesas and in the cliffs of Mesa Verde. Today, the park protects the rich cultural heritage of 26 Pueblos and Tribes and offers visitors a spectacular window into the past. This World Heritage Site and International Dark Sky Park is home to over a thousand species, including several that live nowhere else on earth.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7C0089-1DD8-B71B-0BC397BA671C0616.jpg',
  },
  {
    parkId: 'mora',
    parkName: 'Mount Rainier National Park',
    parkStates: 'WA',
    parkDescription:
      'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/49F34094-B893-7DD6-5AE0F0220724B0EF.jpg',
  },
  {
    parkId: 'noca',
    parkName: 'North Cascades National Park',
    parkStates: 'WA',
    parkDescription:
      "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg',
  },
  {
    parkId: 'olym',
    parkName: 'Olympic National Park',
    parkStates: 'WA',
    parkDescription:
      'With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7B1DB4-1DD8-B71B-0B9DFEFDD398DB71.jpg',
  },
  {
    parkId: 'pefo',
    parkName: 'Petrified Forest National Park',
    parkStates: 'AZ',
    parkDescription:
      "Park Hours: 8am to 5pm, MST. Don't forget that Arizona does not observe Daylight Savings. Petrified Forest is best known for its Triassic fossils. It's like having two parks in one, an ecosystem over 200 million years old with plants and animals now represented in the surreal landscape of the Painted Desert. There is also a living park with its own denizens adapted to a demanding environment.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7D8213-1DD8-B71B-0BE4A3B9394FD89A.jpg',
  },
  {
    parkId: 'pinn',
    parkName: 'Pinnacles National Park',
    parkStates: 'CA',
    parkDescription:
      'Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C86A8CB-1DD8-B71B-0BAE8F7141CCBB1B.jpg',
  },
  {
    parkId: 'romo',
    parkName: 'Rocky Mountain National Park',
    parkStates: 'CO',
    parkDescription:
      "Rocky Mountain National Park's 415 square miles (265,807 acres) encompasses a spectacular range of mountain environments. From meadows found in the montane life zone to glistening alpine lakes and up to the towering mountain peaks, there is something for everyone to discover. Along the way explore over 300 miles of hiking trails and incredible wildlife viewing.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/DD67ADE4-E6E6-17F1-4856D2DC852BC0D0.jpg',
  },
  {
    parkId: 'sagu',
    parkName: 'Saguaro National Park',
    parkStates: 'AZ',
    parkDescription:
      "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/5CB8B2F6-01B7-9A50-73702A355E4136B8.jpg',
  },
  {
    parkId: 'shen',
    parkName: 'Shenandoah National Park',
    parkStates: 'VA',
    parkDescription:
      "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands that are haven to deer, songbirds, and black bear, there's so much to explore...and your journey begins right here!",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C80B539-1DD8-B71B-0BEAAA4AC31E7D5B.jpg',
  },
  {
    parkId: 'thro',
    parkName: 'Theodore Roosevelt National Park',
    parkStates: 'ND',
    parkDescription:
      'When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C793AD5-1DD8-B71B-0B4A3C1BFA5B4C83.jpg',
  },
  {
    parkId: 'viis',
    parkName: 'Virgin Islands National Park',
    parkStates: 'VI',
    parkDescription:
      "Go beyond Virgin Islands National Park's stunning white-sand beaches. Hike to historic plantation sites to learn about a challenging past when sugar and enslaved labor dominated life on the island. Visit the Indigenous Taino's ancient petroglyphs. Snorkel coral reefs to discover hidden marine life. Two-thirds of the island of St. John is national park, making it a unique destination for visitors.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/1F0534AF-91EB-443B-41760F790BE42778.jpg',
  },
  {
    parkId: 'voya',
    parkName: 'Voyageurs National Park',
    parkStates: 'MN',
    parkDescription:
      'With 218,055 acres, Voyageurs National Park is an adventure wonderland all year long full of exposed rock ridges, cliffs, wetlands, forests, streams and lakes. This is a place of transition between land and aquatic ecosystems, between southern boreal and northern hardwood forests, and between wild and developed areas. Whether you are exploring by land, water or ice there is something for everyone.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C8405EF-1DD8-B71B-0B42909E4E77E144.jpg',
  },
  {
    parkId: 'whsa',
    parkName: 'White Sands National Park',
    parkStates: 'NM',
    parkDescription:
      "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Park preserves a major portion of this unique dunefield, along with the plants and animals that live here.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/7CA16410-A412-1F05-2D92EB04EEB27980.jpg',
  },
  {
    parkId: 'wica',
    parkName: 'Wind Cave National Park',
    parkStates: 'SD',
    parkDescription:
      "Wind Cave National Park protects two very different worlds - one deep within the earth, the other a sunlit world of many resources. Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world.",
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7ACD12-1DD8-B71B-0BEF13804E4498FF.jpg',
  },
  {
    parkId: 'yell',
    parkName: 'Yellowstone National Park',
    parkStates: 'ID,MT,WY',
    parkDescription:
      'On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg',
  },
  {
    parkId: 'yose',
    parkName: 'Yosemite National Park',
    parkStates: 'CA',
    parkDescription:
      'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/05383E91-AA28-2DDC-AB517507594F9FA6.jpg',
  },
  {
    parkId: 'zion',
    parkName: 'Zion National Park',
    parkStates: 'UT',
    parkDescription:
      'Follow the paths where people have walked for thousands of years. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present-day adventures.',
    parkImage:
      'https://www.nps.gov/common/uploads/structured_data/68BFC1AC-BF96-629F-89D261D78F181C64.jpg',
  },
]

module.exports = parksData
