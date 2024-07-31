import { Metadata } from "next";

/**
 * 메인 레이아웃에 title.template 에 설정을 해놔도 absolute 로 잡으면 absolute가 먹힌다.
 */
export const metadata: Metadata = {
  title: {
    absolute: 'Blog'
  }
}

export default function Blog() {
  return <h1>My blog</h1>;
}
