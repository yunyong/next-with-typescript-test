import Head from "next/head";
import Link from "next/link";
import "../css/common.css";

interface IProps {
  title?: string;
  type?: string;
}

const Header: React.SFC<IProps> = ({ title = "Daum Webtoon", type }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/55470CCB021E830004"
      />
      <meta
        property="og:description"
        content="이루다 주임의 미중년 상사 백 과장. 이 둘 사이에 생긴 묘한 사건 l 상상이 시작되는 곳 Daum 웹툰"
      />
      <meta
        property="og:url"
        content="http://webtoon.daum.net/link/view/verygood"
      />
      <meta property="og:site_name" content="Daum 만화속세상" />
      <meta property="og:type" content="article" />
      <meta name="plink" content="http://webtoon.daum.net/link/view/verygood" />
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
      />
    </Head>
    {type !== "viewer" ? (
      <Link href="/">
        <a>LOGO</a>
      </Link>
    ) : (
      ""
    )}
  </div>
);

export default Header;
