import type {
  Education,
  OperationalCases,
  PersonalInfo,
  Projects,
  Skills,
  UiLabels,
} from "./types";

const mastodonLab = "https://github.com/thanksstevenkim/mastodon-lab";

export const personalInfo: PersonalInfo = {
  name: 'スティーブン "thx" キム',
  role: "多言語ITサポート・システム運用",
  location: "韓国・大田広域市",
  languages: [
    { name: "韓国語", level: "母語" },
    { name: "日本語", level: "流暢（JLPT N1）" },
    { name: "英語", level: "中上級（TOEIC 810）" },
  ],
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@mustard",
  mastodon2: "https://social.vivaldi.net/@thanksstevenkim",
  bio: "2022年から公開Mastodonサービスを運用し、Linux、Docker Compose、Nginx、PostgreSQL、Redis環境でのアップグレード、障害調査、復旧確認、運用文書の作成を行ってきました。韓国語・日本語・英語で利用者と技術的な背景をつなぐIT／テクニカルサポートおよびシステム運用を志向し、クラウド・インフラ運用のスキルを広げています。",
};

export const ui: UiLabels = {
  lang: "ja",
  pageTitle: "Steven Kim | 多言語ITサポート・システム運用",
  pageDescription:
    "多言語ITサポート、テクニカルサポート、Linuxサービス運用、技術文書作成を中心としたSteven Kimのポートフォリオです。",
  profileAlt: "Steven Kimのプロフィール写真",
  menuToggle: "メニューを開閉",
  repositoryLabel: "GitHubリポジトリ",
  educationHighlights: "学歴",
  mastodonAdmin: "Mastodon管理者アカウント",
  vivaldiSocial: "Vivaldi Social",
  footerRights: "All rights reserved.",
  footerBuiltWith: "AstroとReactで制作",
  sections: {
    projects: "主なプロジェクト",
    operations: "主な運用事例",
    skills: "スキル",
    education: "学歴",
  },
};

export const education: Education = [
  {
    institution: "国立ハンバッ大学",
    location: "韓国・大田広域市",
    degree: "情報通信工学科 工学士",
    period: "2017年3月 ～ 2026年2月",
    achievements: ["2026年2月卒業"],
  },
];

export const skills: Skills = [
  {
    title: "システム・運用",
    icon: "🖥️",
    items: [
      "Linux (Ubuntu)",
      "Docker Compose",
      "Git / GitHub",
      "GitHub Actions",
      "Mastodon運用",
      "障害調査",
      "アップグレード・ロールバック手順",
      "バックアップ・復元検証",
      "AWS / S3",
      "OVHcloud",
      "Vultr",
      "Fly.io",
      "Vercel",
    ],
  },
  {
    title: "データベース・Webインフラ",
    icon: "🌐",
    items: [
      "PostgreSQL",
      "Redis",
      "MariaDB",
      "Nginx",
      "Cloudflare",
      "Elasticsearch",
      "PHP-FPM",
      "MediaWiki",
    ],
  },
  {
    title: "ドキュメンテーション・コミュニケーション",
    icon: "📝",
    items: [
      "運用Runbook",
      "インシデントレポート",
      "アップデートログ",
      "Markdown",
      "Mermaid",
      "韓国語（母語）",
      "日本語（JLPT N1）",
      "英語（TOEIC 810）",
    ],
  },
  {
    title: "Web開発",
    icon: "💻",
    items: [
      "Astro",
      "TypeScript",
      "JavaScript",
      "Python",
      "HTML / CSS",
      "Tailwind CSS",
      "Remix",
      "Node.js",
    ],
  },
];

