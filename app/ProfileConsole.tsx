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
};

type Response = { title: string; items: ProfileItem[] };
type Entry = { id: number; command: string; response: Response };

const ignoredWords = new Set(["a", "an", "and", "at", "for", "in", "is", "me", "my", "of", "please", "show", "tell", "the", "with", "your"]);

function matches(item: ProfileItem, query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter((term) => term && !ignoredWords.has(term));
  const text = [item.title, item.detail, item.meta, ...(item.points ?? []), ...(item.links?.map((link) => link.label) ?? [])].join(" ").toLowerCase();
  return terms.length > 0 && terms.every((term) => {
    // Short language names such as C and Go must match words, not fragments.
    if (term.length > 2) return text.includes(term);
    return text.split(/[^a-z0-9+#]+/).includes(term);
  });
}

export function resolveProfileCommand(command: string, topics: ProfileTopic[]): Response {
  const [name, ...args] = command.trim().toLowerCase().split(/\s+/);
  const query = args.join(" ");
  if (name === "help") {
    return {
      title: "Profile commands",
      items: [
        ...topics.map((topic) => ({ title: topic.command, detail: topic.label })),
        { title: "search <keyword>", detail: "Search the profile. Try search Rust or search workflow." },
        { title: "experience <company>", detail: "Filter a topic. Try experience tappp or skills Python." },
        { title: "clear", detail: "Clear the console. Use the ↑ and ↓ keys in the input to revisit commands." },
      ],
    };
  }
  const topic = topics.find((item) => item.command === name || item.aliases?.includes(name));
  if (topic && !query) return { title: topic.label, items: topic.items };

  const searchQuery = topic || ["search", "find"].includes(name) ? query : command.trim();
  const source = topic ? topic.items : topics.flatMap((item) => item.items.map((result) => ({ ...result, meta: [item.label, result.meta].filter(Boolean).join(" · ") })));
  const items = source.filter((item) => matches(item, searchQuery)).map((item) => {
    const points = item.points?.filter((point) => matches({ title: point }, searchQuery));
    return points?.length && !matches({ ...item, points: [] }, searchQuery) ? { ...item, points } : item;
  });
  return items.length
    ? { title: `${items.length} ${items.length === 1 ? "match" : "matches"} for “${searchQuery}”`, items }
    : { title: "No matching profile information", items: [{ title: searchQuery || "Enter a keyword", detail: "Try a company or skill, such as experience swift or search Rust. Type help to see all topics." }] };
}

export default function ProfileConsole({ topics }: { topics: ProfileTopic[] }) {
  const [value, setValue] = useState("");
  const [entries, setEntries] = useState<Entry[]>(() => [{ id: 0, command: "about", response: resolveProfileCommand("about", topics) }]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const draftRef = useRef("");
  const sequenceRef = useRef(0);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const output = outputRef.current;
    const latest = output?.lastElementChild as HTMLElement | null;
    if (output && latest) output.scrollTop = latest.offsetTop - parseFloat(getComputedStyle(output).paddingTop);
  }, [entries]);

  function run(raw: string) {
    const command = raw.trim().slice(0, 160);
    if (!command) return;
    setHistory((previous) => [...previous, command].slice(-30));
    setHistoryIndex(null);
    draftRef.current = "";
    setValue("");
    if (command.toLowerCase() === "clear") {
      setEntries([]);
      return;
    }
    const entry = { id: ++sequenceRef.current, command, response: resolveProfileCommand(command, topics) };
    setEntries((previous) => [...previous, entry].slice(-15));
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
    <section className="section profile-console-section content-width" id="console" aria-labelledby="console-heading">
      <div className="section-heading console-heading">
        <div><p className="eyebrow">Profile console</p><h2 id="console-heading">Explore my profile.</h2></div>
        <p>Choose a topic or type a command to find the details relevant to your role.</p>
      </div>
      <div className="profile-console">
        <div className="console-titlebar"><span><span aria-hidden="true">&gt;_</span> prem / profile</span><button type="button" onClick={() => run("clear")}>Clear console</button></div>
        <nav className="console-shortcuts" aria-label="Profile console topics">
          {topics.map((topic) => <button type="button" key={topic.command} onClick={() => run(topic.command)}>{topic.label}</button>)}
          <button type="button" onClick={() => run("help")}>Help</button>
        </nav>
        <div className="console-output" ref={outputRef} role="log" aria-label="Profile console responses" aria-live="polite" aria-relevant="additions" tabIndex={0}>
          {!entries.length && <p className="console-empty">Console cleared. Choose a topic above or type help below.</p>}
          {entries.map((entry) => <div className="console-entry" key={entry.id}>
            <p className="console-command"><span aria-hidden="true">profile $ </span><span className="sr-only">Command: </span>{entry.command}</p>
            <p className="console-response-title">{entry.response.title}</p>
            <div className="console-results">{entry.response.items.map((item, index) => <article className="console-result" key={`${item.title}-${index}`}>
              <h3>{item.title}</h3>
              {item.meta && <p className="console-result-meta">{item.meta}</p>}
              {item.detail && <p>{item.detail}</p>}
              {item.points?.length ? <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
              {item.links && <div className="console-result-links">{item.links.map((link) => <a key={link.href} href={link.href} target={link.newTab ? "_blank" : undefined} rel={link.newTab ? "noreferrer" : undefined}>{link.label}<span aria-hidden="true"> ↗</span></a>)}</div>}
            </article>)}</div>
          </div>)}
        </div>
        <form className="console-input-row" onSubmit={submit}>
          <span className="console-prompt" aria-hidden="true">profile $</span>
          <label className="sr-only" htmlFor="profile-command">Profile command or search keyword</label>
          <input id="profile-command" name="command" value={value} onChange={(event) => { setValue(event.target.value); setHistoryIndex(null); }} onKeyDown={browseHistory} maxLength={160} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="Try skills or search Rust" aria-describedby="console-hint" />
          <button type="submit" disabled={!value.trim()}>Run <span aria-hidden="true">↵</span></button>
        </form>
      </div>
      <p className="console-hint" id="console-hint">Try <code>experience tappp</code>, <code>skills</code> or <code>search Rust</code>. Press Enter to run.</p>
    </section>
  );
}
