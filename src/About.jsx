import React from 'react';
import web from '../src/images/img7.jpg';
import {NavLink} from "react-router-dom";
import Common from './Common';
const About = () => {
  return (
    <>
      <Common name="With technology making rapid advancements, the renewable energy sector has made significant progress in the last decade. However, there are a few challenges that still prevail that can be addressed with the help of AI and ML.
Challenges faced by the Renewable Energy Sector
There are numerous benefits when it comes to renewable energy sources. They are climate-friendly, minimize various pollution’s, the expenditure for infrastructure required is only one-time along with a couple of regular maintenance costs, and the cost of fuel is nil. Enhanced forecasting and scheduling of power resources become important for the renewable energy sector in order to effectively manage the grid.
Looking at the downside, the unpredictability of the weather is one of the main challenges when it comes to producing renewable energy.
Efficient technologies exist which can predict the weather conditions, but there are going to be sudden changes in the climate that can affect the energy flow. The supply chain of renewable energy is prone to such vulnerabilities. It needs to be smoothened enough to cope u
p with unexpected changes. Secondly, the recent developments in energy storage technology are still at a nascent stage and require thorough testing." imgsrc={web} visit='/contact' btnname="Contact Now"/>
    </>
  );
};

export default About;
