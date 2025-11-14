# 🚀 Vercel自动部署指南

## 步骤1：连接GitHub到Vercel

### 1. 访问Vercel
- 打开浏览器访问：https://vercel.com
- 点击 "Sign Up" 注册账号（如果还没有）
- 选择 "Continue with GitHub" 使用GitHub账号登录

### 2. 授权Vercel访问您的GitHub仓库
- 登录后，Vercel会要求访问您的GitHub仓库
- 点击 "Authorize Vercel" 授权
- 选择 "All repositories" 或只选择特定的仓库

### 3. 导入项目
- 在Vercel仪表板点击 "New Project"
- 找到您的仓库 "dawangzeng/anime-image-search"
- 点击 "Import" 按钮

### 4. 配置部署设置
- **Project Name**: 保持默认或自定义
- **Framework Preset**: 选择 "Other"
- **Root Directory**: 保持默认 (.)
- **Build Command**: 留空（静态网站无需构建）
- **Output Directory**: 留空

### 5. 部署！
- 点击 "Deploy" 按钮
- 等待30-60秒完成部署
- 获得免费域名：anime-image-search.vercel.app

## 步骤2：验证部署

### 访问您的网站
- 点击Vercel提供的链接
- 应该能看到动漫搜索网站界面
- 测试搜索功能是否正常工作

### 自定义域名（可选）
1. 在项目设置中找到 "Domains"
2. 添加您的自定义域名
3. 按提示配置DNS解析

## 步骤3：自动部署设置

### 启用自动部署
每次您推送代码到GitHub的main分支，Vercel会自动：
- 检测代码变更
- 自动重新部署
- 更新网站内容

### 查看部署状态
- 在Vercel仪表板查看部署历史
- 查看构建日志（如果有问题）
- 可以回滚到之前的版本

## 🎯 部署成功确认清单

✅ GitHub仓库已连接  
✅ Vercel项目已创建  
✅ 自动部署已启用  
✅ HTTPS证书已配置  
✅ 全球CDN已启用  

## 🔧 常见问题解决

### 部署失败？
1. 检查GitHub仓库是否公开
2. 确认文件结构正确
3. 查看Vercel构建日志

### 网站空白？
1. 确认index.html文件存在
2. 检查文件路径是否正确
3. 查看浏览器控制台错误

### 样式丢失？
1. 确认styles.css文件已上传
2. 检查文件引用路径
3. 清除浏览器缓存

## 🎉 恭喜！

部署成功后，您将获得：
- 🌍 全球访问的动漫搜索网站
- 🔒 免费HTTPS安全证书
- ⚡ 全球CDN加速
- 🔄 自动部署更新
- 📱 移动端优化

访问您的网站：anime-image-search.vercel.app