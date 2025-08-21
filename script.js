// WhatsApp number configuration - Your WhatsApp number
const WHATSAPP_NUMBER = '6282162626447'; // Nomor WhatsApp Anda

// Service navigation functions
function openService(serviceType) {
    // Hide main services
    document.querySelector('.service-grid').style.display = 'none';
    
    // Show selected service packages
    const packages = document.querySelectorAll('.packages');
    packages.forEach(pkg => pkg.classList.add('hidden'));
    
    const selectedPackage = document.getElementById(`${serviceType}-packages`);
    selectedPackage.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToMain() {
    // Hide all packages
    const packages = document.querySelectorAll('.packages');
    packages.forEach(pkg => pkg.classList.add('hidden'));
    
    // Show main services
    document.querySelector('.service-grid').style.display = 'grid';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Order function with proper message formatting
function orderPackage(packageName, price) {
    const message = `Halo, saya tertarik untuk order:\n\n📦 *${packageName}*\n💰 *Harga: Rp ${price.toLocaleString()}*\n\nMohon informasi lebih lanjut dan cara pembayarannya. Terima kasih!`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
}

// Smooth scroll and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add click effects
    const buttons = document.querySelectorAll('.order-btn, .back-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Add service card hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        backToMain();
    }
});
