import type { FC, PropsWithChildren } from "react";

import Sidebar from "../components/sidebar";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
    function ({ children, isFooter = true }) {
      return (
          <>
            <div className="flex items-start ">
              <Sidebar />
              <MainContent isFooter={isFooter}>{children}</MainContent>
            </div>
          </>
      );
    };

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
                                                                                 children,

                                                                               }) {
  return (
      <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
        {children}

      </main>
  );
};

export default NavbarSidebarLayout;
