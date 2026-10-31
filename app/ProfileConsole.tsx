import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";

export type ProfileItem = {
  title: string;
  detail?: string;
  meta?: string;
  points?: string[];
  links?: { label: string; href: string; newTab?: boolean }[];
};

export type ProfileTopic = {
  command: string;
  label: string;
  aliases?: string[];
  items: ProfileItem[];
  note?: string;
};

type Response = { title: string; items: ProfileItem[]; note?: string };
type Entry = { id: number; command: string; response: Response };

const ignoredWords = new Set(["a", "an", "and", "at", "for", "in", "is", "me", "my", "of", "please", "show", "tell", "the", "with", "your"]);

function matches(item: ProfileItem, query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter((term) => term && !ignoredWords.has(term));
  const text = [item.title, item.detail, item.meta, ...(item.points ?? []), ...(item.links?.flatMap((link) => [link.label, link.href]) ?? [])].join(" ").toLowerCase();
  return terms.length > 0 && terms.every((term) => {
    // Short language names such as C and Go must match words, not fragments.
    if (term.length > 2) return text.includes(term);
    return text.split(/[^a-z0-9+#]+/).includes(term);
  });
}

export function resolveProfileCommand(command: string, topics: ProfileTopic[]): Response {
  const [name, ...args] = command.trim().toLowerCase().split(/\s+/);
  const query = args.join(" ").replace(/\bcpp\b/g, "c++").replace(/\bnodejs\b/g, "node.js");
  if (name === "help") {
    return {
      title: "Profile commands",
      items: [
        ...topics.map((topic) => ({ title: topic.command, detail: topic.label })),
        { title: "search <keyword>", detail: "Find recruiter details, skill evidence or public projects. Try search Rust." },
        { title: "skills <language> / github <repository>", detail: "Look up a specific skill or repository. Try skills Python or github paykit." },
        { title: "clear", detail: "Clear the console. Use the ↑ and ↓ keys in the input to revisit commands." },
      ],
    };
  }
  const topic = topics.find((item) => item.command === name || item.aliases?.includes(name));
  if (topic && !query) return { title: topic.label, items: topic.items, note: topic.note };

  const searchQuery = topic || ["search", "find"].includes(name) ? query : command.trim();
  const source = topic ? topic.items : topics.flatMap((item) => item.items.map((result) => ({ ...result, meta: [item.label, result.meta].filter(Boolean).join(" · ") })));
  const skillMatches = topic?.command === "skills" ? source.filter((item) => matches({ title: item.title }, searchQuery)) : [];
  const items = (skillMatches.length ? skillMatches : source.filter((item) => matches(item, searchQuery))).map((item) => {
    const points = item.points?.filter((point) => matches({ title: point }, searchQuery));
    return points?.length && !matches({ ...item, points: [] }, searchQuery) ? { ...item, points } : item;
  });
  return items.length
    ? { title: `${items.length} ${items.length === 1 ? "match" : "matches"} for “${searchQuery}”`, items, note: topic?.note }
    : { title: "No matching profile information", items: [{ title: searchQuery || "Enter a keyword", detail: "Try skills Rust, github paykit or plans. Type help to see all topics." }] };
}

export default function ProfileConsole({ topics }: { topics: ProfileTopic[] }) {
  const [value, setValue] = useState("");
  const [entry, setEntry] = useState<Entry | null>(() => ({ id: 0, command: topics[0].command, response: resolveProfileCommand(topics[0].command, topics) }));
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const draftRef = useRef("");
  const sequenceRef = useRef(0);
  const outputRef = useRef<HTMLDivElement>(null);
  const shortcuts = [...topics.slice(0, -1), { command: "help", label: "Help" }, ...topics.slice(-1)];

  useEffect(() => {
    const output = outputRef.current;
    if (output) output.scrollTop = 0;
  }, [entry]);

  function run(raw: string) {
    const command = raw.trim().slice(0, 160);
    if (!command) return;
    setHistory((previous) => [...previous, command].slice(-30));
    setHistoryIndex(null);
    draftRef.current = "";
    setValue("");
    if (command.toLowerCase() === "clear") {
      setEntry(null);
      return;
    }
    const entry = { id: ++sequenceRef.current, command, response: resolveProfileCommand(command, topics) };
    setEntry(entry);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    run(value);
  }

  function browseHistory(event: KeyboardEvent<HTMLInputElement>) {
    if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || !history.length) return;
    event.preventDefault();
    if (historyIndex === null) {
      if (event.key === "ArrowDown") return;
      draftRef.current = value;
    }
    const index = event.key === "ArrowUp"
      ? Math.max(0, (historyIndex ?? history.length) - 1)
      : (historyIndex ?? history.length) + 1;
    setHistoryIndex(index >= history.length ? null : index);
    setValue(index >= history.length ? draftRef.current : history[index]);
  }

  return (
    <section className="profile-console-section content-width" id="console" aria-labelledby="console-heading">
      <div className="section-heading console-heading">
        <div><h2 id="console-heading">Recruiter Essentials</h2></div>
        <p>Additional details for hiring conversations.</p>
      </div>
      <div className="profile-console">
        <form className="console-input-row" onSubmit={submit} role="search" aria-label="Recruiter information">
          <label className="sr-only" htmlFor="profile-command">Profile command or search keyword</label>
          <input id="profile-command" name="command" value={value} onChange={(event) => { setValue(event.target.value); setHistoryIndex(null); }} onKeyDown={browseHistory} maxLength={160} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="Search skills, projects or repositories" aria-describedby="console-hint" />
          <button type="submit" disabled={!value.trim()}>Search</button>
          <button className="console-reset" type="button" onClick={() => run("clear")}>Reset</button>
        </form>
        <nav className="console-shortcuts" aria-label="Profile console topics">
          {shortcuts.map((topic) => <button type="button" key={topic.command} aria-pressed={entry?.command.toLowerCase().split(/\s+/)[0] === topic.command} onClick={() => run(topic.command)}>{topic.label}</button>)}
        </nav>
        <div className="console-output" ref={outputRef} role="region" aria-label="Profile console response" aria-live="polite" aria-atomic="true" tabIndex={0}>
          {!entry && <p className="console-empty">Choose a topic above or type help below.</p>}
          {entry && <div className="console-entry" key={entry.id}>
            <p className="console-response-title">{entry.response.title}</p>
            <div className="console-results">{entry.response.items.map((item, index) => <article className="console-result" key={`${item.title}-${index}`}>
              <h3>{item.title}</h3>
              {item.meta && <p className="console-result-meta">{item.meta}</p>}
              {item.detail && <p>{item.detail}</p>}
              {item.points?.length ? <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
              {item.links && <div className="console-result-links">{item.links.map((link) => <a key={link.href} href={link.href} target={link.newTab ? "_blank" : undefined} rel={link.newTab ? "noreferrer" : undefined}>{link.label}<span aria-hidden="true"> ↗</span></a>)}</div>}
            </article>)}</div>
            {entry.response.note && <p className="console-response-note">{entry.response.note}</p>}
          </div>}
        </div>
      </div>
      <p className="console-hint" id="console-hint">Search by keyword, or try <code>skills Rust</code> and <code>github paykit</code>.</p>
    </section>
  );
}
