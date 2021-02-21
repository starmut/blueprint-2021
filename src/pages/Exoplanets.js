import React from "react";
import "./Exoplanet.css";

const Exoplanets = () => {
    return (
        <div className="exoplanets">
            <header className="exoplanets-header">
                <h1>
                    <center>EXOPLANETS {"&"} ASTROBIOLOGY</center>
                </h1>
            </header>

            <h3>What are exoplanets? </h3>
            <p>
                {" "}
                Exoplanets are planets outside our Solar System. Some orbit
                other stars but there are free-floating exoplanets that do not.
                Instead, they orbit the galatic center and are called rogue
                planets.{" "}
            </p>
            <p>
                Fun Facts: Discovered by NASA's Kepler Space Telescope: we know
                now that there are more planets than stars in the galaxy.
            </p>
            <p>
                The majority of discovered exoplanets are in the Milky Way
                Galaxy. We can find exoplanets by measuring their size and mass.
                Additionally, we can discover their composition whether the
                planet is really rocky (like Earth) or very gaseous (like
                Jupiter). Although they are similar in composition to our own
                planets, the combination of basic elements are different. For
                example, some planets could be filled with water or ice but
                others could be predominantly made of iron or carbon. When
                looking for exoplanets, we want to look for specific types that
                could potentially host life or have signs of previous life.
                Typically, the planet is the same size as Earth and it orbits a
                start in the <b>"habitable zone"</b>
            </p>
            <h3>The Habitable Zone</h3>
            <p>
                The habitable zone (commonly nicknamed the "Goldilocks Zone") is
                a range of distances from a star where liquid water could be
                possible - something extremely vital for life on Earth. With
                recent calculations and discoveries, the habitable zone includes
                other factors such as thermal equilibrium and the greenhouse
                effect.
            </p>

            <h3>Astrobiology</h3>
            <p>
                Are we alone? I think that is the biggest unanswered question to
                this day. I remember when I was first asked this question, I
                immediately said yes. It was a naive answer at the time but I
                couldn't wrap my head around the possibility that there could be
                life outside our planet. As I entered my own wormhole of YouTube
                and papers, I learned about exoplanets and astrobiology. With
                all the fun facts above, the odds of not finding life is
                extremly small. Why haven't we found anything? Let's bring in
                the Fermi Paradox, created by Italian physicist, Enrico Fermi,
                who wondered this as well. There are many reasons and
                interesting theories to the Fermi Paradox but I wanted to share
                a few of my favorites.
            </p>
            <ol>
                <li>
                    The Great Filter: a benchmark in our cosmological timeline
                    that is a test of survival, intelligence, and/or society.
                    That's a little broad but in most theories about the Great
                    Filter there is a general consensus on the different
                    scenarios.{" "}
                </li>
                <ul>
                    <li>
                        {" "}
                        We are behind the Great Filter (possibly millions of
                        years behind) and we will not reach this benchmark
                        during our lives. This means we are so technologically
                        behind that we cannot/will not communicate with anyone
                        else and/or we cannot/will not find anything of
                        importance.
                    </li>
                    <li>
                        We are approaching the Great Filter (in a couple
                        hundreds of years). This means we are reaching a point
                        where we are intelligent enough to communicate with
                        others and/or discover signs of life. However, this
                        might mean we are approaching our end soon (unless we
                        pass the Great Filter - more on that later). The reason
                        we haven't found anything because either they did not
                        pass the Great Filter or they are slightly behind us.
                    </li>
                    <li>
                        We have passed the Great Filter (extremely unlikely?)
                        This means we are one of the few civilizations that is
                        intelligent enough to communicate with others. Since
                        Earth could be the only signs of life however, there is
                        no one else to communicate to and that's why we haven't
                        found anyone yet.
                    </li>
                </ul>
                <li>
                    The Universe is too big: this is a catch-all theory but the
                    Universe is huge! And we're just one planet in the middle of
                    one among billions of galaxies. Our current method of
                    looking and sending signals is similar to whispering in a
                    large crowd and expecting the person across the room to hear
                    you. Signals don't travel very far and most of them die out
                    to incomprehensible sounds. While we do send probes and
                    satellites (the Voyager probes) with human artifacts, we
                    don't know how long until someone (or something) finds it or
                    whether, anything will happen as a result.
                </li>
            </ol>
            <p>
                I remember at a MIT HSSP class about astrobiology, one of the
                teachers said, "If you take a cup of water from the ocean, you
                wouldn't find a fish right away. And it's just like space."
                However, I thought, "Well, if you took a microscope, you would
                certainly find microbial life." {"\n"} But in that arguement, I
                found the counter: we don't have that microscope for space yet.
                We can't walk a mile to the ocean and we can't zoom in to find
                life. And as technology evolves and our understanding of life,
                astronomy, and biology improves, we will soon find that we are
                not alone.
            </p>
        </div>
    );
};

export default Exoplanets;
