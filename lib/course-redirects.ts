/**
 * Course pages retired when the catalogue moved to the arbritsafety.sa structure (September 2026).
 * Each old URL points to the closest page that now covers it; anything with no close match goes to
 * the Courses page. Used by next.config.ts, so keep this file free of "@/" imports.
 */
const closest: Record<string, string> = {
  // LEEA, auditing, scaffolding
  "leea-course-dubai": "leea-appointed-person",
  "lifting-supervisor-refresher-training": "leea-crane-lift-supervisor",
  "mobile-crane-operator": "leea",
  "irca-lead-auditor": "iso-lead-auditor",
  "sti-scaffold-inspector": "sti",
  "sti-scaffold-erector": "sti",
  "sti-scaffold-competent-person": "sti",
  "scaffolding-inspector-sti": "sti",
  "scaffolding-erector-sti": "sti",
  "scaffolding-competent-person-sti": "sti",
  "scaffolding-competent-person": "sti",
  "scaffolding-supervisor-training": "sti",
  "basic-scaffolding-erection-dismantling": "sti",
  "basic-scaffolding-inspection": "sti",
  // IOSH and Highfield
  "iosh-supervising-safely": "iosh",
  "first-aid": "highfield-first-aid",
  "basic-first-aid": "highfield-first-aid",
  "pedeatric-first-aid": "highfield-first-aid",
  "fire-fighting": "highfield-fire-safety",
  "fire-safety": "highfield-fire-safety",
  "fire-marshall": "highfield-fire-safety",
  "fire-warden-level-1": "highfield-fire-safety",
  "food-safety": "highfield-food-safety-haccp",
  "train-the-trainer": "highfield-train-the-trainer",
  "coshh": "highfield",
  "risk-assesment": "highfield",
  "h2s": "oil-and-gas",
  "defensive-driving": "rospa",
  // Industry training
  "construction-safety": "construction-industry",
  "rescue-training": "construction-industry",
  "tower-crane-rescue": "construction-industry",
  "tunnel-rescue": "construction-industry",
  "confined-space": "construction-industry",
  "confined-space-entry": "construction-industry",
  "confined-space-entry-rescue": "construction-industry",
  "confined-space-exit-rescue": "construction-industry",
  "ptw": "construction-industry",
  "construction-hoist-operator": "construction-industry",
  "concrete-gun-operator": "construction-industry",
  "power-hand-tools-operator": "construction-industry",
  "hand-tools": "construction-industry",
  "block-cutting-machine-operator": "construction-industry",
  "scissor-lift-operator": "construction-industry",
  "manlift-operator": "construction-industry",
  "cradle-operator": "construction-industry",
  "roller-operator": "construction-industry",
  "dumber-operator": "construction-industry",
  "excavator-operator": "construction-industry",
  "shovel-operator": "construction-industry",
  "lift-operator": "construction-industry",
  "flagman": "construction-industry",
  "basic-lifeline": "construction-industry",
  "electrical-safety": "construction-industry",
  "basic-electrical-safety-awareness": "construction-industry",
  "environmental-awareness": "construction-industry",
  "forklift-operator": "manufacturing-industry",
  "hazop": "oil-and-gas",
  "tra": "oil-and-gas",
  "gas-analyst-training-certification": "oil-and-gas",
  "basic-oil-spil": "oil-and-gas",
  "dangerous-goods-safety-awareness": "manufacturing-industry",
  "general-safety-awareness": "construction-industry",
};

/** Retired with no close equivalent on the new catalogue. */
const toCoursesPage = ["rope-access"];

export const courseRedirects = [
  ...Object.entries(closest).map(([from, to]) => ({
    source: `/courses/${from}`,
    destination: `/courses/${to}`,
    permanent: true,
  })),
  ...toCoursesPage.map((from) => ({ source: `/courses/${from}`, destination: "/courses", permanent: true })),
];
