import { IEpisode } from "../interfaces/interfaces";
import routes from "../routes";
const { Link } = routes;

const WebtoonEpisodeContent: React.SFC<{ episode: IEpisode }> = ({
  episode,
}) => (
  <div>
    <Link route="webtoonViewer" params={{ episodeId: episode.id }}>
      <a>
        <img src={episode.thumbnailUrl} width="40" />
        {episode.id} {episode.title}
      </a>
    </Link>
  </div>
);

const WebtoonEpisodeList: React.SFC<{ episodes: IEpisode[] }> = ({
  episodes,
}) => (
  <div>
    {episodes.map((episode, index) => (
      <WebtoonEpisodeContent key={index} episode={episode} />
    ))}
  </div>
);

export default WebtoonEpisodeList;
