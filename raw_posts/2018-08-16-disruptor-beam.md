
<image
    src="${PATH_MARKDOWN}/disruptorbeam_splash_2048.png"
    style="width: 25%; float: left;"
/>

Starting some 4 months ago, I started my internship as an Engineering Intern at [Disruptor Beam](https://www.disruptorbeam.com/). I came into this job just hoping to get some experience in the industry, a foot-in-the-door situation, but have learned so much about games in the LiveOps phase. I had never given LiveOps too much thought before this summer, and now it just makes so much sense. I get ahead of myself though. One of Disruptor Beam's most popular and successful projects is Star Trek: Timelines, and this is the project I joined for the summer.

---

## First Weeks

On my first day, the company had their weekly Monday kick-off. During this announcements meeting, in what is dubbed Ten Forward ([in reference to Star Trek: TNG communal area](http://memory-alpha.wikia.com/wiki/Ten_Forward)), the head of the company talked about how DB is doing in revenue, where it is coming from, and made other announcements like who is celebrating X years at the studio and oh hey, we now have 3 interns on the Star Trek team. Many of these kick-offs would follow over the next 14 weeks.

<img src="https://png.icons8.com/metro/50/000000/bug.png" style="float: left;" />

As I had figured, to get myself and the other engineering intern used to the code base, we started our first three weeks playing the game and fixing bugs. At Champlain, I am used to the production environment of mocking up concepts and rapidly getting things integrated into a game demo. Things are different in industry at DB though. LiveOps is a thing. The code is a lot and I had to adjust my thought process and think more of how to introduce a fix while still back-supporting the code that already existed.

## Hackathon

Upon starting the fourth week, however, we took a studio wide break from active game development. (That is, aside from content. I learned that the content train don't stop for nothing, especially when the only thing actually carrying a mobile CCRPG game is churning out more content.) Anyway, the studio stopped active development to do an in-house hackathon, mainly to bring new ideas to the workspace and innovate a bit. So for weeks 4 and 5, we came up with a ton of new game concepts and did some rapid prototyping.

<style>
.zoom {
    transition: transform .2s; /* Animation */
    margin: 0 auto;
}

.zoom:hover {
    transform: scale(2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>

A couple of us were inspired by Pokemon Mystery Dungeon, and I had done some work with AI formations via [Coordinated Movement](${PATH_ALL_POSTS}/2017-12-11-coordinated-movement), so we made a dungeon-esk hack-and-slash.
<image
    src="${PATH_MARKDOWN}/hackathon/pmd.gif"
    class="zoom"
    style="width: 50%; height: 50%; display: flex; justify-content: center;"
/>

Then I did some work on a haggling system with one of our designers;
<div style="display: flex; justify-content: center;">
    <image
        src="${PATH_MARKDOWN}/hackathon/haggling-good.gif"
        class="zoom"
        style="width: 50%; height: 50%; float: left;"
    />
    <image
        src="${PATH_MARKDOWN}/hackathon/haggling-bad.gif"
        class="zoom"
        style="width: 50%; height: 50%; float: right;"
    />
</div>

I also got a chance to get some experience with procedurally generated meshes and terrain generation.
<div style="display: flex; justify-content: center;">
    <image
        src="${PATH_MARKDOWN}/hackathon/terrain-persist.gif"
        class="zoom"
        style="width: 50%; height: 50%; float: left;"
    />
    <image
        src="${PATH_MARKDOWN}/hackathon/terrain-lacunarity.gif"
        class="zoom"
        style="width: 50%; height: 50%; float: right;"
    />
</div>
<div style="display: flex; justify-content: center;">
    <image
        src="${PATH_MARKDOWN}/hackathon/terrain-offset-x.gif"
        class="zoom"
        style="width: 50%; height: 50%; float: left;"
    />
    <image
        src="${PATH_MARKDOWN}/hackathon/terrain-offset-y.gif"
        class="zoom"
        style="width: 50%; height: 50%; float: right;"
    />
</div>

## New Features

Once the studio wrapped up the Hackathon, it was back to work on Star Trek for me. This was my first real experience with SCRUM in industry and at DB. My manager/senior engineer had pulled together a on-ramp backlog for the interns to pull some sprint items off of. So as teh sprint started up, I got to work on a dismiss all crew feature.
To give a brief overview, ST:Timelines is a character collection game. You collect characters from the Star Trek universe to battle and rank up. If players so desire, they can purchase characters from a "Time Portal", which is basically just in-app purchases. If the player so chooses, they can buy a pack, which is a randomized set of characters and items. The feature I was tasked with adding was adding buttons to that screen which allow the players to dismiss specific or all "crew" when the pack is revealed.

<image
    src="${PATH_MARKDOWN}/dismiss/dismiss.gif"
    class="zoom"
    style="width: 50%; height: 50%; display: flex; justify-content: center;"
/>

This involved both client and server code (C# and Ruby respectively). The client needed to have buttons in certain UI panels and to send information to the server about what should be sold back. The server needed to handle these requests and send back information detailing what the "crew" was sold for. Luckily the server side was already set-up, so the bulk of this feature was just adding some functionality on the client side and not creating more bugs in the process of doing so.

## Tools

After the first sprint, I was fully integrated with the dev team. ST:Timelines was also starting to ramp down development, as its been running for a number of years and the studio wants to start moving people to other projects. So what time is it? Tool time. Time to make the content train easier to steer. Sprint items? Make a tool to make tools that make content development easier. The solution? Well we already started development on a JavaScript standalone application using ReactJS, so I devised a factory to convert JSON data into a ReactJS Component page.

As the tool is proprietary, I can't post code, but what I can show you is what JSON becomes when it is run through the factory. Each template component MUST have the type property, this indicates what kind of React component will be generated. Some properties, like required and disabled, are global to fields, while other properties like specific to a template (like options to dropdowns).

### Display

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "label",
                "value": "Label"
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/label.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "message",
                "value": "Message"
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/message.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "divider"
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/divider.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

### Fields

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "select",
                "label": "Dropdown",
                "name": "test",
                "placeholder": "Placeholder",
                "includeNone": true,
                "options": [ "A", "B", "C" ]
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/dropdown.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "input",
                "label": "Input",
                "required": true
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/input.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "textarea",
                "label": "Text Area"
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/text.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "timestamp",
                "label": "Timestamp"
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/timestamp.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "group",
                "label": "Toggles",
                "format": "inline",
                "components": [
                    {
                        "type": "checkbox",
                        "label": "Checkbox"
                    },
                    {
                        "type": "checkbox",
                        "label": "Toggle",
                        "format": "toggle"
                    },
                    {
                        "type": "checkbox",
                        "label": "Slider",
                        "format": "slider"
                    }
                ]
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/grouptoggle.png"
        class="zoom"
        style="height: 50%; float: right;"
    />
</div>

<div style="display: flex; justify-content: center; border: solid;">
    <pre style="float: left;">
        <code language="json">
            {
                "type": "list",
                "label": "List of Labels",
                "addLabel": "Item",
                "color": "green",
                "itemTemplate": {
                    "type": "label",
                    "value": "Label"
                }
            }
        </code>
    </pre>
    <image
        src="${PATH_MARKDOWN}/templates/list.png"
        class="zoom"
        style="width: 50%; height: 50%; float: right;"
    />
</div>
