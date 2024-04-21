import React, { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

const HelpPage: FC = function () {
    // Function to handle sending messages
    const sendMessage = (message: string) => {
        // Logic to send message to administrator
        console.log("Message sent:", message);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Help</h1>
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Chat with Administrator</h2>
                <ChatBox sendMessage={sendMessage} />
            </div>
            <p className="text-sm text-gray-500">
                If you have any other questions or concerns, please contact us at
                support@fintechsavvy.com.
            </p>
        </div>
    );
};

// Example ChatBox component (replace with your actual chat component)
const ChatBox: FC<{ sendMessage: (message: string) => void }> = ({ sendMessage }) => {
    const [messages, setMessages] = React.useState<string[]>([]);
    const [message, setMessage] = React.useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            sendMessage(message);
            setMessages([...messages, message]);
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col h-96 border rounded overflow-hidden">
            <div className="flex-grow overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="flex justify-end mb-2">
                        <div className="bg-blue-500 text-white p-2 rounded max-w-xs">
                            {msg}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center p-2">
                <input
                    type="text"
                    className="flex-grow border rounded py-2 px-3 mr-2"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleMessageChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

const Help = () => {
    return (
        <NavbarSidebarLayout>
            <HelpPage />
        </NavbarSidebarLayout>
    );
};

export default Help;
