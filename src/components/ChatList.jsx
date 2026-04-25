import { Search, SlidersHorizontal, PanelLeft, SquarePen, ChevronDown } from "lucide-react";

const TIMES = ["23:23", "23:16", "22:28", "20:43", "17:37", "16:01", "13:44", "09:02", "Yesterday"];
const PREVIEWS = [
  "Oh my god 😍 I'll try it ASAP, thank..",
  "Good Evening, Emily! Hope you are..",
  "Thank you for signing up Frank! If t..",
  "I am sending you the report right a..",
  "Thank you for filling out our survey!",
  "I will update you soon Isabella!",
  "Hello James! Let's collaborate on...",
  "Hi Katherine, looking forward to our..",
  "Hey Lucas! Ready for the holiday...",
];

export default function ChatList({ users, selectedId, onSelect, loading, onToggleSidebar, hideOnMobile }) {
  return (
    <section className={`chat-list ${hideOnMobile ? "hide-mobile" : ""}`}>
      <header className="chat-list-header">
        <button className="icon-btn" onClick={onToggleSidebar}><PanelLeft size={18} /></button>
        <h3>Michael Johnson</h3>
        <button className="icon-btn"><SquarePen size={18} /></button>
      </header>

      <div className="search-box">
        <Search size={16} color="#7a7a8c" />
        <input placeholder="Search Chat" />
        <SlidersHorizontal size={16} color="#7a7a8c" />
      </div>

      <div className="list-filters">
        <button className="filter-btn fw-semibold"><span>Open</span><ChevronDown size={14} /></button>
        <button className="filter-btn muted"><span>Newest</span><ChevronDown size={14} /></button>
      </div>

      <div className="chats-scroll thin-scroll">
        {loading && Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="d-flex gap-3 p-3">
            <div className="skel" style={{ width: 40, height: 40, borderRadius: "50%" }} />
            <div className="flex-1">
              <div className="skel" style={{ height: 12, width: "33%", marginBottom: 8 }} />
              <div className="skel" style={{ height: 12, width: "66%" }} />
            </div>
          </div>
        ))}
        {!loading && users.map((u, i) => {
          const isActive = u.id === selectedId;
          return (
            <button key={u.id} onClick={() => onSelect(u)} className={`chat-item ${isActive ? "active" : ""}`}>
              <span className={`avatar tone-${i % 9}`}>{u.firstName[0]}</span>
              <div className="meta">
                <div className="row1">
                  <span className="name">{u.firstName} {u.lastName}</span>
                  <span className="time">{TIMES[i % TIMES.length]}</span>
                </div>
                <p className="preview">{PREVIEWS[i % PREVIEWS.length]}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
