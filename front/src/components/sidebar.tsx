import { DarkThemeToggle, Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { HiChartPie, HiClipboard, HiInformationCircle } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiStockFill } from "react-icons/ri";

const ExampleSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapseBehavior="hide"
    >
      <div>
        <Sidebar.Logo href="#" img="/images/logo.png" imgAlt="LOGO">
          FinTechSavvy
        </Sidebar.Logo>
      </div>

      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse icon={HiChartPie} label="Budget">
                <Sidebar.Item
                  href="/"
                  className={
                    "/" === currentPage ? "bg-gray-100 dark:bg-gray-700 " : ""
                  }
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  href="/budget/input"
                  className={
                    "/budget/input" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  Input
                </Sidebar.Item>
                <Sidebar.Item
                  href="/budget/ai"
                  className={
                    "/budget/ai" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  AI Assist
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={FaMoneyBillTransfer} label="Payments">
                <Sidebar.Item
                  href="/payment/bill"
                  className={
                    "/payment/bill" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  Bills
                </Sidebar.Item>
                <Sidebar.Item
                  href="/payment/other_user"
                  className={
                    "/payment/other_user" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  InterUsers
                </Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={RiStockFill} label="Trading">
                <Sidebar.Item
                  href="/trading/news"
                  className={
                    "/trading/news" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  News
                </Sidebar.Item>
                <Sidebar.Item
                  href="/trading/ai"
                  className={
                    "/trading/ai" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  Trading Bot
                </Sidebar.Item>
                <Sidebar.Item
                  href="/trading/portfolio"
                  className={
                    "/trading/portfolio" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700 "
                      : ""
                  }
                >
                  Portfolio
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/terms-and-conditions" icon={HiClipboard}>
                Terms & Conditions
              </Sidebar.Item>

              <Sidebar.Item href="/help" icon={HiInformationCircle}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DarkThemeToggle />
        Toggle Theme
      </div>
    </Sidebar>
  );
};

export default ExampleSidebar;
