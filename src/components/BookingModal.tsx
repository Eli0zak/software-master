import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateBookingWhatsAppLink } from "@/data/courses";
import { MessageCircle } from "lucide-react";

interface BookingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    courseName: string;
}

export const BookingModal = ({ open, onOpenChange, courseName }: BookingModalProps) => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [walletNumber, setWalletNumber] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!fullName.trim()) {
            newErrors.fullName = "الرجاء إدخال الاسم بالكامل";
        }

        if (!phone.trim()) {
            newErrors.phone = "الرجاء إدخال رقم الهاتف";
        } else if (!/^01[0-2,5]{1}[0-9]{8}$/.test(phone.trim())) {
            newErrors.phone = "رقم الهاتف غير صحيح";
        }

        if (!walletNumber.trim()) {
            newErrors.walletNumber = "الرجاء إدخال رقم المحفظة";
        } else if (!/^01[0-2,5]{1}[0-9]{8}$/.test(walletNumber.trim())) {
            newErrors.walletNumber = "رقم المحفظة غير صحيح";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const whatsappLink = generateBookingWhatsAppLink(
                courseName,
                fullName.trim(),
                phone.trim(),
                walletNumber.trim()
            );
            window.open(whatsappLink, "_blank");

            // Reset form and close modal
            setFullName("");
            setPhone("");
            setWalletNumber("");
            setErrors({});
            onOpenChange(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]" dir="rtl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-right" style={{ fontFamily: "Rubik, sans-serif" }}>
                        احجز مكانك الآن
                    </DialogTitle>
                    <DialogDescription className="text-right text-base">
                        املأ بياناتك للتسجيل في <span className="font-bold text-primary">{courseName}</span>
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 mt-4">
                    {/* Full Name Input */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-right block" style={{ fontFamily: "Rubik, sans-serif" }}>
                            الاسم بالكامل <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="اكتب اسمك ثلاثي"
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value);
                                if (errors.fullName) {
                                    setErrors({ ...errors, fullName: "" });
                                }
                            }}
                            className={`text-right booking-input ${errors.fullName ? "border-destructive" : ""}`}
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        />
                        {errors.fullName && (
                            <p className="text-sm text-destructive text-right">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Phone Number Input */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-right block" style={{ fontFamily: "Rubik, sans-serif" }}>
                            رقم الهاتف (للتواصل) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="01xxxxxxxxx"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                if (errors.phone) {
                                    setErrors({ ...errors, phone: "" });
                                }
                            }}
                            className={`text-right booking-input ${errors.phone ? "border-destructive" : ""}`}
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            dir="ltr"
                        />
                        {errors.phone && (
                            <p className="text-sm text-destructive text-right">{errors.phone}</p>
                        )}
                    </div>

                    {/* Wallet Number Input */}
                    <div className="space-y-2">
                        <Label htmlFor="walletNumber" className="text-right block" style={{ fontFamily: "Rubik, sans-serif" }}>
                            رقم المحفظة (فودافون كاش / انستا باي) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="walletNumber"
                            type="tel"
                            placeholder="الرقم الذي سيتم التحويل منه"
                            value={walletNumber}
                            onChange={(e) => {
                                setWalletNumber(e.target.value);
                                if (errors.walletNumber) {
                                    setErrors({ ...errors, walletNumber: "" });
                                }
                            }}
                            className={`text-right booking-input ${errors.walletNumber ? "border-destructive" : ""}`}
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            dir="ltr"
                        />
                        {errors.walletNumber && (
                            <p className="text-sm text-destructive text-right">{errors.walletNumber}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-[#0044CC] to-[#0066FF] hover:from-[#0033AA] hover:to-[#0055EE] text-white font-semibold py-6 text-lg gap-2"
                    >
                        <MessageCircle className="h-5 w-5" />
                        تأكيد وإرسال عبر واتساب
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
