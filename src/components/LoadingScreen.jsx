import { Link } from "react-router-dom";
import { Inbox, Users, Sparkles, GitBranch, Target, Hexagon } from "lucide-react";

const HEX_ICONS = [
  { icon: Sparkles, x: "18%", y: "22%", delay: "0s" },
  { icon: Users, x: "82%", y: "20%", delay: "0.4s" },
  { icon: Inbox, x: "12%", y: "48%", delay: "0.8s" },
  { icon: Users, x: "24%", y: "62%", delay: "1.2s" },
  { icon: GitBranch, x: "78%", y: "44%", delay: "0.6s" },
  { icon: Target, x: "86%", y: "60%", delay: "1.0s" },
];

export default function LoadingScreen() {
  return (
    <div className="loading-bg">
      {HEX_ICONS.map((h, i) => {
        const Ico = h.icon;
        return (
          <div key={i} className="hex-icon float" style={{ left: h.x, top: h.y, animationDelay: h.delay }}>
            <Hexagon size={72} color="rgba(255,255,255,0.15)" strokeWidth={1} style={{ position: "absolute" }} />
            <Ico size={26} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
          </div>
        );
      })}

      <div className="orb-wrap">
        <div className="orb-stage">
          <div className="orb" />
          <div className="orb-ring" />
          <div className="orb-ring inner" />
        </div>

        <h1 className="loading-title">Extracting Information...</h1>
        <p className="loading-sub">We are extracting information from the above honey combs to your system</p>

        <Link to="/inbox" className="continue-btn">Continue to Dashboard →</Link>
      </div>
    </div>
  );
}
