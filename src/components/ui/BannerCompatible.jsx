import React, { useEffect, useState } from "react";
import { X, AlertTriangle, Info } from "lucide-react";
console.log("Im here babe! ");

const BannerCompatible = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isChromeDesktop, setIsChromeDesktop] = useState(false);

    useEffect(() => {
        const isChrome =
            /Chrome/.test(navigator.userAgent) &&
            !/Chromium|Edge|Edg/.test(navigator.userAgent);
        const isDesktop = window.innerWidth >= 1024;

        setIsChromeDesktop(isChrome && isDesktop);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-30 p-3 ${
                isChromeDesktop ? "bg-blue-50" : "bg-amber-50"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {isChromeDesktop ? (
                        <>
                            <Info size={20} className="text-blue-500" />
                            <p className="text-blue-800">
                                <span className="font-medium">
                                    Optimal Experience:
                                </span>{" "}
                                You're using Chrome on desktop - perfect for the
                                best experience!
                            </p>
                        </>
                    ) : (
                        <>
                            <AlertTriangle
                                size={20}
                                className="text-amber-500"
                            />
                            <p className="text-amber-800">
                                <span className="font-medium">
                                    Compatibility Notice:
                                </span>{" "}
                                This app works best on{" "}
                                <span className="inline-flex items-center">
                                    Chrome
                                </span>{" "}
                                and on desktop devices.
                            </p>
                        </>
                    )}
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Dismiss"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default BannerCompatible;
