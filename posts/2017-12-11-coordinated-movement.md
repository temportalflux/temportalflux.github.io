<h2>Interactable Demo</h2>

This demo has 2 layers of formations: main formation is scalable circle, and subformation is finger-four. Input defined in demo.

<center>
<iframe src="/posts/2017-12-11-coordinated-movement/demo/index.html" style="border:0px #000000 none;" name="Coordinated Movement" scrolling="no" frameborder="1" marginheight="px" marginwidth="320px" height="450px" width="960px"></iframe>
</center>

<h2>Intro</h2>

<img src='/posts/2017-12-11-coordinated-movement/line-actors.png' class='iconDetails' align="right" style="width:50%">

Coordinated Movement is the directing of actors in a game to coordinate their actions with other actors. This can come about in two ways. Making actions with compliment other actors, and moving in a prescribed group. Moving in ways which compliment or otherwise group actors together creates the backbone for move complex decision making such as tactical decision making. These groups are often called formations, which is movement of actors to retain organization. In my experience, these formations often take geometric patterns, and this is one the of the assumptions I based my work on.

My demo makes use of the Unity3D engine, and has been influenced by other creators’ works. The backbone of the project is formulated using algorithms and structures defined in <a href="https://www.amazon.com/Artificial-Intelligence-Games-Ian-Millington/dp/0123747317">Ian Millington and John Funge’s Artificial Intelligence for Games 2nd Edition</a>. The Millington text was primarily used for its in-depth analysis and breakdown of coordinated movement and fixed/scaling formations. I also made used of <a href="https://www.gamasutra.com/view/feature/131721/implementing_coordinated_movement.php?page=2">Gamasutra’s article on Coordinated Movement</a>. Its analysis and implementation of a low-level, C++, was very informative. It also provided a look on the topic and based formation control. I also came across Jeremiah Warm’s write up on <a href="http://www.jeremiahwarm.com/coordinated-movement.php">Coordinated Movement in Unity</a>. After reading over and viewing their demo, I decided to research Unity’s Navigation Mesh system (for the first time), and to use it as the basis for unit movement within formations. Their work provided an alternative way that another creator implemented Coordinated Movement.

Per Millington’s breakdown, Coordinated Movement and its emergent formations are “used in team spots games, squad-based games, real-time strategy games, and an increasing number of first-person shooters, driving games, and action adventures.” This is because coordinating movement between actors in a simulation adds an element of realism (as do most AI techniques). People in real life rarely do things without considering the world around them. When walking down the street, most people are aware of the factors and obstacles in their way, as well as who they are walking with, people in front of or behind them, and cars or moving vehicles operated by other “actors”. Understanding these kinds of behaviors, and how people organize, is key to players feeling that they are in a real and active environment.

<h2>Terminology</h2>

<img src='/posts/2017-12-11-coordinated-movement/circleFingerFour.png' class='iconDetails' style="width:20%;float:right;">
<p>
For the remainder of this post, there are terms which should be defined.
<br/>
<strong>Agent</strong>: Any participant in a formation
</p>

<br/>

<span>
<img src='/posts/2017-12-11-coordinated-movement/controller.png' class='iconDetails' style="width:20%;float:left;">
<strong>Controller</strong>: Any owner of a formation, which dictates the next location/orientation of its agents
</span>

<br/>

<span>
<img src='/posts/2017-12-11-coordinated-movement/actor.png' class='iconDetails' style="width:20%;float:left;">
<strong>Actor</strong>: Any unit which follows a formation (thus an agent of a controller) and does not have agents of its own
</span>

<br/>
<br/>
<br/>

This means that while Actors are Agents of Controllers, and Controllers can be agents of Controllers, Controllers cannot be Agents of Actors (for Actors have no formation to dictate with).

<h2>Formations</h2>

Formations are the basis for all coordinated movement. While all formations dictate where and how agents are organized, they generally come in two flavors.

<h3>Fixed Formations</h3>

Fixed Formations are patterns which only permit a certain number of agents to be a part of the formation. In some of the cases provided by the Millington text, there are 4 maximum agents per formation. These kinds of formations are intentional and organized to fit a pattern of a specific size. This makes them easy to be controlled or changed in a 3D environment, as opposed to in scripts.

