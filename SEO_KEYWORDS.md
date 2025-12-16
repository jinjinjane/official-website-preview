# Jovida SEO 关键词配置文档

本文档记录了当前项目中已配置的 SEO 关键词、标题和描述策略。

## 1. 全局默认配置 (Global Defaults)
**文件路径:** `src/components/SEO/SEO.jsx`

当页面未指定特定 SEO 信息时，将使用以下默认值：

*   **默认标题模板:** `Jovida - AI Weight Loss & Diet Coach | Your Personal Nutritionist`
*   **默认描述 (Description):**
    > "Meet Jovida, your 24/7 AI Health Coach and Nutritionist. Master weight loss, diet management, and holistic wellness with personalized AI guidance."
*   **默认关键词 (Keywords):**
    > `Jovida, AI Weight Loss, Weight Management, Diet Management, AI Nutritionist, AI Health Coach, Wellness Companion`

---

## 2. 静态兜底配置 (Static Fallback)
**文件路径:** `index.html`

用于在 JavaScript 加载失败或爬虫不支持 JS 时的兜底显示：

*   **标题 (Title):** `Jovida - AI Wellness Companion | Your GPT Health Coach`
*   **描述 (Description):**
    > "Meet Jovida, your 24/7 AI Health Coach and Nutritionist. Master weight loss, diet management, and holistic wellness with personalized AI guidance."
*   **关键词 (Keywords):**
    > `Jovida, AI Weight Loss, Weight Management, Diet Management, AI Nutritionist, AI Wellness Companion, AI Health Coach, ChatGPT for Wellness`

---

## 3. 页面级配置 (Page-Level Overrides)

### 首页 (Home Page)
**文件路径:** `src/screens/HomePage/HomePage.jsx`

*   **标题:** `Jovida - AI Weight Loss & Diet Coach`
*   **描述:**
    > "Achieve your weight loss goals with Jovida. Your AI-powered nutritionist and diet manager for personalized meal plans and weight management."
*   **关键词:**
    > `Jovida, AI Weight Loss, Weight Management, Diet Management, AI Nutritionist, AI Health Coach, Wellness Companion`

### Pro 会员页 (Pro Page)
**文件路径:** `src/screens/Pro/Pro.jsx`

*   **标题:** `Jovida Pro - Advanced Weight & Diet Management`
*   **描述:**
    > "Upgrade to Jovida Pro for personalized diet plans, advanced weight management tools, and 24/7 access to your AI Nutritionist."
*   **关键词:**
    > `Jovida Pro, Weight Loss App, Diet Management, AI Nutritionist, Premium Health Coach, Weight Management`

### 消息/聊天页 (Message Page)
**文件路径:** `src/screens/Message/Message.jsx`

*   **标题:** `Chat with Jovida - Your AI Nutritionist`
*   **描述:**
    > "Text Jovida for instant weight loss tips, diet management advice, and nutritional guidance via SMS or WhatsApp."
*   **关键词:**
    > `Chat with Nutritionist, AI Diet Coach, Weight Loss Chatbot, SMS Diet Tips, WhatsApp Health Coach`

### 法律条款页 (Legal Pages)

**隐私政策 (`src/screens/privacy/PrivacyPolicy.jsx`):**
*   **标题:** `Privacy Policy`
*   **描述:** "Privacy Policy for Jovida. Learn how we collect, use, and protect your personal health data."

**使用条款 (`src/screens/terms/TermsOfUse.jsx`):**
*   **标题:** `Terms and Conditions`
*   **描述:** "Terms and Conditions for using Jovida services."
