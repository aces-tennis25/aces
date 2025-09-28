"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TbUsers } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { IoFitnessSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: "private" | "group" | "cardio" | "consultation";
}

const services = {
  private: {
    name: "Private Session",
    price: 100,
    icon: <FaRegUser />,
    unit: "hour",
    description: "One-on-one coaching session. ",
  },
  group: {
    name: "Group Session",
    price: 40,
    icon: <TbUsers />,
    unit: "person/session",
    description: "Small group traning session.",
  },
  cardio: {
    name: "Cardio Tennis",
    price: 20,
    icon: <IoFitnessSharp />,
    unit: "person/session",
    description: "Fun like fitness tennis session.",
  },
  consultation: {
    name: "Consultation",
    price: 150,
    icon: <FiMessageCircle />,
    unit: "session",
    description: "Strategic planning sessions.",
  },
};

const bankDetails = [
  {
    index: 1,
    title: "Bank Name",
    detail: "Chase Bank",
  },
  {
    index: 2,
    title: "Account Number",
    detail: "623281063",
  },
  {
    index: 3,
    title: "Account Name",
    detail: "Abel Ubiebi",
  },
];

const BookingModal = ({ isOpen, onClose, serviceType }: BookingModalProps) => {
  const [step, setStep] = useState<"payment" | "confirmation">("payment");
  const [quantity, setQuantity] = useState(1);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const service = services[serviceType]; // Default to the first service
  const totalAmount = service.price * quantity;
  const referenceNumber = useMemo(
    () =>
      `ACESTENNIS-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    []
  ); // Generate once per modal open

  //combined array
  const bankDetailsWithRef = [
    ...bankDetails,
    {
      index: 4,
      title: "Reference Number",
      detail: referenceNumber,
    },
  ];
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const handleConfirm = () => {
    setStep("confirmation");
  };

  const handleShareReceipt = () => {
    const subject = encodeURIComponent("Payment Receipt - Aces Tennis Academy");
    const body =
      encodeURIComponent(`Hello Aces Tennis Academy, I have completed my payment for my booking:
            Service: ${service.name}
            ${
              service.unit === "person"
                ? "Number of Persons"
                : service.unit === "hour"
                ? "Duration"
                : "Sessions"
            }: ${quantity} ${service.unit}${quantity > 1 ? "s" : ""}
            Amount Paid: $${totalAmount}
            Reference Number: ${referenceNumber}
            
            Please find the payment receipt attached.
            Thank You!
            `);
    // window.location.href = `mailto:acestennis@yahoo.com?subject=${subject}&body=${body}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=acestennis@yahoo.com&subject=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };
  const handleClose = () => {
    setStep("payment");
    setQuantity(1);
    onClose();
  };
  const getQuantityLabel = () => {
    switch (service.unit) {
      case "person":
        return "Number of People";
      case "hour":
        return "Duration (Hours)";
      case "session":
        return "Number of Sessions";
      default:
        return "Quantity";
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-white max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center space-x-2">
            <p className="h-5 w-5 text-green-600">{service.icon}</p>
            <span>Pay for {service.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto px-1  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <AnimatePresence mode="wait">
            {step === "payment" && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <p className="h-8 w-8 text-center text-green-600">
                          {service.icon}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* quantity */}
                    <div className="space-y-2 mb-4">
                      <Label htmlFor="quantity">{getQuantityLabel()}</Label>
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                          className="border-gray-200"
                        >
                          -
                        </Button>
                        <Input
                          id="quantity"
                          type="number"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, Number.parseInt(e.target.value) || 1)
                            )
                          }
                          className="w-20 text-center border-gray-100"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity + 1))}
                          className=" border-gray-200"
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* price calculation */}
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span>Price per {service.unit}</span>
                        <span>${service.price}</span>
                      </div>
                      <div className="justify-between flex items-center mb-2">
                        <span>{getQuantityLabel()}:</span>
                        <span>{quantity}</span>
                      </div>
                      <hr className="my-2 border-t border-gray-200" />
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total Amount:</span>
                        <span className="text-green-600">${totalAmount}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* bank details */}
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">🏦</span>
                      Bank Transfer Details
                    </h4>
                    <div className="space-y-4">
                      {bankDetailsWithRef.map((item) => (
                        <div
                          key={item.index}
                          className="flex justify-between items-center p-2 bg-gray-50 rounded"
                        >
                          <div>
                            <p className="text-sm text-gray-600">
                              {item.title}
                            </p>
                            <p
                              className={`font-bold ${
                                item.title === "Reference Number"
                                  ? "text-green-600"
                                  : ""
                              }`}
                            >
                              {item.detail}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(item.detail, item.title)
                            }
                          >
                            {copiedField === item.title ? (
                              <div>
                                <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-green-600">
                                  Copied!
                                </span>
                              </div>
                            ) : (
                              <MdContentCopy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> Please include the reference
                        number in your transfer description for faster
                        processing.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Button
                  onClick={handleConfirm}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-md"
                  size="lg"
                >
                  I&apos;ve Made the Payment
                </Button>
              </motion.div>
            )}

            {step === "confirmation" && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center mx-auto justify-center mb-6"
                >
                  <IoMdCheckmarkCircleOutline className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Payment Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your payment. To confirm your booking, please
                  share your payment receipt with us.
                </p>
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Booking Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>{service.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{getQuantityLabel()}:</span>
                        <span>{quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount Paid:</span>
                        <span className="font-bold text-green-600">
                          ${totalAmount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reference:</span>
                        <span className="font-mono text-sm">
                          {referenceNumber}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-3">
                  <Button
                    onClick={handleShareReceipt}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                    size="lg"
                  >
                    <IoMdMail className="mr-2 h-4 w-4" />
                    Share Receipt via Email
                  </Button>

                  <p className="text-xs text-gray-500">
                    This will open your email app with a pre-filled message to
                    acestennis@yahoo.com
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
