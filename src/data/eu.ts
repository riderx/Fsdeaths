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
	"Europe's FSD approval clock. Seven of 27 EU countries have moved. A vote may come 3 October.";

export const TODAY_ISO = "2026-09-21";
export const DUTCH_APPROVAL_DATE = "2026-04-10";
export const PROCESS_STARTED_APPROX = "2024-10-01";
export const DUTCH_APPROVAL_MOMENT = "2026-04-10T00:00:00Z";
export const PROCESS_STARTED_MOMENT = "2024-10-01T00:00:00Z";
export const REPORTED_TCMV_PRESENTATION_DATE = "2026-05-05";
export const REPORTED_TCMV_EARLIEST_VOTE_DATE = "2026-06-30";
export const REPORTED_TCMV_NEXT_VOTE_DATE = "2026-10-03";

export const EU_ROAD_DEATHS_2025 = 19_400;
export const EU_MEMBER_STATES = 27;
export const APPROVED_MEMBER_STATES = 7;

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
		explainer: "A token yes. Newest cars only.",
	},
	{
		key: "hw4",
		label: "HW4 fleet",
		coverageShare: 30,
		explainer: "Newer hardware only. Most of the installed base stays out.",
	},
	{
		key: "hw3-hw4",
		label: "HW3 + HW4 fleet",
		coverageShare: 90,
		explainer: "The real unlock. Most of the FSD-capable fleet is in.",
	},
];

export const hardwareExplainerCards: HardwareExplainerCard[] = [
	{
		key: "hw3",
		label: "HW3",
		title: "The older FSD-capable fleet",
		body: "Tesla says a car showing \"Full self-driving computer\" is HW3. FSD (Supervised) is listed as eligible from computer 3.0 up.",
		points: [
			"Skip HW3 and a large capable fleet stays locked.",
			"HW3 + HW4 is the broad yes. HW4 alone is not.",
		],
	},
	{
		key: "hw4",
		label: "HW4",
		title: "The newer computer",
		body: "HW4 is the newer generation. It is not the whole fleet.",
		points: [
			"A HW4-only yes mostly unlocks newer cars.",
			"Tesla treats HW3 and HW4 as separate hardware.",
		],
	},
	{
		key: "public-stats",
		label: "Public stats",
		title: "Tesla's published safety claim",
		body: "Tesla says FSD (Supervised) has 7x fewer collisions and 5x fewer off-highway collisions than driving without it.",
		points: [
			"Public reporting is by driving mode, not by HW3 vs HW4.",
			"The 10% / 30% / 90% scopes are policy-reach assumptions.",
		],
	},
];