export const projects: Projects = [
  {
    title: "mastodon-lab",
    github: mastodonLab,
    description: [
      "2022年11月から公開Mastodonサービスを運用し、可用性、アップグレード、ユーザーアクセス、連合状態の確認を担当しました。",
      "Ubuntu、Docker Compose、Nginx、PostgreSQL、Redis、Cloudflare環境で障害原因の調査と設定変更を行いました。",
      "バージョンアップ、データベースmigration、デプロイ前のバックアップ確認、ロールバック経路、デプロイ後の検証を実施しました。",
      "原因・解決・予防策・検証結果を再利用可能なrunbook、incident report、update logとして記録しました。",
    ],
    evidence: [
      { label: "Runbooks", href: `${mastodonLab}/tree/main/runbooks` },
      { label: "Incidents", href: `${mastodonLab}/tree/main/incidents` },
      { label: "Update logs", href: `${mastodonLab}/tree/main/update-log` },
    ],
  },
  {
    title: "librewiki-homelab",
    github: "https://github.com/thanksstevenkim/librewiki-homelab",
    description: [
      "公式Libre Wikiサービス／ミラーではなく、互換性とコンテンツ移行を安全に検証するstaging・research環境です。",
      "UTM上のUbuntu ServerにNginx、PHP-FPM、MariaDB、MediaWiki、Liberty skinを構築し、SSHで管理しました。",
      "少数のページとrevision historyをインポートし、TemplateStyles、ParserFunctions、Cite、Gadgets、CSSの依存関係を特定・設定しました。",
      "MariaDB dumpを別のテストDBへ復元してテーブルを確認し、バックアップが実際に復元可能であることを検証しました。",
    ],
  },
  {
    title: "thanks-wiki",
    github: "https://github.com/thanksstevenkim/thanks-wiki",
    description: [
      "個人の観察と文書を構造化して蓄積するAstroベースの静的Wikiを実装しました。",
      "TypeScript schemaと動的routeにより、韓国語・英語・日本語のlocale別文書パスを構成しました。",
      "Markdownコンテンツ、notes/docsの情報構造、共通layoutで読みやすい文書体験を維持しました。",
      "Gitとpnpm lockfileでコンテンツとビルド設定をバージョン管理し、Vercelへ静的サイトをデプロイしました。",
    ],
  },
  {
    title: "the-hitchhikers-guide-to-the-fediverse",
    github:
      "https://github.com/thanksstevenkim/the-hitchhikers-guide-to-the-fediverse",
    description: [
      "韓国語圏のFediverseインスタンスを一画面で探せる静的ディレクトリを実装しました。",
      "HTML、CSS、JavaScriptで名称・説明検索、言語・プラットフォーム・登録状態フィルター、統計ソートを提供しました。",
      "Pythonスクリプトで公開APIとpeer情報を収集し、ActivityPub検証、異常値の分離、処理途中の保存を行いました。",
      "スパム・異常ドメインのフィルタリング結果をログ化し、統計更新とGitHub Pagesデプロイ用workflowをリポジトリに構成しました。",
    ],
  },
];

export const operationalCases: OperationalCases = [
  {
    title: "Cloudflare 521とNginx障害",
    summary:
      "アップグレード後、コンテナとPostgreSQLは正常でしたが公開アクセスが停止しました。各レイヤーを確認して重複した不正なNginx設定を特定し、設定検証と再起動で復旧したうえで予防手順を文書化しました。",
    href: `${mastodonLab}/blob/main/incidents/001-cloudflare-521-after-upgrade.md`,
    linkLabel: "インシデントレポート",
  },
  {
    title: "Elasticsearchサービス名の不一致",
    summary:
      "アップグレード後にSidekiqからElasticsearchへの接続、検索、連合が停止しました。Composeのサービス名とES_HOSTを比較して古いホスト名を特定し、設定をバックアップ・修正してコンテナを再作成しました。",
    href: `${mastodonLab}/blob/main/incidents/002-elasticsearch-service-name.md`,
    linkLabel: "インシデントレポート",
  },
  {
    title: "アップグレードmigrationの未実行",
    summary:
      "Mastodon 4.6.2デプロイ後のcolumn・table不足をmigration状態の確認で切り分けました。必要なdatabase migrationを実行・検証し、標準アップグレード手順に組み込みました。",
    href: `${mastodonLab}/blob/main/incidents/007-database-migration-incomplete-after-upgrade.md`,
    linkLabel: "インシデントレポート",
  },
  {
    title: "Fork driftによるCI障害の復旧",
    summary:
      "本番アップグレード後もsecurity audit、RSpec、lintが失敗していたため、同じupstream tagのclean worktreeとforkを比較しました。セキュリティ修正をbackportし、古いcustomizationを整理してlintのexit code 0を確認しました。",
    href: `${mastodonLab}/blob/main/incidents/009-github-actions-failures-from-fork-drift.md`,
    linkLabel: "インシデントレポート",
  },
];
