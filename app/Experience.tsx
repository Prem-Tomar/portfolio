import { useEffect, useRef, useState } from "react";

type CompanyExperience = {
  role: string;
  company: string;
  period: string;
  status?: string;
  points: string[];
};

const companyNames = ["DDN", "TAPPP", "LINK", "mavQ", "Swift", "D-SYS", "Aadi Infotech"];
const companyYears = ["2026", "2024", "2023", "2022", "2021", "2014", "2010"];
const companyLogos = ["/company-logos/ddn.svg", "/company-logos/tappp.svg", "/company-logos/link.svg", "/company-logos/mavq.svg", "/company-logos/swift.svg", "/company-logos/dsys.png"];
const companyHighlights = [
  [],
  ["Architected distributed runtime, workflow and micro-app platforms serving 7M+ daily users.", "Consolidated client capabilities into reusable modules, shared contracts and configurable onboarding."],
  ["Built distributed backend systems and tooling for migrations, partner integrations and workflow automation.", "Delivered commerce integrations and modernized selected Java and Node.js components to Go."],
  ["Led architecture and delivery for no-code automation and workflow platforms.", "Owned service design, data models and release quality, including AWS Connect and document-processing capabilities."],
  ["Led commerce and logistics architecture across checkout, payments, couriers and partner integrations.", "Built Rust processing paths and SenseEngine for ML-driven shipment intelligence across 300K+ monthly orders."],
  ["Delivered mobile, enterprise and transportation systems across backend, data and production operations.", "Expanded Python, Go and Rust engineering into analytics, ML data collection and intelligent product workflows."],
  ["Progressed from intern to developer, delivering mobile, enterprise and web applications.", "Built Java systems and Python/Django services while modernizing applications into database-backed architectures."],
];

