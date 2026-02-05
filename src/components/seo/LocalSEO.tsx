import { Helmet } from 'react-helmet-async';

/**
 * LocalSEO Component
 * 
 * MEO（Map Engine Optimization）対策用のコンポーネント
 * - Googleマイビジネス連携
 * - ローカルビジネス構造化データ
 * - 地域キーワードの最適化
 * - LLMO（Large Language Model Optimization）: AIが理解しやすい詳細なサービス・エリア情報の提供
 */

export function LocalSEO() {
  // MEO対策用の構造化データ
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor", // より具体的な型に変更
    "@id": "https://genba-jin.com/#localbusiness",
    "name": "株式会社現場ジン",
    "alternateName": "現場ジン",
    "description": "名古屋市瑞穂区を拠点とした土木・建築・外構工事の総合建設会社。「明日までにこれやっておきたい」という現場の急な要望にも即座に対応します。道路改良、河川改修、造成、一般建築、リフォーム、エクステリア工事など幅広く対応。",
    "url": "https://genba-jin.com",
    "telephone": "+81-52-XXX-XXXX", // ※実際の電話番号に置換が必要
    "email": "info@genba-jin.com",
    "logo": "https://genba-jin.com/logo.png",
    "image": [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "新開町25-18",
      "addressLocality": "名古屋市瑞穂区",
      "addressRegion": "愛知県",
      "postalCode": "467-0856",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.1249912,
      "longitude": 136.9189914
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "¥¥-¥¥¥",
    "areaServed": [
      {
        "@type": "City",
        "name": "名古屋市",
        "sameAs": "https://ja.wikipedia.org/wiki/名古屋市"
      },
      {
        "@type": "AdministrativeArea",
        "name": "愛知県",
        "sameAs": "https://ja.wikipedia.org/wiki/愛知県"
      },
      // 名古屋市の全区を網羅（MEO/LLMO対策：地域名を明示）
      { "@type": "City", "name": "千種区" },
      { "@type": "City", "name": "東区" },
      { "@type": "City", "name": "北区" },
      { "@type": "City", "name": "西区" },
      { "@type": "City", "name": "中村区" },
      { "@type": "City", "name": "中区" },
      { "@type": "City", "name": "昭和区" },
      { "@type": "City", "name": "瑞穂区" },
      { "@type": "City", "name": "熱田区" },
      { "@type": "City", "name": "中川区" },
      { "@type": "City", "name": "港区" },
      { "@type": "City", "name": "南区" },
      { "@type": "City", "name": "守山区" },
      { "@type": "City", "name": "緑区" },
      { "@type": "City", "name": "名東区" },
      { "@type": "City", "name": "天白区" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "建設工事サービス一覧",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "土木工事",
            "description": "道路改良、河川改修、造成、上下水道、擁壁工事など。公共工事から民間工事まで対応。",
            "serviceType": "Civil Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "建築工事",
            "description": "一般建築、新築、増改築、リフォーム、耐震補強工事。木造・鉄骨造・RC造に対応。",
            "serviceType": "Architecture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "外構工事・エクステリア",
            "description": "駐車場舗装、カーポート設置、フェンス、ブロック塀、植栽、門扉工事。",
            "serviceType": "Exterior Works"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "遠藤廣士"
    },
    "sameAs": [
      "https://lin.ee/G0HzvGh",
      "https://www.facebook.com/profile.php?id=100063665795454" // 実在する場合は追加
    ],
    // LLMO対策: 企業の特徴をキーワードとして明示
    "keywords": "名古屋 建設会社, 急な工事依頼, 現場監督サポート, 土木工事 名古屋, 建築工事 名古屋, 外構工事 名古屋, 瑞穂区 建設業"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}