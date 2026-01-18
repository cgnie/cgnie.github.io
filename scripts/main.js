/**
 * Main interaction script
 * Handles email link clicks and clipboard copy functionality
 * Performance optimization: Uses event delegation and lazy initialization
 */

// Error message configuration
const ErrorMessages = {
    clipboard: {
        notSupported: "Your browser does not support automatic copying. Please manually copy the email address.",
        failed: "Copy failed. Please manually select and copy."
    },
    email: {
        noClient: "No email client detected. Email address has been copied to clipboard."
    }
};

// Success message configuration
const SuccessMessages = {
    clipboard: {
        copied: "Email address copied to clipboard!"
    }
};

/**
 * Display notification message
 * @param {string} message - Message to display
 * @param {string} type - Message type ('success', 'error')
 * @param {number} duration - Display duration in milliseconds
 */
function showNotification(message, type = 'success', duration = 3000) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    if (!notification || !notificationText) {
        console.warn('Notification element not found');
        return;
    }
    
    // Set message content and style
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    
    // Show notification
    notification.classList.add('show');
    
    // Auto-hide notification
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Whether copy was successful
 */
async function copyToClipboard(text) {
    try {
        // Prefer modern Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
        
        // Fallback to traditional method
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        return successful;
    } catch (error) {
        console.error('Copy failed:', error);
        return false;
    }
}

/**
 * Handle email link click event
 * @param {Event} event - Click event
 */
function handleEmailClick(event) {
    // Detect if email client is available
    // This is a simplified detection, actual cases may be more complex
    const userAgent = navigator.userAgent.toLowerCase();
    const hasEmailClient = userAgent.includes('gmail') || 
                          userAgent.includes('thunderbird') ||
                          userAgent.includes('mail');
    
    // If no email client detected, provide fallback
    if (!hasEmailClient) {
        event.preventDefault();
        const email = event.target.textContent.trim();
        copyEmailAddress(email);
        showNotification(ErrorMessages.email.noClient, 'error');
    }
    
    // If email client exists, let default behavior continue
}

/**
 * Copy email address
 * @param {string} email - Email address
 */
async function copyEmailAddress(email) {
    try {
        const success = await copyToClipboard(email);
        
        if (success) {
            showNotification(SuccessMessages.clipboard.copied, 'success');
        } else {
            showNotification(ErrorMessages.clipboard.failed, 'error');
        }
    } catch (error) {
        console.error('Failed to copy email address:', error);
        showNotification(ErrorMessages.clipboard.failed, 'error');
    }
}

/**
 * Check browser compatibility
 */
function checkBrowserCompatibility() {
    // Check clipboard API support
    if (!navigator.clipboard && !document.execCommand) {
        console.warn('Current browser does not support clipboard operations');
        showNotification(ErrorMessages.clipboard.notSupported, 'error', 5000);
    }
}

/**
 * 初始化卡片展开功能
 */
function initializeCardExpansion() {
    const cards = document.querySelectorAll('.interest-card');
    let overlay = null;
    
    // 创建背景遮罩
    function createOverlay() {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'card-overlay';
            document.body.appendChild(overlay);
        }
        return overlay;
    }
    
    // 展开卡片
    function expandCard(card) {
        const overlay = createOverlay();
        
        // 添加关闭按钮
        if (!card.querySelector('.close-button')) {
            const closeButton = document.createElement('button');
            closeButton.className = 'close-button';
            closeButton.innerHTML = '×';
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
    
    // 收起卡片
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
 * Initialize page interactions
 */
function initializeInteractions() {
    // Get DOM elements
    const emailLink = document.getElementById('emailLink');
    
    // Bind event listeners
    if (emailLink) {
        emailLink.addEventListener('click', handleEmailClick);
    }
    
    // Initialize card expansion
    initializeCardExpansion();
    
    // Check browser compatibility
    checkBrowserCompatibility();
}

/**
 * Initialize after page load
 * Performance optimization: Use DOMContentLoaded instead of load event
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeInteractions();
    
    // Add smooth scroll effect
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
    // You can add responsive-related JavaScript logic here
    // Currently handled mainly through CSS responsive design
});

/**
 * Export functions for testing
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        copyToClipboard,
        showNotification,
        handleEmailClick,
        copyEmailAddress,
        ErrorMessages,
        SuccessMessages
    };
}