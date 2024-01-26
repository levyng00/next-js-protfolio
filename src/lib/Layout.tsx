// "use client";
// import Footer from "@/components/Footer";
// import NavMenu from "@/components/navMenu/NavMenu";
// import Navbar from "@/components/navbar/Navbar";
// import { useNavStore } from "@/hooks/store/useStore";
// import React, { ReactNode } from "react";
// type layoutTypes = {
//   children: ReactNode;
// };
// const Layout = ({ children }: layoutTypes) => {
//   const navState = useNavStore((state) => state.navState);

//   console.log(navState);

//   return (
//     <>
//       <div className="relative z-[9999] ">
//         <Navbar />
//         {navState && <NavMenu />}
//       </div>
//       <div className="relative z-0">{children}</div>
//       <Footer />
//     </>
//   );
// };

// export default Layout;
