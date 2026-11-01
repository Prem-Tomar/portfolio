import assert from "node:assert/strict";
import { getRecruiterTopics } from "../app/recruiterProfile.ts";

const topics = getRecruiterTopics("/resume.pdf");
const ai = topics.find((topic) => topic.command === "ai");
const sentiment = ai.items.find((item) => item.title === "Sentiment analysis");
assert.ok(sentiment, "Sentiment analysis must have explicit company attribution");
assert.ok(sentiment.points.some((point) => point.startsWith("Swift")));
assert.ok(sentiment.points.some((point) => point.startsWith("TAPPP")));
assert.doesNotMatch(JSON.stringify(ai.items), /D-SYS/i);

const skills = topics.find((topic) => topic.command === "skills");
const dsys = skills.items.flatMap((item) => item.points ?? [])
  .filter((point) => point.includes("D-SYS")).join(" ");
assert.match(dsys, /analytics, structured data preparation and reporting/);
assert.doesNotMatch(dsys, /\b(?:AI|ML|sentiment|recommendation|intelligent)\b|model experimentation/i);
console.log("Profile facts verified: sentiment at Swift and TAPPP; D-SYS analytics without AI/ML.");
