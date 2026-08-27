// Custom JavaScript for Todo App
document.addEventListener('DOMContentLoaded', function() {
    
    // Add confirmation dialog for delete buttons
    const deleteButtons = document.querySelectorAll('a[href*="/delete/"]');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to delete this todo?')) {
                e.preventDefault();
            }
        });
    });

    // Add form validation
    const todoForm = document.querySelector('form[action="/"]');
    if (todoForm) {
        todoForm.addEventListener('submit', function(e) {
            const title = document.querySelector('input[name="title"]').value.trim();
            const desc = document.querySelector('input[name="desc"]').value.trim();
            
            if (!title || !desc) {
                alert('Please fill in both title and description!');
                e.preventDefault();
            }
        });
    }

    // Add smooth animations
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.1}s`;
        row.classList.add('fade-in');
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.5s ease-in-out forwards;
        opacity: 0;
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);