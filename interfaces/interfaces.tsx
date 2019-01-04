export interface IWebtoon {
  id: number;
  title: string;
  nickname?: string;
  thumbnailUrl: string;
}

export interface IEpisode {
  id: number;
  title: string;
  nickname?: string;
  thumbnailUrl: string;
}

export interface IDay {
  day: string;
  name: string;
}
