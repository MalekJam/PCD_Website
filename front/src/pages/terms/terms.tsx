import React,{type FC} from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

const TermsAndConditions: React.FC = () => {
    return (
        <div className="px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
            <p className="mb-4">
                Welcome to FintechSavvy! By accessing or using our services, you agree
                to be bound by these Terms and Conditions.
            </p>
            <h2 className="text-xl font-bold mb-4">1. Account Registration</h2>
            <p className="mb-4">
                To access the full features of our platform, you must register for an
                account. You agree to provide accurate and complete information during
                the registration process.
            </p>
            <h2 className="text-xl font-bold mb-4">2. Digital Wallet</h2>
            <p className="mb-4">
                FintechSavvy provides users with a digital wallet where they can track
                their transactions, manage expenses, incomes, and budgets.
            </p>
            <h2 className="text-xl font-bold mb-4">3. AI Budget Recommendations</h2>
            <p className="mb-4">
                We offer AI-powered budgeting features to help users optimize their
                finances. These recommendations are based on user data and financial
                patterns.
            </p>
            <h2 className="text-xl font-bold mb-4">4. Trading Features</h2>
            <p className="mb-4">
                Users have access to trading news, trading bots, and other features
                related to cryptocurrency trading. All trading data is securely
                managed.
            </p>
            <h2 className="text-xl font-bold mb-4">5. Blockchain Security</h2>
            <p className="mb-4">
                FintechSavvy utilizes blockchain technology to secure crucial user
                data, transactions, and communications.
            </p>
            <h2 className="text-xl font-bold mb-4">6. Money Transfer</h2>
            <p className="mb-4">
                Users can send and receive money to other users securely through
                FintechSavvy using blockchain technology. Additionally, users can
                automate bill payments.
            </p>
            <h2 className="text-xl font-bold mb-4">7. Acceptance of Terms</h2>
            <p className="mb-4">
                By using FintechSavvy, you acknowledge that you have read, understood,
                and agree to be bound by these Terms and Conditions.
            </p>
            <p className="text-sm text-gray-500">
                If you have any questions or concerns regarding these Terms and
                Conditions, please contact us at support@fintechsavvy.com.
            </p>
        </div>
    );
};

const Terms: FC = function () {
    return (
        <NavbarSidebarLayout>
            <TermsAndConditions/>
        </NavbarSidebarLayout>
    );
};

export default Terms;
