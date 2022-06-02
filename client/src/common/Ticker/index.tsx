import { TickerProps } from "../types";
import "./styles.css";

export const Ticker = ({ content, children }: TickerProps) => (
  <div className="hwrap">
    <div className="hmove">
      {content.map((item: any, id: number) => {
        return <div className="hitem">{item.title}</div>;
      })}
    </div>
  </div>
);
