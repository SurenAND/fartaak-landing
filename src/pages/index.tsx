import Layout from "@/src/components/layout/main-layout/Layout";
import HomeTemplate from "@/src/components/templates/Home/HomeTemplate";
import { ReactElement } from "react";

export default function Home() {
  return <HomeTemplate />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
