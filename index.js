document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    // 1. জন্মতারিখের জন্য অপশন তৈরি করা
    
    // দিন (Days)
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // মাস (Months)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    monthNames.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1; // 1 থেকে 12
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // বছর (Years)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1905; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    // 2. রেজিস্ট্রেশন বাটন সক্রিয় করা (Form Submission Handling)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // ফর্মটি ডিফল্টভাবে জমা হওয়া বন্ধ করা

        // সহজ ভ্যালিডেশন চেক
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        if (password.length < 6) {
            message.textContent = '❌ Password must be at least 6 characters long.';
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            message.textContent = '❌ Please enter a valid email address.';
            return;
        }

        // সমস্ত ভ্যালিডেশন সফল হলে
        message.textContent = '✅ Registration Successful! (Data is not saved as this is a front-end demo)';
        message.style.color = '#00ff00'; // সফলতার জন্য সবুজ নিয়ন
        message.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.7)';
        
        // ফর্মটি রিসেট করা
        form.reset();

        // আপনি যদি চান, সফল মেসেজ দেখানোর পর অন্য কোনো লিঙ্কে রিডাইরেক্টও করতে পারেন:
        // setTimeout(() => {
        //     window.location.href = "আপনার_পরবর্তী_পেজ.html";
        // }, 3000); 
    });
});