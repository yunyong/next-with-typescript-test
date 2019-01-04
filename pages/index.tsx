import axios from "axios";
import React from "react";
import Gnb from "../components/Gnb";
import Header from "../components/Header";
import WeekGnb from "../components/WeekGnb";

import { withRouter } from "next/router";
import DayWebtoonList from "../components/DayWebtoonList";
import { IWebtoon } from "../interfaces/interfaces";

const apiUrl: string = "https://jsonplaceholder.typicode.com/albums?userId=";

interface IProps {
  day: string;
}

interface IState {
  day: string;
  webtoons: IWebtoon[];
}

class Index extends React.Component<IProps, IState> {
  public static async getInitialProps({ query }) {
    return {
      day: query.day,
    };
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      day: this.props.day || "1",
      webtoons: [],
    };
  }

  public componentDidMount() {
    this._getList();
  }

  public componentDidUpdate(prevProps) {
    if (this.props.day !== prevProps.day) {
      this.setState(
        {
          day: this.props.day,
        },
        () => {
          this._getList();
        },
      );
    }
  }

  public render() {
    return (
      <div>
        <Header />
        <Gnb menu="webtoon" />
        <WeekGnb day={this.state.day} />
        <DayWebtoonList webtoons={this.state.webtoons} />
      </div>
    );
  }

  private _getList() {
    axios
      .get(apiUrl + this.state.day)
      .then((res) => {
        this.setState({
          webtoons: res.data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export default withRouter(Index);
