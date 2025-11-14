# 🚀 动漫图片搜索网站 - 部署指南

## 快速部署到Vercel（推荐）

### 方法1：使用GitHub + Vercel（推荐）

#### 步骤1：创建GitHub仓库
1. 访问 [github.com](https://github.com)
2. 点击右上角的 "+" → "New repository"
3. 输入仓库名称：`anime-image-search`
4. 选择 "Public"（公开）
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

#### 步骤2：推送代码到GitHub
在命令行中执行以下命令（替换YOUR_USERNAME为您的GitHub用户名）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/anime-image-search.git
git branch -M main
git push -u origin main
```

#### 步骤3：部署到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择刚才创建的 `anime-image-search` 仓库
5. 点击 "Deploy" 按钮
6. 等待部署完成，获得免费域名！

### 方法2：直接上传文件到Vercel

#### 步骤1：压缩项目文件
1. 选中所有文件（index.html, styles.css, script.js, vercel.json）
2. 右键 → "发送到" → "压缩文件夹"
3. 得到 `anime-image-search.zip`

#### 步骤2：上传到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账号
3. 在仪表板点击 "New Project"
4. 选择 "Import Git Repository" 下方的 "Upload"
5. 上传您的zip文件
6. 点击 "Deploy"

### 方法3：使用Netlify

#### 步骤1：准备文件
确保您有以下文件：
- index.html
- styles.css  
- script.js
- vercel.json（可选）

#### 步骤2：拖拽部署
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账号
3. 在仪表板找到 "Drag and drop your site folder here"
4. 将包含所有文件的文件夹拖拽到该区域
5. 自动部署完成！

## 📋 部署后配置

### 自定义域名（可选）
1. 在Vercel/Netlify项目设置中
2. 找到 "Domains" 或 "Domain Management"
3. 添加您的自定义域名
4. 按提示配置DNS解析

### 启用HTTPS
Vercel和Netlify会自动为您的网站提供HTTPS证书，无需额外配置！

### 性能优化
- 网站已优化，支持全球CDN
- 自动压缩和缓存
- 移动端适配完美

## 🎯 验证部署

部署完成后，您应该能够：
1. 访问提供的 `.vercel.app` 或 `.netlify.app` 域名
2. 看到动漫搜索网站界面
3. 搜索功能正常工作
4. 响应式设计正常

## 🔧 故障排除

### 常见问题
1. **页面空白**：检查文件是否完整上传
2. **样式丢失**：确认styles.css文件路径正确
3. **功能异常**：检查浏览器控制台错误信息

### 获取帮助
- Vercel文档：https://vercel.com/docs
- Netlify文档：https://docs.netlify.com
- GitHub帮助：https://help.github.com

## 🎉 恭喜！

您的动漫图片搜索网站即将上线！🚀

部署成功后，您将获得：
- ✅ 免费HTTPS域名
- ✅ 全球CDN加速
- ✅ 自动部署更新
- ✅ 移动端优化
- ✅ 99.9%可用性

开始享受您的网站吧！🌟