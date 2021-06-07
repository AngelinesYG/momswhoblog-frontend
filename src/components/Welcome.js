import React from 'react';


const Welcome = () => {
   return(
      <div>
         <h1>Welcome to Moms Who Blog!</h1>

         <p>Is no secret that being a working mom is very difficult and demanding. Especially in the society we live in. Being able to vent to release the emotional stress is deemed innapropriate and even weak at times. But being able to do so is such an important thing for us moms to stay sane.</p>
         <p>Moms Who Blog offers the freedom of letting go through the written word, but more importantly, to do it annonymously without the fear of judgment. In addition, for those who feel comfortable connecting personally with other moms, Moms Who Blog offers the ability to connect to other moms going through similar situations who will support one another in the journey to staying emotionaly healthy.</p>
         <p>Take a look at our blogs and see what other moms, just like you, are writing about. You may just need a good laugh, or to see that other moms struggle just like you. Whatever you need. This is the site for you.<br/>
         <br/>
         For additional resources or information, visit any of the links below or see our frequently asked questions page. HAPPY WRITING!</p>

         <ul className='resources'>
         <li><h2>Resources</h2></li>
         <li><a href="https://www.workingmomsagainstguilt.com/working-mom-resources/">Working Moms Against Guilt</a></li>
         <li><a href="https://www.fabworkingmomlife.com/working-mom-life-resources/">Fabulous Working Mom Life</a></li>
         <li><a href="https://www.mother.ly/work/find-your-group-10-mom-groups-that-are-totally-amazing">Top 10 Mom Support Groups</a></li>
         <li><a href="https://mommypoppins.com/anywhere">Mom Meeting Moms - Find a Group in Your Area</a></li>
      </ul>
      </div>
   )
}
export default Welcome;
