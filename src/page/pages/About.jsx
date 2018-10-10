import React from 'react';
import {Page} from "../Page";
import {Image} from "semantic-ui-react";

const Keyword = (props) => (
    <b style={{color: '#0044ff'}}>{props.children}</b>
);

export class About extends React.Component {

    render() {
        return (
            <Page>

                <div style={{
                    float: 'right',
                    padding: '10pt',
                }}>
                    <Image src='/bio_2.png' size={'medium'} />
                    <div style={{textAlign: 'center'}}>
                        Receiving the <i>2017 George Bradford Excellence Award</i>
                    </div>
                </div>

                <p>
                    I am Dustin Yost, and I am passionate about programming things that users enjoy and that make their
                    lives simpler. I am a senior in Game Programming at Champlain College (Vermont, USA).
                    I spend most of my time working on my game studio capstone project,
                    on an independent study titled YOGURT, taking care of my responsibilities as a Resident Assistant,
                    rock climbing at the local gym, or if all else fails, looking for a cute dog to pet.
                </p>

                <p>
                    My favorite specialization of game programming is <Keyword>Gameplay Programming</Keyword>.
                    I love being able to craft experiences with other disciplines which directly affect the player's experience.
                    By the same token, I also enjoy working on <Keyword>Artificial Intelligence</Keyword> and tools in games.
                    To me, AI is being able to bring tangible life to the concepts that sit in the minds of developers.
                    Just as art brings it to reality, AI can make entities seem as though they have intentions
                    and goals all of their own.
                    My passion for <Keyword>Tools Programming</Keyword> stems from the same passion as gameplay programming.
                    Where in gameplay, players are the users, in tool programmering the users are co-developers.
                    My goal when I make tools is to make the life of tasks of my co-developers easier and more productive.
                </p>

                <p>
                    Outside of work specific activities, I love taking time to rock climbing
                    (presently with Champlain's club). I also enjoy a playing or DMing Dungeons and Dragons campaign(s)
                    with a good group of friends.
                    I also try to keep up with <a href={'https://www.youtube.com/channel/UCEklP9iLcpExB8vp_fWQseg/videos'}>Making Stuff Look Good in Video Games</a>,
                    a lovely series on shaders case-studies on how they are used in video games.
                </p>

                <p>
                    Overall, I am a quick study when it comes to new technologies and on-boarding onto new projects,
                    and my enthusiasm for learning is only limited by the amount of new information I can process.
                </p>

            </Page>
        );
    }

}

About.defaultProps = {};

About.propTypes = {};