function CompanyMark({ name, logo }: { name: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  return <span className="company-mark" aria-hidden="true">{logo && !failed ? <img src={logo} alt="" width="80" height="40" onError={() => setFailed(true)} /> : <span className="company-monogram">{name.charAt(0).toUpperCase()}</span>}</span>;
}

export default function Experience({ companies }: { companies: CompanyExperience[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const navigateRef = useRef<(index: number) => void>(() => {});
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const viewport = windowRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !viewport || !track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let geometry = { pinned: false, wheel: false, travel: 0, step: 1, top: 0 };
    let scrollFrame = 0;
    let measureFrame = 0;

    const update = () => {
      scrollFrame = 0;
      const offset = geometry.pinned
        ? Math.max(0, Math.min(geometry.travel, window.scrollY - geometry.top))
        : viewport.scrollLeft;
      if (geometry.pinned) track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      const index = Math.min(companies.length - 1, Math.round(offset / geometry.step));
      if (activeRef.current !== index) {
        activeRef.current = index;
        setActive(index);
      }
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${geometry.travel ? offset / geometry.travel : 0})`;
      }
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(update);
    };

    const measure = () => {
      measureFrame = 0;
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
      const travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const top = section.getBoundingClientRect().top + window.scrollY;
      const fits = sticky.offsetHeight < window.innerHeight - 20;
      const desktop = window.innerWidth >= 900 && !reducedMotion.matches;
      const portrait = window.innerWidth <= window.innerHeight;
      const pinned = desktop && !portrait && fits;
      // Portrait wheel input moves the compact carousel without reserving page height.
      const wheel = desktop && portrait && fits && travel > 0;
      const wasPinned = geometry.pinned;
      const wasWheel = geometry.wheel;
      const wasInSection = window.scrollY >= geometry.top && window.scrollY <= geometry.top + geometry.travel;
      geometry = { pinned, wheel, travel, step, top };
      if (wheel && !wasWheel) window.addEventListener("wheel", onWheel, { passive: false });
      else if (!wheel && wasWheel) window.removeEventListener("wheel", onWheel);
      section.dataset.pinned = String(pinned);
      section.dataset.wheel = String(wheel);
      section.style.height = pinned ? `${sticky.offsetHeight + travel}px` : "";
      if (pinned) {
        viewport.scrollLeft = 0;
      } else {
        track.style.transform = "";
        if (wasPinned) {
          viewport.scrollLeft = Math.min(activeRef.current * step, travel);
          if (wasInSection) window.scrollTo({ top, behavior: "instant" });
        }
      }
      update();
    };

    const queueMeasure = () => {
      if (!measureFrame) measureFrame = window.requestAnimationFrame(measure);
    };

    const onWheel = (event: WheelEvent) => {
      if (!geometry.wheel || event.defaultPrevented || !event.cancelable || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      if (!event.deltaY || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;

      // Preserve input controls and independent vertical scrollers under the pointer.
      let target = event.target instanceof Element ? event.target : null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
      while (target && target !== document.body && target !== document.documentElement) {
        if (target.scrollHeight > target.clientHeight + 1 && /auto|scroll/.test(getComputedStyle(target).overflowY)) return;
        target = target.parentElement;
      }

      const forward = event.deltaY > 0;
      const offset = viewport.scrollLeft;
      if (forward ? offset >= geometry.travel - 1 : offset <= 1) return;

      const bounds = sticky.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      // Only engage when entering the section or when its entire content is visible.
      if (forward ? bounds.top < -1 : bounds.bottom > window.innerHeight + 1) return;

      event.preventDefault();
      if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
        const spaceAbove = Math.max(16, (window.innerHeight - bounds.height) / 2);
        window.scrollTo({ top: Math.max(0, window.scrollY + bounds.top - spaceAbove), behavior: "instant" });
        return;
      }

      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      const distance = Math.max(-geometry.step, Math.min(geometry.step, event.deltaY * unit * 1.5));
      viewport.scrollTo({ left: Math.max(0, Math.min(geometry.travel, offset + distance)), behavior: "instant" });
    };

    navigateRef.current = (index) => {
      const target = Math.max(0, Math.min(companies.length - 1, index));
      const offset = Math.min(geometry.travel, target * geometry.step);
      const behavior = reducedMotion.matches ? "instant" : "smooth";
      if (geometry.pinned) window.scrollTo({ top: geometry.top + offset, behavior });
      else viewport.scrollTo({ left: offset, behavior });
    };

    const observer = new ResizeObserver(queueMeasure);
    observer.observe(sticky);
    observer.observe(viewport);
    Array.from(track.children).forEach((card) => observer.observe(card));
    window.addEventListener("scroll", onScroll, { passive: true });
    viewport.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", queueMeasure);
    reducedMotion.addEventListener("change", queueMeasure);
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", queueMeasure);
      reducedMotion.removeEventListener("change", queueMeasure);
      window.cancelAnimationFrame(scrollFrame);
      window.cancelAnimationFrame(measureFrame);
      section.style.height = "";
      delete section.dataset.pinned;
      delete section.dataset.wheel;
      track.style.transform = "";
    };
  }, [companies]);

  return (
    <section className="experience-section" id="experience" ref={sectionRef} aria-labelledby="experience-heading">
      <div className="experience-sticky" ref={stickyRef}>
        <div className="experience-heading content-width">
          <div><p className="eyebrow">Career / 2026 — 2010</p><h2 id="experience-heading">Experience.</h2></div>
          <p className="experience-hint"><span className="pinned-hint">Scroll to explore</span><span className="swipe-hint">Swipe or use the arrows</span><span aria-hidden="true"> →</span></p>
        </div>
        <div className="experience-window" ref={windowRef} aria-label="Company experience cards">
          <div className="experience-track" ref={trackRef}>
            {companies.map((company, index) => (
              <article className="experience-card" key={company.company} aria-label={`${companyNames[index]} experience`}>
                <div className="experience-card-top"><p>{company.period}</p><span>{String(index + 1).padStart(2, "0")} / {String(companies.length).padStart(2, "0")}</span></div>
                <div className="experience-title-row"><CompanyMark name={companyNames[index]} logo={companyLogos[index]} /><h3>{companyNames[index]}</h3></div>
                <p className="experience-role">{company.role}</p>
                {company.points.length ? <ul>{companyHighlights[index].map((point) => <li key={point}>{point}</li>)}</ul> : <div className="experience-incoming"><p>{company.status}</p><p>Data storage · Parallel file systems · HPC · AI infrastructure</p></div>}
                {company.points.length > 0 && <details><summary tabIndex={active === index ? 0 : -1}>More about this role</summary><ul>{company.points.map((point) => <li key={point}>{point}</li>)}</ul></details>}
                <p className="experience-company">{company.company}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-controls content-width">
          <span className="experience-count" aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(companies.length).padStart(2, "0")}</span>
          <nav className="experience-years" aria-label="Choose company experience">
            {companies.map((company, index) => <button type="button" key={company.company} aria-label={`${companyNames[index]}, ${companyYears[index]}`} aria-current={active === index ? "step" : undefined} onClick={() => navigateRef.current(index)}>{companyYears[index]}</button>)}
          </nav>
          <div className="experience-arrows"><button type="button" disabled={active === 0} aria-label="Previous company" onClick={() => navigateRef.current(active - 1)}>←</button><button type="button" disabled={active === companies.length - 1} aria-label="Next company" onClick={() => navigateRef.current(active + 1)}>→</button></div>
        </div>
        <div className="experience-progress content-width" aria-hidden="true"><div ref={progressRef} /></div>
      </div>
    </section>
  );
}
