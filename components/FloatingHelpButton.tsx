'use client';

import { HelpCircle, X, MessageCircle, Mail, Phone, Send, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { messagecirclemore } from '@/public';

export default function FloatingHelpButton() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [activeView, setActiveView] = useState<'main' | 'chat' | 'email' | 'faq'>('main');
    const [chatMessage, setChatMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<Array<{ text: string; sender: 'user' | 'support' }>>([]);
    const [emailForm, setEmailForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: 'How do I update project status?',
            answer: 'Navigate to your project details page, scroll to the "Update Financials" section on the right sidebar. Select the appropriate banking stage from the dropdown menu and adjust the percentage drawn. Click Submit to save your changes.'
        },
        {
            question: 'What are the carbon credit standards?',
            answer: 'We support multiple carbon credit standards including VERRA (USD 20), Gold Standard (USD 25), Climate Action Reserve (USD 22), and American Carbon Registry (USD 23). Each standard has different verification requirements and pricing.'
        },
        {
            question: 'How is revenue calculated?',
            answer: 'Revenue is calculated based on: Annual Offset (tCO2e) × Credit Value per standard. For example, with 750,000 tCO2e offset and VERRA standard at USD 20, the estimated annual revenue would be approximately USD 15,000,000.'
        },
        {
            question: 'How do I upload documents?',
            answer: 'Click on the "Upload Images" section in your project details. You can drag and drop files or click to browse. We accept PDF, PNG, and JPG formats. Files will be automatically saved to your project gallery.'
        },
    ];

    const handleChatSend = () => {
        if (chatMessage.trim()) {
            setChatMessages([...chatMessages, { text: chatMessage, sender: 'user' }]);
            setChatMessage('');

            setTimeout(() => {
                const responses = [
                    "Thank you for reaching out! I'm reviewing your question now.",
                    "I understand your concern. Let me help you with that.",
                    "Great question! Here's what you need to know...",
                    "I've noted your request and will assist you right away.",
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                setChatMessages(prev => [...prev, { text: randomResponse, sender: 'support' }]);
            }, 1500);
        }
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email submitted!\n\nFrom: ${emailForm.name} (${emailForm.email})\nSubject: ${emailForm.subject}\n\nWe'll respond within 24 hours.`);
        setEmailForm({ name: '', email: '', subject: '', message: '' });
        setActiveView('main');
    };

    const handlePhoneClick = () => {
        const phoneNumber = '+254 700 000 000';
        if (confirm(`Would you like to call ${phoneNumber}?`)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    };

    const renderMainView = () => (
        <>
            {/* Header */}
            <div className="bg-[#044D5E] p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0B2E34] rounded-full flex items-center justify-center">
                            <Image src={messagecirclemore} alt='messagecirclemore' />
                        </div>
                        <h3 className="text-lg font-semibold">How can we help?</h3>
                    </div>
                    <button
                        onClick={() => setIsDialogOpen(false)}
                        className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                        aria-label="Close dialog"
                    >
                        <X size={20} />
                    </button>
                </div>
                <p className="text-sm text-white/90">
                    We're here to assist you with any questions or concerns.
                </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Quick Actions */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Quick Actions
                    </h4>

                    {/* Chat Support */}
                    <button
                        onClick={() => setActiveView('chat')}
                        className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-[#ECFFF5]/30 hover:from-[#ECFFF5]/50 hover:to-[#E4F6F3]/50 rounded-lg border border-gray-200 transition-all group"
                    >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <MessageCircle size={20} className="text-[#1ECEC9]" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold text-gray-900">Start Live Chat</p>
                            <p className="text-xs text-gray-500">Average response time: 2 min</p>
                        </div>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-[#1ECEC9] transition-colors" />
                    </button>

                    {/* Email Support */}
                    <button
                        onClick={() => setActiveView('email')}
                        className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-[#ECFFF5]/30 hover:from-[#ECFFF5]/50 hover:to-[#E4F6F3]/50 rounded-lg border border-gray-200 transition-all group"
                    >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Mail size={20} className="text-[#044D5E]" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold text-gray-900">Email Support</p>
                            <p className="text-xs text-gray-500">support@kgft.com</p>
                        </div>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-[#044D5E] transition-colors" />
                    </button>

                    {/* Phone Support */}
                    <button
                        onClick={handlePhoneClick}
                        className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-[#ECFFF5]/30 hover:from-[#ECFFF5]/50 hover:to-[#E4F6F3]/50 rounded-lg border border-gray-200 transition-all group"
                    >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Phone size={20} className="text-[#FF8C42]" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold text-gray-900">Call Us</p>
                            <p className="text-xs text-gray-500">+254 700 000 000</p>
                        </div>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-[#FF8C42] transition-colors" />
                    </button>
                </div>

                {/* FAQs */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Common Questions
                    </h4>
                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)}
                                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#ECFFF5]/50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">{faq.question}</span>
                                    <ChevronRight
                                        size={16}
                                        className={`transform transition-transform ${selectedFaq === idx ? 'rotate-90' : ''}`}
                                    />
                                </div>
                                <AnimatePresence>
                                    {selectedFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                    Available Monday - Friday, 8AM - 6PM EAT
                </p>
            </div>
        </>
    );

    const renderChatView = () => (
        <>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#044D5E] to-[#1ECEC9] p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setActiveView('main')}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <ChevronRight size={20} className="rotate-180" />
                        </button>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <MessageCircle size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Live Chat</h3>
                            <p className="text-xs text-white/80">Support Agent: Sarah</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsDialogOpen(false)}
                        className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 h-[50vh] overflow-y-auto">
                {/* Welcome Message */}
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1ECEC9] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                        S
                    </div>
                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-sm text-gray-700">
                            Hi! I'm Sarah from KGFT Support. How can I help you today?
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Just now</p>
                    </div>
                </div>

                {/* Chat Messages */}
                {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 ${msg.sender === 'user' ? 'bg-[#044D5E]' : 'bg-[#1ECEC9]'
                            }`}>
                            {msg.sender === 'user' ? 'Y' : 'S'}
                        </div>
                        <div className={`rounded-lg p-3 max-w-[80%] ${msg.sender === 'user'
                            ? 'bg-[#044D5E] text-white rounded-tr-none'
                            : 'bg-gray-100 text-gray-700 rounded-tl-none'
                            }`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1ECEC9] transition-all"
                    />
                    <button
                        onClick={handleChatSend}
                        disabled={!chatMessage.trim()}
                        className="px-4 py-2 bg-[#1ECEC9] hover:bg-[#17b3ad] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </>
    );

    const renderEmailView = () => (
        <>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#044D5E] to-[#1ECEC9] p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setActiveView('main')}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <ChevronRight size={20} className="rotate-180" />
                        </button>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail size={20} />
                        </div>
                        <h3 className="text-lg font-semibold">Email Support</h3>
                    </div>
                    <button
                        onClick={() => setIsDialogOpen(false)}
                        className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailSubmit} className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Your Name
                    </label>
                    <input
                        type="text"
                        required
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1ECEC9] transition-all"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Email Address
                    </label>
                    <input
                        type="email"
                        required
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1ECEC9] transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Subject
                    </label>
                    <input
                        type="text"
                        required
                        value={emailForm.subject}
                        onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1ECEC9] transition-all"
                        placeholder="How can we help?"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Message
                    </label>
                    <textarea
                        required
                        value={emailForm.message}
                        onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1ECEC9] transition-all resize-none"
                        placeholder="Tell us more about your question..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#1ECEC9] hover:bg-[#17b3ad] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Send Email
                </button>
            </form>
        </>
    );

    return (
        <>
            {/* Floating Help Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <div className="relative group">
                    {/* Tooltip */}
                    {!isDialogOpen && (
                        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <div className="bg-white text-gray-700 text-xs text-xs px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap">
                                Need help?
                                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                            </div>
                        </div>
                    )}

                    {/* Help Button */}
                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="bg-[#0B2E34] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                        aria-label="Open help dialog"
                    >
                        <Image src={messagecirclemore} alt='messagecirclemore' />
                    </button>
                </div>
            </div>

            {/* Help Dialog */}
            <AnimatePresence>
                {isDialogOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => {
                                setIsDialogOpen(false);
                                setActiveView('main');
                            }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />

                        {/* Dialog Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {activeView === 'main' && renderMainView()}
                            {activeView === 'chat' && renderChatView()}
                            {activeView === 'email' && renderEmailView()}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}