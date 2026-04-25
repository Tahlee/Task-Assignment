import { MoreVertical, Moon, Bookmark, Image, Play, MessageSquare, Smile, CornerDownLeft, Zap, Mic, CheckCheck } from "lucide-react";

export default function ChatWindow({ user, comments, loading, hideOnMobile }) {
  if (!user) {
    return (
      <div className={`chat-window d-none d-md-flex align-items-center justify-content-center text-muted ${hideOnMobile ? "hide-mobile" : ""}`}>
        Select a conversation
      </div>
    );
  }

  return (
    <section className={`chat-window ${hideOnMobile ? "hide-mobile" : ""}`}>
      <header className="chat-window-header">
        <h3>{user.firstName} {user.lastName}</h3>
        <div className="chat-actions">
          <button className="icon-btn"><MoreVertical size={18} /></button>
          <button className="icon-btn"><Moon size={18} /></button>
          <button className="icon-btn solid"><Bookmark size={18} /></button>
        </div>
      </header>

      <div className="messages thin-scroll">
        <div className="day-pill">28 August 2025</div>
        {loading && Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`bubble-row ${i % 2 ? "sent" : ""}`}>
            <div className="skel" style={{ height: 60, width: "60%", borderRadius: 18 }} />
          </div>
        ))}
        {!loading && comments.map((c, i) => {
          const sent = i % 2 === 1;
          const time = `23:${String(8 + i * 2).padStart(2, "0")}`;
          return (
            <div key={c.id} className={`bubble-row ${sent ? "sent" : ""}`}>
              {!sent && <span className="bubble-time">{time}</span>}
              <div className={`bubble ${sent ? "sent" : "received"}`}>{c.body}</div>
              {sent && (
                <span className="bubble-time">
                  <span>{time}</span>
                  <CheckCheck size={14} color="#0ea5e9" />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="composer">
        <div className="composer-box">
          <input placeholder="Type something...." />
          <div className="composer-toolbar">
            <div className="group">
              <button className="icon-btn"><Image size={16} /></button>
              <button className="icon-btn"><Play size={16} /></button>
              <button className="icon-btn"><MessageSquare size={16} /></button>
              <button className="icon-btn"><Smile size={16} /></button>
              <button className="icon-btn"><CornerDownLeft size={16} /></button>
            </div>
            <div className="group">
              <button className="icon-btn"><Zap size={16} /></button>
              <button className="icon-btn"><Mic size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
