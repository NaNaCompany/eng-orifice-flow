export const tool={
  "id": "E098",
  "slug": "eng-orifice-flow",
  "title": "비압축 오리피스 유량 계산기",
  "title_en": "Incompressible Orifice Flow Calculator",
  "category": "유체",
  "category_en": "Fluid mechanics",
  "fields": [
    {
      "key": "cd",
      "label": "유량계수 C_d",
      "label_en": "Discharge coefficient C_d",
      "dimension": "ratio",
      "example": 0.6,
      "constraint": "unitInterval",
      "display_unit": "1",
      "display_value": "0.6"
    },
    {
      "key": "a",
      "label": "오리피스 면적 A",
      "label_en": "Orifice area A",
      "dimension": "area",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "0.001"
    },
    {
      "key": "dp",
      "label": "압력차 Δp",
      "label_en": "Pressure difference Δp",
      "dimension": "pressure",
      "example": 1000,
      "constraint": "nonnegative",
      "display_unit": "kPa",
      "display_value": "1"
    },
    {
      "key": "rho",
      "label": "유체 밀도 ρ",
      "label_en": "Fluid density ρ",
      "dimension": "density",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1000"
    }
  ],
  "result_label": "모델 체적유량 Q",
  "result_label_en": "Model volumetric flow Q",
  "result_dimension": "flow",
  "formula": "Q = C_d A √(2Δp/ρ)",
  "purpose": "상류 속도를 무시하는 비압축 오리피스의 모델 유량 계산",
  "purpose_en": "Calculate incompressible orifice flow with negligible upstream velocity.",
  "assumptions": "0≤C_d≤1, A,ρ>0, Δp≥0. 같은 높이·상류 속도 무시·비압축 정상유동 모델이다. C_d는 해당 조건에 맞게 입력한다. 배관 면적비 보정·압축성·캐비테이션은 제외한다.",
  "assumptions_en": "Required: 0≤C_d≤1, A,ρ>0, Δp≥0, equal elevations and negligible upstream velocity in steady incompressible flow. Supply a valid coefficient. Pipe area-ratio correction, compressibility and cavitation are excluded.",
  "sources": [
    {
      "label": "OpenStax · 14 6 bernoullis equation",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation"
    },
    {
      "label": "University of Texas at Austin · Richard Fitzpatrick · Flow Through an Orifice",
      "url": "https://farside.ph.utexas.edu/teaching/336L/Fluid/node55.html"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-orifice-flow/",
  "repository": "https://github.com/NaNaCompany/eng-orifice-flow",
  "output_unit": "m3s"
};
