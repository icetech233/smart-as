import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell, FaTimes, FaClock, FaCheck } from 'react-icons/fa';
import { format } from 'date-fns';
import { MessageType, MessageAlertProps } from './types';

export const MessageAlert: React.FC<MessageAlertProps> = ({ messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const currentMessage = messages[currentIndex];

  const priorityStyles = {
    urgent: 'from-red-500/80 via-red-500/60 to-red-600/50',
    high: 'from-orange-500/80 via-orange-500/60 to-orange-600/50',
    medium: 'from-yellow-500/80 via-yellow-500/60 to-yellow-600/50',
    low: 'from-green-500/80 via-green-500/60 to-green-600/50',
  };

  const handleNext = () => {
    if (currentIndex < messages.length - 1) {
      setShowMessage(false);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setShowMessage(true);
      }, 300);
    }
  };

  const handleDismiss = () => {
    setShowMessage(false);
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  return (
    <AnimatePresence>
      {showMessage && currentMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: 20, rotateX: -45 }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 20 
          }}
          className={`
            fixed top-4 right-4 w-96 
            rounded-xl shadow-2xl overflow-hidden
            backdrop-blur-xl bg-white/5
            border border-white/10
            perspective-1000 transform-gpu
            font-sans
          `}
        >
          <div className={`
            bg-gradient-to-br ${priorityStyles[currentMessage.priority]} 
            p-6 backdrop-blur-md relative
            before:absolute before:inset-0 
            before:bg-white/5 before:backdrop-blur-sm
          `}>
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                >
                  <FaBell className="text-white text-xl mr-3 drop-shadow-lg" />
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold text-lg tracking-wide">
                    {currentMessage.title}
                  </h3>
                  <p className="text-white/90 mt-1 text-sm leading-relaxed">
                    {currentMessage.content}
                  </p>
                  <div className="flex items-center mt-2 text-white/80 text-xs">
                    <FaClock className="mr-1" />
                    {format(new Date(currentMessage.timestamp), 'HH:mm')}
                  </div>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="mt-4 flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDismiss}
                className="
                  px-4 py-2 
                  bg-white/10 hover:bg-white/20 
                  text-white rounded-lg text-sm 
                  transition-colors flex items-center
                  backdrop-blur-sm border border-white/10
                  shadow-lg
                "
              >
                <FaTimes className="mr-2" />
                关闭
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="
                  px-4 py-2 
                  bg-white/90 hover:bg-white 
                  text-gray-800 rounded-lg text-sm 
                  font-medium flex items-center
                  shadow-lg transition-colors
                  backdrop-blur-sm
                "
              >
                <FaCheck className="mr-2" />
                确认
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};