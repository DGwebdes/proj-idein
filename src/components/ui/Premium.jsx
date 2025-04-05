import { Sparkles, X } from "lucide-react";
import { useState } from "react";

const PremiumFeatureTeaser = () => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible) return null;

    return (
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-indigo-100 relative">
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                aria-label="Dismiss"
            >
                <X size={20} />
            </button>

            <h3 className="text-lg font-bold mb-2 text-indigo-800 flex items-center gap-2">
                <Sparkles size={20} className="text-indigo-500" />
                Coming Soon: Premium Features
            </h3>
            <p className="text-indigo-700 mb-2">
                We're working on advanced AI-powered speech recognition that
                works across all browsers and devices.
            </p>
            <p className="text-indigo-600 text-sm">Stay tuned for updates!</p>
        </div>
    );
};

export default PremiumFeatureTeaser;
