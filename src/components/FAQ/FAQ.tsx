import Question from "./Question";
function FAQ() {
  return (
    <>
      <div id="faq" className="bg-[#000e24]">
        <div className="w-[80%] max-w-[700px] mx-auto pb-5">
          <div
            className="
          text-white text-xl font-bold ml-2 mb-4
          md:text-3xl md:mx-6 md:mb-8
          "
          >
            FAQ
          </div>
          <Question
            question="這個網站用到了哪些技術?"
            answer="🧱 基礎架構
          - Vite + React + TypeScript
          - React Router
          - Tailwind CSS
          - Shadcn UI

          🔧 部署與開發流程
          - GitHub Pages
          - GitHub Actions
          - Docker: Docker-compose

          📧 聯絡表單寄信功能
          - 前端: 使用 Axios 向後端 API 發送請求，傳送表單資料
          - 後端: 使用 Express + Nodemailer 建立 API，處理寄信邏輯
          - API 部署於 Render（PaaS 平台）
          "
          />
          <Question
            question="為什麼從護理領域轉職到前端?"
            answer="在醫療領域工作期間，我逐漸發現護理的工作環境對我來說並不適合。我希望能找到一份有較好生活品質的工作，同時具備持續學習與自我成長的空間。

            在探索不同職涯選項的過程中，我接觸到軟體產業，被它的發展潛力與創造性深深吸引。開始學習程式後，我發現自己很享受用程式解決問題的過程，因此讓我決定踏上前端開發的轉職之路。"
          />
          <Question
            question="之前的工作經驗，具備哪些能力對於現在的工作有幫助？"
            answer="護理領域：
            作為臨床護理師，我學會了在壓力下有效分配時間並應對突發狀況，這提升了我的應變能力與抗壓性。經常與團隊及病人溝通，使我擁有強大的協作與表達能力。

            日商經歷：
            在產品銷售工作中，我直接了解客戶需求並提供解決方案，這讓我能夠從使用者角度思考，並將需求轉化為具體成果，對前端開發有很大的幫助。
            "
          />
          <Question
            question="目前的工作，有沒有讓你感覺到比較有成就感的事情？"
            answer="雖然工作大多是切版和動畫效果，重複性較高，但我開發了小工具來節省約80%的重複工作，這讓我在解決問題與優化流程的過程中獲得了很大的成就感。"
          />
          <Question
            question="開發專案時，有遇到什麼挑戰？你是如何解決的？"
            answer="在使用Intersection Observer API時，發現在iOS系統上無法讓Navbar消失。為了解決這個問題，我嘗試了以下方法：

            1. 改變監聽位置
            2. 測試是否是版本過舊，使用poly-fill修復
            3. 在Windows環境下尋找iOS模擬環境
            4. 最後發現是rootMargin設定錯誤，調整參數後解決問題"
          />
          <Question
            question="目前的工作為什麼是兼職?"
            answer="當初面試這份工作時，我還在學習React，尚未完成自己的專案。透過兼職工作，我能透過實務來累積經驗，並在工作之餘完成專案與學習新技術。"
          />
          <Question
            question="面對壓力時，你的因應方式是什麼？"
            answer="我會先釐清目前的狀況，判斷事情的緊急與重要程度，將任務拆解並設定優先順序。如果超出我能處理的範圍，我會主動尋求協助，確保事情能在時限內有效解決。"
          />
          <Question
            question="你看重什麼團隊特質？"
            answer="我重視良好的溝通與互相支持的團隊氛圍，成員之間能夠坦誠交流，無論在技術層面或概念想法上，都能主動分享觀點，彼此尊重，一同成長、面對挑戰。"
          />
          <Question
            question="你擁有什麼強項讓你成為一位優秀的軟體工程師?"
            answer="我認為我的強項是「具備邏輯思維與問題解決能力」，加上過去護理與業務經驗中培養的「抗壓性與溝通協調能力」，讓我能夠快速理解需求、有效處理問題。
            
            我喜歡分析流程、找出可以優化的地方，並動手實作出具體成果。我也持續自學、主動挑戰新技術，相信這樣的特質能讓我在軟體工程領域持續成長。"
          />
        </div>
      </div>
    </>
  );
}

export default FAQ;
