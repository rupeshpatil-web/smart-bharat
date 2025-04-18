import MainLayout from "@/components/main-layout";
import VoiceAssistant from "@/components/voice-assistant";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="py-6 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-6 text-center">आपका स्वागत है! (Welcome!)</h2>
        <VoiceAssistant />

        {/* Welcome message */}
        <p className="text-center mb-4">नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?</p>

        {/* Text Input Box */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="अपना सवाल लिखें... (Type your question...)"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl">
            ➤
          </button>
        </div>


      </div>
    </MainLayout>
  );
}
