// Average hours per day: [sleep, work or study, chores and commute, meals and family, leisure and screens]
// Values are auto-scaled to 24, so small rounding errors are fine. Group rows are averaged from their niches.
window.HOURS={
'Smallholder farmers':[8,9,3,2.5,1.5],'Hired farm workers':[7,10,3,2,2],'Herders and livestock':[7,11,2,2.5,1.5],'Fishers and fish farmers':[6.5,10,3,2.5,2],'Forestry workers':[7,10,3,2,2],
'Builders and laborers':[7,9,3,2,3],'Electricians, plumbers, carpenters':[7,8.5,3,2.5,3],'Road and heavy-equipment crews':[7,10,2.5,2,2.5],'Engineers and site managers':[7,9,3,2,3],
'Garment and textile workers':[7,10,3,2,2],'Electronics assembly':[7,9.5,3,2,2.5],'Food processing':[7,9,3,2,3],'Auto, machinery, metalwork':[7,8.5,3,2,3.5],'Other factory and craft work':[7,8.5,3,2.5,3],
'Miners and quarry workers':[7,10,3,2,2],'Oil, gas, and power plants':[7,12,2,1.5,1.5],'Water, waste, and grid crews':[7,8.5,3,2,3.5],
'Shop clerks and cashiers':[7,8.5,3,2,3.5],'Market and street vendors':[6.5,11,2.5,2,2],'Wholesale and warehouse':[7,9,3,2,3],'Shop and online store owners':[6.5,10,2.5,2,3],
'Truck, bus, taxi drivers':[6,11,1.5,2,3.5],'Couriers and gig delivery':[6.5,10,1,2,4.5],'Rail, ports, shipping, aviation':[7,10,2.5,2,2.5],'Logistics and dispatch':[7,8.5,3,2,3.5],
'Cooks and kitchen staff':[7,9.5,3,2,2.5],'Servers, baristas, bartenders':[7,8,3,2,4],'Hotel and tourism staff':[7,9,3,2,3],'Street food sellers':[6,12,2,2,2],
'Nurses and midwives':[7,11,3,2,1],'Doctors and dentists':[6,10,3,2,3],'Care aides and social workers':[7,9,3,2.5,2.5],'Lab, pharmacy, hospital support':[7,8.5,3,2,3.5],'Community and traditional health':[7,9,3,2.5,2.5],
'Primary and secondary teachers':[7,9,3,2,3],'University lecturers, researchers':[7,8,2,2,5],'Preschool teachers and tutors':[7,8.5,3,2.5,3],
'Civil servants and clerks':[7,8,3,2,4],'Military':[7,10,3,2,2],'Police, fire, security guards':[7,10,2.5,2,2.5],'Diplomats, politicians, officials':[6.5,9.5,3,2,3],
'Domestic workers':[7,10,3.5,2,1.5],'Cleaners and janitors':[7,8,4,2,3],'Barbers, salon, spa':[7,9,3,2,3],'Nannies and elder helpers':[7,10,3,2,2],
'Admin and clerical':[7,8,3,2,4],'Accountants, bankers, insurers':[7,9,3,2,3],'Lawyers, consultants, HR':[6.5,10,2.5,2,3],'Real estate and sales':[7,9,3,2,3],'Managers and business owners':[6.5,10,2.5,2,3],
'App and web developers':[7.5,8,2,2,4.5],'Game developers':[7,9.5,1.5,2,4],'IT support and sysadmins':[7,8,2.5,2,4.5],'Data, AI, cybersecurity':[7,8.5,2,2,4.5],'Hardware and telecom engineers':[7,8.5,2.5,2,4],
'Musicians and performers':[7.5,6,2.5,2,6],'Journalists and writers':[7,9,2.5,2,3.5],'Film, TV, photography':[7,9,3,2,3],'Designers and artists':[7,8,2,2,5],
'Full-time video creators, streamers':[7.5,9,2,2,3.5],'Freelance writers, designers, editors':[7,8,2,2.5,4.5],'Online sellers and dropshippers':[7,8,2.5,2.5,4],'Indie game and app makers':[7,7,2,2,6],
'Primary school':[10,5.5,2,3,3.5],'Middle school':[9,6.5,2,2.5,4],'High school':[8,7.5,2.5,2.5,3.5],'Not in school':[9,6,4,2.5,2.5],
'Babies (0 to 1)':[15,0,2,4,3],'Toddlers (2 to 3)':[12.5,0,3,4,4.5],'Age 4':[11.5,2,3,3.5,4],
'Active and social':[7.5,1,4,3,8.5],'Relaxed, home-based':[8.5,0,4,3,8.5],'Part-time or volunteering':[8,3,4,3,6],'Needing daily care':[10,0,5,3,6],
'Stay-at-home parents':[6.5,0,11,3.5,3],'Running the household':[7,0,10,3,4],'Caring for sick or elderly family':[6,0,12,3,3],'Unpaid family farm or shop help':[7,7,4,2.5,3.5],
'University undergrads':[7.5,6,2.5,2.5,5.5],'Trade and vocational':[7,7,3,2,5],'Grad and PhD':[7,9,2,2,4],'Adult and online learners':[6.5,7,4,2,4.5],
'Actively job hunting':[8,3,3.5,3,6.5],'Odd jobs while searching':[7.5,6,3,2.5,5],'Long-term unemployed':[8.5,1.5,3.5,3,7.5],
'Disability or long-term illness':[10,0,4,3,7],'Discouraged, not searching':[9,0,4,3,8],'Displaced or in detention':[8,1.5,6,3,5.5],'Financially independent':[8,3,3,2.5,7.5],'Full-time volunteers and clergy':[7,8,3,2.5,3.5],'Other or unclear':[8,3,4,3,6]
};
