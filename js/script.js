document.addEventListener('DOMContentLoaded', function() {
    // 为诗句添加渐入效果
    const poemLines = document.querySelectorAll('.poem-text p');
    
    poemLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(20px)';
        line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
    
    // 添加点击诗句效果
    poemLines.forEach(line => {
        line.addEventListener('click', function() {
            this.classList.add('highlight');
            setTimeout(() => {
                this.classList.remove('highlight');
            }, 1000);
        });
    });
});

// 添加CSS样式
const style = document.createElement('style');
style.textContent = `
    .highlight {
        color: #8b0000 !important;
        font-weight: bold;
        transform: scale(1.05) !important;
        transition: all 0.3s ease !important;
    }
`;
document.head.appendChild(style);