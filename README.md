# thanks-portfolio-v2

Steven Kim의 다국어 IT Support, Technical Support, 시스템·인프라 운영 경험을 소개하는 개인 포트폴리오입니다.

프론트엔드 기술 목록보다 공개 서비스 운영, 장애 조사, 업그레이드, 복구 검증, 운영 문서화와 한국어·일본어·영어 커뮤니케이션을 먼저 보여주도록 구성했습니다.

## 주요 구성

- 한국어, 영어, 일본어 locale별 포트폴리오
- 실제 저장소와 운영 문서에 근거한 프로젝트 카드
- Cloudflare 521, Elasticsearch 구성 불일치, database migration, fork drift CI 복구 사례
- Systems & Operations 중심의 기술 분류

## 대표 프로젝트

- [`mastodon-lab`](https://github.com/thanksstevenkim/mastodon-lab): 2022년부터 이어진 공개 Mastodon 서비스 운영 기록
- [`librewiki-homelab`](https://github.com/thanksstevenkim/librewiki-homelab): MediaWiki 호환성·마이그레이션 staging/research 환경
- [`thanks-wiki`](https://github.com/thanksstevenkim/thanks-wiki): Astro 기반 다국어 개인 위키
- [`the-hitchhikers-guide-to-the-fediverse`](https://github.com/thanksstevenkim/the-hitchhikers-guide-to-the-fediverse): Fediverse 인스턴스 데이터 수집·검증·탐색 도구

## 개발

이 저장소는 npm과 `package-lock.json`을 사용합니다.

```bash
npm ci
npm run dev
```

## 검증

```bash
npm run typecheck
npm run build
```

## 배포

배포 주소: [https://thanksstevenkim.dev](https://thanksstevenkim.dev)

## License

MIT License. 자세한 내용은 [`LICENSE`](LICENSE)를 확인하세요.
