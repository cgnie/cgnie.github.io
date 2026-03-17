/**
 * Main interaction script
 * Handles card expansion functionality
 * Performance optimized with event delegation
 */

/**
 * 初始化卡片展开功能
 */
function initializeCardExpansion() {
    const cards = document.querySelectorAll('.interest-card');
    let overlay = null;

    /**
     * 创建背景遮罩
     */
    function createOverlay() {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'card-overlay';
            document.body.appendChild(overlay);
        }
        return overlay;
    }

    /**
     * 展开卡片
     */
    function expandCard(card) {
        const overlay = createOverlay();

        // 添加关闭按钮
        if (!card.querySelector('.close-button')) {
            const closeButton = document.createElement('button');
            closeButton.className = 'close-button';
            closeButton.innerHTML = '×';
            closeButton.setAttribute('aria-label', '关闭卡片');
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                collapseCard(card);
            });
            card.appendChild(closeButton);
        }

        // 展开动画
        card.classList.add('expanded');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // 点击遮罩关闭
        overlay.addEventListener('click', () => collapseCard(card));
    }

    /**
     * 收起卡片
     */
    function collapseCard(card) {
        card.classList.remove('expanded');
        if (overlay) {
            overlay.classList.remove('active');
        }
        document.body.style.overflow = '';

        // 移除关闭按钮
        const closeButton = card.querySelector('.close-button');
        if (closeButton) {
            closeButton.remove();
        }
    }

    // 为每个卡片添加点击事件
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 如果卡片已经展开，不处理点击
            if (card.classList.contains('expanded')) {
                return;
            }

            // 如果点击的是详细项目，不展开卡片
            if (e.target.closest('.detail-item')) {
                return;
            }

            expandCard(card);
        });
    });

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const expandedCard = document.querySelector('.interest-card.expanded');
            if (expandedCard) {
                collapseCard(expandedCard);
            }
        }
    });
}

/**
 * Initialize after page load
 * Performance optimization: Use DOMContentLoaded for faster initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize card expansion
    initializeCardExpansion();

    // Add smooth scroll effect for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Performance monitoring: Record page load time
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page load time: ' + pageLoadTime + 'ms');
        });
    }
});

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
    // Responsive behavior handled mainly through CSS
});
