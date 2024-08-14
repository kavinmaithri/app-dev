import React, { useState, useEffect } from 'react';
// import './CreateShipment.css';

const CreateShipment = () => {
    const [step, setStep] = useState(1);
    const [pallet, setPallet] = useState({
        content: '',
        declaredValue: '',
        quantity: 1,
        length: '',
        width: '',
        height: '',
        weight: ''
    });

    const [payment, setPayment] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: ''
    });

    const [trackingID, setTrackingID] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false); // New state for payment success
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        // Generate tracking ID when component mounts
        setTrackingID(generateTrackingID());
    }, []);

    useEffect(() => {
        // Recalculate total amount whenever pallet state changes
        if (step === 2) {
            const amount = calculateTotalAmount();
            setTotalAmount(amount);
        }
    }, [pallet, step]);

    const handlePalletChange = (e) => {
        const { name, value } = e.target;
        setPallet((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPayment((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const generateTrackingID = () => {
        return 'TRK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    const calculateTotalAmount = () => {
        const declaredValue = parseFloat(pallet.declaredValue) || 0;
        const quantity = parseInt(pallet.quantity, 10) || 1;
        const amount = declaredValue * quantity;
        const gstRate = 0.05;
        const gst = amount * gstRate;
        return amount + gst;
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        const amount = calculateTotalAmount();
        setTotalAmount(amount);
        nextStep(); // Go to the final confirmation step
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const shipmentDetails = { pallet, trackingID, totalAmount };

        try {
            const response = await fetch('http://localhost:8080/shipments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(shipmentDetails)
            });

            if (response.ok) {
                setShowPopup(true);
                setPaymentSuccess(true); // Set payment success state
            } else {
                console.error('Failed to save shipment details');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPaymentSuccess(false); // Reset payment success state

        setPallet({
            content: '',
            declaredValue: '',
            quantity: 1,
            length: '',
            width: '',
            height: '',
            weight: ''
        });

        setPayment({
            cardNumber: '',
            cardHolder: '',
            expiryDate: '',
            cvv: ''
        });

        setTotalAmount(0);
        setTrackingID(generateTrackingID()); // Reset tracking ID
        setStep(1);
    };

    return (
        <div className="shipment-container">
            <div className="shipment-left-section">
            </div>
            <form className="shipment-right-section" onSubmit={handleSubmit}>
                <div className={`form-section-1 ${step === 1 ? 'active' : ''}`}>
                    <div className="form-content-1">
                        <h3>Details</h3>
                        <input type="text" name="content" value={pallet.content} onChange={handlePalletChange} placeholder="Event Description " required />
                        <input type="number" name="declaredValue" value={pallet.declaredValue} onChange={handlePalletChange} placeholder="Declared Value (INR) " required />
                        <input type="number" name="quantity" value={pallet.quantity} onChange={handlePalletChange} placeholder="No of people " min="1" required />
                        <input type="text" name="length" value={pallet.length} onChange={handlePalletChange} placeholder="Time span" required />
                        <input type="text" name="width" value={pallet.width} onChange={handlePalletChange} placeholder="Address" required />
                        <input type="text" name="height" value={pallet.height} onChange={handlePalletChange} placeholder="City" required />
                        <input type="text" name="weight" value={pallet.weight} onChange={handlePalletChange} placeholder="State" required />
                        <div className="navigation-buttons-1">
                            <button className="next-button-1" type="button" onClick={nextStep}>Next</button>
                        </div>
                    </div>
                </div>

                <div className={`form-section-1 ${step === 2 ? 'active' : ''}`}>
                    <div className="form-content-1">
                        <h3>Payment Details</h3>
                        <p>Tracking ID: {trackingID}</p>
                        <input type="text" name="cardNumber" value={payment.cardNumber} onChange={handlePaymentChange} placeholder="Card Number " required />
                        <input type="text" name="cardHolder" value={payment.cardHolder} onChange={handlePaymentChange} placeholder="Card Holder Name" required />
                        <input type="text" name="expiryDate" value={payment.expiryDate} onChange={handlePaymentChange} placeholder="Expiry Date " required />
                        <input type="text" name="cvv" value={payment.cvv} onChange={handlePaymentChange} placeholder="CVV " required />
                        <div className="bill-amount">
                            <p>Total Amount (with GST): ₹ {totalAmount.toFixed(2)}</p>
                        </div>
                        <div className="navigation-buttons-1">
                            <button className="back-button-1" type="button" onClick={prevStep}>Back</button>
                            <button className="submit-button-1" type="button" onClick={handlePaymentSubmit}>Proceed to Payment</button>
                        </div>
                    </div>
                </div>

                <div className={`form-section-1 ${step === 3 ? 'active' : ''}`}>
                    <div className="form-content-1">
                        <h3>Confirm Shipment Details</h3>
                        <p>Tracking ID: {trackingID}</p>
                        <p>Total Amount: ₹ {totalAmount.toFixed(2)}</p>
                        <button className="submit-button-1" type="submit">Submit</button>
                    </div>
                </div>
            </form>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        {paymentSuccess ? (
                            <>
                                <h3>Payment Successful!</h3>
                                <p>Your tracking ID is: {trackingID}</p>
                                <p>Total Amount Paid: ₹ {totalAmount.toFixed(2)}</p>
                            </>
                        ) : (
                            <>
                                <h3>Shipment Created Successfully!</h3>
                                <p>Your tracking ID is: {trackingID}</p>
                                <p>Total Amount Paid: ₹ {totalAmount.toFixed(2)}</p>
                            </>
                        )}
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateShipment;
