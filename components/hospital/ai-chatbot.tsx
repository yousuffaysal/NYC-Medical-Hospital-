'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, X, Send, User, ChevronDown, Sparkles, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

export default function AiChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello! I am your AI Medical Assistant for NYC Medical. How can I help you today?' }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isListening, setIsListening] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const toggleListening = () => {
        if (isListening) {
            setIsListening(false)
            return
        }

        if (!('webkitSpeechRecognition' in window)) {
            alert('Voice input is not supported in this browser.')
            return
        }

        const recognition = new (window as any).webkitSpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = 'en-US'

        recognition.onstart = () => setIsListening(true)

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript
            setInput(prev => prev + (prev ? ' ' : '') + transcript)
            setIsListening(false)
        }

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event.error)
            setIsListening(false)
        }

        recognition.onend = () => setIsListening(false)

        recognition.start()
    }

    const suggestedQuestions = [
        "🏥 Visiting Hours",
        "🚑 Emergency Services",
        "💊 Pharmacy Location"
    ]

    const handleSuggestedClick = (question: string) => {
        const userMessage = { role: 'user' as const, content: question }
        setMessages(prev => [...prev, userMessage])
        setIsLoading(true)
        submitMessage(question)
    }

    const submitMessage = async (messageContent: string) => {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, { role: 'user', content: messageContent }] })
            })

            if (!response.body) throw new Error("No response body")

            const reader = response.body.getReader()
            const decoder = new TextDecoder()
            let assistantMessage = { role: 'assistant' as const, content: '' }

            setMessages(prev => [...prev, assistantMessage])

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                const text = decoder.decode(value, { stream: true })
                assistantMessage.content += text

                setMessages(prev => {
                    const newMessages = [...prev]
                    newMessages[newMessages.length - 1] = { ...assistantMessage }
                    return newMessages
                })
            }

        } catch (error) {
            console.error('Chat error:', error)
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again later." }])
        } finally {
            setIsLoading(false)
        }
    }

    // Refactored handleSubmit to use submitMessage
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return
        const msg = input
        setMessages(prev => [...prev, { role: 'user' as const, content: msg }])
        setInput('')
        setIsLoading(true)
        submitMessage(msg)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-[450px] h-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 flex flex-col overflow-hidden font-sans"
                    >
                        {/* Header */}
                        <div className="p-4 bg-teal-600 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Medical AI Assistant</h3>
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-xs">Online</span>
                                    </div>
                                </div>
                            </div>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full h-8 w-8" onClick={() => setIsOpen(false)}>
                                <ChevronDown className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50" ref={scrollRef}>
                            {messages.length === 1 && (
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {suggestedQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSuggestedClick(q)}
                                            className="p-2 text-xs font-medium text-left text-slate-700 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-colors shadow-sm"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {m.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-2 shrink-0 border border-teal-200 dark:border-teal-800">
                                            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                        </div>
                                    )}
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                        ? 'bg-teal-600 text-white rounded-br-none shadow-md'
                                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
                                        }`}>
                                        <div className="prose dark:prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-slate-100 dark:prose-pre:bg-slate-900 prose-pre:p-2 prose-pre:rounded-lg">
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    table: ({ node, ...props }: any) => <div className="overflow-x-auto my-2"><table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg" {...props} /></div>,
                                                    thead: ({ node, ...props }: any) => <thead className="bg-slate-50 dark:bg-slate-900/50" {...props} />,
                                                    th: ({ node, ...props }: any) => <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider" {...props} />,
                                                    td: ({ node, ...props }: any) => <td className="px-3 py-2 text-sm whitespace-nowrap border-t border-slate-100 dark:border-slate-800" {...props} />,
                                                    ul: ({ node, ...props }: any) => <ul className="list-disc list-inside space-y-1 my-1" {...props} />,
                                                    ol: ({ node, ...props }: any) => <ol className="list-decimal list-inside space-y-1 my-1" {...props} />,
                                                    a: ({ node, ...props }: any) => <a className="text-teal-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />,
                                                }}
                                            >
                                                {m.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                    {m.role === 'user' && (
                                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center ml-2 shrink-0">
                                            <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-2 shrink-0 border border-teal-200 dark:border-teal-800">
                                        <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
                            <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    onClick={toggleListening}
                                    className={`h-9 w-9 rounded-lg transition-all ${isListening ? 'text-red-500 bg-red-100 dark:bg-red-900/20 animate-pulse' : 'text-slate-400 hover:text-teal-600 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                                >
                                    <Mic className="w-4 h-4" />
                                </Button>
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={isListening ? "Listening..." : "Ask a health question..."}
                                    className="pr-12 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 dark:text-white rounded-xl h-11 transition-all"
                                />
                                <Button
                                    size="icon"
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className={`absolute right-1 top-1 h-9 w-9 rounded-lg transition-all ${input.trim() ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                                        }`}
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                            <p className="text-[10px] text-center text-slate-400 mt-2">
                                AI responses are for detailed information purposes only. Not medical advice.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="fixed bottom-6 right-6 h-16 w-16 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-500/30 flex items-center justify-center z-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-9 h-9" />}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
                )}
            </motion.button>
        </>
    )
}
