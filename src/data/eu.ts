export type ApprovalState = "national-approval" | "pending-eu-vote";

export type Scenario = {
	teslaShareWithinBev: number;
	safetyGain: number;
	approvalScopeKey: FleetScopeKey;
};

export type FleetScopeKey = "latest-only" | "hw4" | "hw3-hw4";

export type FleetScope = {
	key: FleetScopeKey;
	label: string;
	coverageShare: number;
	explainer: string;
};

export type HardwareExplainerCard = {
	key: string;
	label: string;
	title: string;
	body: string;
	points: string[];
};

export type CountryRecord = {
	code: string;
	name: string;
	fatalities2023: number;
	fatalitiesPerMillion2023: number;
	bevFleetShare2024: number;
	population2025: number;
	approval: ApprovalState;
	leadBody: string;
};

export type CountryOpportunity = CountryRecord & {
	addressableFleetShare: number;
	estimatedLivesPerYear: number;
};

export const SITE_TITLE = "FSD Delay Clock";
export const SITE_DOMAIN = "fsddelay.org";
export const SITE_DESCRIPTION =
	"A source-backed tracker for Europe's FSD approval bottleneck, with a live scenario clock based on official EU road-safety and EV-stock data.";

export const TODAY_ISO = "2026-04-21";
export const DUTCH_APPROVAL_DATE = "2026-04-10";
export const PROCESS_STARTED_APPROX = "2024-10-01";
export const DUTCH_APPROVAL_MOMENT = "2026-04-10T00:00:00Z";
export const PROCESS_STARTED_MOMENT = "2024-10-01T00:00:00Z";
export const REPORTED_TCMV_PRESENTATION_DATE = "2026-05-05";
export const REPORTED_TCMV_EARLIEST_VOTE_DATE = "2026-06-30";

export const EU_ROAD_DEATHS_2025 = 19_400;
export const APPROVED_MEMBER_STATES = 1;

export const defaultScenario: Scenario = {
	teslaShareWithinBev: 20,
	safetyGain: 35,
	approvalScopeKey: "hw3-hw4",
};

export const fleetScopes: FleetScope[] = [
	{
		key: "latest-only",
		label: "Newest cars only",
		coverageShare: 10,
		explainer: "A narrow political yes that only touches a thin slice of the newest eligible vehicles.",
	},
	{
		key: "hw4",
		label: "HW4 fleet",
		coverageShare: 30,
		explainer: "A broader approval, but still limited to the newer hardware generation.",
	},
	{
		key: "hw3-hw4",
		label: "HW3 + HW4 fleet",
		coverageShare: 90,
		explainer: "The real step-change: approval reaches most of the FSD-capable fleet rather than a token slice.",
	},
];

export const hardwareExplainerCards: HardwareExplainerCard[] = [
	{
		key: "hw3",
		label: "HW3",
		title: "The older FSD-capable installed base",
		body: "Tesla's own service bulletin says a vehicle that shows \"Full self-driving computer\" in Additional Vehicle Information is HW3.0. Tesla's subscription support page says vehicles with FSD computer 3.0 or above are eligible for FSD (Supervised).",
		points: [
			"If you never clear HW3, a large already-capable fleet still stays outside the gate.",
			"That is why the broadest scenario on this site is HW3 + HW4, not HW4 alone.",
		],
	},
	{
		key: "hw4",
		label: "HW4",
		title: "The newer AI computer generation",
		body: "Tesla's newer manuals call the newer stack the AI computer, and Tesla service and recall documents separately refer to HW4 car computers. In practice, HW4 is the newer generation, not the whole fleet.",
		points: [
			"A HW4-only approval mostly unlocks newer vehicles, not the older installed base.",
			"Tesla's own service record shows HW4-specific recalls and camera/computer fixes, which means the generations are real and separately managed.",
		],
	},
	{
		key: "public-stats",
		label: "Public stats",
		title: "What is public, and what is not",
		body: "Tesla publicly claims FSD (Supervised) has 7x fewer major and minor collisions and 5x fewer off-highway collisions than driving without it. But Tesla's public Vehicle Safety Report is grouped by driving mode, not by HW3 versus HW4.",
		points: [
			"This site therefore does not invent a HW3 failure-rate table or a HW4 failure-rate table.",
			"The 10% / 30% / 90% scope settings on this page are transparent scenario assumptions about policy reach, not Tesla-published per-hardware fleet counts.",
		],
	},
];