export const countries: CountryRecord[] = [
	{ code: "BE", name: "Belgium", fatalities2023: 501, fatalitiesPerMillion2023: 43, bevFleetShare2024: 4.981, population2025: 11883495, approval: "national-approval", leadBody: "Flemish approval / Belgian territory" },
	{ code: "BG", name: "Bulgaria", fatalities2023: 525, fatalitiesPerMillion2023: 81, bevFleetShare2024: 0.572, population2025: 6437360, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "CZ", name: "Czechia", fatalities2023: 502, fatalitiesPerMillion2023: 46, bevFleetShare2024: 0.547, population2025: 10909500, approval: "national-approval", leadBody: "Czech Ministry of Transport" },
	{ code: "DK", name: "Denmark", fatalities2023: 162, fatalitiesPerMillion2023: 27, bevFleetShare2024: 12.023, population2025: 5992734, approval: "national-approval", leadBody: "Danish Road Traffic Authority" },
	{ code: "DE", name: "Germany", fatalities2023: 2839, fatalitiesPerMillion2023: 34, bevFleetShare2024: 3.348, population2025: 83577140, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "EE", name: "Estonia", fatalities2023: 59, fatalitiesPerMillion2023: 43, bevFleetShare2024: 0.933, population2025: 1369995, approval: "national-approval", leadBody: "Estonian Transport Administration" },
	{ code: "IE", name: "Ireland", fatalities2023: 180, fatalitiesPerMillion2023: 34, bevFleetShare2024: 3.051, population2025: 5440278, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "EL", name: "Greece", fatalities2023: 646, fatalitiesPerMillion2023: 62, bevFleetShare2024: 0.298, population2025: 10372335, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "ES", name: "Spain", fatalities2023: 1806, fatalitiesPerMillion2023: 38, bevFleetShare2024: 0.78, population2025: 49128297, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "FR", name: "France", fatalities2023: 3154, fatalitiesPerMillion2023: 46, bevFleetShare2024: 2.849, population2025: 68882600, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "HR", name: "Croatia", fatalities2023: 274, fatalitiesPerMillion2023: 71, bevFleetShare2024: 0.505, population2025: 3874350, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "IT", name: "Italy", fatalities2023: 3039, fatalitiesPerMillion2023: 52, bevFleetShare2024: 0.676, population2025: 58943464, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "CY", name: "Cyprus", fatalities2023: 34, fatalitiesPerMillion2023: 36, bevFleetShare2024: 0.512, population2025: 982966, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "LV", name: "Latvia", fatalities2023: 138, fatalitiesPerMillion2023: 73, bevFleetShare2024: 1.172, population2025: 1860565, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "LT", name: "Lithuania", fatalities2023: 159, fatalitiesPerMillion2023: 56, bevFleetShare2024: 0.91, population2025: 2890664, approval: "national-approval", leadBody: "Lithuanian transport authorities" },
	{ code: "LU", name: "Luxembourg", fatalities2023: 26, fatalitiesPerMillion2023: 39, bevFleetShare2024: 7.134, population2025: 681973, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "HU", name: "Hungary", fatalities2023: 472, fatalitiesPerMillion2023: 49, bevFleetShare2024: 1.412, population2025: 9539502, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "MT", name: "Malta", fatalities2023: 16, fatalitiesPerMillion2023: 30, bevFleetShare2024: 2.209, population2025: 574250, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "NL", name: "Netherlands", fatalities2023: 608, fatalitiesPerMillion2023: 34, bevFleetShare2024: 6.154, population2025: 18044027, approval: "national-approval", leadBody: "RDW / Dutch road authority" },
	{ code: "AT", name: "Austria", fatalities2023: 402, fatalitiesPerMillion2023: 44, bevFleetShare2024: 3.834, population2025: 9197213, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "PL", name: "Poland", fatalities2023: 1893, fatalitiesPerMillion2023: 52, bevFleetShare2024: 0.271, population2025: 36497495, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "PT", name: "Portugal", fatalities2023: 642, fatalitiesPerMillion2023: 61, bevFleetShare2024: 2.694, population2025: 10749635, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "RO", name: "Romania", fatalities2023: 1545, fatalitiesPerMillion2023: 81, bevFleetShare2024: 0.587, population2025: 19043151, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "SI", name: "Slovenia", fatalities2023: 82, fatalitiesPerMillion2023: 39, bevFleetShare2024: 1.355, population2025: 2130850, approval: "national-approval", leadBody: "AVP / Slovenian Traffic Safety Agency" },
	{ code: "SK", name: "Slovakia", fatalities2023: 266, fatalitiesPerMillion2023: 49, bevFleetShare2024: 0.537, population2025: 5419451, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "FI", name: "Finland", fatalities2023: 185, fatalitiesPerMillion2023: 33, bevFleetShare2024: 3.236, population2025: 5635971, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
	{ code: "SE", name: "Sweden", fatalities2023: 229, fatalitiesPerMillion2023: 22, bevFleetShare2024: 7.198, population2025: 10587710, approval: "pending-eu-vote", leadBody: "National government vote in EU committee" },
];

export const institutionTrack = [
	{ stage: "National approvals", title: "7 of 27 have moved", body: "Netherlands, Lithuania, Estonia, Denmark, Belgium, Slovenia, Czechia." },
	{ stage: "European Commission", title: "EU-wide use is still blocked", body: "RDW says the file still needs a Commission step." },
	{ stage: "Member states", title: "A vote may come 3 October", body: "EU-wide validity needs a majority vote in committee. That vote may happen 3 October." },
];

export const timeline = [
	{ date: "Approx. October 2024", title: "Joint testing starts", body: "RDW later said Tesla and RDW began intensive testing about 18 months before Dutch approval." },
	{ date: "24 Mar 2026", title: "EU death toll", body: "The Commission reported about 19,400 road deaths in the EU in 2025." },
	{ date: "10 Apr 2026", title: "Dutch approval", body: "RDW made FSD Supervised valid in the Netherlands. EU-wide use still needed a later vote." },
	{ date: "20 May 2026", title: "Lithuania", body: "Second country. Recognized the Dutch approval." },
	{ date: "29 May 2026", title: "Estonia", body: "Third country. Recognized the RDW approval." },
	{ date: "9 Jun 2026", title: "Denmark", body: "Danish Road Traffic Authority accepted the Dutch approval." },
	{ date: "10 Jun 2026", title: "Belgium", body: "Flemish Mobility Minister Annick De Ridder signed national approval." },
	{ date: "7 Sep 2026", title: "Slovenia", body: "Sixth country. AVP recognized the Dutch approval." },
	{ date: "21 Sep 2026", title: "Czechia", body: "Seventh country. Czech Ministry of Transport recognized the Dutch approval." },
	{ date: "3 Oct 2026", title: "Possible EU vote", body: "A member-state vote may come 3 October. Until then, EU-wide use stays blocked." },
];

export const methodology = [
	"2023 Eurostat road deaths, so every EU country is in the same table.",
	"2024 Eurostat BEV fleet share as the addressable-fleet proxy.",
	"Formula: deaths × BEV share × Tesla share × hardware scope × safety gain.",
	"Scope settings: newest-only 10%, HW4 30%, HW3 + HW4 90%.",
];

export const sources = [
	{ label: "Tesla support: Full Self-Driving (Supervised)", href: "https://www.tesla.com/support/fsd", note: "Tesla says FSD (Supervised) has 7x fewer major and minor collisions and 5x fewer off-highway collisions than driving without it, but the public report is not split by hardware generation." },
	{ label: "Tesla support: Full Self-Driving (Supervised) Subscriptions", href: "https://www.tesla.com/support/full-self-driving-subscriptions", note: "Tesla says vehicles with FSD computer 3.0 or above are eligible, subject to configuration and region." },
	{ label: "Tesla support NZ: Full Self-Driving (Supervised) Subscriptions", href: "https://www.tesla.com/en_nz/support/full-self-driving-subscriptions", note: "Tesla lists the Netherlands among current FSD subscription markets, says the package is for HW3 and HW4 vehicles, but says rollout begins with HW4 and the feature is currently only available on Full Self-Driving computer 4.0." },
	{ label: "Tesla support: AI Computer Installations", href: "https://www.tesla.com/en_ca/support/ai-computer", note: "Tesla says owners with computer 2.0 or 2.5 can be upgraded to Full Self-Driving computer 3.0, and separately describes the newer AI computer." },
	{ label: "Tesla service bulletin SB-22-00-007", href: "https://service.tesla.com/docs/ServiceBulletins/External/SB/SB-22-00-007_Update_Firmware_to_Allow_Navigate_on_Autopilot_to_Comply_with_European_Regulations_R1.pdf", note: "Tesla says a vehicle showing \"Full self-driving computer\" in Additional Vehicle Information is equipped with HW3.0." },
	{ label: "Tesla service bulletin SB-25-00-001", href: "https://service.tesla.com/docs/ServiceBulletins/External/SB/SB-25-00-001_Update_Vehicle_Software_Or_Replace_Car_Computer_To_Correct_Loss_Of_Rearview_Camera_Feed.pdf", note: "Tesla identifies certain HW4 car computers as a separate hardware group with its own rearview-camera issue." },
	{ label: "RDW response following a message from Tesla", href: "https://www.rdw.nl/en/news/2026/rdw-response-following-a-message-from-tesla", note: "RDW said the final assessment phase followed roughly 18 months of joint testing." },
	{ label: "Tesla recall: Enable B-Pillar Blindness Detection", href: "https://www.tesla.com/en_jo/support/recall-enable-b-pillar-blindness-detection", note: "Tesla says UNECE R79 required a customer-facing alert and blocked lane changes during a blinded-camera condition, while Tesla also says overlapping cameras meant an unreasonable risk to safety was not present." },
	{ label: "RDW explanation of European type approval Tesla with provisional validity in the Netherlands", href: "https://www.rdw.nl/en/news/2026/rdw-explanation-of-european-type-approval-tesla-with-provisional-validity-in-the-netherlands", note: "RDW says Dutch validity began on 10 April 2026, EU-wide use still needs a Commission step plus a member-state vote, and that the U.S. and EU builds are not comparable one-to-one because Europe uses different and stricter pre-approval requirements." },
	{ label: "ETSC: Lithuania and Estonia authorise Tesla FSD", href: "https://etsc.eu/lithuania-and-estonia-authorise-tesla-fsd-with-belgium-and-greece-fast-tracking/", note: "ETSC reported that Lithuania recognized the Dutch approval and that Estonia followed on 29 May 2026." },
	{ label: "Danish Road Traffic Authority: FSD Supervised provisionally approved in Denmark", href: "https://www.fstyr.dk/nyheder/2026/jun/teslas-foererassistentsystem-fsd-supervised-er-foreloebigt-godkendt-i-danmark", note: "The Danish authority says FSD Supervised may now be used in Denmark after it accepted the Dutch provisional type approval." },
	{ label: "Annick De Ridder on X: Belgium approval announcement", href: "https://x.com/AnnickDeRidder", note: "On 10 June 2026, Flemish Mobility Minister Annick De Ridder announced she had signed the approval for Tesla FSD Supervised on Belgian roads." },
	{ label: "Annick De Ridder on LinkedIn: Flemish approval reaches Belgian territory", href: "https://nl.linkedin.com/posts/annickderidder_vlaanderen-wil-ruimte-geven-aan-innovatie-activity-7460916906657742848-lsVe", note: "De Ridder previously stated that a Flemish homologation would automatically mean homologation for the whole Belgian territory." },
	{ label: "Reuters: Slovenia clears Tesla FSD driver assistance", href: "https://www.reuters.com/business/slovenia-clears-teslas-fsd-driver-assistance-ahead-eu-vote-2026-09-08/", note: "Reuters reported Tesla's 7 September 2026 announcement and said Slovenia's Traffic Safety Agency confirmed by email that it had recognized the temporary type approval." },
	{ label: "GOV.SI: Minister Vrtovec tests FSD after Slovenian approval", href: "https://www.gov.si/novice/2026-09-15-minister-vrtovec-preizkusil-fsd-slovenija-med-vodilnimi-v-evropi-pri-napredni-mobilnosti/", note: "Slovenia's government said the country is the sixth in Europe to allow FSD Supervised on its roads." },
	{ label: "Czech Ministry of Transport: Czechia recognizes the RDW provisional approval", href: "https://md.gov.cz/Media/Media-a-tiskove-zpravy/Ceska-republika-uznala-prozatimni-schvaleni-system", note: "On 21 September 2026, the ministry said it recognized the Dutch RDW provisional approval under Article 39, making FSD Supervised usable in Czechia under those conditions." },
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
