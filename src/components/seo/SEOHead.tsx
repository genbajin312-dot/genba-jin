import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
}

export function SEOHead({
  title = "株式会社現場ジン | 名古屋の土木・建築・外構工事 | 急な現場対応も可能",
  description = "名古屋市瑞穂区の建設会社「株式会社現場ジン」。土木・建築・外構工事に対応。「明日までにこれやっておきたい」という現場監督様の急なご要望にも、熟練の職人が即座に応えます。名古屋市全域・愛知県内で迅速対応。",
  keywords = "名古屋 建設会社, 土木工事, 建築工事, 外構工事, 現場監督 サポート, 急な工事, 瑞穂区 建設業, 道路工事, リフォーム, 株式会社現場ジン",
  ogImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  path = ""
}: SEOHeadProps) {
  const siteUrl = "https://genba-jin.com";
  const fullUrl = `${siteUrl}${path}`;

  // 構造化データ - Organization (企業情報)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://genba-jin.com/#organization",
    "name": "株式会社現場ジン",
    "legalName": "株式会社現場ジン",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "新開町25-18",
      "addressLocality": "名古屋市瑞穂区",
      "addressRegion": "愛知県",
      "postalCode": "467-0856",
      "addressCountry": "JP"
    },
    "founder": {
      "@type": "Person",
      "name": "遠藤廣士"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-52-XXX-XXXX",
      "contactType": "customer service",
      "email": "info@genba-jin.com",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    }
  };

  // 構造化データ - BreadcrumbList (パンくずリスト)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": siteUrl
      }
    ]
  };

  // 構造化データ - FAQPage (LLMO/SEO対策: よくある質問)
  // AIや検索エンジンが「この会社は何ができるか」を理解しやすくする
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "急な工事依頼でも対応してもらえますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、対応可能です。株式会社現場ジンは「明日までにこれやっておきたい」という現場の急な声に応えることを強みとしています。まずはお気軽にご相談ください。"
        }
      },
      {
        "@type": "Question",
        "name": "対応エリアはどこですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "名古屋市（千種区、東区、北区、西区、中村区、中区、昭和区、瑞穂区、熱田区、中川区、港区、南区、守山区、緑区、名東区、天白区）を中心に、愛知県全域で対応しております。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような工事に対応していますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "土木工事（道路、河川、造成など）、建築工事（新築、リフォーム、耐震工事など）、外構工事（駐車場、エクステリアなど）と、建設に関わる幅広い工事に対応可能な総合建設会社です。"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* 基本メタタグ */}
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="株式会社現場ジン" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullUrl} />
      <meta name="theme-color" content="#FFFFFF" />

      {/* OGP（Open Graph Protocol）タグ - SNSシェア用 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="株式会社現場ジン" />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter Card - X (Twitter)での表示最適化 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@genbajin" /> {/* アカウントがあれば指定 */}

      {/* 地域・言語設定 (MEO/Local SEO) */}
      <meta name="geo.region" content="JP-23" />
      <meta name="geo.placename" content="名古屋市" />
      <meta name="geo.position" content="35.1249912;136.9189914" />
      <meta name="ICBM" content="35.1249912, 136.9189914" />

      {/* モバイル最適化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />

      {/* 構造化データ (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}