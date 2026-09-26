import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { cartItems, cartTotal, clearCart } from '../store/cartStore';
import { orderSnapshot } from '../store/orderStore';
import { addToHistory } from '../store/orderHistoryStore';
import { playErrorBuzz, playSuccessChaChing } from '../utils/sound';

export default function CheckoutForm() {
  const [step, setStep] = useState(1);
  const $cartItems = useStore(cartItems);
  const $cartTotal = useStore(cartTotal);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [processMessages, setProcessMessages] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    name: '', email: '',
    address1: '', address2: '', city: '', pin: '',
    cardNo: '', expiry: '', cvv: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    if (field === 'cardNo') {
      formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().substring(0, 19);
    } else if (field === 'expiry') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.substring(0, 2) + '/' + formattedValue.substring(2, 4);
      }
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = '!! REQUIRED';
    if (!formData.email.trim()) newErrors.email = '!! REQUIRED';
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = '!! INVALID EMAIL';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    } else {
      playErrorBuzz();
    }
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.address1.trim()) newErrors.address1 = '!! REQUIRED';
    if (!formData.city.trim()) newErrors.city = '!! REQUIRED';
    if (!formData.pin.trim()) newErrors.pin = '!! REQUIRED';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(3);
    } else {
      playErrorBuzz();
    }
  };
  
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (formData.cardNo.replace(/\s/g, '').length < 15) newErrors.cardNo = '!! INVALID CARD';
    if (formData.expiry.length < 5) newErrors.expiry = '!! INVALID DATE';
    if (formData.cvv.length < 3) newErrors.cvv = '!! INVALID CVV';
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      playErrorBuzz();
      return false;
    }
    return true;
  };

  if ($cartItems.length === 0 && step < 4) {
    return (
      <div className="max-w-2xl mx-auto mt-24 text-center text-mono">
        <div className="text-h2 mb-4">NO ITEMS DETECTED</div>
        <a href="/" className="hover:opacity-50">[ RETURN TO INDEX ]</a>
      </div>
    );
  }

  const handleProcess = () => {
    if (!validateStep3()) return;
    
    // Save to orderStore before processing
    const orderId = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const orderData = {
      orderId,
      items: [...$cartItems],
      total: $cartTotal,
      customerName: formData.name,
      deliveryAddress: `${formData.address1}${formData.address2 ? `, ${formData.address2}` : ''}, ${formData.city} ${formData.pin}`,
      timestamp: Date.now()
    };
    orderSnapshot.set(orderData);
    addToHistory(orderData);

    setIsProcessing(true);
    setStep(4);
    
    const messages = [
      'PROCESSING...',
      'VERIFYING INVENTORY...',
      'CONNECTING TO TERMINAL...',
      'AUTHORIZING PAYMENT...',
      'TRANSACTION ACCEPTED ✓'
    ];
    
    messages.forEach((msg, index) => {
      setTimeout(() => {
        setProcessMessages(prev => [...prev, msg]);
        if (index === messages.length - 1) {
          playSuccessChaChing();
          setTimeout(() => {
            clearCart();
            window.location.href = '/confirmation';
          }, 1500);
        }
      }, index * 800);
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-24 p-6">
      <div className="text-mono-sm tracking-system mb-4">TRANSACTION / INITIATE</div>
      
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border border-[var(--ink-primary)] bg-[var(--paper-base)] p-6 shadow-[10px_10px_0_var(--ink-faded)]"
          >
            <div className="text-mono font-bold mb-4">CUSTOMER IDENTIFICATION</div>
            <div className="receipt-rule my-4" />
            <div className="space-y-6 text-mono">
              <div className="flex flex-col gap-1">
                <div className="flex items-end">
                  <span className="w-24 shrink-0">NAME</span>
                  <input type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 focus:border-[var(--ink-faded)]" />
                </div>
                {errors.name && <span className="text-[var(--accent-copper)] ml-24 text-xs">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-end">
                  <span className="w-24 shrink-0">EMAIL</span>
                  <input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 focus:border-[var(--ink-faded)]" />
                </div>
                {errors.email && <span className="text-[var(--accent-copper)] ml-24 text-xs">{errors.email}</span>}
              </div>
            </div>
            <div className="receipt-rule my-6" />
            <div className="text-right">
              <button onClick={validateStep1} className="text-mono hover:opacity-50">
                [ CONTINUE → ]
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border border-[var(--ink-primary)] bg-[var(--paper-base)] p-6 shadow-[10px_10px_0_var(--ink-faded)]"
          >
            <div className="text-mono font-bold mb-4">DELIVERY DETAILS</div>
            <div className="receipt-rule my-4" />
            <div className="space-y-6 text-mono">
              <div className="flex flex-col gap-1">
                <div className="flex items-end">
                  <span className="w-24 shrink-0">ADDRESS 1</span>
                  <input type="text" value={formData.address1} onChange={(e) => handleInputChange('address1', e.target.value)} className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 focus:border-[var(--ink-faded)]" />
                </div>
                {errors.address1 && <span className="text-[var(--accent-copper)] ml-24 text-xs">{errors.address1}</span>}
              </div>
              <div className="flex items-end">
                <span className="w-24 shrink-0">ADDRESS 2</span>
                <input type="text" value={formData.address2} onChange={(e) => handleInputChange('address2', e.target.value)} className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 focus:border-[var(--ink-faded)]" />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-end">
                    <span className="w-16 shrink-0">CITY</span>
                    <input type="text" value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 focus:border-[var(--ink-faded)]" />
                  </div>
                  {errors.city && <span className="text-[var(--accent-copper)] ml-16 text-xs">{errors.city}</span>}
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <div className="flex items-end">
                    <span className="w-10 shrink-0">PIN</span>
                    <input type="text" value={formData.pin} onChange={(e) => handleInputChange('pin', e.target.value)} className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 focus:border-[var(--ink-faded)]" />
                  </div>
                  {errors.pin && <span className="text-[var(--accent-copper)] ml-10 text-xs">{errors.pin}</span>}
                </div>
              </div>
            </div>
            <div className="receipt-rule my-6" />
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="text-mono hover:opacity-50 text-[var(--ink-faded)]">
                [ ← BACK ]
              </button>
              <button onClick={validateStep2} className="text-mono hover:opacity-50">
                [ CONTINUE → ]
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border border-[var(--ink-primary)] bg-[var(--paper-base)] p-6 shadow-[10px_10px_0_var(--ink-faded)]"
          >
            <div className="text-mono font-bold mb-4 flex justify-between">
              <span>PAYMENT TERMINAL</span>
              <span>INR {$cartTotal.toLocaleString()}</span>
            </div>
            <div className="receipt-rule my-4" />
            <div className="space-y-6 text-mono">
              <div className="flex flex-col gap-1">
                <div className="flex items-end">
                  <span className="w-24 shrink-0">CARD NO</span>
                  <input type="text" value={formData.cardNo} onChange={(e) => handleInputChange('cardNo', e.target.value)} placeholder="**** **** **** ****" className="flex-1 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 placeholder-[var(--ink-faded)] focus:border-[var(--ink-faded)]" />
                </div>
                {errors.cardNo && <span className="text-[var(--accent-copper)] ml-24 text-xs">{errors.cardNo}</span>}
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-end">
                    <span className="w-24 shrink-0">EXPIRY</span>
                    <input type="text" value={formData.expiry} onChange={(e) => handleInputChange('expiry', e.target.value)} placeholder="MM/YY" className="w-20 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 placeholder-[var(--ink-faded)] text-center focus:border-[var(--ink-faded)]" />
                  </div>
                  {errors.expiry && <span className="text-[var(--accent-copper)] ml-24 text-xs">{errors.expiry}</span>}
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-end">
                    <span className="w-16 shrink-0">CVV</span>
                    <input type="password" value={formData.cvv} onChange={(e) => handleInputChange('cvv', e.target.value)} placeholder="***" className="w-16 bg-transparent border-b border-[var(--ink-primary)] outline-none px-2 placeholder-[var(--ink-faded)] text-center focus:border-[var(--ink-faded)]" />
                  </div>
                  {errors.cvv && <span className="text-[var(--accent-copper)] ml-16 text-xs">{errors.cvv}</span>}
                </div>
              </div>
            </div>
            <div className="receipt-rule my-6" />
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="text-mono hover:opacity-50 text-[var(--ink-faded)]">
                [ ← BACK ]
              </button>
              <button onClick={handleProcess} className="text-mono hover:opacity-50 font-bold">
                [ CONFIRM TRANSACTION ]
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-mono"
          >
            {processMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-2 ${i === processMessages.length - 1 ? 'font-bold mt-8 text-lg' : 'text-[var(--ink-faded)]'}`}
              >
                {msg}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
