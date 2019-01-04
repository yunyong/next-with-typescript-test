import { IWebtoon } from "../interfaces/interfaces";
import routes from "../routes";
const { Link } = routes;

const WebtoonContent: React.SFC<{ webtoon: IWebtoon }> = ({ webtoon }) => (
  <div>
    <Link route="webtoonView" params={{ nickname: webtoon.id }}>
      <a>
        {webtoon.id} {webtoon.title}
      </a>
    </Link>
  </div>
);

const DayWebtoonList: React.SFC<{ webtoons: IWebtoon[] }> = ({ webtoons }) => (
  <div>
    {webtoons.map((webtoon, index) => (
      <WebtoonContent key={index} webtoon={webtoon} />
    ))}
  </div>
);

export default DayWebtoonList;
