import { useState } from "react";
import { ChevronDown, PanelRight, UserCircle2, Plus, Tag, Instagram } from "lucide-react";

function Section({ label, open, onToggle, children, last }) {
  return (
    <div className={`details-section ${last ? "last" : ""}`}>
      <button className="section-title" onClick={onToggle}>
        <span>{label}</span>
        <ChevronDown size={16} className={`chev ${!open ? "closed" : ""}`} />
      </button>
      {open && <div className="section-body">{children}</div>}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="detail-row">
      <span className="label">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="tag-badge">
      <Tag size={12} />
      {children}
    </span>
  );
}

export default function DetailsPanel({ user, onClose }) {
  const [chatOpen, setChatOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);
  const [labelsOpen, setLabelsOpen] = useState(true);
  const [notesOpen, setNotesOpen] = useState(true);
  const [otherOpen, setOtherOpen] = useState(true);

  if (!user) return null;

  return (
    <aside className="details-panel">
      <header className="details-header">
        <h3>Details</h3>
        <button className="icon-btn" onClick={onClose}><PanelRight size={18} /></button>
      </header>

      <div className="details-scroll thin-scroll">
        <Section label="Chat Data" open={chatOpen} onToggle={() => setChatOpen(!chatOpen)}>
          <Row label="Assignee" value={<span className="d-inline-flex align-items-center gap-2"><UserCircle2 size={18} />James West</span>} />
          <Row label="Team" value={<span className="d-inline-flex align-items-center gap-2"><UserCircle2 size={18} />Sales Team</span>} />
        </Section>

        <Section label="Contact Data" open={contactOpen} onToggle={() => setContactOpen(!contactOpen)}>
          <Row label="First Name" value={<strong>{user.firstName}</strong>} />
          <Row label="Last Name" value={<strong>{user.lastName}</strong>} />
          <Row label="Phone number" value={<strong>{user.phone}</strong>} />
          <Row label="Email" value={<strong className="small text-break">{user.email}</strong>} />
          <button className="btn btn-link p-0 fw-semibold small text-decoration-none">See all</button>
        </Section>

        <Section label="Contact Labels" open={labelsOpen} onToggle={() => setLabelsOpen(!labelsOpen)}>
          <div className="d-flex flex-wrap gap-2">
            <Badge>Closed Won</Badge>
            <Badge>{user.address?.city ?? "Chicago"}</Badge>
            <button className="icon-btn" style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(44,109,223,0.4)", color: "var(--tag-foreground)" }}>
              <Plus size={14} />
            </button>
          </div>
        </Section>

        <Section label="Notes" open={notesOpen} onToggle={() => setNotesOpen(!notesOpen)}>
          <input className="note-input" placeholder="Add a note" />
          <div className="note-pill">Strong potential for future upgrades</div>
        </Section>

        <Section label="Other Chats" open={otherOpen} onToggle={() => setOtherOpen(!otherOpen)} last>
          <div className="d-flex align-items-center gap-3">
            <span className="avatar" style={{ background: "linear-gradient(45deg,#feda75,#d62976,#4f5bd5)" }}>
              <Instagram size={16} />
            </span>
            <div className="flex-1">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold small">Fit4Life</span>
                <span className="small text-muted">08/08/25</span>
              </div>
              <p className="small text-muted mb-0 text-truncate">On my way!</p>
            </div>
          </div>
        </Section>
      </div>
    </aside>
  );
}
