import { Inbox, Users, Sparkles, GitBranch, Target, Settings } from "lucide-react";

const items = [
  { icon: Inbox, label: "Inbox", active: true },
  { icon: Users, label: "Contacts" },
  { icon: Sparkles, label: "AI Employees" },
  { icon: GitBranch, label: "Workflows" },
  { icon: Target, label: "Campaigns" },
];

export default function TopNav() {
  return (
    <header className="top-nav">
      <div className="left">
        <div className="d-flex align-items-center gap-2">
          <span className="brand-logo">B</span>
          <span className="brand-name d-none d-sm-inline">BOXpad</span>
        </div>
        <nav className="top-nav-tabs thin-scroll">
          {items.map((it) => {
            const Ico = it.icon;
            return (
              <button key={it.label} className={`tab ${it.active ? "active" : ""}`}>
                <Ico size={16} />
                <span className="d-none d-sm-inline">{it.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="d-flex align-items-center gap-2">
        <button className="icon-btn"><Settings size={18} /></button>
        <div className="user-chip">
          <span className="avatar">M</span>
          <span className="fw-semibold small d-none d-sm-inline">Michael Johnson</span>
        </div>
      </div>
    </header>
  );
}
