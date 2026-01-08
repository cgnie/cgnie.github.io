/**
 * 基础功能测试
 * 验证网站的核心功能是否正常工作
 */

// 模拟 DOM 环境
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// 读取 HTML 文件
const htmlPath = path.join(__dirname, '../index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// 创建 DOM 环境
const dom = new JSDOM(htmlContent);
const document = dom.window.document;
const window = dom.window;

describe('网站基础功能测试', () => {
    
    test('页面标题应该正确', () => {
        expect(document.title).toBe('cg Nie - 个人网站');
    });
    
    test('导航栏应该存在', () => {
        const navbar = document.querySelector('.navbar');
        expect(navbar).toBeTruthy();
    });
    
    test('导航栏 logo 应该显示正确的名字', () => {
        const logo = document.querySelector('.nav-logo');
        expect(logo.textContent).toBe('cg Nie');
    });
    
    test('Hero 区域应该包含个人照片', () => {
        const profileImage = document.querySelector('.profile-image');
        expect(profileImage).toBeTruthy();
        expect(profileImage.src).toContain('images/a.jpg');
    });
    
    test('Hero 区域应该包含个人介绍文本', () => {
        const heroTitle = document.querySelector('.hero-title');
        expect(heroTitle.textContent).toContain("Hello, I'm cg Nie");
    });
    
    test('Hero 区域应该包含兴趣描述', () => {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        expect(heroSubtitle.textContent).toContain('Math');
        expect(heroSubtitle.textContent).toContain('Computer Science');
        expect(heroSubtitle.textContent).toContain('AI coding');
    });
    
    test('应该有三个兴趣卡片', () => {
        const interestCards = document.querySelectorAll('.interest-card');
        expect(interestCards.length).toBe(3);
    });
    
    test('兴趣卡片应该包含正确的标题', () => {
        const interestCards = document.querySelectorAll('.interest-card h3');
        const titles = Array.from(interestCards).map(card => card.textContent);
        expect(titles).toContain('数学 (Math)');
        expect(titles).toContain('计算机科学 (Computer Science)');
        expect(titles).toContain('AI编程 (AI Coding)');
    });
    
    test('联系信息区域应该存在', () => {
        const contactSection = document.querySelector('.contact-section');
        expect(contactSection).toBeTruthy();
    });
    
    test('邮箱链接应该存在', () => {
        const emailLink = document.getElementById('emailLink');
        expect(emailLink).toBeTruthy();
        expect(emailLink.href).toContain('mailto:');
    });
    
    test('复制按钮应该存在', () => {
        const copyButton = document.getElementById('copyButton');
        expect(copyButton).toBeTruthy();
        expect(copyButton.textContent).toContain('复制');
    });
    
    test('页脚应该存在', () => {
        const footer = document.querySelector('.footer');
        expect(footer).toBeTruthy();
    });
    
    test('页脚应该包含版权信息', () => {
        const footer = document.querySelector('.footer');
        expect(footer.textContent).toContain('2024');
        expect(footer.textContent).toContain('cg Nie');
    });
    
    test('通知消息容器应该存在', () => {
        const notification = document.getElementById('notification');
        expect(notification).toBeTruthy();
    });
    
    test('所有必要的 CSS 类应该存在', () => {
        const requiredClasses = [
            'navbar', 'hero-section', 'interests-section', 
            'contact-section', 'footer', 'profile-image'
        ];
        
        requiredClasses.forEach(className => {
            const element = document.querySelector(`.${className}`);
            expect(element).toBeTruthy();
        });
    });
});

describe('响应式设计测试', () => {
    
    test('页面应该有响应式视口设置', () => {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        expect(viewportMeta).toBeTruthy();
        expect(viewportMeta.content).toContain('width=device-width');
    });
    
    test('页面应该有正确的字符编码', () => {
        const charsetMeta = document.querySelector('meta[charset]');
        expect(charsetMeta).toBeTruthy();
        expect(charsetMeta.charset).toBe('UTF-8');
    });
});

describe('SEO 和社交分享测试', () => {
    
    test('页面应该有 meta 描述', () => {
        const descriptionMeta = document.querySelector('meta[name="description"]');
        expect(descriptionMeta).toBeTruthy();
        expect(descriptionMeta.content).toContain('个人GitHub Pages网站');
    });
    
    test('页面应该有 Open Graph 标签', () => {
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        expect(ogTitle).toBeTruthy();
        expect(ogImage).toBeTruthy();
    });
    
    test('页面应该有 Twitter 卡片标签', () => {
        const twitterCard = document.querySelector('meta[property="twitter:card"]');
        expect(twitterCard).toBeTruthy();
    });
});
