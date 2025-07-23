const ChatHeader = () => (
    <header class="bg-gradient-to-r from-[#43319A] to-[#6E6EC5] px-2 py-6 rounded-t-3xl flex items-center shadow gap-3">
        <img src="logo.png" alt="" className="h-10 w-10" />
        <div className="flex flex-col gap-2">
            <h2 class="text-white font-bold text-2xl">Capsibot</h2>
            <span className="text-white leading-4.5">A live chat interface that allows for seamless, natural communication and connection.</span>
        </div>
    </header>
);

export default ChatHeader;