export const countries: CountryRecord[] = [
	{ code: "BE", name: "Belgium", fatalities2023: 501, fatalitiesPerMillion2023: 43, bevFleetShare2024: 4.981, population2025: 11883495, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "BG", name: "Bulgaria", fatalities2023: 525, fatalitiesPerMillion2023: 81, bevFleetShare2024: 0.572, population2025: 6437360, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "CZ", name: "Czechia", fatalities2023: 502, fatalitiesPerMillion2023: 46, bevFleetShare2024: 0.547, population2025: 10909500, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "DK", name: "Denmark", fatalities2023: 162, fatalitiesPerMillion2023: 27, bevFleetShare2024: 12.023, population2025: 5992734, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "DE", name: "Germany", fatalities2023: 2839, fatalitiesPerMillion2023: 34, bevFleetShare2024: 3.348, population2025: 83577140, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "EE", name: "Estonia", fatalities2023: 59, fatalitiesPerMillion2023: 43, bevFleetShare2024: 0.933, population2025: 1369995, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "IE", name: "Ireland", fatalities2023: 180, fatalitiesPerMillion2023: 34, bevFleetShare2024: 3.051, population2025: 5440278, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "EL", name: "Greece", fatalities2023: 646, fatalitiesPerMillion2023: 62, bevFleetShare2024: 0.298, population2025: 10372335, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "ES", name: "Spain", fatalities2023: 1806, fatalitiesPerMillion2023: 38, bevFleetShare2024: 0.78, population2025: 49128297, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "FR", name: "France", fatalities2023: 3154, fatalitiesPerMillion2023: 46, bevFleetShare2024: 2.849, population2025: 68882600, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "HR", name: "Croatia", fatalities2023: 274, fatalitiesPerMillion2023: 71, bevFleetShare2024: 0.505, population2025: 3874350, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "IT", name: "Italy", fatalities2023: 3039, fatalitiesPerMillion2023: 52, bevFleetShare2024: 0.676, population2025: 58943464, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "CY", name: "Cyprus", fatalities2023: 34, fatalitiesPerMillion2023: 36, bevFleetShare2024: 0.512, population2025: 982966, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "LV", name: "Latvia", fatalities2023: 138, fatalitiesPerMillion2023: 73, bevFleetShare2024: 1.172, population2025: 1860565, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "LT", name: "Lithuania", fatalities2023: 159, fatalitiesPerMillion2023: 56, bevFleetShare2024: 0.91, population2025: 2890664, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "LU", name: "Luxembourg", fatalities2023: 26, fatalitiesPerMillion2023: 39, bevFleetShare2024: 7.134, population2025: 681973, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "HU", name: "Hungary", fatalities2023: 472, fatalitiesPerMillion2023: 49, bevFleetShare2024: 1.412, population2025: 9539502, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "MT", name: "Malta", fatalities2023: 16, fatalitiesPerMillion2023: 30, bevFleetShare2024: 2.209, population2025: 574250, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "NL", name: "Netherlands", fatalities2023: 608, fatalitiesPerMillion2023: 34, bevFleetShare2024: 6.154, population2025: 18044027, approval: "national-approval", leadBody: "RDW / Dutch road authority" },
	{ code: "AT", name: "Austria", fatalities2023: 402, fatalitiesPerMillion2023: 44, bevFleetShare2024: 3.834, population2025: 9197213, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "PL", name: "Poland", fatalities2023: 1893, fatalitiesPerMillion2023: 52, bevFleetShare2024: 0.271, population2025: 36497495, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "PT", name: "Portugal", fatalities2023: 642, fatalitiesPerMillion2023: 61, bevFleetShare2024: 2.694, population2025: 10749635, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "RO", name: "Romania", fatalities2023: 1545, fatalitiesPerMillion2023: 81, bevFleetShare2024: 0.587, population2025: 19043151, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "SI", name: "Slovenia", fatalities2023: 82, fatalitiesPerMillion2023: 39, bevFleetShare2024: 1.355, population2025: 2130850, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "SK", name: "Slovakia", fatalities2023: 266, fatalitiesPerMillion2023: 49, bevFleetShare2024: 0.537, population2025: 5419451, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "FI", name: "Finland", fatalities2023: 185, fatalitiesPerMillion2023: 33, bevFleetShare2024: 3.236, population2025: 5635971, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "SE", name: "Sweden", fatalities2023: 229, fatalitiesPerMillion2023: 22, bevFleetShare2024: 7.198, population2025: 10587710, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
];

export const institutionTrack = [
	{ stage: "RDW", title: "The Dutch authority already moved", body: "RDW says it issued type approval for FSD Supervised on 10 April 2026 and that the system can now be used in the Netherlands." },
	{ stage: "European Commission", title: "The EU-wide step is still upstream", body: "RDW says the application for permission across the entire European Union still needs to be submitted to the European Commission." },
	{ stage: "Member states", title: "The bottleneck is now a committee vote", body: "RDW says EU-wide validity requires a majority vote from member states in the responsible committee." },
];

export const timeline = [
	{ date: "Approx. October 2024", title: "Joint testing starts", body: "RDW said in March 2026 that Tesla and RDW had begun an intensive joint testing programme roughly 18 months earlier." },
	{ date: "24 Mar 2026", title: "EU death toll reminder", body: "The European Commission reported around 19,400 road deaths across the EU in 2025." },
	{ date: "10 Apr 2026", title: "Dutch approval lands", body: "RDW said the approval is valid in the Netherlands now, with possible later admittance across the EU." },
	{ date: "After 10 Apr 2026", title: "EU-wide use still blocked", body: "RDW says the next steps are Commission handling plus a member-state vote. Until then, Dutch approval is not EU-wide approval." },
];

export const methodology = [
	"Country ladder uses the latest full Eurostat country road-fatality dataset (2023) so every EU state is comparable in the same table.",
	"EV readiness uses Eurostat's 2024 share of battery-electric passenger cars in each national fleet as a proxy for how much of the fleet is currently FSD-addressable.",
	"The scenario model multiplies 2023 road deaths by BEV fleet share, assumed Tesla share within the BEV fleet, selected Tesla hardware-scope coverage, and assumed fatal-risk reduction.",
	"The hardware-scope settings are explicit scenario assumptions: newest cars only is set to 10% of the Tesla fleet, HW4 to 30%, and HW3 plus HW4 to 90%.",
	"Tesla's public safety reporting is cited only for overall mode-level comparisons. It does not publish a HW3-versus-HW4 collision table, so this page does not pretend one exists.",
	"The model is intentionally transparent and editable. It is not a legal-liability claim, a clinical study, or proof that a named individual caused a specific death.",
	"2024 and 2025 Commission road-safety releases are used in the timeline and context cards because they are newer, but their country detail is still preliminary.",
];

export const sources = [
	{ label: "Tesla support: Full Self-Driving (Supervised)", href: "https://www.tesla.com/support/fsd", note: "Tesla says FSD (Supervised) has 7x fewer major and minor collisions and 5x fewer off-highway collisions than driving without it, but the public report is not split by hardware generation." },
	{ label: "Tesla support: Full Self-Driving (Supervised) Subscriptions", href: "https://www.tesla.com/support/full-self-driving-subscriptions", note: "Tesla says vehicles with FSD computer 3.0 or above are eligible, subject to configuration and region." },
	{ label: "Tesla support: AI Computer Installations", href: "https://www.tesla.com/en_ca/support/ai-computer", note: "Tesla says owners with computer 2.0 or 2.5 can be upgraded to Full Self-Driving computer 3.0, and separately describes the newer AI computer." },
	{ label: "Tesla service bulletin SB-22-00-007", href: "https://service.tesla.com/docs/ServiceBulletins/External/SB/SB-22-00-007_Update_Firmware_to_Allow_Navigate_on_Autopilot_to_Comply_with_European_Regulations_R1.pdf", note: "Tesla says a vehicle showing \"Full self-driving computer\" in Additional Vehicle Information is equipped with HW3.0." },
	{ label: "Tesla service bulletin SB-25-00-001", href: "https://service.tesla.com/docs/ServiceBulletins/External/SB/SB-25-00-001_Update_Vehicle_Software_Or_Replace_Car_Computer_To_Correct_Loss_Of_Rearview_Camera_Feed.pdf", note: "Tesla identifies certain HW4 car computers as a separate hardware group with its own rearview-camera issue." },
	{ label: "RDW response following a message from Tesla", href: "https://www.rdw.nl/en/news/2026/rdw-response-following-a-message-from-tesla", note: "RDW said the final assessment phase followed roughly 18 months of joint testing." },
	{ label: "RDW explanation of European type approval Tesla with provisional validity in the Netherlands", href: "https://www.rdw.nl/en/news/2026/rdw-explanation-of-european-type-approval-tesla-with-provisional-validity-in-the-netherlands", note: "RDW says Dutch validity began on 10 April 2026 and EU-wide use still needs a Commission step plus a member-state vote." },
	{ label: "EU sets no Tesla FSD vote for May 5, Dutch to brief in 20-minute slot", href: "https://eletric-vehicles.com/tesla/eu-sets-no-tesla-fsd-vote-for-may-5-dutch-to-brief-in-20-minute-slot/", note: "Secondary reporting published 17 April 2026, citing a European Commission draft agenda screenshot, says 5 May 2026 is an Article 39 update slot and that the next scheduled TCMV meeting is 30 June 2026." },
	{ label: "European Commission: EU road deaths drop by 3% in 2025", href: "https://transport.ec.europa.eu/news-events/news/eu-road-deaths-drop-3-2025-2026-03-24_en", note: "The Commission reported around 19,400 road deaths across the EU in 2025." },
	{ label: "Eurostat demo_gind", href: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_gind?indic_de=JAN&time=2025", note: "Population on 1 January 2025." },
	{ label: "Eurostat road_eqs_zev", href: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/road_eqs_zev?time=2024&mot_nrg=ELC&vehicle=CAR&unit=PC", note: "Share of battery-electric passenger cars in the national fleet, 2024." },
	{ label: "Eurostat tran_sf_roadus", href: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tran_sf_roadus?time=2023&sex=T&age=TOTAL&pers_cat=TOTAL&unit=NR", note: "Road traffic fatalities by country, 2023." },
];

export function getFleetScope(key: FleetScopeKey) {
	return fleetScopes.find((scope) => scope.key === key) ?? fleetScopes[fleetScopes.length - 1];
}

export function computeCountryOpportunity(country: CountryRecord, scenario: Scenario): CountryOpportunity {
	const scope = getFleetScope(scenario.approvalScopeKey);
	const addressableFleetShare =
		(country.bevFleetShare2024 / 100) *
		(scenario.teslaShareWithinBev / 100) *
		(scope.coverageShare / 100);
	const estimatedLivesPerYear = country.fatalities2023 * addressableFleetShare * (scenario.safetyGain / 100);
	return { ...country, addressableFleetShare, estimatedLivesPerYear };
}

export function rankCountries(scenario: Scenario): CountryOpportunity[] {
	return countries
		.map((country) => computeCountryOpportunity(country, scenario))
		.sort((left, right) => right.estimatedLivesPerYear - left.estimatedLivesPerYear);
}

export function sumEstimatedLives(rows: CountryOpportunity[]) {
	return rows.reduce((total, row) => total + row.estimatedLivesPerYear, 0);
}

export function daysBetween(startIso: string, endIso: string) {
	const dayMs = 1000 * 60 * 60 * 24;
	const start = new Date(`${startIso}T00:00:00Z`).getTime();
	const end = new Date(`${endIso}T00:00:00Z`).getTime();
	return Math.max(0, Math.floor((end - start) / dayMs));
}
