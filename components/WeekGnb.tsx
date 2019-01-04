import Link from "next/link";
import { IDay } from "../interfaces/interfaces";

interface IProps {
  day: string;
}

const dayList: IDay[] = [
  {
    day: "mon",
    name: "월",
  },
  {
    day: "tue",
    name: "화",
  },
  {
    day: "wed",
    name: "수",
  },
  {
    day: "thu",
    name: "목",
  },
  {
    day: "fri",
    name: "금",
  },
  {
    day: "sat",
    name: "토",
  },
  {
    day: "sun",
    name: "일",
  },
];

const WeekGnb: React.SFC<IProps> = ({ day }) => (
  <div id="weekGnb">
    {dayList.map((d, index) => (
      <Link key={index} href={`/?day=${index + 1}`}>
        <a className={day === (index + 1).toString() ? "on" : ""}>{d.name}</a>
      </Link>
    ))}
  </div>
);

export default WeekGnb;
