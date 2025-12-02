import { useState } from 'react';
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur quand l'utilisateur tape
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    // Solution SIMPLE : email direct avec mailto:
    const subject = formData.subject || `Message de ${formData.name}`;
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nEnvoyé depuis votre portfolio`;
    
    // Créer un lien mailto
    const mailtoLink = `mailto:discarsluxe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Créer un lien invisible et le cliquer
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Message de confirmation
    setSubmitMessage("✓ Votre message est prêt à être envoyé ! Vérifiez votre client mail.");
    
    // Réinitialiser le formulaire après 2 secondes
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
    
    // Effacer le message après 5 secondes
    setTimeout(() => {
      setSubmitMessage("");
    }, 5000);
  };

  const contactItems = [
    {
      icon: "fa-map-marker-alt",
      title: "Adresse",
      content: "55 Rue De Paris 95130 Franconville"
    },
    {
      icon: "fa-phone",
      title: "Téléphone",
      content: "(+33) 6.52.78.25.64",
      action: () => window.open("tel:+33652782564")
    },
    {
      icon: "fa-envelope",
      title: "Email principal",
      content: "discarsluxe@gmail.com",
      action: () => {
        const mailto = "mailto:discarsluxe@gmail.com";
        const link = document.createElement('a');
        link.href = mailto;
        link.click();
      }
    },
    {
      icon: "fa-clock",
      title: "Horaires",
      content: "Lundi - Vendredi\n09H00 - 18H00"
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="section-title">
          <h1>Contactez-moi</h1>
          <p>Parlons de votre projet</p>
          <div className="title-line"></div>
        </div>

        <div className="contact-content">
          {/* Colonne gauche : Informations */}
          <div className="contact-info">
            <h2><i className="fas fa-address-card"></i> Mes coordonnées</h2>
            
            <div className="info-cards">
              {contactItems.map((item, index) => (
                <div 
                  key={index} 
                  className="info-card"
                  onClick={item.action || undefined}
                  style={{ cursor: item.action ? 'pointer' : 'default' }}
                >
                  <div className="info-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="info-content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-note">
              <p><strong>Note :</strong> Je réponds généralement dans les 24h</p>
            </div>
          </div>

          {/* Colonne droite : Formulaire */}
          <div className="contact-form-wrapper">
            <h2><i className="fas fa-envelope"></i> Envoyez un message</h2>
            
            {submitMessage && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom *"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email *"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet (optionnel)"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Préparation...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Envoyer le message
                  </>
                )}
              </button>

              <div className="form-info">
                <p><i className="fas fa-info-circle"></i> Le message s'ouvrira dans votre application mail</p>
              </div>
            </form>

            <div className="direct-contact">
              <p>Ou contactez-moi directement :</p>
              <div className="email-links">
                <a 
                  href="mailto:discarsluxe@gmail.com"
                  className="email-link"
                >
                   seghirouali.nacime@gmail.com
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}