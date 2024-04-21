import { useState } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

const BillPage = () => {
    const [fullName, setFullName] = useState("");
    const [billId, setBillId] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [organizationAddress, setOrganizationAddress] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [automatePayment, setAutomatePayment] = useState(false);
    const [scheduledDate, setScheduledDate] = useState("");
    const [scheduledTime, setScheduledTime] = useState("");
    const [automatedBills, setAutomatedBills] = useState<string[]>([]);

    const handlePayBill = () => {
        // Logic to process payment (mocked here)
        setPaymentStatus("Paid");

        if (automatePayment) {
            scheduleAutomaticPayment();
        }
    };

    const scheduleAutomaticPayment = () => {
        // Logic to schedule automatic payment
        const scheduledBill = `Bill ID: ${billId}, Organization: ${organizationName}, Date: ${scheduledDate}, Time: ${scheduledTime}`;
        setAutomatedBills([...automatedBills, scheduledBill]);
        console.log("Bill payment scheduled for", scheduledDate, scheduledTime);
    };

    const removeAutomatedBill = (index: number) => {
        const updatedBills = [...automatedBills];
        updatedBills.splice(index, 1);
        setAutomatedBills(updatedBills);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Pay Your Bill</h1>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Full Name</label>
                <input
                    type="text"
                    className="border rounded py-2 px-3 w-full"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Bill ID</label>
                <input
                    type="text"
                    className="border rounded py-2 px-3 w-full"
                    value={billId}
                    onChange={(e) => setBillId(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Organization Name</label>
                <input
                    type="text"
                    className="border rounded py-2 px-3 w-full"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Organization Address</label>
                <input
                    type="text"
                    className="border rounded py-2 px-3 w-full"
                    value={organizationAddress}
                    onChange={(e) => setOrganizationAddress(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Scheduled Date</label>
                <input
                    type="date"
                    className="border rounded py-2 px-3 w-full"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Scheduled Time</label>
                <input
                    type="time"
                    className="border rounded py-2 px-3 w-full"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                        checked={automatePayment}
                        onChange={(e) => setAutomatePayment(e.target.checked)}
                    />
                    <span className="ml-2">Automate Payment</span>
                </label>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handlePayBill}
            >
                Pay Bill
            </button>
            {paymentStatus && (
                <div className="mt-4">
                    <p className="font-bold">Payment Status: {paymentStatus}</p>
                </div>
            )}
            {automatedBills.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Automated Bills</h2>
                    <ul>
                        {automatedBills.map((bill, index) => (
                            <li key={index} className="mb-2">
                                {bill}{" "}
                                <button
                                    className="text-red-500 font-semibold"
                                    onClick={() => removeAutomatedBill(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Bill = () => {
    return (
        <NavbarSidebarLayout>
            <BillPage />
        </NavbarSidebarLayout>
    );
};

export default Bill;
