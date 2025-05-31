import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import './DisclaimerModal.css';

interface DisclaimerModalProps {
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            <AlertTriangle size={24} />
            <h2>EDUCATIONAL DISCLAIMER</h2>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-content">
          <div className="disclaimer-icon">
            <AlertTriangle size={48} />
          </div>
          
          <div className="disclaimer-text">
            <p className="disclaimer-primary">
              This is a <span className="highlight">SIMULATION ONLY</span> tool built for educational purposes.
            </p>
            
            <p className="disclaimer-secondary">
              No real dark web content is accessed or displayed. All data shown is fictional and generated for demonstration purposes.
            </p>
            
            <ul className="disclaimer-list">
              <li>This application does not connect to any actual dark web services</li>
              <li>All .onion URLs, content, and alerts are completely simulated</li>
              <li>No illegal activities are performed or facilitated</li>
              <li>This tool is intended purely for cybersecurity education</li>
            </ul>
            
            <p className="disclaimer-warning">
              Accessing the actual dark web may be illegal in some jurisdictions and potentially dangerous. This simulation helps understand dark web monitoring tools without any real risks.
            </p>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-primary modal-accept" onClick={onClose}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;