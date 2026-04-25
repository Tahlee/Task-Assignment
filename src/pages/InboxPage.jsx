import { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import DetailsPanel from "../components/DetailsPanel";
import { fetchUsers, fetchCommentsByUser } from "../lib/api";

export default function InboxPage() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState();
  const [comments, setComments] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingMsgs, setLoadingMsgs] = useState(false);
  const [error, setError] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((u) => { setUsers(u); setSelected(u[0]); })
      .catch((e) => setError(e.message))
      .finally(() => setLoadingUsers(false));
  }, []);

  useEffect(() => {
    if (!selected) return;
    setLoadingMsgs(true);
    fetchCommentsByUser(selected.id)
      .then(setComments)
      .catch((e) => setError(e.message))
      .finally(() => setLoadingMsgs(false));
  }, [selected]);

  if (error) {
    return <div className="d-flex vh-100 align-items-center justify-content-center text-danger">{error}</div>;
  }

  return (
    <div className="app-shell">
      <TopNav />
      <div className="app-body">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <ChatList
          users={users}
          selectedId={selected?.id}
          onSelect={setSelected}
          loading={loadingUsers}
          onToggleSidebar={() => setSidebarOpen(true)}
          hideOnMobile={!!selected}
        />
        <ChatWindow user={selected} comments={comments} loading={loadingMsgs} hideOnMobile={!selected} />
        {detailsOpen && <DetailsPanel user={selected} onClose={() => setDetailsOpen(false)} />}
      </div>
    </div>
  );
}
