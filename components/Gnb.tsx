import Link from "next/link";

interface IProps {
  menu: string;
}

const Gnb: React.SFC<IProps> = ({ menu }) => (
  <div id="gnb">
    <Link href="#none">
      <a className={menu === "webtoon" ? "on" : ""}>Webtoon</a>
    </Link>
    &nbsp;&nbsp;
    <Link href="#none">
      <a className={menu === "league" ? "on" : ""}>League</a>
    </Link>
    &nbsp;&nbsp;
    <Link href="#none">
      <a className={menu === "my" ? "on" : ""}>MY</a>
    </Link>
  </div>
);

export default Gnb;
