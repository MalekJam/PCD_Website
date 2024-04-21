import type { FC } from "react";
import React, { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";

const CardInfo: FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle submission logic here, such as sending the card information to the backend
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <img alt="Flowbite logo" src="/images/logo.png" className="mr-3 h-12" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          FinTechSavvy
        </span>
      </div>
      <Card
        horizontal
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Enter Card Information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="cardNumber">Card Number</Label>
            <TextInput
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <TextInput
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="cvv">CVV</Label>
            <TextInput
              id="cvv"
              name="cvv"
              placeholder="XXX"
              type="text"
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
          <div className="mb-7">
            <Button type="submit" className="w-full lg:w-auto" href="/">
              Save Card
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CardInfo;
