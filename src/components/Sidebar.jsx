import { useState } from "react";
import { Inbox as InboxIcon, Users, UserCircle2, ChevronDown, Globe, MessageCircle } from "lucide-react";

const teams = [
  { name: "Sales", count: 7 },
  { name: "Customer Support", count: 16 },
];
const users = [
  { name: "Sarah Williams", count: 2 },
  { name: "Michael Johnson", count: 11, active: true },
  { name: "Emily Davis" },
  { name: "Christopher Miller", count: 4 },
  { name: "Amanda Garcia", count: 5 },
  { name: "Joshua Martinez" },
  { name: "Ashley Taylor", count: 1 },
  { name: "Daniel Anderson" },
  { name: "Jessica Thomas", count: 2 },
];

function NavItem({ icon: Icon, label, badge, active }) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`}>
      <span className="left">
        {Icon ? <Icon size={18} /> : null}
        <span>{label}</span>
      </span>
      {badge && <span className="badge-count">{badge}</span>}
    </button>
  );
}

function Section({ label, open, onToggle, children }) {
  return (
    <div>
      <button className="section-toggle" onClick={onToggle}>
        <span>{label}</span>
        <ChevronDown size={16} className={`chev ${!open ? "closed" : ""}`} />
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default function Sidebar({ open, onClose }) {
  const [teamsOpen, setTeamsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);
  const [chOpen, setChOpen] = useState(true);

  return (
    <>
      {open && <div className="sidebar-backdrop d-lg-none" onClick={onClose} />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h2>Inbox</h2>
        <nav className="sidebar-nav thin-scroll">
          <NavItem icon={UserCircle2} label="My Inbox" />
          <NavItem icon={Users} label="All" badge="28" />
          <NavItem icon={InboxIcon} label="Unassigned" badge="5" />

          <Section label="Teams" open={teamsOpen} onToggle={() => setTeamsOpen(!teamsOpen)}>
            {teams.map((t) => (
              <NavItem key={t.name} icon={Globe} label={t.name} badge={String(t.count)} />
            ))}
          </Section>

          <Section label="Users" open={usersOpen} onToggle={() => setUsersOpen(!usersOpen)}>
            {users.map((u) => (
              <NavItem key={u.name} icon={UserCircle2} label={u.name} badge={u.count ? String(u.count) : undefined} active={u.active} />
            ))}
          </Section>

          <Section label="Channels" open={chOpen} onToggle={() => setChOpen(!chOpen)}>
            <NavItem icon={MessageCircle} label="Fit4Life" active />
            <NavItem icon={MessageCircle} label="Fit4LIfe" />
          </Section>
        </nav>
      </aside>
    </>
  );
}
