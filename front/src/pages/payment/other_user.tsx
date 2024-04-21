import { useState } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

const OtherUserPage = () => {
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionStatus, setTransactionStatus] = useState("");

    const handleSendMoney = () => {
        // Simulated blockchain transaction logic
        const transactionMessage = `Sent ${amount} to ${recipientName} (${recipientEmail})`;
        setTransactionStatus(transactionMessage);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Send Money to Other User</h1>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Your Name</label>
                <input
                    type="text"
                    className="border rounded py-2 px-3 w-full"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Your Email Address</label>
                <input
                    type="email"
                    className="border rounded py-2 px-3 w-full"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Recipient's Name</label>
                <input
                    type="text"
                    className="border rounded py-2 px-3 w-full"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Recipient's Email Address</label>
                <input
                    type="email"
                    className="border rounded py-2 px-3 w-full"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Amount to Send</label>
                <input
                    type="number"
                    className="border rounded py-2 px-3 w-full"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleSendMoney}
            >
                Send Money
            </button>
            {transactionStatus && (
                <div className="mt-4">
                    <p className="font-bold">Transaction Status: {transactionStatus}</p>
                </div>
            )}
        </div>
    );
};

const OtherUser = () => {
    return (
        <NavbarSidebarLayout>
            <OtherUserPage />
        </NavbarSidebarLayout>
    );
};

export default OtherUser;
