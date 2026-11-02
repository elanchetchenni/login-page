document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the icon
        const icon = togglePassword.querySelector('i');
        if (type === 'text') {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
    
    // Handle form submission with animation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            // Add loading state
            loginBtn.classList.add('loading');
            loginBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                loginBtn.classList.remove('loading');
                loginBtn.innerHTML = '<i class="fa-solid fa-check"></i> Success';
                loginBtn.style.background = '#10b981'; // Success green color
                
                // Reset after 2 seconds
                setTimeout(() => {
                    loginBtn.innerHTML = '<span class="btn-text">Sign In</span><div class="loader"></div>';
                    loginBtn.style.background = ''; // Reset to CSS default
                    loginBtn.disabled = false;
                    loginForm.reset();
                }, 2000);
                
            }, 1500);
        }
    });
    
    // Add subtle interactive effects to inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if(input.type === 'checkbox') return;
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', () => {
            if(input.type === 'checkbox') return;
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});
