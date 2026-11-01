import assert from "node:assert/strict";
import { getRecruiterTopics } from "../app/recruiterProfile.ts";

const topics = getRecruiterTopics("/resume.pdf");
const ai = topics.find((topic) => topic.command === "ai");
const sentiment = ai.items.find((item) => item.title === "Sentiment analysis");
assert.ok(sentiment, "Sentiment analysis must have explicit company attribution");
assert.match(sentiment.meta, /\bSwift\b/);
assert.match(sentiment.meta, /\bTAPPP\b/);
assert.equal(ai.items.filter((item) => /sentiment/i.test(JSON.stringify(item))).length, 1,
  "Sentiment analysis should have one concise entry, not duplicate search results");
assert.doesNotMatch(JSON.stringify(ai.items), /D-SYS/i);

const skills = topics.find((topic) => topic.command === "skills");
const dsys = skills.items.flatMap((item) => item.points ?? [])
  .filter((point) => point.includes("D-SYS")).join(" ");
assert.match(dsys, /analytics, structured data preparation and reporting/);
assert.doesNotMatch(dsys, /\b(?:AI|ML|sentiment|recommendation|intelligent)\b|model experimentation/i);

for (const command of ["skills", "ai", "projects"]) {
  const topic = topics.find((item) => item.command === command);
  const text = JSON.stringify(topic);
  assert.doesNotMatch(text, /\b(?:19|20)\d{2}\b/, `${topic.label} must not repeat employment dates`);
  assert.doesNotMatch(text, /Platform Lead|Senior Architect|Principal Solutions Architect|Senior Software Engineer|Engineering Mentor|Software Development Lead|Senior role/,
    `${topic.label} must not repeat job titles`);
  assert.equal(new Set(topic.items.map((item) => item.title)).size, topic.items.length,
    `${topic.label} must not contain duplicate entries`);
}
assert.deepEqual(topics.find((topic) => topic.command === "projects").items.map((item) => item.meta),
  ["Swift", "Swift", "LINK", "TAPPP", "mavQ"], "Project attribution should use brand names only");
console.log("Profile facts and concise presentation verified: correct attribution, no repeated employment dates or job titles.");
