import MainLayout from "@/components/main-layout"
import VoiceAssistant from "@/components/voice-assistant"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="py-6 max-w-lg mx-auto pb-28 px-4">
        <h2 className="text-xl font-bold mb-6 text-center">आपका स्वागत है! (Welcome!)</h2>

        <VoiceAssistant />

        {/* Input Box under Tap to Speak */}
        <div className="mt-8 w-full">
          <div className="flex items-center gap-2 bg-[#f5f6fa] rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
            />
            <button className="bg-[#ff7900] text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-600 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
