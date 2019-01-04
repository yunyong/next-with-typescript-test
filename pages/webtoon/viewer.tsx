import axios from "axios";
import { withRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";
import { IEpisode } from "../../interfaces/interfaces";

interface IProps {
  episode: IEpisode;
  type: string;
}
class View extends React.Component<IProps, {}> {
  public static async getInitialProps({ query }) {
    const webtoonRes = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${query.episodeId}`,
    );
    return {
      episode: webtoonRes.data,
      type: "viewer",
    };
  }

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { episode, type } = this.props;
    return (
      <div id="webtoonViewer">
        <Header title={episode.title} type={type} />
        <div>{episode.title}</div>
        <img src={episode.thumbnailUrl} />
      </div>
    );
  }
}

export default withRouter(View);
