import React from 'react'
import MyPieChart from './MyPieChart';
import MyPieChart2 from './MyPieChart2';
import MyDoublePieChart from './MyDoublePieChart';
import ActivePieChart from './ActivePieChart';
import MyLineChart from './MyLineChart';
import LineChart2 from './LineChart2';
import SyncLineCharts from './SyncLineCHarts';
import StackedChart from './StackedChart';
import PercentArea from './PercentArea';
import AreaFill from './AreaFill';
import SimpleBar from './SimpleBar';
import StackedBar from './StackedBar';
import Triangle from './Triangle';
import NegativeBar from './NegativeBar';
import LineBarArea from './LineBarArea';
import VerticalComposed from './VerticalComposed';
import BestFit from './BestFit';

export default function Dashboard() {
    const data = [
        { name: "Facebook", value: 200000 },
        { name: "Instagram", value: 150000 },
        { name: "Twiter", value: 100000 },
        { name: "Telegram", value: 50000 },
    ];
    return (
        <>
            <div className='maintitle'>My Dashboard</div>

            <div className='parent1'>
                <div className='childg1'><MyLineChart /></div>
                <div className='childt1'> <div className='title'>Weather Forecast</div>
                    Overview; Surface Analysis; Fronts; QPF; Excessive Rain; Winter Wx; Day 3–7; Forecast Tools. National Forecast Chart. Valid Sun Aug 13, 2023.
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Gainesville Weather</div>
                    OvernightMostly clear, with a low around 78. Calm wind.
                    Monday - Showers and thunderstorms likely, mainly after 3pm. Mostly sunny and hot, with a high near 97. Heat index values as high as 113. Southwest wind 3 to 6 mph. Chance of precipitation is 70%. New rainfall amounts of less than a tenth of an inch, except higher amounts possible in thunderstorms.
                    Monday -  NightShowers and thunderstorms likely, mainly before 8pm. Partly cloudy, with a low around 77. Southwest wind 3 to 7 mph. Chance of precipitation is 60%. New precipitation amounts of less than a tenth of an inch, except higher amounts possible in thunderstorms.
                    Tuesday - Showers and thunderstorms, mainly after 2pm. High near 94. Heat index values as high as 110. Southwest wind 6 to 9 mph. Chance of precipitation is 80%.
                </div>
                <div className='childg2'><LineChart2 /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><SyncLineCharts /></div>
                <div className='childt1'> <div className='title'>Book Sales</div>
                    "Best-selling" refers to the estimated number of copies sold of each book, rather than the number of books printed or currently owned. Comics and textbooks are not included in this list. The books are listed according to the highest sales estimate as reported in reliable, independent sources. This list is incomplete because many books lack comprehensive sales figures, such as The Count of Monte Cristo by Alexandre Dumas, Don Quixote by Miguel de Cervantes, Journey to the West by Wu Cheng'en and The Lord of the Rings (which has been sold as both a trilogy of books, The Fellowship of the Ring, The Two Towers, and The Return of the King, and as a single issue) by J. R. R. Tolkien.
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Population - Gainesville, Ocala, Tampa</div>
                    Gainesville is the county seat of Alachua County, Florida, and the largest city in North Central Florida, with a population of 141,085 in 2020.It is the principal city of the Gainesville metropolitan area, which had a population of 339,247 in 2020.

                    Gainesville is home to the University of Florida, the fourth-largest public university campus by enrollment in the United States as of the 2021–2022 academic year.The university hosts the Florida Gators sports teams in the NCAA competitions.
                </div>
                <div className='childg2'><StackedChart /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><PercentArea /></div>
                <div className='childt1'> <div className='title'>Age Group Analysis</div>
                    In 2020, Gainesville, FL had a population of 134k people with a median age of 26.4 and a median household income of $38,028. Between 2019 and 2020 the population of Gainesville, FL grew from 132,127 to 133,611, a 1.12% increase and its median household income grew from $37,264 to $38,028, a 2.05% increase.

                    The 5 largest ethnic groups in Gainesville, FL are White (Non-Hispanic) (56.3%), Black or African American (Non-Hispanic) (20.4%), White (Hispanic) (8.28%), Asian (Non-Hispanic) (6.66%), and Two+ (Non-Hispanic) (3.67%).
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Stock Prices - 'Meta'</div>
                    Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services.
                    Based on 41 Wall Street analysts offering 12 month price targets for Meta Platforms in the last 3 months. The average price target is $377.70 with a high forecast of $435.00 and a low forecast of $285.00. The average price target represents a 25.22% change from the last price of $301.64.
                </div>
                <div className='childg2'><AreaFill /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><SimpleBar /></div>
                <div className='childt1'> <div className='title'>Women and Men Both Experienced Changes in Occupations During COVID-19</div>
                    The COVID-19 pandemic led to major changes in employment for all types of U.S. workers, but these changes looked different for women and men.

                    Some employees transitioned to remote or hybrid work, while essential workers faced hazardous conditions in the workplace. Many workers had to adjust their schedules or leave their jobs. And sudden shifts in demand for goods and services led to fluctuations in employment across different occupations, leading to different changes for men and women.

                    Overall, full-time, year-round employment declined by 4.4 million workers from 2019 to 2021, according to the Census Bureau’s 2019 and 2021 American Community Survey’s Women and Men’s Detailed Occupations and Median Earnings Tables.
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Inventory and Order Details</div>
                    Just about every business needs to order inventory, but that process can look a lot different for every unique company. That’s because every business has very different inventory needs. For example, a construction company building 100 different houses at one time will have one strategy, whereas a local event planning company will have another.

                    Regardless of your business’s industry and the length of your inventory list, ironing out an inventory reordering procedure is essential. Knowing exactly what you need, what you have, and where it’s located can ensure your business’s customer demand is met swiftly without jeopardizing your bottom line.
                </div>
                <div className='childg2'><StackedBar /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><Triangle /></div>
                <div className='childt1'> <div className='title'>Worldwide Box office</div>
                    Films generate income from several revenue streams, including theatrical exhibition, home video, television broadcast rights, and merchandising. However, theatrical box-office earnings are the primary metric for trade publications in assessing the success of a film, mostly because of the availability of the data compared to sales figures for home video and broadcast rights, but also because of historical practice. Included on the list are charts of the top box-office earners (ranked by both the nominal and real value of their revenue), a chart of high-grossing films by calendar year, a timeline showing the transition of the highest-grossing film record, and a chart of the highest-grossing film franchises and series. All charts are ranked by international theatrical box-office performance where possible, excluding income derived from home video, broadcasting rights, and merchandise.
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Temperature, Pressure vs MSL</div>
                    The standard temperature in aviation is measured at the mean sea level (msl) pressure of 29.92 inches of mercury (Hg) and is 15° C or 59° F. The standard temperature decreases 2 °C or 3.5 °F for every 1,000 feet gained, and this is reasonably accurate up to 36,000 feet msl. From 36,000 feet to 80,000 feet msl, the temperature zone is considered constant around –55 °C or –65 °F.
                </div>
                <div className='childg2'><NegativeBar /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><LineBarArea /></div>
                <div className='childt1'> <div className='title'>Voltage vs Temperature</div>
                    Temperature isn't related directly with current and voltage but increase in current flow through a resistive material causes heating effect and for current to increase, voltage must be increased. Therefore we can take temperature to be a function of resistance i.e. R(T).
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Ohm's law</div>
                    Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Introducing the constant of proportionality, the resistance,one arrives at the three mathematical equations used to describe this relationship</div>
                <div className='childg2'><VerticalComposed /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><BestFit /></div>
                <div className='childt1'> <div className='title'>Charles's law</div>
                    Charles's law (also known as the law of volumes) is an experimental gas law that describes how gases tend to expand when heated. A modern statement of Charles's law is:

                    When the pressure on a sample of a dry gas is held constant, the Kelvin temperature and the volume will be in direct proportion.</div>
            </div>
            <div className='parent1'>
                <div className='childg1'><MyPieChart data={data} /></div>
                <div className='childt1'> <div className='title'>Digital Footprint</div>
                    A digital footprint is the trail of data that you intentionally or unintentionally leave behind while using the internet. This includes social media posts, passwords, online purchases, IP addresses, and more. It is your digital footprint that, in part, reflects the reputation people perceive about you online.
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Online Activity</div>
                    Your digital footprint is a record of your online activity. It shows where you've been on the internet and the data you've left behind. Your footprint grows when you deliberately share something online, or when sites and apps track your activity without your permission.
                </div>
                <div className='childg2'><MyPieChart2 data={data} /></div>
            </div>
            <div className='parent1'>
                <div className='childg1'><MyDoublePieChart data={data} /></div>
                <div className='childt1'> <div className='title'>Test Scores Disctibution</div>
                    We can graph tests scores in the form of a curve. We know the form of curve depends on the way the scores are distributed. The most common types of curves are represented in data sets at this level are the normal curve and skewed curve.
                </div>
            </div>
            <div className='parent2'>
                <div className='childt2'> <div className='title'>Activated Pie Chart</div>
                    An "active pie chart" generally refers to a pie chart that possesses interactive or dynamic elements, allowing users to engage with and obtain more detailed information about the data presented. Instead of being a static image, an active pie chart might have features like:

                    1. Hover Effects: When a user hovers their cursor over a specific slice of the pie chart, additional information such as the exact value or percentage of that slice could be displayed.

                    2. Exploding Slices: Users might be able to click on a slice to "explode" it out of the chart, highlighting that specific portion and potentially revealing further information or data related to that segment.
                    3. Animation: Transitions and animations could be incorporated to make the chart's interactions more visually appealing and smooth.
                </div>
                <div className='childg2'><ActivePieChart /></div>
            </div>
        </>
    )
}
