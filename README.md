# 비압축 오리피스 유량 계산기

상류 속도를 무시하는 비압축 오리피스의 모델 유량 계산

- Plan ID: E098
- App: https://nanalab.kr/eng-orifice-flow/
- Repository: https://github.com/NaNaCompany/eng-orifice-flow
- Formula: `Q = C_d A √(2Δp/ρ)`
- Output: 모델 체적유량 Q

## Model

0≤C_d≤1, A,ρ>0, Δp≥0. 같은 높이·상류 속도 무시·비압축 정상유동 모델이다. C_d는 해당 조건에 맞게 입력한다. 배관 면적비 보정·압축성·캐비테이션은 제외한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `0.000848528137423857`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
