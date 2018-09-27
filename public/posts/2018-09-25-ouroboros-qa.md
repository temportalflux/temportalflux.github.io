The team has had their noses to the grind stone this week. For me, that meant getting lots of high-risk backend systems up and running. After doing a preliminary risk analysis last week, I determined that Networking and the Gameplay Ability System in Unreal Engine 4 were our two biggest risks to overcome. So in Sprint Planning this week, the team decided that it would be smart to evaluate those two risks further and see if we can get them integrated into the game. Front-end the risk so that development is (theoretically) easier later.

# Networking

Networking didn't turn out to be too bad. I spent a day in the labs figuring it out. By the end of that day, I had players logging in from different computers, matchmaking via the Advanced Sessions plugin, and join sessions to play the game together. Below is a video of 1 player in a networked game. (Yes, same video as last week, due to youtube complications, but this is of footage from this week's playtests).

<iframe width="560" height="315" src="https://www.youtube.com/embed/qbZAe5YAs98?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Gameplay Ability System (GAS)

The other big risk was the Gameplay Ability System (GAS). The Gameplay Ability System allows developers to easily make actions which have effects on other players - and its all networked by default with server authority. This means that by integrating this framework early, I can give a pre-built system to the designers and let them have at it. This moves the risk from the development team creating actions every time we have a slightly different player action mechanic to the risk of maintaining integration of a plugin that is already widely used. I choose the latter, definitely a lot easier and there is a whole community out there using this. Unfortunately, it was not an easy start. I found very little *readable* documentation on how to integrate the GAS plugin via C++, so I fought the engine on that for a number of hours. Thankfully, the plugin is now working, which means next sprint I can work with designers on actually using the framework.

# QA

The team (mostly our designer Conor Tully and I) attended 3 Quality Assurance testing sessions this sprint. Our team decided early on that we wanted to test as much and as frequently as possible. QA at Champlain's Game Studio is an in-house playtesting lab, which is open 5:30-7:30pm every Monday, Thursday, and Saturday. Students are required to come and participate as playtesters 3 times per semester. Since testers are required to attend, and often aren't experts on best practices at QA, they tend to rush through games. This means that implementing something like RITE (Rapid Iterative Testing and Evalutation) methods aren't practical for our testing lab. Students want to sit down, play the game, and leave - which yields little time to evaluate a test sessino, make changes, and make another build before the next tester. Its a quantity, not quality, setup.
Regardless, going to QA is extremely helpful, especially because we do it 3 times a week (for my team). We find many of our bugs at QA, and eventually we will be also receiving player experience data.

Overall, this week has been very independent for the team. We have all been in our own corners doing mock ups, concept art, or integrating systems. My personal goal for next sprint will be integrating all of our work, and strengthening our communication so that independence doesn't turn into miscommunication.

# Weekly Team Posts

Artist: Ellie Peak | [Artstation](https://www.artstation.com/artwork/z2aL6)

Designer: Conor Tully | []()
