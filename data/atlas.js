const L=(n,v,d)=>({n,v,d}),G=(n,d,c)=>({n,d,c});
window.ATLAS=G(`Everyone`,`About 8.2 billion people, sorted by what fills most of their day.`,[
G(`Working`,`Paid work of every kind, from fields to offices to phones.`,[
G(`Farming, fishing, forestry`,`Up at sunrise for outdoor work that follows weather and seasons.`,[
L(`Smallholder farmers`,550,`Work a small plot by hand, feed the family, sell the surplus at market.`),
L(`Hired farm workers`,200,`Plant, weed, and harvest on someone else's land, paid by the day.`),
L(`Herders and livestock`,70,`Move animals to pasture and water, milk, and guard them.`),
L(`Fishers and fish farmers`,60,`Head out before dawn to fish or tend ponds, then sell the catch.`),
L(`Forestry workers`,20,`Fell, haul, and plant trees, often in remote camps.`)]),
G(`Construction and trades`,`Early starts, physical work, and on your feet until mid-afternoon.`,[
L(`Builders and laborers`,130,`Mix concrete, lay brick, carry materials, and clean the site.`),
L(`Electricians, plumbers, carpenters`,70,`Drive between jobs, install or repair, quote the next one.`),
L(`Road and heavy-equipment crews`,30,`Run excavators, cranes, and pavers on long outdoor shifts.`),
L(`Engineers and site managers`,20,`Read drawings, coordinate crews, chase deliveries and inspections.`)]),
G(`Factories and manufacturing`,`Shift work on a line, repeating a task in a loud, structured day.`,[
L(`Garment and textile workers`,90,`Sew or cut to a daily quota on 9 to 10 hour shifts.`),
L(`Electronics assembly`,60,`Solder, test, and pack devices on a fast line.`),
L(`Food processing`,60,`Sort, cut, and package food in a hot or cold plant.`),
L(`Auto, machinery, metalwork`,110,`Weld, machine, and assemble parts to tight tolerances.`),
L(`Other factory and craft work`,150,`Furniture, plastics, chemicals, small workshops, and hands-on makers.`)]),
G(`Mining, energy, utilities`,`Long shifts keeping power, water, and fuel flowing.`,[
L(`Miners and quarry workers`,35,`Long shifts underground or in pits: drilling, hauling, safety checks.`),
L(`Oil, gas, and power plants`,25,`Monitor turbines, rigs, and refineries around the clock.`),
L(`Water, waste, and grid crews`,20,`Repair pipes and power lines and keep water and waste moving.`)]),
G(`Retail and wholesale`,`On your feet serving customers, restocking, and closing up.`,[
L(`Shop clerks and cashiers`,200,`Greet customers, scan items, restock shelves, count the till at close.`),
L(`Market and street vendors`,170,`Set up a stall or cart at dawn and haggle until dusk.`),
L(`Wholesale and warehouse`,60,`Pick, pack, and load orders for shops and online buyers.`),
L(`Shop and online store owners`,40,`Order stock, manage staff, answer customers, do the books at night.`)]),
G(`Transport and delivery`,`Long hours on the move, measured by arrival time.`,[
L(`Truck, bus, taxi drivers`,100,`Hours behind the wheel, judged on arriving on time.`),
L(`Couriers and gig delivery`,40,`A chain of pickups and drop-offs, guided by an app.`),
L(`Rail, ports, shipping, aviation`,40,`Keep trains, ships, and planes moving on strict schedules.`),
L(`Logistics and dispatch`,30,`Plan routes, track shipments, and fix delays from a desk.`)]),
G(`Restaurants and hotels`,`Split shifts, mealtime rushes, and late nights.`,[
L(`Cooks and kitchen staff`,70,`Prep, cook, and clean through the lunch and dinner rush.`),
L(`Servers, baristas, bartenders`,70,`Take orders, pour drinks, and stay on your feet late.`),
L(`Hotel and tourism staff`,30,`Front desk, housekeeping, tour guiding, and keeping guests happy.`),
L(`Street food sellers`,20,`Cook and sell from a cart or stall, often until late at night.`)]),
G(`Healthcare`,`Shifts of care, paperwork, and pressure, often overnight.`,[
L(`Nurses and midwives`,30,`Twelve-hour shifts of checks, medication, paperwork, and patients.`),
L(`Doctors and dentists`,15,`Appointments, surgeries, rounds, and a lot of charting.`),
L(`Care aides and social workers`,50,`Help people wash, eat, and move, at home or in facilities.`),
L(`Lab, pharmacy, hospital support`,30,`Run tests, dispense medicine, and keep hospitals running.`),
L(`Community and traditional health`,15,`Village clinics, outreach visits, and traditional healing.`)]),
G(`Teaching`,`Prep, class time, marking, and parent contact.`,[
L(`Primary and secondary teachers`,70,`Prep lessons, teach several classes, mark work, and talk to parents.`),
L(`University lecturers, researchers`,10,`Lectures, research, grant writing, and student meetings.`),
L(`Preschool teachers and tutors`,15,`Run playgroups or one-on-one tutoring, often after school hours.`)]),
G(`Government, military, police`,`Public service, from desk work to patrols and barracks.`,[
L(`Civil servants and clerks`,90,`Process forms, answer the public, and work through paperwork.`),
L(`Military`,25,`Training, drills, and duty rotations, often far from home.`),
L(`Police, fire, security guards`,40,`Patrols, emergencies, and standing watch at gates and buildings.`),
L(`Diplomats, politicians, officials`,10,`Meetings, briefings, negotiations, and a lot of travel.`)]),
G(`Cleaning, domestic, personal care`,`Behind-the-scenes work in homes, offices, and salons.`,[
L(`Domestic workers`,75,`Cook, clean, and care for a household from early morning.`),
L(`Cleaners and janitors`,55,`Clean offices and buildings, often before or after everyone else.`),
L(`Barbers, salon, spa`,35,`Cut hair, style, massage, or do nails, one client after another.`),
L(`Nannies and elder helpers`,25,`Watch kids or elders in someone else's home.`)]),
G(`Office, finance, professional`,`Screens, meetings, and email, mostly indoors.`,[
L(`Admin and clerical`,60,`Emails, schedules, filing, and keeping the office running.`),
L(`Accountants, bankers, insurers`,40,`Spreadsheets, audits, loans, and client calls.`),
L(`Lawyers, consultants, HR`,25,`Contracts, advice, hiring, and meetings.`),
L(`Real estate and sales`,30,`Show properties, close deals, and chase leads.`),
L(`Managers and business owners`,15,`Set direction, manage people, and handle whatever breaks.`)]),
G(`Tech and software`,`Code, meetings, and shipping, often remote or hybrid.`,[
L(`App and web developers`,20,`Write code, review changes, fix bugs, and sit in stand-ups.`),
L(`Game developers`,4,`Build levels, characters, and systems, then playtest and polish.`),
L(`IT support and sysadmins`,13,`Reset passwords, fix laptops, keep servers and networks up.`),
L(`Data, AI, cybersecurity`,8,`Clean data, train models, and hunt for security holes.`),
L(`Hardware and telecom engineers`,10,`Design and test chips, devices, and phone and internet networks.`)]),
G(`Arts, media, entertainment`,`Irregular schedules built around projects and deadlines.`,[
L(`Musicians and performers`,10,`Practice, rehearse, gig, and teach, often at odd hours.`),
L(`Journalists and writers`,10,`Chase stories, interview, write, and edit under deadline.`),
L(`Film, TV, photography`,12,`Long shoot days, then editing, lighting, and post-production.`),
L(`Designers and artists`,13,`Sketch, design, revise with clients, and repeat.`)]),
G(`Online creators, freelancers`,`Self-directed days built around a screen and a deadline.`,[
L(`Full-time video creators, streamers`,3,`Script, film, edit, upload, and reply to comments, mostly alone.`),
L(`Freelance writers, designers, editors`,10,`Pitch clients, work to deadlines, and invoice across time zones.`),
L(`Online sellers and dropshippers`,5,`Source products, post listings, ship orders, and handle messages.`),
L(`Indie game and app makers`,2,`Prototype, publish, and gather feedback, often as a side project.`)])
]),
G(`School-age kids (5 to 17)`,`Mostly school, homework, friends, and screens.`,[
L(`Primary school`,700,`Walk or ride to school, lessons, lunch, recess, homework, then play or screens.`),
L(`Middle school`,330,`More subjects, more homework, friend groups, phones, and gaming.`),
L(`High school`,270,`Exams, clubs, part-time jobs, plans for after school, and lots of screen time.`),
L(`Not in school`,250,`Work on farms or in shops, help at home, care for siblings, or lack access to a school.`)]),
G(`Little kids (0 to 4)`,`Sleeping, eating, playing, and being looked after.`,[
L(`Babies (0 to 1)`,260,`Feeding, sleeping, diapers, and being held, every few hours around the clock.`),
L(`Toddlers (2 to 3)`,260,`Walking, talking, tantrums, and endless questions, with naps in between.`),
L(`Age 4`,130,`Preschool or daycare for some, play at home for others. Learning letters and games.`)]),
G(`Retired`,`People past working life, living on savings, pensions, or family support.`,[
L(`Active and social`,220,`Travel, hobbies, the gym, friends, and grandkids.`),
L(`Relaxed, home-based`,260,`Gardening, TV, reading, walks, naps, and a slow routine.`),
L(`Part-time or volunteering`,140,`Side jobs, community work, and helping family with kids or money.`),
L(`Needing daily care`,80,`Days shaped by health needs, family carers, or care homes.`)]),
G(`Caregivers, homemakers`,`Unpaid work that keeps households going, mostly done by women.`,[
L(`Stay-at-home parents`,300,`Feeding, dressing, school runs, and playtime, plus cooking and cleaning.`),
L(`Running the household`,250,`Cook, clean, fetch water and fuel, wash clothes, and shop.`),
L(`Caring for sick or elderly family`,100,`Medication, meals, hygiene, and appointments around the clock.`),
L(`Unpaid family farm or shop help`,50,`Help with the family business without a salary.`)]),
G(`College, vocational students`,`Learning beyond school, alongside jobs, friends, and money worries.`,[
L(`University undergrads`,150,`Lectures, study, campus life, part-time work, and late nights.`),
L(`Trade and vocational`,45,`Hands-on training in classrooms, workshops, and apprenticeships.`),
L(`Grad and PhD`,20,`Research, lab or library time, teaching, and writing.`),
L(`Adult and online learners`,15,`Evening classes and online courses fitted around work and family.`)]),
G(`Looking for work`,`Between jobs or new to the job market.`,[
L(`Actively job hunting`,120,`Apply, network, interview, and follow up, day after day.`),
L(`Odd jobs while searching`,40,`Short gigs, day labor, and side hustles to get by.`),
L(`Long-term unemployed`,30,`A year or more without work, with days shaped by uncertainty.`)]),
G(`Not working (other)`,`Many different reasons for being outside the job market.`,[
L(`Disability or long-term illness`,300,`Days shaped by health, treatment, rest, and support from family.`),
L(`Discouraged, not searching`,250,`Stopped looking for work because of barriers, costs, or lack of opportunity.`),
L(`Displaced or in detention`,100,`Refugee camps, shelters, or prison, where routines are set by others.`),
L(`Financially independent`,40,`Wealthy by inheritance or early success: invest, travel, start projects, make videos for fun.`),
L(`Full-time volunteers and clergy`,10,`Prayer, service, community work, and teaching.`),
L(`Other or unclear`,30,`People who don't fit neatly into another box.`)])
]);
