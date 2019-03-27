
The QA Recorder is a standalone application which uses the
[Open Broadcaster Software Studio](https://obsproject.com/) to
recorder gameplay from playtesting sessions. It comes built-in with
support for feedback forms through URL as well as a footage
viewer so all your footage is accessible in the same place.
This enables developers to use the observation and feedback methods
of games user research analysis to iterate on the gameplay and content.
The QA Recorder also comes built-in with support for bookmarking
timestamps in footage with comments so that testers would be able to
pause your game to make a comment on a bug or feature, and continue
playing with minimal disruption or forgetting bugs when it comes time
for the feedback form. This helps developers rapidly reproduce bugs
(through footage and comments, and the telemetry you are hopefully
collecting) to more quickly debug the game and improve the player
experience.

<div style="padding: 10pt; width: 100%;">
<center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/qarec-launch.png'
/>
</center>
</div>

All the QA Recorder needs to operate is a path to your game
executable and to the OBS studio executable. Other settings can be
enabled in the settings if you are running through multiple players
back-to-back or want to stream the gameplay recording (could also be
useful for streamers who want to rapidly switch between different games
and OBS profiles). If you want to have players bookmarks comments in
the footage while playing, you must integrate this into your game
and output the appropriate data file.

<div style="padding: 10pt; width: 100%;">
<center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/qarec-settings.png'
/>
</center>
</div>

Current the setup of the game and obs settings is extremely
configurable as it pulls primarily from your OBS settings and exported
profiles/scene collections. The video viewer however still requires
quite a bit of work. If you are thinking about using this software,
please reach out to me as the project is still in a state of
early development.
