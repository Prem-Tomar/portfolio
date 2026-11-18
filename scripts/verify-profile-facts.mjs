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
for (const term of ["AI/ML", "GenAI", "RAG", "LLM", "Agentic AI"]) {
  assert.ok(skills.items.some((item) => item.title.includes(term)), `Missing explicit skill: ${term}`);
}
const agentSkill = skills.items.find((item) => item.title === "Agentic AI and tooling");
assert.equal(agentSkill.meta, "Current skills");
for (const term of ["LangChain", "LangGraph", "Model Context Protocol (MCP)", "tool calling", "agent orchestration"]) {
  assert.ok(agentSkill.detail.includes(term), `Missing confirmed current skill: ${term}`);
}
assert.doesNotMatch(agentSkill.detail, /ongoing study|planned/i);
for (const term of ["PyTorch", "TensorFlow", "Hugging Face", "MLflow", "LangSmith", "Vector databases", "SciPy", "NumPy", "pandas"]) {
  assert.ok(skills.items.some((item) => item.detail?.includes(term)), `Missing confirmed AI/ML tool: ${term}`);
}
for (const term of ["LlamaIndex", "FAISS", "Chroma", "Qdrant", "Pinecone", "Weaviate", "pgvector", "RAGAS", "vLLM", "NeMo Guardrails"]) {
  const item = skills.items.find((entry) => entry.detail?.includes(term));
  assert.ok(item, `Missing confirmed broader experience: ${term}`);
  assert.match(item.meta, /experience/i, `${term} must retain its broader-experience context`);
}
const assistedEngineering = skills.items.find((item) => item.title === "AI-assisted engineering");
assert.equal(skills.items.find((item) => item.title === "Jev AI / TypeSafe").meta, "Recent tooling exposure");
assert.ok(!skills.items.some((item) => item.title.includes("Next-Concept")));
assert.equal(topics.find((topic) => topic.command === "plans").items.find((item) => item.title.includes("Next-Concept")).meta, "Learning and research interest");
assert.match(assistedEngineering.detail, /bounded diff-set generation/);
const genaiSkill = skills.items.find((item) => item.title === "GenAI / RAG / LLM integration");
assert.match(genaiSkill.meta, /TAPPP/);
assert.equal(skills.items.filter((item) => /RAG/.test(item.title)).length, 1);
const governance = skills.items.find((item) => item.title === "Architecture governance");
assert.equal(governance.meta, "Swift · mavQ · LINK · TAPPP · DDN");
for (const term of ["RFCs", "ADRs", "HLD/LLD", "sequence", "process diagrams", "release"]) {
  assert.ok(governance.detail.includes(term), `Missing architecture practice: ${term}`);
}
const leadership = skills.items.find((item) => item.title === "Engineering and delivery leadership");
assert.match(leadership.detail, /Concurrent project/);
assert.match(leadership.detail, /hands-on/);
const systems = skills.items.find((item) => item.title === "Systems performance and reliability");
assert.match(systems.detail, /CPU\/memory profiling/);
assert.match(systems.detail, /concurrent processing/);
assert.match(systems.detail, /Go modernization/);
assert.ok(skills.items.indexOf(systems) < skills.items.indexOf(leadership),
  "Technical depth should precede leadership scope");
const storage = skills.items.find((item) => item.title === "Storage and HPC integrations");
assert.match(storage.meta, /DDN/);
assert.match(storage.detail, /Lustre HTTP interface/);
const operations = skills.items.find((item) => item.title === "Operational ownership and team development");
assert.match(operations.detail, /runbooks/);
assert.match(operations.detail, /mentoring/);
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
