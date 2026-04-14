(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();const u=document.getElementById("app"),c=document.getElementById("menuToggle"),d=document.getElementById("mobileNav"),v=[{id:"costa-rica",name:"Costa Rica",region:"Central America",image:"https://images.unsplash.com/photo-1744153470889-7c660893f3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Leading the way in sustainable tourism with protected rainforests and renewable energy.",ecoRating:5},{id:"new-zealand",name:"New Zealand",region:"Oceania",image:"https://images.unsplash.com/photo-1735991091326-1ab49d0db447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Pristine landscapes with strong environmental protection and conservation efforts.",ecoRating:5},{id:"bali",name:"Bali, Indonesia",region:"Southeast Asia",image:"https://images.unsplash.com/photo-1768271179726-b5084b33f526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Rice terraces, eco-resorts, and communities committed to sustainable practices.",ecoRating:4},{id:"norway",name:"Norway",region:"Northern Europe",image:"https://images.unsplash.com/photo-1671403835932-1f7bd18ab576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Fjords and mountains with eco-friendly transport and sustainable tourism policies.",ecoRating:5},{id:"bhutan",name:"Bhutan",region:"South Asia",image:"https://images.unsplash.com/photo-1775405380506-3dda535ed94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Carbon-negative country with high-value, low-impact tourism philosophy.",ecoRating:5},{id:"iceland",name:"Iceland",region:"Northern Europe",image:"https://images.unsplash.com/photo-1768209645955-8d10a25e1630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Renewable energy leader with stunning natural wonders and responsible tourism.",ecoRating:5},{id:"kenya",name:"Kenya",region:"East Africa",image:"https://images.unsplash.com/photo-1760294750013-179287076061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Community-based conservation and wildlife protection through eco-tourism.",ecoRating:4},{id:"maldives",name:"Maldives",region:"Indian Ocean",image:"https://images.unsplash.com/photo-1696580436068-f19c26850e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Pioneering marine conservation and sustainable luxury resort practices.",ecoRating:4},{id:"switzerland",name:"Switzerland",region:"Central Europe",image:"https://images.unsplash.com/photo-1773916543984-c2d9615f91ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",description:"Alpine beauty with excellent public transport and environmental stewardship.",ecoRating:5}],g={"costa-rica":{name:"Costa Rica",region:"Central America",image:"https://images.unsplash.com/photo-1744153470889-7c660893f3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",ecoRating:5,bestTime:"December to April (Dry season)",description:"Costa Rica is a global leader in sustainable tourism, with over 25% of its land protected as national parks and reserves. The country runs on 99% renewable energy and has doubled its forest coverage in the past 30 years.",thingsToDo:["Explore Monteverde Cloud Forest Reserve","Visit Manuel Antonio National Park","Spot wildlife in Tortuguero National Park","Relax in eco-lodges in the rainforest","Support local coffee cooperatives","Volunteer in sea turtle conservation"],toAvoid:["Animal attractions with captive wildlife","Overcrowded all-inclusive resorts","Plastic bottled water (tap water is safe)","Purchasing products made from endangered species"]},"new-zealand":{name:"New Zealand",region:"Oceania",image:"https://images.unsplash.com/photo-1735991091326-1ab49d0db447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",ecoRating:5,bestTime:"October to April (Spring and Summer)",description:"New Zealand's Tiaki Promise encourages visitors to care for the land, sea, and nature. With strict biosecurity laws and a strong conservation ethic, the country protects unique endemic species and pristine landscapes.",thingsToDo:["Hike the Great Walks trails","Visit Fiordland National Park","Experience Maori culture respectfully","Kayak in Abel Tasman National Park","Stay in eco-certified accommodations","Support conservation projects"],toAvoid:["Freedom camping in non-designated areas","Disturbing wildlife, especially penguins and seals","Importing food or plant materials","Off-trail hiking that damages vegetation"]}},l=[{id:"zero-waste-travel",title:"The Complete Guide to Zero-Waste Travel",excerpt:"Learn how to minimize your environmental footprint with these practical tips for plastic-free adventures.",image:"https://images.unsplash.com/photo-1759148539656-9296426a3f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",category:"Tips & Guides",date:"April 2, 2026",readTime:"8 min read"},{id:"public-transport-abroad",title:"Mastering Public Transport Abroad",excerpt:"Navigate unfamiliar cities sustainably with our guide to using public transportation like a local.",image:"https://images.unsplash.com/photo-1716479852367-336a095cb2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",category:"Transportation",date:"March 28, 2026",readTime:"6 min read"},{id:"eco-packing-checklist",title:"Essential Eco-Packing Checklist",excerpt:"Everything you need to pack for a sustainable trip, from reusable containers to eco-friendly toiletries.",image:"https://images.unsplash.com/photo-1774516534215-ee9bea7875af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",category:"Packing",date:"March 25, 2026",readTime:"5 min read"},{id:"carbon-offset-explained",title:"Carbon Offsetting: What You Need to Know",excerpt:"Understanding carbon offset programs and how to choose legitimate options for your travels.",image:"https://images.unsplash.com/photo-1671403835932-1f7bd18ab576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",category:"Environment",date:"March 20, 2026",readTime:"7 min read"},{id:"supporting-local-communities",title:"How to Support Local Communities While Traveling",excerpt:"Discover meaningful ways to contribute to local economies and preserve cultural heritage.",image:"https://images.unsplash.com/photo-1775405380506-3dda535ed94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",category:"Community",date:"March 15, 2026",readTime:"6 min read"},{id:"sustainable-wildlife-tourism",title:"Ethical Wildlife Tourism: A Responsible Approach",excerpt:"How to enjoy wildlife encounters without harming animals or their habitats.",image:"https://images.unsplash.com/photo-1760294750013-179287076061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",category:"Wildlife",date:"March 10, 2026",readTime:"9 min read"}];function y(t){return"<span>"+"★".repeat(t)+"☆".repeat(5-t)+"</span>"}function r({image:t,title:e,subtitle:i,short:n}){return`
    <section class="hero ${n?"short":""}">
      <img src="${t}" alt="${e}" loading="lazy" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>${e}</h1>
        <p>${i}</p>
      </div>
    </section>
  `}function h(){const t=[{title:"Reduce Waste",description:"Travel with reusable items and minimize single-use plastics"},{title:"Choose Green Stays",description:"Select eco-certified accommodations that prioritize sustainability"},{title:"Respect Local Culture",description:"Support local communities and honor their traditions"},{title:"Low-Carbon Travel",description:"Opt for trains, buses, and other sustainable transport options"}];return`
    ${r({image:"https://images.unsplash.com/photo-1759147806909-970d2258a50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"Travel Responsibly. Explore Sustainably.",subtitle:"Discover eco-friendly destinations and learn how to minimize your environmental impact while creating unforgettable memories."})}
    <section class="section">
      <div class="container center-heading">
        <h2>Essential Eco-Friendly Tips</h2>
        <p>Small changes make a big difference when you travel sustainably.</p>
      </div>
      <div class="container grid grid-4">
        ${t.map(e=>`<article class="card"><div class="card-body"><h3>${e.title}</h3><p>${e.description}</p></div></article>`).join("")}
      </div>
      <div class="container actions"><a class="btn primary" href="#/eco-tips" data-link>View All Tips</a></div>
    </section>

    <section class="section" style="background: var(--surface-soft)">
      <div class="container center-heading">
        <h2>Explore Eco-Friendly Destinations</h2>
        <p>Discover places committed to sustainable tourism and environmental conservation.</p>
      </div>
      <div class="container grid grid-3">
        ${v.slice(0,3).map(e=>`
            <a href="#/destinations/${e.id}" data-link class="card">
              <img src="${e.image}" alt="${e.name}" loading="lazy" style="height:280px;object-fit:cover" />
              <div class="card-body"><h3>${e.name}</h3><p>${e.description}</p></div>
            </a>
          `).join("")}
      </div>
      <div class="container actions"><a class="btn primary" href="#/destinations" data-link>Browse All Destinations</a></div>
    </section>

    <section class="hero short">
      <img src="https://images.unsplash.com/photo-1775405380506-3dda535ed94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Terraced fields" loading="lazy" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Ready to Plan Your Eco-Friendly Adventure?</h1>
        <p>Use our trip planner to create a personalized sustainable travel experience.</p>
        <div class="actions"><a class="btn primary" href="#/plan-trip" data-link>Start Planning Now</a></div>
      </div>
    </section>
  `}function w(){return`
    ${r({image:"https://images.unsplash.com/photo-1773916543984-c2d9615f91ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"About Sustainable Travel",subtitle:"Transforming tourism for a better planet.",short:!0})}
    <section class="section">
      <div class="container grid grid-2" style="align-items:center">
        <div>
          <h2 style="margin-bottom:14px">What is Sustainable Travel?</h2>
          <p style="margin-bottom:12px">Sustainable travel is about making conscious choices to minimize negative environmental, economic, and social impacts while maximizing positive contributions.</p>
          <p style="margin-bottom:12px">It means traveling in a way that respects local cultures, supports local economies, and conserves natural resources.</p>
          <p>Every traveler has the power to make a difference through mindful decisions.</p>
        </div>
        <div class="card"><img src="https://images.unsplash.com/photo-1763160871559-0cdac37d1b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Forest landscape" loading="lazy" style="height:380px;object-fit:cover" /></div>
      </div>
    </section>

    <section class="section" style="background: var(--surface-soft)">
      <div class="container center-heading">
        <h2>Why Responsible Tourism Matters</h2>
      </div>
      <div class="container grid grid-3" style="margin-bottom:20px">
        <div class="metric"><b>10%</b><p>of global CO2 emissions come from tourism.</p></div>
        <div class="metric"><b>1.5B</b><p>international tourist arrivals annually.</p></div>
        <div class="metric"><b>8M</b><p>tons of plastic enter oceans from tourism yearly.</p></div>
      </div>
      <div class="container card"><div class="card-body"><p>By choosing sustainable travel practices, we can protect fragile ecosystems, preserve cultural heritage, and ensure future generations can enjoy the world's treasures.</p></div></div>
    </section>

    <section class="section">
      <div class="container center-heading">
        <h2>Our Core Values</h2>
      </div>
      <div class="container grid grid-2">
        <div class="card"><div class="card-body"><h3>Environmental Protection</h3><p>Minimize carbon footprint and protect natural ecosystems.</p></div></div>
        <div class="card"><div class="card-body"><h3>Community Support</h3><p>Empower local communities through responsible tourism.</p></div></div>
        <div class="card"><div class="card-body"><h3>Education & Awareness</h3><p>Spread knowledge about sustainable travel practices.</p></div></div>
        <div class="card"><div class="card-body"><h3>Quality Experiences</h3><p>Create meaningful connections with nature and culture.</p></div></div>
      </div>
    </section>
  `}function x(){const t=[{title:"Reduce Waste",description:"Pack reusable water bottles, shopping bags, and containers. Say no to single-use plastics and dispose of waste properly."},{title:"Choose Green Stays",description:"Book eco-certified hotels, eco-lodges, or homestays that use renewable energy, conserve water, and support local communities."},{title:"Respect Local Culture",description:"Learn about local customs, dress appropriately, ask permission before photographing people, and support local artisans."},{title:"Low-Carbon Travel",description:"Choose trains, buses, or bikes over flights when possible. For air travel, consider carbon offset programs."},{title:"Support Local Economy",description:"Buy from local markets, eat at family-owned restaurants, and hire local guides to keep tourism dollars in the community."},{title:"Conserve Water",description:"Take shorter showers, reuse towels, avoid water-intensive activities in drought-prone areas, and respect water scarcity."},{title:"Eat Sustainably",description:"Choose plant-based meals, eat local and seasonal foods, and avoid endangered species on menus."},{title:"Leave No Trace",description:"Take only photos, leave only footprints. Do not remove natural or cultural artifacts, and stay on marked trails."},{title:"Choose Lesser-Known Destinations",description:"Avoid over-touristed areas. Explore off-the-beaten-path locations to distribute tourism benefits more evenly."},{title:"Pack Light & Smart",description:"Lighter luggage means less fuel consumption. Bring eco-friendly toiletries and rechargeable batteries."}];return`
    ${r({image:"https://images.unsplash.com/photo-1671403835932-1f7bd18ab576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"Eco-Friendly Travel Tips",subtitle:"Simple actions for sustainable adventures.",short:!0})}
    <section class="section">
      <div class="container center-heading">
        <h2>Essential Sustainable Practices</h2>
      </div>
      <div class="container grid grid-3">
        ${t.map(e=>`
            <article class="card"><div class="card-body"><h3>${e.title}</h3><p>${e.description}</p></div></article>
          `).join("")}
      </div>
      <div class="container actions"><a class="btn primary" href="#/plan-trip" data-link>Plan Your Eco Trip</a></div>
    </section>
  `}function $(){return`
    ${r({image:"https://images.unsplash.com/photo-1759147806909-970d2258a50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"Eco-Friendly Destinations",subtitle:"Discover places committed to sustainable tourism.",short:!0})}
    <section class="section">
      <div class="container center-heading">
        <h2>Explore Sustainable Destinations</h2>
      </div>
      <div class="container grid grid-3">
        ${v.map(t=>`
            <a href="#/destinations/${t.id}" data-link class="card">
              <img src="${t.image}" alt="${t.name}" loading="lazy" style="height:250px;object-fit:cover" />
              <div class="card-body">
                <p style="color:var(--accent);font-weight:700;margin-bottom:8px">${t.region}</p>
                <h3>${t.name}</h3>
                <p style="margin-bottom:8px">${t.description}</p>
                <p style="color:var(--accent)">${y(t.ecoRating)} ${t.ecoRating}/5</p>
              </div>
            </a>
          `).join("")}
      </div>
    </section>
  `}function T(t){const e=g[t]||g["costa-rica"];return`
    <section class="hero">
      <img src="${e.image}" alt="${e.name}" />
      <div class="hero-overlay"></div>
      <div class="hero-content" style="text-align:left">
        <p><a href="#/destinations" data-link style="color:#fff">Back to Destinations</a></p>
        <h1>${e.name}</h1>
        <p>${e.region} | Eco Rating: ${e.ecoRating}/5 | ${e.bestTime}</p>
      </div>
    </section>

    <section class="section"><div class="container"><h2 style="margin-bottom:14px">About This Destination</h2><p>${e.description}</p></div></section>

    <section class="section" style="background:var(--surface-soft)">
      <div class="container center-heading"><h2>Sustainability Scorecard</h2></div>
      <div class="container grid grid-3">
        <div class="metric"><p>Environmental Protection</p><b>${e.ecoRating}/5</b></div>
        <div class="metric"><p>Community Support</p><b>${e.ecoRating===5?5:4}/5</b></div>
        <div class="metric"><p>Conservation Efforts</p><b>${e.ecoRating}/5</b></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 style="margin-bottom:14px">Things to Do Responsibly</h2>
        <div class="tile-list">${e.thingsToDo.map(i=>`<div class="tile good">${i}</div>`).join("")}</div>
      </div>
    </section>

    <section class="section" style="background:var(--surface-soft)">
      <div class="container">
        <h2 style="margin-bottom:14px">What to Avoid</h2>
        <div class="tile-list">${e.toAvoid.map(i=>`<div class="tile bad">${i}</div>`).join("")}</div>
      </div>
    </section>

    <section class="section"><div class="container center-heading"><h2>Ready to Visit ${e.name}?</h2><div class="actions"><a class="btn primary" href="#/plan-trip" data-link>Plan Your Trip</a></div></div></section>
  `}function k(){return`
    ${r({image:"https://images.unsplash.com/photo-1763544377318-b5525a92903a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"Plan Your Eco Trip",subtitle:"Create a personalized sustainable travel experience.",short:!0})}

    <section class="section">
      <div class="container" style="max-width:860px">
        <div class="form-wrap">
          <h2 style="margin-bottom:6px">Trip Planner</h2>
          <p style="margin-bottom:20px;color:var(--muted)">Tell us about your dream eco-friendly adventure.</p>

          <form id="plannerForm">
            <div class="form-group">
              <label>Budget Range</label>
              <select name="budget" required>
                <option value="">Select your budget</option>
                <option value="budget">Budget ($500 - $1,500)</option>
                <option value="moderate">Moderate ($1,500 - $3,000)</option>
                <option value="luxury">Luxury ($3,000+)</option>
              </select>
            </div>

            <div class="form-group">
              <label>Preferred Region</label>
              <select name="region" required>
                <option value="">Select a region</option>
                <option value="central-america">Central America</option>
                <option value="south-america">South America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>

            <div class="form-group">
              <label>Trip Duration</label>
              <select name="duration" required>
                <option value="">Select duration</option>
                <option value="weekend">Weekend (2-3 days)</option>
                <option value="week">One Week (5-7 days)</option>
                <option value="two-weeks">Two Weeks (10-14 days)</option>
                <option value="month">One Month+</option>
              </select>
            </div>

            <div class="form-group">
              <label>Interests (Select all that apply)</label>
              <div class="pill-grid" id="interests"></div>
            </div>

            <div class="form-group">
              <label>Eco Preferences (Select all that apply)</label>
              <div class="pill-grid" id="ecoPrefs"></div>
            </div>

            <button class="btn primary" type="submit" style="width:100%">Generate My Eco Trip Plan</button>
          </form>
        </div>
      </div>
    </section>
  `}function E(){return`
    ${r({image:"https://images.unsplash.com/photo-1754078219069-7565df2033b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"Travel Stories & Guides",subtitle:"Inspiration and practical advice for sustainable adventures.",short:!0})}
    <section class="section">
      <div class="container center-heading"><h2>Latest Articles</h2></div>
      <div class="container grid grid-3">
        ${l.map(t=>`
            <a href="#/blog/${t.id}" data-link class="card">
              <img src="${t.image}" alt="${t.title}" loading="lazy" style="height:220px;object-fit:cover" />
              <div class="card-body">
                <span class="tag">${t.category}</span>
                <h3 style="margin-top:10px">${t.title}</h3>
                <p style="margin:8px 0">${t.excerpt}</p>
                <p style="color:var(--muted)">${t.date} | ${t.readTime}</p>
              </div>
            </a>
          `).join("")}
      </div>
    </section>
  `}function j(t){const e=l.find(i=>i.id===t)||l[0];return`
    <section class="hero">
      <img src="${e.image}" alt="${e.title}" />
      <div class="hero-overlay"></div>
      <div class="hero-content" style="text-align:left">
        <p><a href="#/blog" data-link style="color:#fff">Back to Blog</a></p>
        <h1>${e.title}</h1>
        <p>${e.date} | ${e.readTime}</p>
      </div>
    </section>

    <section class="section">
      <article class="article">
        <p>Traveling sustainably does not mean sacrificing comfort or experiences. With thoughtful preparation and conscious choices, you can explore the world while leaving minimal waste behind.</p>
        <h2 style="margin:18px 0 8px">Before You Leave: Planning for Zero Waste</h2>
        <p>The key to zero-waste travel starts at home. Research your destination, pack reusable essentials, and choose accommodations that align with your values.</p>
        <div class="quote">Every piece of plastic you refuse is one less piece polluting our oceans and landfills. Small actions create massive collective impact.</div>
        <h2 style="margin:18px 0 8px">On the Road: Practical Tips</h2>
        <p>Bring reusable bottles and containers, refuse single-use plastics, and support local markets where packaging is minimal.</p>
        <div class="grid grid-2" style="margin:20px 0">
          <img src="https://images.unsplash.com/photo-1744153470889-7c660893f3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Beach destination" loading="lazy" style="height:220px;object-fit:cover;border-radius:14px" />
          <img src="https://images.unsplash.com/photo-1735991091326-1ab49d0db447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Forest path" loading="lazy" style="height:220px;object-fit:cover;border-radius:14px" />
        </div>
        <h2 style="margin:18px 0 8px">The Ripple Effect</h2>
        <p>Progress over perfection. Every sustainable choice contributes to responsible tourism and inspires others to travel better.</p>
      </article>
    </section>

    <section class="section" style="background:var(--surface-soft)">
      <div class="container">
        <h2 style="margin-bottom:16px">Related Articles</h2>
        <div class="grid grid-3">
          ${l.slice(0,3).map(i=>`
              <a href="#/blog/${i.id}" data-link class="card">
                <img src="${i.image}" alt="${i.title}" style="height:170px;object-fit:cover" loading="lazy" />
                <div class="card-body"><h3>${i.title}</h3></div>
              </a>
            `).join("")}
        </div>
      </div>
    </section>
  `}function P(){return`
    ${r({image:"https://images.unsplash.com/photo-1770839012421-7423ddd0a105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",title:"Get In Touch",subtitle:"We would love to hear from you.",short:!0})}

    <section class="section">
      <div class="container grid grid-2">
        <div>
          <h2 style="margin-bottom:12px">Let's Connect</h2>
          <p style="margin-bottom:20px">Have questions about sustainable travel? Want to share your eco-friendly journey? We are here to help.</p>
          <div class="tile-list">
            <div class="tile"><strong>Email Us</strong><p>hello@ecotravelguides.com</p></div>
            <div class="tile"><strong>Live Chat</strong><p>Monday - Friday, 9AM - 5PM EST</p></div>
            <div class="tile"><strong>Location</strong><p>Remote team, global impact</p></div>
          </div>
          <div class="card" style="margin-top:16px"><img src="https://images.unsplash.com/photo-1763160871559-0cdac37d1b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Forest landscape" loading="lazy" style="height:250px;object-fit:cover" /></div>
        </div>

        <div class="form-wrap">
          <h3 style="margin-bottom:12px">Send us a message</h3>
          <form id="contactForm">
            <div class="form-group"><label>Name</label><input type="text" name="name" required /></div>
            <div class="form-group"><label>Email</label><input type="email" name="email" required /></div>
            <div class="form-group"><label>Message</label><textarea name="message" required></textarea></div>
            <button class="btn primary" style="width:100%">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--surface-soft)">
      <div class="container center-heading">
        <h2>Join Our Community</h2>
        <p>Connect with fellow eco-conscious travelers from around the world.</p>
      </div>
      <div class="container card">
        <img src="https://images.unsplash.com/photo-1768271179726-b5084b33f526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="World map representation" loading="lazy" style="height:320px;object-fit:cover" />
      </div>
    </section>
  `}function f(){const t=window.location.hash||"#/",e=t.startsWith("#")?t.slice(1):t;return p(e)}function S(t){const e=p(t);if(e==="/")return h();if(e==="/about")return w();if(e==="/eco-tips")return x();if(e==="/destinations")return $();if(e==="/plan-trip")return k();if(e==="/blog")return E();if(e==="/contact")return P();if(e.startsWith("/destinations/")){const i=e.split("/")[2];return T(i)}if(e.startsWith("/blog/")){const i=e.split("/")[2];return j(i)}return h()}function p(t){let e=t||"/";if(e.endsWith("index.html")){const i=e.lastIndexOf("/index.html");e=i>=0&&e.slice(0,i)||"/"}return e.startsWith("/")||(e=`/${e}`),e=e.replace(/\\/g,"/"),e.length>1&&e.endsWith("/")&&(e=e.slice(0,-1)),e}function R(){const t=f();document.querySelectorAll("[data-link]").forEach(e=>{const i=e.getAttribute("href"),n=p((i||"#/").replace(/^#/,""));e.classList.toggle("active",n===t)})}function A(){const t=["Wildlife & Nature","Adventure Sports","Cultural Experiences","Beach & Ocean","Mountains & Hiking","Wellness & Relaxation"],e=["Carbon-neutral travel","Eco-certified accommodations","Community-based tourism","Wildlife conservation","Plastic-free travel","Local food experiences"],i=document.getElementById("interests"),n=document.getElementById("ecoPrefs");i&&(i.innerHTML=t.map(s=>`<button type="button" class="pill-btn">${s}</button>`).join("")),n&&(n.innerHTML=e.map(s=>`<button type="button" class="pill-btn">${s}</button>`).join("")),document.querySelectorAll(".pill-btn").forEach(s=>{s.addEventListener("click",()=>s.classList.toggle("active"))});const a=document.getElementById("plannerForm");a&&a.addEventListener("submit",s=>{s.preventDefault(),window.alert("Trip plan submitted! In a real application, this would generate a personalized eco-friendly itinerary based on your preferences."),a.reset(),document.querySelectorAll(".pill-btn.active").forEach(b=>{b.classList.remove("active")})});const o=document.getElementById("contactForm");o&&o.addEventListener("submit",s=>{s.preventDefault(),window.alert("Thank you for your message! We'll get back to you soon."),o.reset()})}function m(){u&&(u.innerHTML=S(f()),R(),A(),window.scrollTo({top:0,behavior:"auto"}))}document.addEventListener("click",t=>{const e=t.target.closest("a[data-link]");if(!e)return;const i=e.getAttribute("href");!i||i.startsWith("http")||(t.preventDefault(),i.startsWith("#")?window.location.hash=i.slice(1):window.location.hash=i,d&&d.classList.remove("open"),c&&c.setAttribute("aria-expanded","false"),m())});window.addEventListener("hashchange",m);c&&d&&c.addEventListener("click",()=>{const t=d.classList.toggle("open");c.setAttribute("aria-expanded",String(t))});m();
