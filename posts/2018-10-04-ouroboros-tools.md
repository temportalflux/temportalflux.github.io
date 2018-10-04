
I'm taking sometime today to appreciate the small things - fluffy, exciting, often useful yet michevious things. Sometimes with a snout.

No not DOGS. Well, okay, maybe dogs - but thats not the point. The point is, my team and I have been working on and using a couple different tools to really improve our development and testing workflow. They come in 3 flavors; developing cool stuff, testing cool stuff, and using feedback from testing the development of really cool stuff.

The first of the three I touched on last week, and our designer talks about this week as they explore their process of [implementing new abilities within the Gameplay Ability System](https://www.conortully.com/blog/chapter-5-sticks-of-dynamite-and-a-gas-bomb). I am going to focus on the latter two.

Before I do so, however, here are some cool gifs which show off some of the new abilities in the game (using GAS)!

<div style="display: block;">
	<center>
		<div style="width: 50%; padding: 10pt;">
			<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/countdown.gif' />
			<center>
				Matches now have a countdown
			</center>
		</div>
	</center>
	<div style="width: 50%; float: left; padding: 10pt;">
		<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/yellow.gif' />
		<center>
			The "yellow" projectile
		</center>
	</div>
	<div style="width: 50%; float: right; padding: 10pt;">
		<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/purple.gif' />
		<center>
			The "purple" projectile
		</center>
	</div>
	<div style="width: 50%; float: left; padding: 10pt;">
		<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/walk.gif' />
		<center>
			Walking
		</center>
	</div>
	<div style="width: 50%; float: right; padding: 10pt;">
		<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/run.gif' />
		<center>
			Running (Speed bost)
		</center>
	</div>
</div>

# Testing Cool Stuff

At the end of spring last year, I found that my Production II team could have really benefited from a way to review bugs and player experience that wasn't just survey forms. Champlain runs multiple QA sessions a week, and can facilitate nearly 50 testers per session. Thats a lot of gameplay, and gives ample opportunity for devs to miss a bug, unintended feature, or something a tester mentions that sparks a thought in the devs.

So I began drafting up a system which would not only record gameplay footage (for use in comparison reels and review of player gameplay), but also make our lives at QA a bit easier. This became dubbed the QARecorder.

Now, 4 months later, Ouroboros Creations is using this tool every single testing sessin we go to (which is every single testing session, 3x a week). Below you can find a demo of this tool in action.

<center>
<iframe width="512" height="360" src="https://www.youtube.com/embed/gUi-ZN3aHp8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</center>

A couple big things just happened!

The first was, there is a settings dialog that allows developers to prep their tool before testers get their hand on it. All that needs to be done is to enter a couple fields, and export/import the config file if you are using multiple computers.

The second, the game launches with the press of a single buttons and is automatically recorded! This took me a while, as it is using the OBS Websocket plugin, and then a plugin to connect ReactJS with OBS.

The third, if put in the settings, the survey form is pulled up at the end of the session and automatically fills in certain key fields to connect the form with the footage recorded.

The fourth, footage recorded is -just- the gameplay, and it is stored in a specific file format.

One of the goals of this tool is also to allow developers to go back and review the footage, with player comments and their survey form results attached to the footage. That later down the line goals though!

# Feedback for Cool Stuff

<img style="width: 25%; float: left; padding: 10pt;" src='http://3.bp.blogspot.com/-h4bD0ZSDLlc/VZXvOK2kFQI/AAAAAAADH_4/K-aV-q_MI70/s1600/IMG_8055-001.jpg'>

The other tool I am working on is YOGURT. Yes, the yogurt you put in your mouth. Its a tool now.

<div style="width: 25%; float: right; padding: 10pt;">
<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/yogurt-comps.PNG' />
<center>
2 components: Recorder (for recording data), and Module (for loading/viewing data)
</center>
</div>

Well, okay, maybe its not. What else could YOGURT stand for... Young Octopi Gaming Unhappily Revolting in Triumph? No, that can't be it. How about Your Own Games User Research Toolset - ah that must be right!

Over the past couple week, I've been studying in the Games User Research field, where developers gather data on player experience to better improve that player experience. One of the things we don't do quite as well at Champlain is gathering user experiences in a way which developers can easily access to see what players are up to and how we can improve the game from those experiences. The QARecorder is a step in the right direction, but its more geared to Quality Assurance testing, which is all about those bugs. GUR is all about the player experience once the bugs are gone.

<div style="width: 25%; float: right; padding: 10pt;">
<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/yogurt-details.PNG' />
<center>
On DataModule, we have a new editor button(!!!)
</center>
</div>

The tool - YOGURT for short - is an Unreal Engine 4 plugin in which the goal is to gather player data from playtesting sessions, and represent this data in the editor for the same build. One way I plan to make a proof of concept for this is by using heatmaps to show player position and velocity through their play session.

You may be wondering if this ha already been done, and I'd respond to you with - absolutely - but has anyone rendered these heatmaps in the editor world space? Probably. Maybe they haven't because it is too intensive or complicated. I'm going to take a shot at it though.

One of the other huge features for this will be data aggregation and disagreggated gameplay over time. The former being, clumping multiple play sessions worth of data into one pool and generating player experience data from that (like the statistical average of all play sessions). The latter being taking gameplay data, and allowing developers to scrub through this data based on the time of the play session.

In the end, the whole purpose of this tool will be to get designers/developers direct access to player experience so they can more easily tweak the player experience to match the intended gameplay experience.

The tool is still very much in its early phases. To quote Stitch; This is my tool. I made it all on my own. It's little and (sometimes) broken, but its still good. Yes, still good.

<div style="width: 100%; padding: 10pt;">
<img style="width: 100%;" src='/posts/2018-10-04-ouroboros-tools/yogurt-graph.PNG' />
<center>
There is a graph for DataRecorder which records certain data and saves it
</center>
</div>

# Weekly Team Posts

Artist: Ellie Peak | [PENDING](https://www.artstation.com/elliepeak/)

Designer: Conor Tully | [Sticks of Dynamite and a GAS Bomb](https://www.conortully.com/blog/chapter-5-sticks-of-dynamite-and-a-gas-bomb)
