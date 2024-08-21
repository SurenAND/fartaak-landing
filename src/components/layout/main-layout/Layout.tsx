import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const Header = dynamic(
  () => import("@/src/components/layout/main-layout/header/Header")
);
const Footer = dynamic(
  () => import("@/src/components/layout/main-layout/footer/Footer")
);

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-white duration-200"
      dir="rtl"
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
