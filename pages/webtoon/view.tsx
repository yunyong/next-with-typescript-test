import axios from "axios";
import { withRouter } from "next/router";
import React from "react";
import Gnb from "../../components/Gnb";
import Header from "../../components/Header";
import WebtoonEpisodeList from "../../components/WebtoonEpisodeList";
import { IEpisode, IWebtoon } from "../../interfaces/interfaces";

interface IProps {
  nickname: string;
  webtoon: IWebtoon;
}

interface IState {
  episodes: IEpisode[];
}

class View extends React.Component<IProps, IState> {
  public static async getInitialProps({ query }) {
    const webtoonRes = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${query.nickname}`,
    );
    return {
      nickname: query.nickname,
      webtoon: webtoonRes.data,
    };
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      episodes: [],
    };
  }

  public componentDidMount() {
    try {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${
            this.props.nickname
          }`,
        )
        .then((res) => {
          this.setState({
            episodes: res.data,
          });
        });
    } catch (e) {
      console.error(e);
    }
  }

  public render() {
    const { webtoon, nickname } = this.props;
    return (
      <div id="webtoonView">
        <Header title={webtoon.title} />
        <Gnb menu="webtoon" />
        <div className="tit_webtoon">
          {nickname} {webtoon.title}
        </div>
        <WebtoonEpisodeList episodes={this.state.episodes} />
      </div>
    );
  }
}

export default withRouter(View);
