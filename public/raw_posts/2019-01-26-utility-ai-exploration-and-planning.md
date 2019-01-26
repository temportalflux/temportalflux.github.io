
This truly is the semester to stretch my lets in artificial intelligence.
In addition to my [work on Stray: The Wayward Path](/blog/Stray),
I will be working on a yet-unnamed plugin for Unreal Engine 4's
AI system. I'll be focusing in on Utility Theory and Utility AI,
and on how to make the underlying theory/system accessible for any
developer.

# Research

Through my research so far, I've found various articles like
John T. Langton's [Utiltiy Theory summary](http://www.cs.brandeis.edu/~psyc/ai/decision/utility.htm),
Dino Dini's write up on the application of
[Sigmoid functions](https://dinodini.wordpress.com/2010/04/05/normalized-tunable-sigmoid-functions/)
for utility conversions, and
Kevin Dill & Dave Mark's GDC talk on
[Improving AI Decision Modeling Through Utility Theory](https://www.gdcvault.com/play/1012410/Improving-AI-Decision-Modeling-Through).
Not to mention other projects which have implemented UtilityAI in
Unity and Unreal. Of significant of note is
[Cameron Angus'](https://github.com/kamrann)
[BTUtilityPlugin](https://github.com/kamrann/BTUtilityPlugin).
I've been using their open source work as one resource for some
of the inner workings of Unreal Engine with regard to AI.

# Goal

The goal of this work will be to release a UE4 plugin which will
not only give users access to the nitty-gritty of utility theory,
but also provide an easy-to-use-and-understand interface.
Since the developer market is so saturated with the work of peers, it
can be tiresome to have to learn a whole new system on top of
pre-existing frameworks like Unreal's Benhavior Tree
(yes, I'm calling you out [GAS](https://docs.unrealengine.com/en-US/Gameplay/GameplayAbilitySystem)).
Therefore, this plugin will also provide editor window(s) for
easily augmenting pre-existing Behavior Trees with Utility Theory,
and a curve editting to further assist developers who want to
understand and tweak their utility graphs.

# Why?

As a programmer just starting to break into the Games Industry,
there is value in knowing my interests and keeping my skills in various
fields up to date. It's been a hot minute since I've messed around with
artificial intelligence, let alone explore whats new in the field.
While Ian Millington's [Artificial Intelligence for Games](https://www.amazon.com/Artificial-Intelligence-Hardcover-Millington-pulished/dp/B0086QLFAE/ref=sr_1_4?s=books&ie=UTF8&qid=1548527678&sr=1-4&keywords=Artificial+Intelligence+for+Games+2nd+edition)
was a great read and really helped introduce me to the field, there
is so many new ways to design and optimize and create emergent entities.
Gamedev.net's [Intro to AI](https://www.gamedev.net/articles/programming/artificial-intelligence/the-total-beginners-guide-to-game-ai-r4942/)
was also quite insightful. I'm all about emergent behaviors,
which is especially applicable for AI. This plugin gives me the ability
to re-immerse myself in the AI field, and also gives me the opportunity
to develop my skills in Unreal Engine, its underlying systems like Slate,
and provides a developed tool I can put on my portfolio.

# Scope

Looking at the goals of the plugin, it is obvious that the plugin
centers around Utility AI. Heck, you've read me rambling about it for
too many words already. Thats research and time dedicated to
the theories and applications, not to mention answering the question
"What is the best way to integrate U.AI into Behavior Trees?".
Thinking about the end user (developers) though, the interface
is going to have to be smooth, easy to understand and onboard,
while still providing modularity for editting without being convoluted.
This means working with UE4's Slate, new editor windows, managing memory
in C++, and critically thinking about interfaces. Lots of brain work
outside of straight up coding! This is definitely an achievable product,
but will have long-lasting implications of maintainability
after school wraps up and there is outside pressure to get it done.
While this work doesn't depend on factors like other plugins or co-workers,
it will heavily depend on my time, the effort I put in, and the
kind of research I can do.

For now though, thank you for ready through a rather dense blog post,
and I hope you will return as progress on this tool continues.
