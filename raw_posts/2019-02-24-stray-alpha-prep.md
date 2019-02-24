
<div style="padding: 10pt;">
<center>
<img
    style="width: 40%;"
    src='${PATH_MARKDOWN}/morningScones.jpg'
/>
</center>
<center>
*Picture from last week's writing session*
</center>
</div>

Here I am again, back in the cafe writing another dev update. \o/

I wish I could say I've done a metric ton since I've last written,
but alas capstone is not my only class. That said, the team as a whole
has made a fair bit of headway, at least conceptually. At the tail
end of last sprint, I got the remaining Golem and Urchin abilities in
for QA and attended a number of meetings. This week started out like
every other with sprint planning and then a couple meetings on Thursday
and Friday. With Alpha deadline looming nearer (the Wednesday after next),
the team is definitely feeling some pressure. I took some time on
Thursday to help our producer organize the backlog of systems and
features due throughout the remainder of the project (Figure 1).

<div style="padding: 10pt; width: 80%;">
<center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/backlog.gif'
/>
Fig 1. Our backlog of systems and features due for Alpha and beyond
</center>
</div>

On Friday, I settled into the labs for the day with a bunch of the team.
Among the meetings and work accomplished, we hashed out the logistics
of the boss battle with the caretaker Kunara. With any luck, it'll end
up being just as fun to play as we imagine it to be. We also went through
the aforementioned backlog and updated the status of systems for this
sprint's work.

<center>
<div style="padding: 10pt; width: 80%;">

<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/kunaraAbilities.jpg'
/>
Fig 2. Kunara's combat abilities

<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/kunaraCombat.jpg'
/>
Fig 3. Layout of abilities and phases of combat posed against
the health remaining

</div>
</center>

After various meetings on Friday, the beautiful Golems finally
have their mesh and skeleton in the game! I'm heckin proud of the
small system/tool I implemented to integrate their body into the world.
It was still in a prototype phase last week because we were having mesh
issues. After some serialization issues cropped up this week, I rewrote
parts of the data storage, and now we have a lovely data table
which generates their body on the fly! I've settled dubbing these
assets Dynamic Socketted Meshes.

<center>
<div style="padding: 10pt; width: 80%;">

<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/golem.png'
/>
Fig 4. T-Poses everywhere! I imagine the Golem in the back yelling
YOU SHALL NOT PASS

<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/golemDSM.png'
/>
Fig 5. The data table containing all the skeletal information
for the golem

</div>
</center>
