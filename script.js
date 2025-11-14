// 动漫图片搜索网站JavaScript代码

class AnimeImageSearch {
    constructor() {
        this.currentQuery = '';
        this.currentResults = [];
        this.isLoading = false;
        this.currentView = 'grid';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.loadInitialContent();
    }

    setupEventListeners() {
        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const categoryFilter = document.getElementById('categoryFilter');
        const styleFilter = document.getElementById('styleFilter');
        const sortSelect = document.getElementById('sortSelect');

        // 搜索事件
        searchBtn.addEventListener('click', () => this.performSearch());
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // 过滤器事件
        categoryFilter.addEventListener('change', () => this.performSearch());
        styleFilter.addEventListener('change', () => this.performSearch());
        sortSelect.addEventListener('change', () => this.sortResults());

        // 视图切换
        document.getElementById('gridView').addEventListener('click', () => this.switchView('grid'));
        document.getElementById('listView').addEventListener('click', () => this.switchView('list'));

        // 分类卡片点击
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.searchByCategory(category);
            });
        });

        // 快速标签点击
        document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tag = btn.dataset.tag;
                this.searchByTag(tag);
            });
        });

        // 导航栏切换（移动端）
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // 平滑滚动
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
    }

    setupNavigation() {
        // 导航栏滚动效果
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });
    }

    loadInitialContent() {
        // 加载一些初始的推荐内容
        this.loadRecommendedImages();
    }

    async performSearch() {
        const query = document.getElementById('searchInput').value.trim();
        const category = document.getElementById('categoryFilter').value;
        const style = document.getElementById('styleFilter').value;

        if (!query && !category && !style) {
            this.showMessage('请输入搜索关键词或选择分类');
            return;
        }

        this.currentQuery = query;
        this.isLoading = true;
        this.showLoading(true);

        try {
            // 模拟API调用延迟
            await this.delay(1000);
            
            const results = await this.searchAnimeImages(query, category, style);
            this.displayResults(results);
            
        } catch (error) {
            console.error('搜索失败:', error);
            this.showError('搜索失败，请稍后重试');
        } finally {
            this.isLoading = false;
            this.showLoading(false);
        }
    }

    async searchAnimeImages(query, category, style) {
        // 模拟搜索API调用
        // 在实际应用中，这里应该调用真实的API
        const mockResults = this.generateMockResults(query, category, style);
        return mockResults;
    }

    generateMockResults(query, category, style) {
        // 生成模拟搜索结果
        const animeData = [
            { title: '初音未来 - 歌姬', category: 'character', tags: ['初音未来', 'VOCALOID', '虚拟歌姬'], color: '#00ff88' },
            { title: '火影忍者 - 鸣人', category: 'character', tags: ['火影忍者', '鸣人', '忍者'], color: '#ff6b35' },
            { title: '进击的巨人 - 三笠', category: 'character', tags: ['进击的巨人', '三笠', '巨人'], color: '#4ecdc4' },
            { title: '鬼灭之刃 - 炭治郎', category: 'character', tags: ['鬼灭之刃', '炭治郎', '鬼杀队'], color: '#ff4757' },
            { title: '原神 - 荧', category: 'character', tags: ['原神', '荧', '旅行者'], color: '#a55eea' },
            { title: '东京喰种 - 金木研', category: 'character', tags: ['东京喰种', '金木研', '喰种'], color: '#ff3838' },
            { title: '刀剑神域 - 亚丝娜', category: 'character', tags: ['刀剑神域', '亚丝娜', '游戏'], color: '#ff9ff3' },
            { title: 'Re:从零开始 - 雷姆', category: 'character', tags: ['Re:从零开始', '雷姆', '女仆'], color: '#00d2d3' },
            { title: '你的名字 - 三叶', category: 'character', tags: ['你的名字', '三叶', '乡村'], color: '#ffa502' },
            { title: '千与千寻 - 千寻', category: 'character', tags: ['千与千寻', '千寻', '宫崎骏'], color: '#7bed9f' },
            { title: '天空之城 - 拉普达', category: 'scene', tags: ['天空之城', '拉普达', '飞行'], color: '#70a1ff' },
            { title: '龙猫 - 森林', category: 'scene', tags: ['龙猫', '森林', '自然'], color: '#2ed573' },
            { title: '魔法少女小圆', category: 'fanart', tags: ['魔法少女', '小圆', '魔法'], color: '#ff6b9d' },
            { title: 'Fate系列 - 吾王', category: 'official', tags: ['Fate', '吾王', '剑士'], color: '#ffd700' },
            { title: '紫罗兰永恒花园', category: 'official', tags: ['紫罗兰', '永恒花园', '信件'], color: '#dda0dd' }
        ];

        let filteredResults = animeData;

        // 根据查询词过滤
        if (query) {
            filteredResults = filteredResults.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );
        }

        // 根据分类过滤
        if (category) {
            filteredResults = filteredResults.filter(item => item.category === category);
        }

        return filteredResults.map((item, index) => ({
            id: `anime_${index}`,
            title: item.title,
            image: this.generateGradientImage(item.color),
            category: item.category,
            tags: item.tags,
            views: Math.floor(Math.random() * 10000) + 1000,
            likes: Math.floor(Math.random() * 1000) + 100,
            uploadDate: this.generateRandomDate()
        }));
    }

    generateGradientImage(color) {
        // 生成渐变图片URL
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `linear-gradient(135deg, ${color} 0%, ${randomColor} 100%)`;
    }

    generateRandomDate() {
        const start = new Date(2023, 0, 1);
        const end = new Date();
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomDate.toISOString().split('T')[0];
    }

    displayResults(results) {
        this.currentResults = results;
        const container = document.getElementById('resultsContainer');
        const noResults = document.getElementById('noResults');
        const resultsTitle = document.getElementById('resultsTitle');

        if (results.length === 0) {
            container.innerHTML = '';
            container.classList.add('hidden');
            noResults.classList.remove('hidden');
            resultsTitle.textContent = '搜索结果';
            return;
        }

        noResults.classList.add('hidden');
        container.classList.remove('hidden');
        
        const query = this.currentQuery;
        resultsTitle.textContent = query ? `"${query}" 的搜索结果 (${results.length}张)` : `找到 ${results.length} 张图片`;

        container.innerHTML = results.map(item => this.createResultItem(item)).join('');
        
        // 添加点击事件
        container.querySelectorAll('.result-item').forEach((item, index) => {
            item.addEventListener('click', () => this.viewImageDetails(results[index]));
        });

        // 添加淡入动画
        container.classList.add('fade-in');
        setTimeout(() => container.classList.remove('fade-in'), 500);
    }

    createResultItem(item) {
        const isListView = this.currentView === 'list';
        
        return `
            <div class="result-item ${isListView ? 'list-view-item' : ''}">
                <div class="result-image" style="background: ${item.image}">
                    <i class="fas fa-image"></i>
                </div>
                <div class="result-info">
                    <h3 class="result-title">${item.title}</h3>
                    <div class="result-meta">
                        <span><i class="fas fa-eye"></i> ${item.views.toLocaleString()}</span>
                        <span><i class="fas fa-heart"></i> ${item.likes.toLocaleString()}</span>
                    </div>
                    <div class="result-tags">
                        ${item.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    switchView(view) {
        this.currentView = view;
        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        const resultsContainer = document.getElementById('resultsContainer');

        if (view === 'grid') {
            gridView.classList.add('active');
            listView.classList.remove('active');
            resultsContainer.classList.remove('list-view');
        } else {
            listView.classList.add('active');
            gridView.classList.remove('active');
            resultsContainer.classList.add('list-view');
        }

        // 重新显示结果以应用新的视图样式
        if (this.currentResults.length > 0) {
            this.displayResults(this.currentResults);
        }
    }

    sortResults() {
        const sortBy = document.getElementById('sortSelect').value;
        let sortedResults = [...this.currentResults];

        switch (sortBy) {
            case 'newest':
                sortedResults.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
                break;
            case 'popular':
                sortedResults.sort((a, b) => b.views - a.views);
                break;
            case 'relevance':
            default:
                // 保持原有顺序（相关度）
                break;
        }

        this.displayResults(sortedResults);
    }

    searchByCategory(category) {
        document.getElementById('categoryFilter').value = category;
        this.performSearch();
        
        // 滚动到结果区域
        document.querySelector('.results-section').scrollIntoView({
            behavior: 'smooth'
        });
    }

    searchByTag(tag) {
        document.getElementById('searchInput').value = tag;
        this.performSearch();
        
        // 滚动到结果区域
        document.querySelector('.results-section').scrollIntoView({
            behavior: 'smooth'
        });
    }

    loadRecommendedImages() {
        // 加载推荐图片（初始状态）
        const recommendedResults = this.generateMockResults('', '', '').slice(0, 8);
        this.displayResults(recommendedResults);
    }

    viewImageDetails(imageData) {
        // 查看图片详情
        console.log('查看图片详情:', imageData);
        
        // 这里可以实现模态框或跳转到详情页
        alert(`图片详情:\n标题: ${imageData.title}\n标签: ${imageData.tags.join(', ')}\n查看数: ${imageData.views}\n点赞数: ${imageData.likes}`);
    }

    showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        if (show) {
            spinner.classList.remove('hidden');
        } else {
            spinner.classList.add('hidden');
        }
    }

    showMessage(message) {
        // 显示提示信息
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-toast';
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.classList.add('fade-out');
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
    }

    showError(message) {
        console.error('错误:', message);
        this.showMessage(`错误: ${message}`);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// 添加消息提示样式
const style = document.createElement('style');
style.textContent = `
    .message-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--surface-color);
        color: var(--text-primary);
        padding: 15px 20px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    }
    
    .message-toast.fade-out {
        animation: slideOutRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new AnimeImageSearch();
});

// 添加一些额外的交互效果
document.addEventListener('DOMContentLoaded', () => {
    // 为分类卡片添加悬停效果
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 为结果项添加悬停效果
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.result-item')) {
            const item = e.target.closest('.result-item');
            item.style.transform = 'translateY(-5px) scale(1.01)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.result-item')) {
            const item = e.target.closest('.result-item');
            item.style.transform = 'translateY(0) scale(1)';
        }
    });
});