<img src='/posts/2017-12-11-coordinated-movement/line.png' class='iconDetails' style="width:23%;">
<img src='/posts/2017-12-11-coordinated-movement/defensiveCircle.png' class='iconDetails' style="width:23%;">
<img src='/posts/2017-12-11-coordinated-movement/2cover.png' class='iconDetails' style="width:23%;">
<img src='/posts/2017-12-11-coordinated-movement/fingerFour.png' class='iconDetails' style="width:23%;">

<h3>Scalable Formations</h3>

Scalable Formations are patterns which are derived from an algorithm and an unknown number of agents. These patterns are often emergent and dynamic, which while being pleasing to view and watch grow, can be harder to define and predict the behavior of.

<img src='/posts/2017-12-11-coordinated-movement/circle4.png' class='iconDetails' style="width:30%;">
<img src='/posts/2017-12-11-coordinated-movement/circle7.png' class='iconDetails' style="width:30%;">
<img src='/posts/2017-12-11-coordinated-movement/circle12.png' class='iconDetails' style="width:30%;">

<h2>Implementation</h2>

As described in the Millington text, two-tiered hagiarchies systems help to separate the logic of pattern movement from the moving of actors to their desired targets. In my implementation, this broke agents into the categories of Controller and Actor. Controllers, while holding most or all the logic, are invisible and unaffected by actions in the world. These objects merely hold formation patterns and dictate target positions to their agents. Actors, on the other hand, are active world interactors. They participate in actions in the world and are the units which are visible to the player. They attempt to follow locations dictated to them by their Controller, and account for the movements of other Actors.

<center>
<video style="width:100%;" controls muted>
  <source src="/posts/2017-12-11-coordinated-movement/demoShort.mp4" type="video/mp4">
</video>
</center>

In the video above, there is one main controller and 3-6 sub-controllers (Controller Agents of the main Controller), as well as Actor Agents for each sub-controller. As the sub-controllers are added, the scalable circle formation of the main controller grows to allow the space for the sub-controllers. When the sub-controllers are removed, the main controller accounts for the change and the formation changes. For each of the sub-controllers, the formation is a “Finger-four”, and their agents are orientated to match the orientation of the image above. When the main controller moves, all the agents (sub-controllers and actors) roughly maintain their relative location to one another.

<h1>Concessions in Unity</h1>

In this implementation, I had to make some concessions to Unity as a trade of for features which are outside the scope of this demo.

<center>
<img src='/posts/2017-12-11-coordinated-movement/navmesh.png' class='iconDetails' style="width:80%;">
</center>

To take advantage of Unity’s 3D space movement, I decided to use the pre-built Navigation Mesh system. This meant that each Actor and Controller has its own NavMeshAgent script to navigate the world. This enables each GameObject to operate independently, regardless of whether it is an Agent or not. Because of this independence, the multiple hierarchy system emerged (which is why Controllers can be Agents of other Controllers). Using the Navigation Mesh implementation also made Collision Avoidance possible, to show a more complete and well rounded Coordinated Movement. In having Collision Avoidance (without writing an entire algorithm myself), Actors could be smart about how they go to their targets.

<center>
<img src='/posts/2017-12-11-coordinated-movement/unitMoveNav.png' class='iconDetails' style="width:50%;">
</center>

These came at a cost, however, as I removed the Drift Offset outlined by Millington. The offset restricted the Controller to a set distance from its Agents, but in using NavMeshAgent, stopping or otherwise interrupting the NavMeshAgent’s movement became counterintuitive. This means that in this implementation, Controllers can get ahead of their Agents, meaning the Player must wait for the units to catch up.

<center>
<img src='/posts/2017-12-11-coordinated-movement/unitStuckNav.png' class='iconDetails' style="width:50%;">
</center>

The other concession became short-sighted children. Because the Controllers dictate the target location to their Agents every FixedUpdate, the Agents targets are changed frequently. Not only could this have a detrimental effect on calculation times of paths for agents, but if the target location of an Agent moves through a unreachable area, the unit will stop at the edge until its target is available again. In the picture above, the target passed through the area, and now the Actor is left having to path around the edge of the obstruction, whereas if it had known the target was going to be obstructed, it could have pathed around it in the first place.
