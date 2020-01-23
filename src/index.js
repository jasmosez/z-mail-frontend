// additional seed data
const dataObj = []
let dataTime = new Date()
dataTime = dataTime.getFullYear() + '-' + (dataTime.getMonth() + 1) + '-' + dataTime.getDate()
const data = [
  {
    "google_id": "16fce2961e193719",
    "date": "2020-01-22T11:50:15.000-05:00",
    "subject": "Re: [move-coop/parsons] Salesforce class (#82)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "@ydamit pushed 1 commit. 3e5c232 Merge branch \u0026#39;master\u0026#39; into salesforce_class — You are receiving this because you are subscribed to this thread. View it on GitHub or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce271d8951c77",
    "date": "2020-01-22T11:47:47.000-05:00",
    "subject": "Re: [move-coop/parsons] Salesforce class (#82)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "@ydamit pushed 2 commits. 66f85da added test methods 6c39a32 linting — You are receiving this because you are subscribed to this thread. View it on GitHub or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce04a34e30c1d",
    "date": "2020-01-22T11:07:38.000-05:00",
    "subject": "Ballotpedia Society members help us do it all",
    "from": "Leslie Graves \u003cleslie.b.graves@ballotpedia.org\u003e",
    "snippet": "I look forward to hearing from you! View this email in your browser. Help Ballotpedia be there Dear Reader, I know you\u0026#39;re busy, so I\u0026#39;ll get right to the point… I recently sent you an invitation",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fce03612aaa35e",
    "date": "2020-01-22T11:08:44.000-05:00",
    "subject": "Re: [move-coop/parsons] added trailing slash to generic action endpoint (#135)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "Closed #135. — You are receiving this because you are subscribed to this thread. Reply to this email directly, view it on GitHub, or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce035a2204b78",
    "date": "2020-01-22T11:08:43.000-05:00",
    "subject": "Re: [move-coop/parsons] added trailing slash to generic action endpoint (#135)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "False alarm. — You are receiving this because you are subscribed to this thread. Reply to this email directly, view it on GitHub, or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce01580d5366f",
    "date": "2020-01-22T11:06:30.000-05:00",
    "subject": "What are Merkle Trees?",
    "from": "Codementor \u003csupport@codementor.io\u003e",
    "snippet": "Codementor Weekly Newsletter - January 22, 2020 Hey James, Are we finally getting an affordable iPhone soon? This week\u0026#39;s standout posts Blockchain: Merkle Trees: What They Are and the Problems They",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcdfdd18c2aa81",
    "date": "2020-01-22T11:02:36.000-05:00",
    "subject": "New England Before Colonization, Reconsidered",
    "from": "John Rosenberg at Harvard Magazine \u003charvard_magazine@harvard.edu\u003e",
    "snippet": "Before Europeans arrived in New England, local ecology was driven by climate shifts, not by human interventions. *|MC_PREVIEW_TEXT|* Editor\u0026#39;s Highlights New England\u0026#39;s Forest Primeval Before",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdfcdb31bb181",
    "date": "2020-01-22T11:00:59.000-05:00",
    "subject": "Executive Budget Ignores Public Housing",
    "from": "Harvey Epstein \u003charvepstein@gmail.com\u003e",
    "snippet": "Dear Friend, This week, the Governor made his Executive Budget presentation, outlining his funding and policy priorities for the FY 2021 budget. I was shocked and disappointed to see that he omitted",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcded3f0fc5768",
    "date": "2020-01-22T10:44:33.000-05:00",
    "subject": "Social Media Producer at Shutterstock and 9 other jobs for you.",
    "from": "LinkedIn \u003cjobs-listings@linkedin.com\u003e",
    "snippet": "James Schaffer, Shutterstock and 9 others have jobs for you. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "UNREAD",
      "CATEGORY_SOCIAL",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcddfac6ca5cba",
    "date": "2020-01-22T10:29:41.000-05:00",
    "subject": "Void \u0026 Co.| HtBaF | Petrina Ng",
    "from": "OPEN SOURCE \u003ccontact@opensourcegallery.org\u003e",
    "snippet": "Welcome to the New Year!Please join us at our first exhibition program of 2020:Void \u0026amp; Co.: The Octopus Waffle Lab February 26-March 28, 2020 Openi Welcome to the New Year! Please join us at our",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcdd7baff80b4e",
    "date": "2020-01-22T10:21:03.000-05:00",
    "subject": "Judy Feimer",
    "from": "\"Saint Ann's School\" \u003cm@mail2.veracross.com\u003e",
    "snippet": "Dear Faculty, Former Faculty, and Alumni, With heavy hearts, we write to let you know of the passing of Judy Feimer, who taught math at Saint Ann\u0026#39;s from 1974 until she retired in 2006. Below is a",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdcade4c18931",
    "date": "2020-01-22T10:07:02.000-05:00",
    "subject": "Use your Bediversary gift before it's gone...",
    "from": "Casper \u003csupport@mail.casper.com\u003e",
    "snippet": "33 days left for 10% off. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcdca4433a2e1f",
    "date": "2020-01-22T10:05:28.000-05:00",
    "subject": "The hard work of hope",
    "from": "\"Darren Walker, Ford Foundation President\" \u003cDarrenWalker.President@fordfoundation.org\u003e",
    "snippet": "LATEST NEWS | JANUARY 22, 2020 View this email in your browser Illustration of people helping each other open a door in a globe to let out the doves. Illustration by Martin Leon Barretto Illustration",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdc822eefe423",
    "date": "2020-01-22T10:01:51.000-05:00",
    "subject": "🎉  TODAY: $99 Down - 9 Payments - NO Interest!",
    "from": "\"BookIt.com Specials\" \u003cNoReply@e.bookit.com\u003e",
    "snippet": "$99 All-Inc Cancun, $100 All-Inc Jamaica, Plus Book It for Only $99 Down w/ PayDelay! ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdc6c0e1bbbec",
    "date": "2020-01-22T10:01:11.000-05:00",
    "subject": "Save the Date: April 14, 2020!",
    "from": "\"Kofo Anifalaje, North Star Fund\" \u003chello@northstarfund.org\u003e",
    "snippet": "Hi James, I sure hope to see you at our biggest party of the year! Save the Date April 14 2020 for our Community Gala Hi James, Mark your calendar! We\u0026#39;ve set the date for the 2020 North Star Fund",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdb3c3aa37b1e",
    "date": "2020-01-22T09:41:47.000-05:00",
    "subject": "[move-coop/parsons] added trailing slash to generic action endpoint (#135)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "Oh the difference one character can make... You can view, comment on, or merge this pull request online at: https://github.com/move-coop/parsons/pull/135 Commit Summary added trailing slash to generic",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcd908a0cf187b",
    "date": "2020-01-22T09:03:17.000-05:00",
    "subject": "Color and Blow Dry",
    "from": "Groupon New York City \u003cnoreply@r.groupon.com\u003e",
    "snippet": "James\u0026#39;s New York City Deals | January 22, 2020 | Groupons for Food \u0026amp; Drink, Health \u0026amp; Beauty, and Things to Do GROUPON® James\u0026#39;s New York City Deals | January 22, 2020 Color and Blow Dry",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd90880359acf",
    "date": "2020-01-22T09:03:19.000-05:00",
    "subject": "Re: We’re going to Microsoft HQ!",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT"
    ]
  },
  {
    "google_id": "16fcd8ef9448f39e",
    "date": "2020-01-22T09:01:36.000-05:00",
    "subject": "🥪 Tweeted: The California that this has",
    "from": "Twitter \u003cinfo@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_SOCIAL",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcd84954cfcbb5",
    "date": "2020-01-22T08:50:00.000-05:00",
    "subject": "Statically-typed Ruby: Introducing Sorbet | Peter Ayeni in Better Programming",
    "from": "Medium Daily Digest \u003cnoreply@medium.com\u003e",
    "snippet": "Stories for James Schaffer Today\u0026#39;s highlights Statically-typed Ruby: Introducing Sorbet Sorbet, from Stripe — a fast, powerful type checker, designed for Ruby Peter Ayeni in Better Programming 4",
    "labels": [
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcd64d956b11b5",
    "date": "2020-01-22T08:15:32.000-05:00",
    "subject": "Kings County Politics Morning News Bites Jan. 22, 2020",
    "from": "Kings County Politics \u003cstephenWitt@kingscountypolitics.com\u003e",
    "snippet": "\u0026quot;Wise men, when in doubt whether to speak or to keep quiet, give themselves the benefit of the doubt, and remain silent.\u0026quot; - Napoleon Hill, 1883-1970, American Writer Brooklyn Politics Morning",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd628f8bc8405",
    "date": "2020-01-22T08:13:05.000-05:00",
    "subject": "Boots Built to Last",
    "from": "The Frye Company \u003cemail@p.thefryecompany.com\u003e",
    "snippet": "Creating Icons Since 1863. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd609af0d5769",
    "date": "2020-01-22T08:05:14.000-05:00",
    "subject": "Strung Along ✒",
    "from": "The Nib \u003ccomics@thenib.com\u003e",
    "snippet": "Plus: Politics on a plate. By Matt Lubchansky Politics on a Plate By Jen Sorensen Funeral Tips to Die For! By Gemma Correll Support our comics Follow The Nib Facebook Twitter Link Link The Nib 11 NE",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd605635ec069",
    "date": "2020-01-22T08:04:37.000-05:00",
    "subject": "Up to 60% off sale begins NOW",
    "from": "Club Monaco \u003cnews@email.clubmonaco.com\u003e",
    "snippet": "Shop The End-of-Season Sale \u0026gt; If you cannot view this message, click here. GET FREE SHIPPING ON ALL ORDERS OF $99 OR MORE* WOMEN Shop Club Monaco MEN Shop All Men\u0026#39;s Sale Shop All Women\u0026#39;s",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd5b8272f016c",
    "date": "2020-01-22T08:05:24.000-05:00",
    "subject": "Re: New Year, New Deep Dives Into Equity-Focused Initiatives 🔍",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT"
    ]
  },
  {
    "google_id": "16fcd5b7ab4573bc",
    "date": "2020-01-22T08:03:21.000-05:00",
    "subject": "New Year, New Deep Dives Into Equity-Focused Initiatives 🔍",
    "from": "Johnson Center for Philanthropy \u003cjcp@gvsu.edu\u003e",
    "snippet": "PLUS: Trends 2020 \u0026amp; Free CSR Event Dear Friend, Is it too late to say \u0026quot;Happy New Year\u0026quot;!? We\u0026#39;re saying it anyway — wishing our friends and colleagues an inspiring and mission-driven",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd59fb4a8e10b",
    "date": "2020-01-22T08:03:21.000-05:00",
    "subject": "New Year, New Deep Dives Into Equity-Focused Initiatives 🔍",
    "from": "Johnson Center for Philanthropy \u003cjcp@gvsu.edu\u003e",
    "snippet": "PLUS: Trends 2020 \u0026amp; Free CSR Event Dear Friend, Is it too late to say \u0026quot;Happy New Year\u0026quot;!? We\u0026#39;re saying it anyway — wishing our friends and colleagues an inspiring and mission-driven",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd59decee23af",
    "date": "2020-01-22T08:03:33.000-05:00",
    "subject": "6 Decluttering Projects You Can Do Now | Watch: Family Home Designed to Survive Wildfires | Bathroom of the Week",
    "from": "Houzz Magazine \u003cupdates@houzz.com\u003e",
    "snippet": "Blue is the new black, and other trends at the Atlanta furnishings market. Flooring, appliances and lighting popular in kitchen remodels. View in iOS app | View in browser Houzz Logo This Week on Houzz",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd4a6c934b709",
    "date": "2020-01-22T07:46:44.000-05:00",
    "subject": "Don't Miss the Saint Lucia Jazz Festival",
    "from": "Jazz at Lincoln Center \u003cjazz@jazz.org\u003e",
    "snippet": "The Saint Lucia Jazz Festival Returns with a World-Class Lineup We\u0026#39;re pleased to announce the return of the Saint Lucia Jazz Festival produced in collaboration with Jazz at Lincoln Center. The",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd33810ce3639",
    "date": "2020-01-22T07:16:48.000-05:00",
    "subject": "POLITICO New York Playbook: Bail reform pits de Blasio against progressives — Cuomo budget targets health care costs — Shelly Silver’s conviction partially overturned",
    "from": "Erin Durkin and Anna Gronewold \u003cnewyorkplaybook@politico.com\u003e",
    "snippet": "Presented by the Healthcare Education Project: Erin Durkin and Anna Gronewold\u0026#39;s must-read briefing informing the daily conversation among knowledgeable New Yorkers Jan 22, 2020 View in browser By",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcd30e9f7c2b86",
    "date": "2020-01-22T06:52:54.000-05:00",
    "subject": "531 new arrivals for 365",
    "from": "\"J.Crew\" \u003cjcrew@email.jcrew.com\u003e",
    "snippet": "Shop all new arrivals View on a web browser J.CREW Hi James! You have $5 in rewards! YOUR POINTS: 283 ‡Subject to credit approval. J.Crew Credit Card accounts are issued by Comenity Bank. Please add",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd247e75f8da0",
    "date": "2020-01-22T07:04:51.000-05:00",
    "subject": "The Eye-Opener: Cuomo Proposes $178 Billion Budget, Closing $6.1 Billion Gap and Funding Top Priorities",
    "from": "Gotham Gazette \u003cinfo@gothamgazette.com\u003e",
    "snippet": "The Eye-Opener Gotham Gazette\u0026#39;s must-read start to your day in New York politics ***** Good morning. It\u0026#39;s Wednesday, January 22. Mayor de Blasio is in Washington, DC for the United States",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fccf10b47de206",
    "date": "2020-01-22T06:09:06.000-05:00",
    "subject": "Yesterday on Loomio",
    "from": "Loomio \u003cnotifications@loomio.org\u003e",
    "snippet": "Please do not reply to this email. Yesterday on Loomio We Are Here (JFREJ \u0026amp; The Jewish Vote) Organizing Jewishly Language We Are Here (JFREJ \u0026amp; The Jewish Vote) Organizing Jewishly Language",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcceab656ee3b7",
    "date": "2020-01-22T06:02:01.000-05:00",
    "subject": "POLITICO Playbook: Why Democrats and Republicans are winning on impeachment",
    "from": "Anna Palmer and Jake Sherman \u003cpoliticoplaybook@politico.com\u003e",
    "snippet": "Presented by Blue Cross Blue Shield Association: Rated the #1 political newsletter by political professionals. Jan 22, 2020 View in browser By Anna Palmer and Jake Sherman Presented by Play audio",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fccea8cf3e80f3",
    "date": "2020-01-22T06:01:34.000-05:00",
    "subject": "Hurry! Save up to 50% ends tonight!",
    "from": "AJ Madison \u003cajmadison@e.ajmadison.com\u003e",
    "snippet": "Final hours to get 18 month interest free financing ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fccd0e0205637c",
    "date": "2020-01-22T05:33:54.000-05:00",
    "subject": "Ballotpedia's Daily Brew: Briefing today - The 2020 intraparty conflicts in key races",
    "from": "Dave Beaudoin \u003cdave@ballotpedia.org\u003e",
    "snippet": "Today\u0026#39;s Brew summarizes our Jan. 22 webinar on 2020 congressional primary battlegrounds + looks at upcoming filing deadlines The Daily Brew Welcome to the Wednesday, Jan. 22, Brew. Here\u0026#39;s",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcc6168877699d",
    "date": "2020-01-22T03:32:12.000-05:00",
    "subject": "\"American journalist Glenn Greenwald charged with cybercrimes in Bra...",
    "from": "Twitter \u003cinfo@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "IMPORTANT",
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fcc35cb2e4ca76",
    "date": "2020-01-21T20:43:13.000-05:00",
    "subject": "Help us protect you: Security advice from Google",
    "from": "Google \u003cno-reply@accounts.google.com\u003e",
    "snippet": "Remove risky access to your data jas.schaffer@gmail.com Some apps or services you allowed to access your Google Account have not been verified by Google. Since they have extensive access to your",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fcc0f5d1a7619e",
    "date": "2020-01-22T02:02:35.000-05:00",
    "subject": "Summary of failures for Google Apps Script: Copy of PodioGs",
    "from": "apps-scripts-notifications@google.com",
    "snippet": "Your script, Copy of PodioGs, has recently failed to finish successfully. A summary of the failure(s) is shown below. To configure the triggers for this script, or change your setting for receiving",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcb97dec6289e6",
    "date": "2020-01-21T23:52:04.000-05:00",
    "subject": "Your Canva invoice",
    "from": "Canva \u003cno-reply@canva.com\u003e",
    "snippet": "Your Invoice Thank you for your purchase! Your invoice details are below. Tax Invoice #02577-4004343 View details Date: Jan 22, 2020 Brand id: BADr4g3n-nc Billed to: American Express xxxx xxxx xxxx",
    "labels": [
      "Label_18",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcb4a0c5dc7ad9",
    "date": "2020-01-21T22:26:52.000-05:00",
    "subject": "Re: data-vis links +",
    "from": "Eric Schwartz \u003cschwartz.eric.b@gmail.com\u003e",
    "snippet": "Hey James! Happy New Year! (I can still say that, right?) Yes, you have told us about JFREJ! It is an awesome organization! On The Metal resonates with me on lots of levels. I worked as part of a 2",
    "labels": [
      "Label_18",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fcae554e559c20",
    "date": "2020-01-21T20:16:52.000-05:00",
    "subject": "Final hours! Extra 50% off sale styles ends tonight!",
    "from": "\"J.Crew\" \u003cjcrew@email.jcrew.com\u003e",
    "snippet": "Last chance for 30% off almost everything else too View on a web browser J.CREW Hi James! You have $5 in rewards! YOUR POINTS: 283 *50% discount valid on the purchase of sale items in J.Crew stores and",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcad7d2bdfa4a1",
    "date": "2020-01-21T20:22:19.000-05:00",
    "subject": "Final Hours! 25% Off Cold Weather Ends Soon",
    "from": "The Frye Company \u003cemail@p.thefryecompany.com\u003e",
    "snippet": "Enter Code Chilly at Checkout. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcac6615147cb8",
    "date": "2020-01-21T20:03:15.000-05:00",
    "subject": "February Need to Know -- Answering the Important Questions",
    "from": "May First Movement Technology \u003cinfo@mayfirst.org\u003e",
    "snippet": "We have some pretty heavy questions to ask as we go into 2020. What are the key technology issues facing our movement? How important is our work around abusive companies like Amazon? What do we, as a",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fca92f6fd82757",
    "date": "2020-01-21T19:05:57.000-05:00",
    "subject": "NYS Tax Department: Learn about Free File options—you may be eligible to file your taxes for free!",
    "from": "New York State Department of Taxation and Finance \u003cinformation@messages.tax.ny.gov\u003e",
    "snippet": "Having trouble viewing this email? View it as a webpage. If you (or someone you know) will be reporting income of $69000 or less on your 2019 personal income tax return, you may be able to",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fca8f73886e640",
    "date": "2020-01-21T19:02:50.000-05:00",
    "subject": "Save on LED Bulbs for a Brighter Home in 2020",
    "from": "Con Edison Energy Efficiency \u003cConEdison@email.coned.com\u003e",
    "snippet": "New year, new lights ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ New year, new lights View Online conEdison conEdison A Brighter Year Ahead",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fca475736d0f9f",
    "date": "2020-01-21T17:44:26.000-05:00",
    "subject": "Your ride with saliho on January 20",
    "from": "Lyft Ride Receipt \u003cno-reply@lyftmail.com\u003e",
    "snippet": "Thanks for riding with saliho! ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fca20acdc912d5",
    "date": "2020-01-21T17:01:13.000-05:00",
    "subject": "It’s a bad flu season, but we’re here to help",
    "from": "One Medical \u003cadmin@access.onemedical.com\u003e",
    "snippet": "Protect yourself and the people around you during this severe flu season. One Medical Stay healthy this flu season We\u0026#39;re in the midst of a bad flu season and people of all ages are getting",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fca1398db89f8e",
    "date": "2020-01-21T16:47:58.000-05:00",
    "subject": "What is causing this sudden surge in Bitcoin (and other cryptocurrencies) price today...?",
    "from": "Quora Digest \u003cdigest-noreply@quora.com\u003e",
    "snippet": "Answer: And we are back in the game with one final big green Jesus candle exac.​.​.​ Quora James\u0026#39;s Digest Top Stories For You What is causing this sudden surge in Bitcoin (and other",
    "labels": [
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fca07821cdaee5",
    "date": "2020-01-21T16:31:46.000-05:00",
    "subject": "ROLLING STONE | America’s Radioactive Secret",
    "from": "Audm \u003csupport@audm.com\u003e",
    "snippet": "PLUS: The Secret History of Facial Recognition Can\u0026#39;t see images? Click here. America\u0026#39;s Radioactive Secret Justin Nobel | Rolling Stone Oil-and-gas wells produce nearly a trillion gallons of",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9feea3f32204",
    "date": "2020-01-21T16:25:08.000-05:00",
    "subject": "Join this Sunday’s Beit Midrash exploring the “Jewish” in the Jewish Left",
    "from": "\"Jews For Racial \u0026 Economic Justice\" \u003cinfo@jfrej.org\u003e",
    "snippet": "No images? Click here Dear James, Join us this Sunday, January 26th, 1-5pm (note time change from earlier email!) at the Harlem JCC for a JFREJ We Are Here Beit Midrash, (house of study) focused on",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9f6957c2b69b",
    "date": "2020-01-21T16:16:16.000-05:00",
    "subject": "#BetaNYC, NYC's open data, open gov, \u0026 civic tech community list: \"Tomorrow at 6PM - Learn to use NYC Open Data in North Brooklyn!\"",
    "from": "\"Kate Nicholson (Meetup)\" \u003cbetaNYC-announce@meetup.com\u003e",
    "snippet": "Meetup Kate Nicholson (Co-Organizer) sent a message to the #BetaNYC, NYC\u0026#39;s open data, open gov, \u0026amp; civic tech community mailing list Tomorrow at 6PM - Learn to use NYC Open Data in North",
    "labels": [
      "CATEGORY_FORUMS"
    ]
  },
  {
    "google_id": "16fc9ee7f0a30d8e",
    "date": "2020-01-21T16:07:27.000-05:00",
    "subject": "Live Tomorrow | Latest Zoom Product Release",
    "from": "Zoom Video Communications \u003cwebinars@zoom.us\u003e",
    "snippet": "There is still time to register for our webinar tomorrow! Join Zoom experts to dive into our latest product release. Header Logo Sign In Ringing in the New Year with Zoom Phone \u0026amp; Zoom Rooms",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9de6614a33f3",
    "date": "2020-01-21T10:05:34.000-05:00",
    "subject": "NO A/C x Half Moon x PERK Takeover, Banoffee, Anna Burch, Long Beard",
    "from": "The Dance NYC \u003cdance@thedance.nyc\u003e",
    "snippet": "free dance parties ! freshly announced shows ! The Dance ✦ can i have this dance (づ｡◕‿‿◕｡)づ ? ☾ upcoming picks below + full calendar here ☼ this week ( -˘◡˘-) [TONIGHT] 01/21: Hard Salon w/ HBIC, Dead",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9d66b40bdceb",
    "date": "2020-01-21T15:41:09.000-05:00",
    "subject": "Re: [move-coop/parsons] Build Azure Class (#73)",
    "from": "elyse-weiss \u003cnotifications@github.com\u003e",
    "snippet": "We talked about this today! — You are receiving this because you are subscribed to this thread. Reply to this email directly, view it on GitHub, or unsubscribe.",
    "labels": [
      "IMPORTANT",
      "CATEGORY_FORUMS"
    ]
  },
  {
    "google_id": "16fc9d4e5cd2e8f3",
    "date": "2020-01-21T15:39:29.000-05:00",
    "subject": "What an accounting firm looks like that's equipped to grow.",
    "from": "Lachlan from Karbon \u003clachlan@karbonhq.com\u003e",
    "snippet": "Weekly article — Karbon Magazine The blueprint for growing your accounting firm in 2020 Many accounting firm owners associate growth with pain. From finding and keeping great people, to maintaining",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9cbcd94731ed",
    "date": "2020-01-21T15:29:17.000-05:00",
    "subject": "Investments in 2020",
    "from": "\"Service Account | CIT\" \u003ccustomer@cit.com\u003e",
    "snippet": "A recent CIT survey of more than 300 small business owners and executives shows that adding inventory, marketing, advertising and equipment upgrades are among the top investments they\u0026#39;re planning",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9bf85fc301a9",
    "date": "2020-01-21T15:15:55.000-05:00",
    "subject": "We are Moving....",
    "from": "ArtScroll BookNews \u003cemailupdates@artscroll.com\u003e",
    "snippet": "Moving Day You have $0 ready to use, POINTS TO NEXT REWARD: 116 CONNECT WITH US! Check out the ArtScroll Digital Library app! Download NOW to get FREE samples of our bestselling Digital Editions! *FREE",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9b8d8753ec4b",
    "date": "2020-01-21T15:08:46.000-05:00",
    "subject": "Join me next week: \"Potential History, Decolonization, and Palestine\"",
    "from": "\"Rabbi Alissa Wise, JVP\" \u003cinfo@jewishvoiceforpeace.org\u003e",
    "snippet": "Dear James, Please join us next week for a talk with Ariella Azoulay, author of Potential Histories: Unlearning Imperialism. Ariella Azoulay on Potential History, Decolonization, and Palestine Tuesday,",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9b3190af402e",
    "date": "2020-01-21T15:02:34.000-05:00",
    "subject": "hi. i need an outbound message",
    "from": "James Schaffer \u003cjas.schaffer@gmail.com\u003e",
    "snippet": "Cool?",
    "labels": [
      "SENT"
    ]
  },
  {
    "google_id": "16fc9965a98f9cad",
    "date": "2020-01-21T14:31:00.000-05:00",
    "subject": "Dojo first aid",
    "from": "K Barber \u003ckbarbersound@gmail.com\u003e",
    "snippet": "Hey Jason! I hope you are well and happy new year! James and I are working on an inventory list for the dojo and I was wondering if you could help us out with the first aid supplies and what is good to",
    "labels": [
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fc995e724305cb",
    "date": "2020-01-21T14:30:41.000-05:00",
    "subject": "Next Week: Nicholas Kristof \u0026 Sheryl WuDunn on TIGHTROPE",
    "from": "The Temple Emanu-El Streicker Center \u003cinfo@emanuelstreickernyc.org\u003e",
    "snippet": "Tuesday, January 28 | 6:30 PM $36 includes a copy of the book America\u0026#39;s Working Class Crisis For almost two decades, the New York Times columnist Nicholas Kristof has traveled the globe to put",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc973ec3b2ed1d",
    "date": "2020-01-21T13:34:52.000-05:00",
    "subject": "Your Aquarius Season Horoscopes",
    "from": "Chani Nicholas \u003cchani.nicholas@chaninicholas.com\u003e",
    "snippet": "Happy birthday, Aquarius View this email in your browser Horoscopes for Aquarius Season These horoscopes are from my monthly column on OprahMag.com Aquarius Season begins with a bang. The New Moon on",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc96e8b0c1ea43",
    "date": "2020-01-21T13:47:41.000-05:00",
    "subject": "@jasschaffer, check out the notifications you have on Twitter",
    "from": "Twitter \u003cnotify@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fc96d82cc452a1",
    "date": "2020-01-21T13:46:30.000-05:00",
    "subject": "James - How could a business loan help you grow?",
    "from": "PayPal \u003cpaypal@mail.paypal.com\u003e",
    "snippet": "James Schaffer - \u0026quot;We\u0026#39;re so grateful to be able to continue this work.\u0026quot; Caitlin Crosby Benward, The Giving Keys View Online Hero Image \u0026quot;The PayPal Business Loan helped us build our",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "Label_51"
    ]
  },
  {
    "google_id": "16fc9621513d566e",
    "date": "2020-01-21T13:28:37.000-05:00",
    "subject": "How to Read Your Medical Bill",
    "from": "Zocdoc \u003cservice@mail2.zocdoc.com\u003e",
    "snippet": "No one enjoys scrutinizing lists of billing codes. But a lot of medical bills have errors, so it\u0026#39;s important to go through each one carefully. This guide explains how. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9565559f7ad2",
    "date": "2020-01-21T13:04:08.000-05:00",
    "subject": "This week's events at Mayday + Starr Bar",
    "from": "\"Mayday Space \u0026 Starr Barr\" \u003cinfo@maydayspace.org\u003e",
    "snippet": "Upcoming events at Mayday \u0026amp; Starr Bar Mayday Space and Starr Bar are both in Bushwick, BK a short walk from each other Presentation Party | Monday, January 20th, 7pm @ Starr Bar (214 Starr street)",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9550adc6278d",
    "date": "2020-01-21T13:19:51.000-05:00",
    "subject": "Re: Trupo: Building a support system for freelancers",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT"
    ]
  },
  {
    "google_id": "16fc954fe2e87ea0",
    "date": "2020-01-21T13:04:29.000-05:00",
    "subject": "Trupo: Building a support system for freelancers ",
    "from": "Freelancers Union \u003cannouncements@freelancersunion.org\u003e",
    "snippet": "Dear freelancer, Let\u0026#39;s say you broke your arm on a ski trip. You either lose money for all the days you don\u0026#39;t work, or you end up trying to churn out three drafts per day with only your left",
    "labels": [
      "CATEGORY_PROMOTIONS"
    ]
  },
  {
    "google_id": "16fc94ac187e1d38",
    "date": "2020-01-21T13:08:36.000-05:00",
    "subject": "Great Wolf Lodge in New England | 4-Star Foxwoods Casino Resort | Great Wolf Lodge in the Poconos",
    "from": "Groupon Getaways \u003cnoreply@r.groupon.com\u003e",
    "snippet": "Stay with daily water park passes | Groupon Getaways View All Getaways Deals » Great Wolf Lodge Water Park Outside Boston Great Wolf Lodge Water Park Outside Boston Fitchburg, MA — Great Wolf Lodge",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc948322d633fd",
    "date": "2020-01-21T13:04:29.000-05:00",
    "subject": "Trupo: Building a support system for freelancers ",
    "from": "Freelancers Union \u003cannouncements@freelancersunion.org\u003e",
    "snippet": "Dear freelancer, Let\u0026#39;s say you broke your arm on a ski trip. You either lose money for all the days you don\u0026#39;t work, or you end up trying to churn out three drafts per day with only your left",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc944f1da7ec68",
    "date": "2020-01-21T13:01:57.000-05:00",
    "subject": "Dacor |  Save up to 20% with the 5•10•20 Promotion",
    "from": "AJ Madison \u003cajmadison@e.ajmadison.com\u003e",
    "snippet": "Shop our top picks in Dacor kitchen packages ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc92e3a3eb33a2",
    "date": "2020-01-21T12:24:14.000-05:00",
    "subject": "Sale ends today!",
    "from": "\"Levi's® Premium Warehouse Event\" \u003clevis@e.levi.com\u003e",
    "snippet": "Your last chance to save big on our elevated styles. Your last chance to save big on our elevated styles. Levi\u0026#39;s Ends Today UP TO 75% OFF. ENTER THE SALE WAREHOUSE EVENT UP TO 75% OFF Top products.",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc925ee66b1c24",
    "date": "2020-01-21T12:28:24.000-05:00",
    "subject": "Re: Showing Up with Renewed Hope",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT"
    ]
  },
  {
    "google_id": "16fc925e578e5587",
    "date": "2020-01-21T12:28:18.000-05:00",
    "subject": "Showing Up with Renewed Hope",
    "from": "SURJ NYC \u003cinfo@email.actionnetwork.org\u003e",
    "snippet": "Hi James, As the Senate begins impeachment trial proceedings today, we may find our hope in our representatives\u0026#39; ability to do impartial justice waning. However, the past few days have given us",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc925c9a3e9816",
    "date": "2020-01-21T12:28:12.000-05:00",
    "subject": "Showing Up with Renewed Hope",
    "from": "SURJ NYC \u003cinfo@email.actionnetwork.org\u003e",
    "snippet": "Hi James, As the Senate begins impeachment trial proceedings today, we may find our hope in our representatives\u0026#39; ability to do impartial justice waning. However, the past few days have given us",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9247844fe43c",
    "date": "2020-01-21T12:26:47.000-05:00",
    "subject": "The Post Most: Senators prepare for spirited debate over rules governing Trump’s impeachment trial",
    "from": "The Washington Post \u003cemail@washingtonpost.com\u003e",
    "snippet": "How Mitch McConnell\u0026#39;s proposed Senate trial will work;... | Presented by Refinitiv ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc907b19bd6fbb",
    "date": "2020-01-21T11:55:22.000-05:00",
    "subject": "Re: Security alert for your linked Google Account",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT"
    ]
  },
  {
    "google_id": "16fc907a8288bd29",
    "date": "2020-01-21T11:55:16.000-05:00",
    "subject": "Security alert for your linked Google Account",
    "from": "Google \u003cno-reply@accounts.google.com\u003e",
    "snippet": "Your account james.schaffer@mac.com is listed as the recovery email for jas.schaffer@gmail.com. Don\u0026#39;t recognize this account? Click here Z-Mail by James \u0026amp; Zalmy was granted access to your",
    "labels": [
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fc9079d939480c",
    "date": "2020-01-21T11:55:16.000-05:00",
    "subject": "Security alert",
    "from": "Google \u003cno-reply@accounts.google.com\u003e",
    "snippet": "Z-Mail by James \u0026amp; Zalmy was granted access to your Google Account jas.schaffer@gmail.com If you did not grant access, you should check this activity and secure your account. Check activity You",
    "labels": [
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fc8e3594cf016e",
    "date": "2020-01-21T11:15:38.000-05:00",
    "subject": "It's time for a delivery.",
    "from": "Seamless \u003cemail@a.seamless.com\u003e",
    "snippet": "Don\u0026#39;t question it. Just order. Seamless What\u0026#39;s on the menu today TOP-RATED RESTAURANTS NEAR YOU Yao Asian Fusion 427 1.2 Miles Away Order To Be Thai 4421 0.1 Miles Away Order New York Yummy",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8dd1e826b1d6",
    "date": "2020-01-21T11:08:11.000-05:00",
    "subject": "File Your 1099-MISC Today",
    "from": "Marcum \u003cinfo@marcumllp.com\u003e",
    "snippet": "1099-Prep.com is designed to satisfy your 1099-MISC preparation needs Marcum LLP A New Cost-Effective, Technology-Driven 1099-MISC Preparation Solution for your Clients The New Cost-Effective,",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8dc6a177669b",
    "date": "2020-01-21T11:08:02.000-05:00",
    "subject": "Covering, curating, and cataloging American politics",
    "from": "Leslie Graves \u003cleslie.b.graves@ballotpedia.org\u003e",
    "snippet": "A powerful way you can help us provide bias-free info about elections View this email in your browser. The Ballotpedia Society Dear Reader, I just wanted to send a quick follow-up to you regarding my",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8d6d771e8e8a",
    "date": "2020-01-21T11:01:58.000-05:00",
    "subject": "What You Need to Know Before Senate Impeachment Trial Starts this Afternoon",
    "from": "Nicole Lafond \u003cnicole@talkingpointsmemo.com\u003e",
    "snippet": "Hello TPM Members, Last night, Senate Majority Leader Mitch McConnell (R-KY) unveiled the rules package he\u0026#39;ll officially propose on the Senate floor this afternoon, outlining what appears to be a",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "IMPORTANT"
    ]
  },
  {
    "google_id": "16fc8d0d027fc69b",
    "date": "2020-01-21T10:55:10.000-05:00",
    "subject": "The JVP Wire 1/21/2019",
    "from": "Sonya Meyerson-Knox \u003csonya@jewishvoiceforpeace.org\u003e",
    "snippet": "Good morning all, and happy belated Martin Luther King Jr. day. The Charlotte Observer republished Let\u0026#39;s remember the MLK who wasn\u0026#39;t liked. Israel/Palestine News: On Monday, Israeli authorities",
    "labels": [
      "CATEGORY_FORUMS"
    ]
  },
  {
    "google_id": "16fc8cfd78ce04f6",
    "date": "2020-01-21T10:53:44.000-05:00",
    "subject": "[ staff \u0026 board ] TONIGHT 1/21 @ 7pm: Help plan 2/24 Membership Assembly!",
    "from": "Keren Soffer-Sharon \u003ckeren@jfrej.org\u003e",
    "snippet": "Hey folks, Excited to talk with many of you tonight at 7pm. Be sure to register below for the zoom link. This call will be an hour long. On Mon, Jan 13, 2020 at 12:53 PM Keren Soffer-Sharon \u0026lt;keren@",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8ce5b78c019e",
    "date": "2020-01-21T10:52:20.000-05:00",
    "subject": "💥📣 Up to -25% Boatshow Discounts",
    "from": "Susana from Boatjump \u003csusana.s@boatjump.com\u003e",
    "snippet": "🌴⛵ Let\u0026#39;s celebrate together the Boatshow in Düsseldorf This month enjoy Boatshow prices! Take advantage of the great discounts from the Düsseldorf Boatshow up to -25%!* Discounts are available to",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8becbccc7122",
    "date": "2020-01-21T10:35:43.000-05:00",
    "subject": "AT\u0026T Payment Processed for Account Ending in 8555",
    "from": "\"AT\u0026T Account Management\" \u003cupdate@emaildl.att-mail.com\u003e",
    "snippet": "myAT\u0026amp;T AT\u0026amp;T payment confirmation Hi JAMES, We\u0026#39;ve received your payment. Service: Wireless Account number: ending in 8555 Amount: $107.78 Payment date: 01/21/2020 Payment method: American",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8ab2829c1f01",
    "date": "2020-01-21T10:14:15.000-05:00",
    "subject": "2020 Summer Reservations",
    "from": "Putnam Camp \u003cputnamcampkv@gmail.com\u003e",
    "snippet": "2020 Reservation Letter Dear Putnam Camper, We hope that you will make a return to Putnam Camp part of your 2020 summer plans. And we very much encourage you to introduce your friends to Camp. The",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8a3850479b37",
    "date": "2020-01-21T10:02:42.000-05:00",
    "subject": "Congratulations! $99 Down - 9 Payments - NO Interest",
    "from": "\"BookIt.com Specials\" \u003cNoReply@e.bookit.com\u003e",
    "snippet": "BEST of BookIt: Up to 70% Off Top All-Inclusive Resorts Plus Book It for Only $99 Down! ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8a0eacd5b202",
    "date": "2020-01-21T10:01:42.000-05:00",
    "subject": "First Post: Facing Facts",
    "from": "Civicist \u003cinfo@civichall.org\u003e",
    "snippet": "A new privacy nightmare; more advocacy tech; the case for digital public infrastructure, and more January 21, 2020 First Post Micah L. Sifry Facing Facts This is civic tech: Cofacts, a collaborative",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fc8a02348f7987",
    "date": "2020-01-21T10:02:12.000-05:00",
    "subject": "Create a calendar homepage and add your photo",
    "from": "Ammon Brown \u003cammon@human.x.ai\u003e",
    "snippet": "Let your guests choose the type of meeting they want to book ‌ ‌ ‌ Make x.ai your own Today your calendar page got a huge upgrade! You can now share your calendar homepage directly with guests and they",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8a012f220661",
    "date": "2020-01-21T10:01:52.000-05:00",
    "subject": "Welcome Jo Ann \u0026 Saima",
    "from": "generative somatics \u003cinfo@generativesomatics.org\u003e",
    "snippet": "Having trouble viewing this email? View as a webpage in your browser. We\u0026#39;re thrilled in welcome Jo Ann Prompongsatorn Farrant and Saima Husain to gs staff! Please also note that applications for",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fc885355cc18f6",
    "date": "2020-01-21T09:30:12.000-05:00",
    "subject": "Save 15% On South American Wine | Malbec, Pinot Noir \u0026 More",
    "from": "\"Astor Wines \u0026 Spirits\" \u003cinfo@astorwines.com\u003e",
    "snippet": "Chile \u0026amp; Argentina. No images? Click here Shop Astor Wines \u0026amp; Spirits. Sun-drenched, fruit-forward reds and zesty, tropical whites. 15% Off Tuesday: South America Today, January 21, 2020 Only*",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc882ba101d85e",
    "date": "2020-01-21T09:30:05.000-05:00",
    "subject": "TPM Briefing: Impeachment and Lev Parnas",
    "from": "John Light \u003cjohn@talkingpointsmemo.com\u003e",
    "snippet": "Hello TPM Members, Today, one hour before the impeachment trial gets started in the Senate, join Josh Marshall, Josh Kovensky and Matt Shuham for a briefing on what to expect. We\u0026#39;ll also take a",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8682934b8440",
    "date": "2020-01-21T09:00:55.000-05:00",
    "subject": "Leadership Dojo Recap on Resilience: Life’s Movement is Toward Wholeness, Connection, and Fulfillment",
    "from": "Strozzi Institute \u003calumni@strozziinstitute.com\u003e",
    "snippet": "Recording now available! Knowledge is only rumor until it lives in the muscles. ﻿We gathered for the 1st session of the Leadership Dojo on Jan. 14th. Here\u0026#39;s the recap: Resilience: Life\u0026#39;s",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc85e62f97c8a0",
    "date": "2020-01-21T08:50:00.000-05:00",
    "subject": "Getting Started with Rails 6 and React | Spike Burton in The Startup",
    "from": "Medium Daily Digest \u003cnoreply@medium.com\u003e",
    "snippet": "Stories for James Schaffer Today\u0026#39;s highlights Getting Started with Rails 6 and React Rails version 6 is out! One of the most exciting things about the newest release of Rails is the treatment of…",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc859c7fe414a8",
    "date": "2020-01-21T08:45:15.000-05:00",
    "subject": "Our $113 sale ends Thursday.",
    "from": "\"Southwest Click 'N Save\" \u003cSouthwestAirlines@iluv.southwest.com\u003e",
    "snippet": "Leave New York Area behind this spring. View in web browser | View our mobile site Hi James 0 points | RR# 20138834063 Southwest Air | Hotel | Car | Vacations | Rapid Rewards® Click \u0026#39;N Save January",
    "labels": [
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc848b967e32db",
    "date": "2020-01-21T07:48:25.000-05:00",
    "subject": "Extra 50% off sale styles ends TONIGHT",
    "from": "\"J.Crew\" \u003cjcrew@email.jcrew.com\u003e",
    "snippet": "And so does 30% off full-price styles! Get in there! View on a web browser J.CREW Hi James! You have $5 in rewards! YOUR POINTS: 283 *50% discount valid on the purchase of sale items in J.Crew stores",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc840516325fa9",
    "date": "2020-01-21T08:17:35.000-05:00",
    "subject": "\"Documenting the battle between cats and tuna\" Moment",
    "from": "Twitter \u003cinfo@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "IMPORTANT",
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fce2e1d764ed3d",
    "date": "2020-01-22T11:55:25.000-05:00",
    "subject": "Re: [move-coop/parsons] Salesforce class (#82)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "@ydamit pushed 1 commit. 4675ee4 init fix — You are receiving this because you are subscribed to this thread. View it on GitHub or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce2961e193719",
    "date": "2020-01-22T11:50:15.000-05:00",
    "subject": "Re: [move-coop/parsons] Salesforce class (#82)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "@ydamit pushed 1 commit. 3e5c232 Merge branch \u0026#39;master\u0026#39; into salesforce_class — You are receiving this because you are subscribed to this thread. View it on GitHub or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce271d8951c77",
    "date": "2020-01-22T11:47:47.000-05:00",
    "subject": "Re: [move-coop/parsons] Salesforce class (#82)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "@ydamit pushed 2 commits. 66f85da added test methods 6c39a32 linting — You are receiving this because you are subscribed to this thread. View it on GitHub or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce04a34e30c1d",
    "date": "2020-01-22T11:07:38.000-05:00",
    "subject": "Ballotpedia Society members help us do it all",
    "from": "Leslie Graves \u003cleslie.b.graves@ballotpedia.org\u003e",
    "snippet": "I look forward to hearing from you! View this email in your browser. Help Ballotpedia be there Dear Reader, I know you\u0026#39;re busy, so I\u0026#39;ll get right to the point… I recently sent you an invitation",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fce03612aaa35e",
    "date": "2020-01-22T11:08:44.000-05:00",
    "subject": "Re: [move-coop/parsons] added trailing slash to generic action endpoint (#135)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "Closed #135. — You are receiving this because you are subscribed to this thread. Reply to this email directly, view it on GitHub, or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce035a2204b78",
    "date": "2020-01-22T11:08:43.000-05:00",
    "subject": "Re: [move-coop/parsons] added trailing slash to generic action endpoint (#135)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "False alarm. — You are receiving this because you are subscribed to this thread. Reply to this email directly, view it on GitHub, or unsubscribe.",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fce01580d5366f",
    "date": "2020-01-22T11:06:30.000-05:00",
    "subject": "What are Merkle Trees?",
    "from": "Codementor \u003csupport@codementor.io\u003e",
    "snippet": "Codementor Weekly Newsletter - January 22, 2020 Hey James, Are we finally getting an affordable iPhone soon? This week\u0026#39;s standout posts Blockchain: Merkle Trees: What They Are and the Problems They",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcdfdd18c2aa81",
    "date": "2020-01-22T11:02:36.000-05:00",
    "subject": "New England Before Colonization, Reconsidered",
    "from": "John Rosenberg at Harvard Magazine \u003charvard_magazine@harvard.edu\u003e",
    "snippet": "Before Europeans arrived in New England, local ecology was driven by climate shifts, not by human interventions. *|MC_PREVIEW_TEXT|* Editor\u0026#39;s Highlights New England\u0026#39;s Forest Primeval Before",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdfcdb31bb181",
    "date": "2020-01-22T11:00:59.000-05:00",
    "subject": "Executive Budget Ignores Public Housing",
    "from": "Harvey Epstein \u003charvepstein@gmail.com\u003e",
    "snippet": "Dear Friend, This week, the Governor made his Executive Budget presentation, outlining his funding and policy priorities for the FY 2021 budget. I was shocked and disappointed to see that he omitted",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcded3f0fc5768",
    "date": "2020-01-22T10:44:33.000-05:00",
    "subject": "Social Media Producer at Shutterstock and 9 other jobs for you.",
    "from": "LinkedIn \u003cjobs-listings@linkedin.com\u003e",
    "snippet": "James Schaffer, Shutterstock and 9 others have jobs for you. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "UNREAD",
      "CATEGORY_SOCIAL",
      "INBOX",
      "UNREAD",
      "CATEGORY_SOCIAL",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcddfac6ca5cba",
    "date": "2020-01-22T10:29:41.000-05:00",
    "subject": "Void \u0026 Co.| HtBaF | Petrina Ng",
    "from": "OPEN SOURCE \u003ccontact@opensourcegallery.org\u003e",
    "snippet": "Welcome to the New Year!Please join us at our first exhibition program of 2020:Void \u0026amp; Co.: The Octopus Waffle Lab February 26-March 28, 2020 Openi Welcome to the New Year! Please join us at our",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcdd7baff80b4e",
    "date": "2020-01-22T10:21:03.000-05:00",
    "subject": "Judy Feimer",
    "from": "\"Saint Ann's School\" \u003cm@mail2.veracross.com\u003e",
    "snippet": "Dear Faculty, Former Faculty, and Alumni, With heavy hearts, we write to let you know of the passing of Judy Feimer, who taught math at Saint Ann\u0026#39;s from 1974 until she retired in 2006. Below is a",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdcade4c18931",
    "date": "2020-01-22T10:07:02.000-05:00",
    "subject": "Use your Bediversary gift before it's gone...",
    "from": "Casper \u003csupport@mail.casper.com\u003e",
    "snippet": "33 days left for 10% off. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcdca4433a2e1f",
    "date": "2020-01-22T10:05:28.000-05:00",
    "subject": "The hard work of hope",
    "from": "\"Darren Walker, Ford Foundation President\" \u003cDarrenWalker.President@fordfoundation.org\u003e",
    "snippet": "LATEST NEWS | JANUARY 22, 2020 View this email in your browser Illustration of people helping each other open a door in a globe to let out the doves. Illustration by Martin Leon Barretto Illustration",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdc822eefe423",
    "date": "2020-01-22T10:01:51.000-05:00",
    "subject": "🎉  TODAY: $99 Down - 9 Payments - NO Interest!",
    "from": "\"BookIt.com Specials\" \u003cNoReply@e.bookit.com\u003e",
    "snippet": "$99 All-Inc Cancun, $100 All-Inc Jamaica, Plus Book It for Only $99 Down w/ PayDelay! ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdc6c0e1bbbec",
    "date": "2020-01-22T10:01:11.000-05:00",
    "subject": "Save the Date: April 14, 2020!",
    "from": "\"Kofo Anifalaje, North Star Fund\" \u003chello@northstarfund.org\u003e",
    "snippet": "Hi James, I sure hope to see you at our biggest party of the year! Save the Date April 14 2020 for our Community Gala Hi James, Mark your calendar! We\u0026#39;ve set the date for the 2020 North Star Fund",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcdb3c3aa37b1e",
    "date": "2020-01-22T09:41:47.000-05:00",
    "subject": "[move-coop/parsons] added trailing slash to generic action endpoint (#135)",
    "from": "ydamit \u003cnotifications@github.com\u003e",
    "snippet": "Oh the difference one character can make... You can view, comment on, or merge this pull request online at: https://github.com/move-coop/parsons/pull/135 Commit Summary added trailing slash to generic",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcd908a0cf187b",
    "date": "2020-01-22T09:03:17.000-05:00",
    "subject": "Color and Blow Dry",
    "from": "Groupon New York City \u003cnoreply@r.groupon.com\u003e",
    "snippet": "James\u0026#39;s New York City Deals | January 22, 2020 | Groupons for Food \u0026amp; Drink, Health \u0026amp; Beauty, and Things to Do GROUPON® James\u0026#39;s New York City Deals | January 22, 2020 Color and Blow Dry",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd90880359acf",
    "date": "2020-01-22T09:03:19.000-05:00",
    "subject": "Re: We’re going to Microsoft HQ!",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT",
      "SENT"
    ]
  },
  {
    "google_id": "16fcd8ef9448f39e",
    "date": "2020-01-22T09:01:36.000-05:00",
    "subject": "🥪 Tweeted: The California that this has",
    "from": "Twitter \u003cinfo@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_SOCIAL",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_SOCIAL",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcd84954cfcbb5",
    "date": "2020-01-22T08:50:00.000-05:00",
    "subject": "Statically-typed Ruby: Introducing Sorbet | Peter Ayeni in Better Programming",
    "from": "Medium Daily Digest \u003cnoreply@medium.com\u003e",
    "snippet": "Stories for James Schaffer Today\u0026#39;s highlights Statically-typed Ruby: Introducing Sorbet Sorbet, from Stripe — a fast, powerful type checker, designed for Ruby Peter Ayeni in Better Programming 4",
    "labels": [
      "CATEGORY_UPDATES",
      "INBOX",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fcd64d956b11b5",
    "date": "2020-01-22T08:15:32.000-05:00",
    "subject": "Kings County Politics Morning News Bites Jan. 22, 2020",
    "from": "Kings County Politics \u003cstephenWitt@kingscountypolitics.com\u003e",
    "snippet": "\u0026quot;Wise men, when in doubt whether to speak or to keep quiet, give themselves the benefit of the doubt, and remain silent.\u0026quot; - Napoleon Hill, 1883-1970, American Writer Brooklyn Politics Morning",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd628f8bc8405",
    "date": "2020-01-22T08:13:05.000-05:00",
    "subject": "Boots Built to Last",
    "from": "The Frye Company \u003cemail@p.thefryecompany.com\u003e",
    "snippet": "Creating Icons Since 1863. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd609af0d5769",
    "date": "2020-01-22T08:05:14.000-05:00",
    "subject": "Strung Along ✒",
    "from": "The Nib \u003ccomics@thenib.com\u003e",
    "snippet": "Plus: Politics on a plate. By Matt Lubchansky Politics on a Plate By Jen Sorensen Funeral Tips to Die For! By Gemma Correll Support our comics Follow The Nib Facebook Twitter Link Link The Nib 11 NE",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd605635ec069",
    "date": "2020-01-22T08:04:37.000-05:00",
    "subject": "Up to 60% off sale begins NOW",
    "from": "Club Monaco \u003cnews@email.clubmonaco.com\u003e",
    "snippet": "Shop The End-of-Season Sale \u0026gt; If you cannot view this message, click here. GET FREE SHIPPING ON ALL ORDERS OF $99 OR MORE* WOMEN Shop Club Monaco MEN Shop All Men\u0026#39;s Sale Shop All Women\u0026#39;s",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd5b8272f016c",
    "date": "2020-01-22T08:05:24.000-05:00",
    "subject": "Re: New Year, New Deep Dives Into Equity-Focused Initiatives 🔍",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT",
      "SENT"
    ]
  },
  {
    "google_id": "16fcd5b7ab4573bc",
    "date": "2020-01-22T08:03:21.000-05:00",
    "subject": "New Year, New Deep Dives Into Equity-Focused Initiatives 🔍",
    "from": "Johnson Center for Philanthropy \u003cjcp@gvsu.edu\u003e",
    "snippet": "PLUS: Trends 2020 \u0026amp; Free CSR Event Dear Friend, Is it too late to say \u0026quot;Happy New Year\u0026quot;!? We\u0026#39;re saying it anyway — wishing our friends and colleagues an inspiring and mission-driven",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd59fb4a8e10b",
    "date": "2020-01-22T08:03:21.000-05:00",
    "subject": "New Year, New Deep Dives Into Equity-Focused Initiatives 🔍",
    "from": "Johnson Center for Philanthropy \u003cjcp@gvsu.edu\u003e",
    "snippet": "PLUS: Trends 2020 \u0026amp; Free CSR Event Dear Friend, Is it too late to say \u0026quot;Happy New Year\u0026quot;!? We\u0026#39;re saying it anyway — wishing our friends and colleagues an inspiring and mission-driven",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd59decee23af",
    "date": "2020-01-22T08:03:33.000-05:00",
    "subject": "6 Decluttering Projects You Can Do Now | Watch: Family Home Designed to Survive Wildfires | Bathroom of the Week",
    "from": "Houzz Magazine \u003cupdates@houzz.com\u003e",
    "snippet": "Blue is the new black, and other trends at the Atlanta furnishings market. Flooring, appliances and lighting popular in kitchen remodels. View in iOS app | View in browser Houzz Logo This Week on Houzz",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd4a6c934b709",
    "date": "2020-01-22T07:46:44.000-05:00",
    "subject": "Don't Miss the Saint Lucia Jazz Festival",
    "from": "Jazz at Lincoln Center \u003cjazz@jazz.org\u003e",
    "snippet": "The Saint Lucia Jazz Festival Returns with a World-Class Lineup We\u0026#39;re pleased to announce the return of the Saint Lucia Jazz Festival produced in collaboration with Jazz at Lincoln Center. The",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd33810ce3639",
    "date": "2020-01-22T07:16:48.000-05:00",
    "subject": "POLITICO New York Playbook: Bail reform pits de Blasio against progressives — Cuomo budget targets health care costs — Shelly Silver’s conviction partially overturned",
    "from": "Erin Durkin and Anna Gronewold \u003cnewyorkplaybook@politico.com\u003e",
    "snippet": "Presented by the Healthcare Education Project: Erin Durkin and Anna Gronewold\u0026#39;s must-read briefing informing the daily conversation among knowledgeable New Yorkers Jan 22, 2020 View in browser By",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcd30e9f7c2b86",
    "date": "2020-01-22T06:52:54.000-05:00",
    "subject": "531 new arrivals for 365",
    "from": "\"J.Crew\" \u003cjcrew@email.jcrew.com\u003e",
    "snippet": "Shop all new arrivals View on a web browser J.CREW Hi James! You have $5 in rewards! YOUR POINTS: 283 ‡Subject to credit approval. J.Crew Credit Card accounts are issued by Comenity Bank. Please add",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcd247e75f8da0",
    "date": "2020-01-22T07:04:51.000-05:00",
    "subject": "The Eye-Opener: Cuomo Proposes $178 Billion Budget, Closing $6.1 Billion Gap and Funding Top Priorities",
    "from": "Gotham Gazette \u003cinfo@gothamgazette.com\u003e",
    "snippet": "The Eye-Opener Gotham Gazette\u0026#39;s must-read start to your day in New York politics ***** Good morning. It\u0026#39;s Wednesday, January 22. Mayor de Blasio is in Washington, DC for the United States",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fccf10b47de206",
    "date": "2020-01-22T06:09:06.000-05:00",
    "subject": "Yesterday on Loomio",
    "from": "Loomio \u003cnotifications@loomio.org\u003e",
    "snippet": "Please do not reply to this email. Yesterday on Loomio We Are Here (JFREJ \u0026amp; The Jewish Vote) Organizing Jewishly Language We Are Here (JFREJ \u0026amp; The Jewish Vote) Organizing Jewishly Language",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcceab656ee3b7",
    "date": "2020-01-22T06:02:01.000-05:00",
    "subject": "POLITICO Playbook: Why Democrats and Republicans are winning on impeachment",
    "from": "Anna Palmer and Jake Sherman \u003cpoliticoplaybook@politico.com\u003e",
    "snippet": "Presented by Blue Cross Blue Shield Association: Rated the #1 political newsletter by political professionals. Jan 22, 2020 View in browser By Anna Palmer and Jake Sherman Presented by Play audio",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fccea8cf3e80f3",
    "date": "2020-01-22T06:01:34.000-05:00",
    "subject": "Hurry! Save up to 50% ends tonight!",
    "from": "AJ Madison \u003cajmadison@e.ajmadison.com\u003e",
    "snippet": "Final hours to get 18 month interest free financing ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fccd0e0205637c",
    "date": "2020-01-22T05:33:54.000-05:00",
    "subject": "Ballotpedia's Daily Brew: Briefing today - The 2020 intraparty conflicts in key races",
    "from": "Dave Beaudoin \u003cdave@ballotpedia.org\u003e",
    "snippet": "Today\u0026#39;s Brew summarizes our Jan. 22 webinar on 2020 congressional primary battlegrounds + looks at upcoming filing deadlines The Daily Brew Welcome to the Wednesday, Jan. 22, Brew. Here\u0026#39;s",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "UNREAD",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcc6168877699d",
    "date": "2020-01-22T03:32:12.000-05:00",
    "subject": "\"American journalist Glenn Greenwald charged with cybercrimes in Bra...",
    "from": "Twitter \u003cinfo@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "IMPORTANT",
      "CATEGORY_SOCIAL",
      "IMPORTANT",
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fcc35cb2e4ca76",
    "date": "2020-01-21T20:43:13.000-05:00",
    "subject": "Help us protect you: Security advice from Google",
    "from": "Google \u003cno-reply@accounts.google.com\u003e",
    "snippet": "Remove risky access to your data jas.schaffer@gmail.com Some apps or services you allowed to access your Google Account have not been verified by Google. Since they have extensive access to your",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_PERSONAL",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fcc0f5d1a7619e",
    "date": "2020-01-22T02:02:35.000-05:00",
    "subject": "Summary of failures for Google Apps Script: Copy of PodioGs",
    "from": "apps-scripts-notifications@google.com",
    "snippet": "Your script, Copy of PodioGs, has recently failed to finish successfully. A summary of the failure(s) is shown below. To configure the triggers for this script, or change your setting for receiving",
    "labels": [
      "UNREAD",
      "CATEGORY_UPDATES",
      "UNREAD",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcb97dec6289e6",
    "date": "2020-01-21T23:52:04.000-05:00",
    "subject": "Your Canva invoice",
    "from": "Canva \u003cno-reply@canva.com\u003e",
    "snippet": "Your Invoice Thank you for your purchase! Your invoice details are below. Tax Invoice #02577-4004343 View details Date: Jan 22, 2020 Brand id: BADr4g3n-nc Billed to: American Express xxxx xxxx xxxx",
    "labels": [
      "Label_18",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "Label_18",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fcb4a0c5dc7ad9",
    "date": "2020-01-21T22:26:52.000-05:00",
    "subject": "Re: data-vis links +",
    "from": "Eric Schwartz \u003cschwartz.eric.b@gmail.com\u003e",
    "snippet": "Hey James! Happy New Year! (I can still say that, right?) Yes, you have told us about JFREJ! It is an awesome organization! On The Metal resonates with me on lots of levels. I worked as part of a 2",
    "labels": [
      "Label_18",
      "IMPORTANT",
      "CATEGORY_PERSONAL",
      "Label_18",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fcae554e559c20",
    "date": "2020-01-21T20:16:52.000-05:00",
    "subject": "Final hours! Extra 50% off sale styles ends tonight!",
    "from": "\"J.Crew\" \u003cjcrew@email.jcrew.com\u003e",
    "snippet": "Last chance for 30% off almost everything else too View on a web browser J.CREW Hi James! You have $5 in rewards! YOUR POINTS: 283 *50% discount valid on the purchase of sale items in J.Crew stores and",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcad7d2bdfa4a1",
    "date": "2020-01-21T20:22:19.000-05:00",
    "subject": "Final Hours! 25% Off Cold Weather Ends Soon",
    "from": "The Frye Company \u003cemail@p.thefryecompany.com\u003e",
    "snippet": "Enter Code Chilly at Checkout. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fcac6615147cb8",
    "date": "2020-01-21T20:03:15.000-05:00",
    "subject": "February Need to Know -- Answering the Important Questions",
    "from": "May First Movement Technology \u003cinfo@mayfirst.org\u003e",
    "snippet": "We have some pretty heavy questions to ask as we go into 2020. What are the key technology issues facing our movement? How important is our work around abusive companies like Amazon? What do we, as a",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fca92f6fd82757",
    "date": "2020-01-21T19:05:57.000-05:00",
    "subject": "NYS Tax Department: Learn about Free File options—you may be eligible to file your taxes for free!",
    "from": "New York State Department of Taxation and Finance \u003cinformation@messages.tax.ny.gov\u003e",
    "snippet": "Having trouble viewing this email? View it as a webpage. If you (or someone you know) will be reporting income of $69000 or less on your 2019 personal income tax return, you may be able to",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fca8f73886e640",
    "date": "2020-01-21T19:02:50.000-05:00",
    "subject": "Save on LED Bulbs for a Brighter Home in 2020",
    "from": "Con Edison Energy Efficiency \u003cConEdison@email.coned.com\u003e",
    "snippet": "New year, new lights ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ New year, new lights View Online conEdison conEdison A Brighter Year Ahead",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fca475736d0f9f",
    "date": "2020-01-21T17:44:26.000-05:00",
    "subject": "Your ride with saliho on January 20",
    "from": "Lyft Ride Receipt \u003cno-reply@lyftmail.com\u003e",
    "snippet": "Thanks for riding with saliho! ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fca20acdc912d5",
    "date": "2020-01-21T17:01:13.000-05:00",
    "subject": "It’s a bad flu season, but we’re here to help",
    "from": "One Medical \u003cadmin@access.onemedical.com\u003e",
    "snippet": "Protect yourself and the people around you during this severe flu season. One Medical Stay healthy this flu season We\u0026#39;re in the midst of a bad flu season and people of all ages are getting",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fca1398db89f8e",
    "date": "2020-01-21T16:47:58.000-05:00",
    "subject": "What is causing this sudden surge in Bitcoin (and other cryptocurrencies) price today...?",
    "from": "Quora Digest \u003cdigest-noreply@quora.com\u003e",
    "snippet": "Answer: And we are back in the game with one final big green Jesus candle exac.​.​.​ Quora James\u0026#39;s Digest Top Stories For You What is causing this sudden surge in Bitcoin (and other",
    "labels": [
      "CATEGORY_SOCIAL",
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fca07821cdaee5",
    "date": "2020-01-21T16:31:46.000-05:00",
    "subject": "ROLLING STONE | America’s Radioactive Secret",
    "from": "Audm \u003csupport@audm.com\u003e",
    "snippet": "PLUS: The Secret History of Facial Recognition Can\u0026#39;t see images? Click here. America\u0026#39;s Radioactive Secret Justin Nobel | Rolling Stone Oil-and-gas wells produce nearly a trillion gallons of",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9feea3f32204",
    "date": "2020-01-21T16:25:08.000-05:00",
    "subject": "Join this Sunday’s Beit Midrash exploring the “Jewish” in the Jewish Left",
    "from": "\"Jews For Racial \u0026 Economic Justice\" \u003cinfo@jfrej.org\u003e",
    "snippet": "No images? Click here Dear James, Join us this Sunday, January 26th, 1-5pm (note time change from earlier email!) at the Harlem JCC for a JFREJ We Are Here Beit Midrash, (house of study) focused on",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9f6957c2b69b",
    "date": "2020-01-21T16:16:16.000-05:00",
    "subject": "#BetaNYC, NYC's open data, open gov, \u0026 civic tech community list: \"Tomorrow at 6PM - Learn to use NYC Open Data in North Brooklyn!\"",
    "from": "\"Kate Nicholson (Meetup)\" \u003cbetaNYC-announce@meetup.com\u003e",
    "snippet": "Meetup Kate Nicholson (Co-Organizer) sent a message to the #BetaNYC, NYC\u0026#39;s open data, open gov, \u0026amp; civic tech community mailing list Tomorrow at 6PM - Learn to use NYC Open Data in North",
    "labels": [
      "CATEGORY_FORUMS",
      "CATEGORY_FORUMS"
    ]
  },
  {
    "google_id": "16fc9ee7f0a30d8e",
    "date": "2020-01-21T16:07:27.000-05:00",
    "subject": "Live Tomorrow | Latest Zoom Product Release",
    "from": "Zoom Video Communications \u003cwebinars@zoom.us\u003e",
    "snippet": "There is still time to register for our webinar tomorrow! Join Zoom experts to dive into our latest product release. Header Logo Sign In Ringing in the New Year with Zoom Phone \u0026amp; Zoom Rooms",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9de6614a33f3",
    "date": "2020-01-21T10:05:34.000-05:00",
    "subject": "NO A/C x Half Moon x PERK Takeover, Banoffee, Anna Burch, Long Beard",
    "from": "The Dance NYC \u003cdance@thedance.nyc\u003e",
    "snippet": "free dance parties ! freshly announced shows ! The Dance ✦ can i have this dance (づ｡◕‿‿◕｡)づ ? ☾ upcoming picks below + full calendar here ☼ this week ( -˘◡˘-) [TONIGHT] 01/21: Hard Salon w/ HBIC, Dead",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9d66b40bdceb",
    "date": "2020-01-21T15:41:09.000-05:00",
    "subject": "Re: [move-coop/parsons] Build Azure Class (#73)",
    "from": "elyse-weiss \u003cnotifications@github.com\u003e",
    "snippet": "We talked about this today! — You are receiving this because you are subscribed to this thread. Reply to this email directly, view it on GitHub, or unsubscribe.",
    "labels": [
      "IMPORTANT",
      "CATEGORY_FORUMS",
      "IMPORTANT",
      "CATEGORY_FORUMS"
    ]
  },
  {
    "google_id": "16fc9d4e5cd2e8f3",
    "date": "2020-01-21T15:39:29.000-05:00",
    "subject": "What an accounting firm looks like that's equipped to grow.",
    "from": "Lachlan from Karbon \u003clachlan@karbonhq.com\u003e",
    "snippet": "Weekly article — Karbon Magazine The blueprint for growing your accounting firm in 2020 Many accounting firm owners associate growth with pain. From finding and keeping great people, to maintaining",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9cbcd94731ed",
    "date": "2020-01-21T15:29:17.000-05:00",
    "subject": "Investments in 2020",
    "from": "\"Service Account | CIT\" \u003ccustomer@cit.com\u003e",
    "snippet": "A recent CIT survey of more than 300 small business owners and executives shows that adding inventory, marketing, advertising and equipment upgrades are among the top investments they\u0026#39;re planning",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9bf85fc301a9",
    "date": "2020-01-21T15:15:55.000-05:00",
    "subject": "We are Moving....",
    "from": "ArtScroll BookNews \u003cemailupdates@artscroll.com\u003e",
    "snippet": "Moving Day You have $0 ready to use, POINTS TO NEXT REWARD: 116 CONNECT WITH US! Check out the ArtScroll Digital Library app! Download NOW to get FREE samples of our bestselling Digital Editions! *FREE",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9b8d8753ec4b",
    "date": "2020-01-21T15:08:46.000-05:00",
    "subject": "Join me next week: \"Potential History, Decolonization, and Palestine\"",
    "from": "\"Rabbi Alissa Wise, JVP\" \u003cinfo@jewishvoiceforpeace.org\u003e",
    "snippet": "Dear James, Please join us next week for a talk with Ariella Azoulay, author of Potential Histories: Unlearning Imperialism. Ariella Azoulay on Potential History, Decolonization, and Palestine Tuesday,",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc9b3190af402e",
    "date": "2020-01-21T15:02:34.000-05:00",
    "subject": "hi. i need an outbound message",
    "from": "James Schaffer \u003cjas.schaffer@gmail.com\u003e",
    "snippet": "Cool?",
    "labels": [
      "SENT",
      "SENT"
    ]
  },
  {
    "google_id": "16fc9965a98f9cad",
    "date": "2020-01-21T14:31:00.000-05:00",
    "subject": "Dojo first aid",
    "from": "K Barber \u003ckbarbersound@gmail.com\u003e",
    "snippet": "Hey Jason! I hope you are well and happy new year! James and I are working on an inventory list for the dojo and I was wondering if you could help us out with the first aid supplies and what is good to",
    "labels": [
      "IMPORTANT",
      "CATEGORY_PERSONAL",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fc995e724305cb",
    "date": "2020-01-21T14:30:41.000-05:00",
    "subject": "Next Week: Nicholas Kristof \u0026 Sheryl WuDunn on TIGHTROPE",
    "from": "The Temple Emanu-El Streicker Center \u003cinfo@emanuelstreickernyc.org\u003e",
    "snippet": "Tuesday, January 28 | 6:30 PM $36 includes a copy of the book America\u0026#39;s Working Class Crisis For almost two decades, the New York Times columnist Nicholas Kristof has traveled the globe to put",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc973ec3b2ed1d",
    "date": "2020-01-21T13:34:52.000-05:00",
    "subject": "Your Aquarius Season Horoscopes",
    "from": "Chani Nicholas \u003cchani.nicholas@chaninicholas.com\u003e",
    "snippet": "Happy birthday, Aquarius View this email in your browser Horoscopes for Aquarius Season These horoscopes are from my monthly column on OprahMag.com Aquarius Season begins with a bang. The New Moon on",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc96e8b0c1ea43",
    "date": "2020-01-21T13:47:41.000-05:00",
    "subject": "@jasschaffer, check out the notifications you have on Twitter",
    "from": "Twitter \u003cnotify@twitter.com\u003e",
    "snippet": "‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_SOCIAL",
      "CATEGORY_SOCIAL"
    ]
  },
  {
    "google_id": "16fc96d82cc452a1",
    "date": "2020-01-21T13:46:30.000-05:00",
    "subject": "James - How could a business loan help you grow?",
    "from": "PayPal \u003cpaypal@mail.paypal.com\u003e",
    "snippet": "James Schaffer - \u0026quot;We\u0026#39;re so grateful to be able to continue this work.\u0026quot; Caitlin Crosby Benward, The Giving Keys View Online Hero Image \u0026quot;The PayPal Business Loan helped us build our",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "Label_51",
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "Label_51"
    ]
  },
  {
    "google_id": "16fc9621513d566e",
    "date": "2020-01-21T13:28:37.000-05:00",
    "subject": "How to Read Your Medical Bill",
    "from": "Zocdoc \u003cservice@mail2.zocdoc.com\u003e",
    "snippet": "No one enjoys scrutinizing lists of billing codes. But a lot of medical bills have errors, so it\u0026#39;s important to go through each one carefully. This guide explains how. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9565559f7ad2",
    "date": "2020-01-21T13:04:08.000-05:00",
    "subject": "This week's events at Mayday + Starr Bar",
    "from": "\"Mayday Space \u0026 Starr Barr\" \u003cinfo@maydayspace.org\u003e",
    "snippet": "Upcoming events at Mayday \u0026amp; Starr Bar Mayday Space and Starr Bar are both in Bushwick, BK a short walk from each other Presentation Party | Monday, January 20th, 7pm @ Starr Bar (214 Starr street)",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9550adc6278d",
    "date": "2020-01-21T13:19:51.000-05:00",
    "subject": "Re: Trupo: Building a support system for freelancers",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT",
      "SENT"
    ]
  },
  {
    "google_id": "16fc954fe2e87ea0",
    "date": "2020-01-21T13:04:29.000-05:00",
    "subject": "Trupo: Building a support system for freelancers ",
    "from": "Freelancers Union \u003cannouncements@freelancersunion.org\u003e",
    "snippet": "Dear freelancer, Let\u0026#39;s say you broke your arm on a ski trip. You either lose money for all the days you don\u0026#39;t work, or you end up trying to churn out three drafts per day with only your left",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "CATEGORY_PROMOTIONS"
    ]
  },
  {
    "google_id": "16fc94ac187e1d38",
    "date": "2020-01-21T13:08:36.000-05:00",
    "subject": "Great Wolf Lodge in New England | 4-Star Foxwoods Casino Resort | Great Wolf Lodge in the Poconos",
    "from": "Groupon Getaways \u003cnoreply@r.groupon.com\u003e",
    "snippet": "Stay with daily water park passes | Groupon Getaways View All Getaways Deals » Great Wolf Lodge Water Park Outside Boston Great Wolf Lodge Water Park Outside Boston Fitchburg, MA — Great Wolf Lodge",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc948322d633fd",
    "date": "2020-01-21T13:04:29.000-05:00",
    "subject": "Trupo: Building a support system for freelancers ",
    "from": "Freelancers Union \u003cannouncements@freelancersunion.org\u003e",
    "snippet": "Dear freelancer, Let\u0026#39;s say you broke your arm on a ski trip. You either lose money for all the days you don\u0026#39;t work, or you end up trying to churn out three drafts per day with only your left",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc944f1da7ec68",
    "date": "2020-01-21T13:01:57.000-05:00",
    "subject": "Dacor |  Save up to 20% with the 5•10•20 Promotion",
    "from": "AJ Madison \u003cajmadison@e.ajmadison.com\u003e",
    "snippet": "Shop our top picks in Dacor kitchen packages ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc92e3a3eb33a2",
    "date": "2020-01-21T12:24:14.000-05:00",
    "subject": "Sale ends today!",
    "from": "\"Levi's® Premium Warehouse Event\" \u003clevis@e.levi.com\u003e",
    "snippet": "Your last chance to save big on our elevated styles. Your last chance to save big on our elevated styles. Levi\u0026#39;s Ends Today UP TO 75% OFF. ENTER THE SALE WAREHOUSE EVENT UP TO 75% OFF Top products.",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc925ee66b1c24",
    "date": "2020-01-21T12:28:24.000-05:00",
    "subject": "Re: Showing Up with Renewed Hope",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT",
      "SENT"
    ]
  },
  {
    "google_id": "16fc925e578e5587",
    "date": "2020-01-21T12:28:18.000-05:00",
    "subject": "Showing Up with Renewed Hope",
    "from": "SURJ NYC \u003cinfo@email.actionnetwork.org\u003e",
    "snippet": "Hi James, As the Senate begins impeachment trial proceedings today, we may find our hope in our representatives\u0026#39; ability to do impartial justice waning. However, the past few days have given us",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc925c9a3e9816",
    "date": "2020-01-21T12:28:12.000-05:00",
    "subject": "Showing Up with Renewed Hope",
    "from": "SURJ NYC \u003cinfo@email.actionnetwork.org\u003e",
    "snippet": "Hi James, As the Senate begins impeachment trial proceedings today, we may find our hope in our representatives\u0026#39; ability to do impartial justice waning. However, the past few days have given us",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc9247844fe43c",
    "date": "2020-01-21T12:26:47.000-05:00",
    "subject": "The Post Most: Senators prepare for spirited debate over rules governing Trump’s impeachment trial",
    "from": "The Washington Post \u003cemail@washingtonpost.com\u003e",
    "snippet": "How Mitch McConnell\u0026#39;s proposed Senate trial will work;... | Presented by Refinitiv ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc907b19bd6fbb",
    "date": "2020-01-21T11:55:22.000-05:00",
    "subject": "Re: Security alert for your linked Google Account",
    "from": "James Schaffer \u003cjas.schaffer+canned.response@gmail.com\u003e",
    "snippet": "Hi, I now send and receive non-work emails at jas.schaffer@gmail.com Please update. My @mac.com (me.com, icloud.com, etc.) addresses will stop working July 31, 2013. Love and respect, James",
    "labels": [
      "SENT",
      "SENT"
    ]
  },
  {
    "google_id": "16fc907a8288bd29",
    "date": "2020-01-21T11:55:16.000-05:00",
    "subject": "Security alert for your linked Google Account",
    "from": "Google \u003cno-reply@accounts.google.com\u003e",
    "snippet": "Your account james.schaffer@mac.com is listed as the recovery email for jas.schaffer@gmail.com. Don\u0026#39;t recognize this account? Click here Z-Mail by James \u0026amp; Zalmy was granted access to your",
    "labels": [
      "IMPORTANT",
      "CATEGORY_PERSONAL",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fc9079d939480c",
    "date": "2020-01-21T11:55:16.000-05:00",
    "subject": "Security alert",
    "from": "Google \u003cno-reply@accounts.google.com\u003e",
    "snippet": "Z-Mail by James \u0026amp; Zalmy was granted access to your Google Account jas.schaffer@gmail.com If you did not grant access, you should check this activity and secure your account. Check activity You",
    "labels": [
      "IMPORTANT",
      "CATEGORY_PERSONAL",
      "IMPORTANT",
      "CATEGORY_PERSONAL"
    ]
  },
  {
    "google_id": "16fc8e3594cf016e",
    "date": "2020-01-21T11:15:38.000-05:00",
    "subject": "It's time for a delivery.",
    "from": "Seamless \u003cemail@a.seamless.com\u003e",
    "snippet": "Don\u0026#39;t question it. Just order. Seamless What\u0026#39;s on the menu today TOP-RATED RESTAURANTS NEAR YOU Yao Asian Fusion 427 1.2 Miles Away Order To Be Thai 4421 0.1 Miles Away Order New York Yummy",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8dd1e826b1d6",
    "date": "2020-01-21T11:08:11.000-05:00",
    "subject": "File Your 1099-MISC Today",
    "from": "Marcum \u003cinfo@marcumllp.com\u003e",
    "snippet": "1099-Prep.com is designed to satisfy your 1099-MISC preparation needs Marcum LLP A New Cost-Effective, Technology-Driven 1099-MISC Preparation Solution for your Clients The New Cost-Effective,",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8dc6a177669b",
    "date": "2020-01-21T11:08:02.000-05:00",
    "subject": "Covering, curating, and cataloging American politics",
    "from": "Leslie Graves \u003cleslie.b.graves@ballotpedia.org\u003e",
    "snippet": "A powerful way you can help us provide bias-free info about elections View this email in your browser. The Ballotpedia Society Dear Reader, I just wanted to send a quick follow-up to you regarding my",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8d6d771e8e8a",
    "date": "2020-01-21T11:01:58.000-05:00",
    "subject": "What You Need to Know Before Senate Impeachment Trial Starts this Afternoon",
    "from": "Nicole Lafond \u003cnicole@talkingpointsmemo.com\u003e",
    "snippet": "Hello TPM Members, Last night, Senate Majority Leader Mitch McConnell (R-KY) unveiled the rules package he\u0026#39;ll officially propose on the Senate floor this afternoon, outlining what appears to be a",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "IMPORTANT"
    ]
  },
  {
    "google_id": "16fc8d0d027fc69b",
    "date": "2020-01-21T10:55:10.000-05:00",
    "subject": "The JVP Wire 1/21/2019",
    "from": "Sonya Meyerson-Knox \u003csonya@jewishvoiceforpeace.org\u003e",
    "snippet": "Good morning all, and happy belated Martin Luther King Jr. day. The Charlotte Observer republished Let\u0026#39;s remember the MLK who wasn\u0026#39;t liked. Israel/Palestine News: On Monday, Israeli authorities",
    "labels": [
      "CATEGORY_FORUMS",
      "CATEGORY_FORUMS"
    ]
  },
  {
    "google_id": "16fc8cfd78ce04f6",
    "date": "2020-01-21T10:53:44.000-05:00",
    "subject": "[ staff \u0026 board ] TONIGHT 1/21 @ 7pm: Help plan 2/24 Membership Assembly!",
    "from": "Keren Soffer-Sharon \u003ckeren@jfrej.org\u003e",
    "snippet": "Hey folks, Excited to talk with many of you tonight at 7pm. Be sure to register below for the zoom link. This call will be an hour long. On Mon, Jan 13, 2020 at 12:53 PM Keren Soffer-Sharon \u0026lt;keren@",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8ce5b78c019e",
    "date": "2020-01-21T10:52:20.000-05:00",
    "subject": "💥📣 Up to -25% Boatshow Discounts",
    "from": "Susana from Boatjump \u003csusana.s@boatjump.com\u003e",
    "snippet": "🌴⛵ Let\u0026#39;s celebrate together the Boatshow in Düsseldorf This month enjoy Boatshow prices! Take advantage of the great discounts from the Düsseldorf Boatshow up to -25%!* Discounts are available to",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8becbccc7122",
    "date": "2020-01-21T10:35:43.000-05:00",
    "subject": "AT\u0026T Payment Processed for Account Ending in 8555",
    "from": "\"AT\u0026T Account Management\" \u003cupdate@emaildl.att-mail.com\u003e",
    "snippet": "myAT\u0026amp;T AT\u0026amp;T payment confirmation Hi JAMES, We\u0026#39;ve received your payment. Service: Wireless Account number: ending in 8555 Amount: $107.78 Payment date: 01/21/2020 Payment method: American",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8ab2829c1f01",
    "date": "2020-01-21T10:14:15.000-05:00",
    "subject": "2020 Summer Reservations",
    "from": "Putnam Camp \u003cputnamcampkv@gmail.com\u003e",
    "snippet": "2020 Reservation Letter Dear Putnam Camper, We hope that you will make a return to Putnam Camp part of your 2020 summer plans. And we very much encourage you to introduce your friends to Camp. The",
    "labels": [
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "IMPORTANT",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8a3850479b37",
    "date": "2020-01-21T10:02:42.000-05:00",
    "subject": "Congratulations! $99 Down - 9 Payments - NO Interest",
    "from": "\"BookIt.com Specials\" \u003cNoReply@e.bookit.com\u003e",
    "snippet": "BEST of BookIt: Up to 70% Off Top All-Inclusive Resorts Plus Book It for Only $99 Down! ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8a0eacd5b202",
    "date": "2020-01-21T10:01:42.000-05:00",
    "subject": "First Post: Facing Facts",
    "from": "Civicist \u003cinfo@civichall.org\u003e",
    "snippet": "A new privacy nightmare; more advocacy tech; the case for digital public infrastructure, and more January 21, 2020 First Post Micah L. Sifry Facing Facts This is civic tech: Cofacts, a collaborative",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fc8a02348f7987",
    "date": "2020-01-21T10:02:12.000-05:00",
    "subject": "Create a calendar homepage and add your photo",
    "from": "Ammon Brown \u003cammon@human.x.ai\u003e",
    "snippet": "Let your guests choose the type of meeting they want to book ‌ ‌ ‌ Make x.ai your own Today your calendar page got a huge upgrade! You can now share your calendar homepage directly with guests and they",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc8a012f220661",
    "date": "2020-01-21T10:01:52.000-05:00",
    "subject": "Welcome Jo Ann \u0026 Saima",
    "from": "generative somatics \u003cinfo@generativesomatics.org\u003e",
    "snippet": "Having trouble viewing this email? View as a webpage in your browser. We\u0026#39;re thrilled in welcome Jo Ann Prompongsatorn Farrant and Saima Husain to gs staff! Please also note that applications for",
    "labels": [
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "INBOX",
      "UNREAD",
      "IMPORTANT",
      "CATEGORY_UPDATES",
      "INBOX"
    ]
  },
  {
    "google_id": "16fc885355cc18f6",
    "date": "2020-01-21T09:30:12.000-05:00",
    "subject": "Save 15% On South American Wine | Malbec, Pinot Noir \u0026 More",
    "from": "\"Astor Wines \u0026 Spirits\" \u003cinfo@astorwines.com\u003e",
    "snippet": "Chile \u0026amp; Argentina. No images? Click here Shop Astor Wines \u0026amp; Spirits. Sun-drenched, fruit-forward reds and zesty, tropical whites. 15% Off Tuesday: South America Today, January 21, 2020 Only*",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc882ba101d85e",
    "date": "2020-01-21T09:30:05.000-05:00",
    "subject": "TPM Briefing: Impeachment and Lev Parnas",
    "from": "John Light \u003cjohn@talkingpointsmemo.com\u003e",
    "snippet": "Hello TPM Members, Today, one hour before the impeachment trial gets started in the Senate, join Josh Marshall, Josh Kovensky and Matt Shuham for a briefing on what to expect. We\u0026#39;ll also take a",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc8682934b8440",
    "date": "2020-01-21T09:00:55.000-05:00",
    "subject": "Leadership Dojo Recap on Resilience: Life’s Movement is Toward Wholeness, Connection, and Fulfillment",
    "from": "Strozzi Institute \u003calumni@strozziinstitute.com\u003e",
    "snippet": "Recording now available! Knowledge is only rumor until it lives in the muscles. ﻿We gathered for the 1st session of the Leadership Dojo on Jan. 14th. Here\u0026#39;s the recap: Resilience: Life\u0026#39;s",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc85e62f97c8a0",
    "date": "2020-01-21T08:50:00.000-05:00",
    "subject": "Getting Started with Rails 6 and React | Spike Burton in The Startup",
    "from": "Medium Daily Digest \u003cnoreply@medium.com\u003e",
    "snippet": "Stories for James Schaffer Today\u0026#39;s highlights Getting Started with Rails 6 and React Rails version 6 is out! One of the most exciting things about the newest release of Rails is the treatment of…",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  },
  {
    "google_id": "16fc859c7fe414a8",
    "date": "2020-01-21T08:45:15.000-05:00",
    "subject": "Our $113 sale ends Thursday.",
    "from": "\"Southwest Click 'N Save\" \u003cSouthwestAirlines@iluv.southwest.com\u003e",
    "snippet": "Leave New York Area behind this spring. View in web browser | View our mobile site Hi James 0 points | RR# 20138834063 Southwest Air | Hotel | Car | Vacations | Rapid Rewards® Click \u0026#39;N Save January",
    "labels": [
      "CATEGORY_UPDATES",
      "CATEGORY_UPDATES"
    ]
  },
  {
    "google_id": "16fc848b967e32db",
    "date": "2020-01-21T07:48:25.000-05:00",
    "subject": "Extra 50% off sale styles ends TONIGHT",
    "from": "\"J.Crew\" \u003cjcrew@email.jcrew.com\u003e",
    "snippet": "And so does 30% off full-price styles! Get in there! View on a web browser J.CREW Hi James! You have $5 in rewards! YOUR POINTS: 283 *50% discount valid on the purchase of sale items in J.Crew stores",
    "labels": [
      "CATEGORY_PROMOTIONS",
      "UNREAD",
      "CATEGORY_PROMOTIONS",
      "UNREAD"
    ]
  }
]

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM loaded")

  const login = document.getElementById('login')
  login.addEventListener('click', function () {
    window.open("https://z-mail.ngrok.io/auth/google_oauth2", 'myWindow', 'height=' + '600' + ',width=' + '500' + ',top=' + '100' + ',left=' + '200' + ',scrollbars=' + 'yes' + ',resizable')
  })

  const logout = document.getElementById('sign-out')
  logout.addEventListener('click', function () {
    fetch('https://z-mail.ngrok.io/sessions', {
      method: 'DELETE'
    })
  })

  const emails = {} //reorganized emails - keys are days value is messages as array

  // button to get data
  const getData = document.getElementById('data')
  getData.addEventListener('click', function () {
    fetchMessages()
  })

  function fetchMessages() {
    fetch('https://z-mail.ngrok.io/messages')
      .then(response => response.json())
      .then(messages => {
        console.log(messages)
        organizeMessages(messages)
        // chart(messages)
      })
      .catch(error => { alert(error.messages) })
  }

  // organizeMessages(data)

  function organizeMessages(messages) {
    messages.forEach(message => {
      // console.log(message)
      const convert = new Date(message.date)
      const date = convert.getFullYear() + '-' + (convert.getMonth() + 1) + '-' + convert.getDate()
      // console.log(date)
      if (!!emails[date]) {
        emails[date].push(message)
      } else {
        emails[date] = []
        emails[date].push(message)
      }
    })
    generateDataObj()
    console.log(`emails: `, emails)
  }

  function generateDataObj() {
    for (const key in emails) {
      let dataDay = {}
      emails[key].forEach(message => {
        for (let i = 0; i < message.labels.length; i++) {
          if (!!dataDay[message.labels[i].toLowerCase()]) {
            dataDay[message.labels[i].toLowerCase()]++
          } else {
            dataDay[message.labels[i].toLowerCase()] = 1
          }
        }
      })
      console.log(dataDay)
      dataDay["date"] = key
      !!dataDay['sent'] ? null : dataDay['sent'] = 0
      !!dataDay['inbox'] ? null : dataDay['inbox'] = 0
      dataObj.push(dataDay)
      // debugger
    }
    chart()
    // generateDisplayArrays()
  }

  function generateDisplayArrays() {


    let date = ['x']
    let emailIn = ['Email In']
    let emailOut = ['Email Out']
    let inbox = ['Inbox']

    dataObj.forEach(obj => {
      date.push(obj.date)
      emailIn.push(emails[obj.date].length - obj.sent)
      emailOut.push(obj.sent)
      inbox.push(obj.inbox)
    })

    // return array of four arrays: date, emailIn, emailOut, inbox
    console.log(date, emailIn, emailOut, inbox)
    return [date, emailIn, emailOut, inbox]
  }

  function clickHandler(arguments) {
    // debugger
    const listGroup = document.getElementById('list-group')
    // const id = arguments[0].id
    const itemCount = arguments[0].value
    // const date = arguments[0].x
    // const showPanel = document.getElementById('show')
    // showPanel.innerText = `${id} on ${date}`
    // ul = document.createElement('ul')
    while (listGroup.hasChildNodes()) {
      listGroup.removeChild(listGroup.firstChild);
    }

    prepEmailsForDisplay(arguments)

    function prepEmailsForDisplay(arguments) {
      const id = arguments[0].id
      const show = document.getElementById('show')
      show.innerHTML = `View: ${id}`
      const date = arguments[0].x.getFullYear() + '-' + (arguments[0].x.getMonth() + 1) + '-' + arguments[0].x.getDate()
      const mail = emails[date]

      console.log('mail: ', mail)

      if (id === 'Inbox') {
        const type = 'INBOX'
        iterateEmails(mail, type)
      } else if (id === 'Email In') {
        let filtered = mail.filter(message => !message.labels.includes('SENT'))
        //   !message.labels.includes('SENT')
        //   console.log('message: ', !message.labels.includes('SENT'))
        // })
        console.log('filtered: ', filtered)
        displayEmails(filtered)
      } else if (id === 'Email Out') {
        const type = 'SENT'
        iterateEmails(mail, type)
      }
    }

    function iterateEmails(emails, type) {
      let mail = emails.filter(message => message.labels.includes(type))
      displayEmails(mail)
    }

    function displayEmails(email) {
      const itemCount = 1
      const { from, subject, snippet } = email
      const href = document.createElement('a')
      // href.href = '#'
      href.className = "list-group-item"
      href.innerHTML = `
        <div class="checkbox"><label><input type="checkbox"></label></div>
        <span class="glyphicon far fa-star"></span>
        <span class="name" style="min-width: 120px;
              display: inline-block;">${from}</span>
        <span class="">${subject}</span>
        <span class="text-muted" style="font-size: 11px;">${snippet}</span>
        <span class="badge">12:10 AM</span>
        <span class="pull-right"><span class="glyphicon glyphicon-paperclip"></span></span>`
      listGroup.append(href)
    }


  }


  function chart() {
    // organizeMessages(messages)
    c3.generate({
      data: {
        x: 'x',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: generateDisplayArrays(),
        onclick: function () {
          clickHandler(arguments)
        },
        axes: {
          "Inbox": 'y2'
        },
        types: {
          "Inbox": 'bar'
        }
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        },
        y: {
          label: {
            text: 'Daily Throughput',
            position: 'outer-middle'
          }
        },
        y2: {
          show: true,
          label: {
            text: `Inbox as of ${dataTime}`,
            position: 'outer-middle'
          }
        }
      }
    });
  }

})


// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }


// })