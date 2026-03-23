export interface School {
  id: string
  name: string
  shortName: string
  lat: number
  lng: number
  type: 'elementary' | 'middle'
  gakuen: 1 | 2 | 3 | 4
  students: number
  built: number
  /** 一覧での表示順（小さいほど先頭） */
  sortOrder: number
}

export interface Gakuen {
  id: 1 | 2 | 3 | 4
  name: string
  color: string
  type: string
  /** 開校推定年（計算用） */
  openingYear: number
  openingEstimate: string
  middleSchool: string
  elementarySchools: string[]
  campusplan: string
  /** 第一学園の分離型キャンパス（低学年校舎） */
  lowerCampus?: string
  note?: string
}

export const schools: School[] = [
  // 豊丘小を先頭に（最も影響が大きい）
  { id: 'toyooka', name: '豊丘小学校', shortName: '豊丘小', lat: 36.6326, lng: 138.3515, type: 'elementary', gakuen: 2, students: 47, built: 1983, sortOrder: 0 },

  // 第一学園
  { id: 'takaho', name: '高甫小学校', shortName: '高甫小', lat: 36.6303, lng: 138.3118, type: 'elementary', gakuen: 1, students: 120, built: 1980, sortOrder: 10 },
  { id: 'nire', name: '仁礼小学校', shortName: '仁礼小', lat: 36.6113, lng: 138.3417, type: 'elementary', gakuen: 1, students: 55, built: 1982, sortOrder: 11 },
  { id: 'higashi', name: '東中学校', shortName: '東中', lat: 36.6232, lng: 138.3319, type: 'middle', gakuen: 1, students: 143, built: 1995, sortOrder: 12 },

  // 第二学園（豊丘小以外）
  { id: 'suzaka', name: '須坂小学校', shortName: '須坂小', lat: 36.6533, lng: 138.3168, type: 'elementary', gakuen: 2, students: 350, built: 1973, sortOrder: 20 },
  { id: 'koyama', name: '小山小学校', shortName: '小山小', lat: 36.6478, lng: 138.3120, type: 'elementary', gakuen: 2, students: 200, built: 1979, sortOrder: 21 },
  { id: 'hitaki', name: '日滝小学校', shortName: '日滝小', lat: 36.6622, lng: 138.3247, type: 'elementary', gakuen: 2, students: 160, built: 1979, sortOrder: 22 },
  { id: 'tokiwa', name: '常盤中学校', shortName: '常盤中', lat: 36.6539, lng: 138.3200, type: 'middle', gakuen: 2, students: 351, built: 1987, sortOrder: 23 },

  // 第三学園
  { id: 'toyosu', name: '豊洲小学校', shortName: '豊洲小', lat: 36.6780, lng: 138.2935, type: 'elementary', gakuen: 3, students: 140, built: 1977, sortOrder: 30 },
  { id: 'asahigaoka', name: '旭ケ丘小学校', shortName: '旭ケ丘小', lat: 36.6805, lng: 138.3157, type: 'elementary', gakuen: 3, students: 210, built: 1971, sortOrder: 31 },
  { id: 'aimori', name: '相森中学校', shortName: '相森中', lat: 36.6625, lng: 138.3124, type: 'middle', gakuen: 3, students: 306, built: 1990, sortOrder: 32 },

  // 第四学園
  { id: 'moriue', name: '森上小学校', shortName: '森上小', lat: 36.6511, lng: 138.3042, type: 'elementary', gakuen: 4, students: 180, built: 1983, sortOrder: 40 },
  { id: 'hino', name: '日野小学校', shortName: '日野小', lat: 36.6596, lng: 138.2922, type: 'elementary', gakuen: 4, students: 150, built: 1977, sortOrder: 41 },
  { id: 'inoue', name: '井上小学校', shortName: '井上小', lat: 36.6405, lng: 138.2861, type: 'elementary', gakuen: 4, students: 250, built: 1981, sortOrder: 42 },
  { id: 'sumisaka', name: '墨坂中学校', shortName: '墨坂中', lat: 36.6450, lng: 138.2974, type: 'middle', gakuen: 4, students: 490, built: 1993, sortOrder: 43 },
]

export const gakuens: Gakuen[] = [
  {
    id: 1,
    name: '第一学園',
    color: '#e74c3c',
    type: '義務教育学校（施設分離型）',
    openingYear: 2032,
    openingEstimate: '基本方針策定から6〜7年後（2032〜2033年頃）',
    middleSchool: 'higashi',
    elementarySchools: ['takaho', 'nire'],
    lowerCampus: 'takaho',
    campusplan: '1〜4年生: 高甫小校舎 / 5〜9年生: 東中校舎',
    note: '最初に開校。東中は築31年で全15校中最新。',
  },
  {
    id: 2,
    name: '第二学園',
    color: '#2980b9',
    type: '小中一貫型学校（施設一体型 or 隣接型）',
    openingYear: 2039,
    openingEstimate: '第一学園の6〜7年後（2039〜2040年頃）',
    middleSchool: 'tokiwa',
    elementarySchools: ['suzaka', 'koyama', 'hitaki', 'toyooka'],
    campusplan: '新設校舎 or 既存校舎の改修（未定）',
    note: '豊丘小は第二学園開校まで須坂小に通学。スクールバス検討。',
  },
  {
    id: 3,
    name: '第三学園',
    color: '#27ae60',
    type: '小中一貫型 or 義務教育学校（未定）',
    openingYear: 2043,
    openingEstimate: '第二学園以降（2040年代）',
    middleSchool: 'aimori',
    elementarySchools: ['toyosu', 'asahigaoka'],
    campusplan: '未定',
  },
  {
    id: 4,
    name: '第四学園',
    color: '#f39c12',
    type: '小中一貫型 or 義務教育学校（未定）',
    openingYear: 2043,
    openingEstimate: '第二学園以降（2040年代）',
    middleSchool: 'sumisaka',
    elementarySchools: ['moriue', 'hino', 'inoue'],
    campusplan: '未定',
  },
]

/** 2点間の直線距離（km） — Haversine公式 */
export function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

/** 直線距離 × 迂回係数1.3 → 実歩行距離（km） */
export function walkDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  return distanceKm(lat1, lng1, lat2, lng2) * 1.3
}

/** 歩行時間（分）。小学生の歩行速度を3km/hとする */
export function walkMinutes(distKm: number): number {
  return Math.round(distKm / 3 * 60)
}

/**
 * 開校年に影響を受ける子どもの生年度を計算
 * 日本の学年: 4月2日〜翌4月1日生まれが同学年
 * 小1入学時に6歳 → 入学年度 = 生年度 + 7（4月〜翌3月）
 * 例: 2026年度生まれ → 2033年4月に小1入学
 */
// --- 教育委員会Q&Aの関連データ ---

export interface QAItem {
  /** Q番号 */
  q: number
  /** 質問 */
  question: string
  /** 回答の要約（サイト用に短く） */
  answer: string
  /** 回答の評価 */
  category: 'substantive' | 'pending' | 'general'
}

/** Q&Aの中から読む価値のあるもの + 各校に関連するものを抽出 */
export const qaItems: QAItem[] = [
  {
    q: 2, question: '子どもの数は6〜7年後どれくらいですか。計画はなぜ6〜7年後の想定なのですか。',
    answer: '2030年度の推計は3,132人（2024年度の3,628人から約500人減）。35年前の約7,000人の半分以下。基本方針策定後、カリキュラム開発や施設整備に時間がかかるため6〜7年後の想定。',
    category: 'substantive',
  },
  {
    q: 9, question: '同じ市内でも義務教育学校と小中一貫型学校があるのはなぜですか。',
    answer: '学校の規模を考慮して検討。第二学園は児童生徒数が多く、義務教育学校では過大となり適正な教育活動が実施しにくいため、小中一貫型小学校中学校とした。',
    category: 'substantive',
  },
  {
    q: 11, question: '第一学園の1〜4年生（高甫小校舎）と5〜9年生（東中校舎）で校舎を分けるのはなぜですか。',
    answer: '東中は2031年度に全校生徒数89人、各学年すべて1学級の単級となる見込み。教員数も減少し、全10教科にすべての教員配置ができず、不足する可能性がある。既存校舎を活用してできるだけ早く開校したい。',
    category: 'substantive',
  },
  {
    q: 14, question: '不登校の子どもたちが通える場所も考えてもらいたいです。',
    answer: '学園内に教室以外の居場所として教育支援センターを設置。小1から中3まで対象。現在のフレンドリールームでも小中学生が一緒に活動し、コミュニケーション力が豊かになったり不安がやわらいだりする姿がある。',
    category: 'substantive',
  },
  {
    q: 16, question: '豊丘小学校は東地区なのに、第一学園（仁礼小・高甫小・東中）ではなく、なぜ第二学園なのですか。',
    answer: '仁礼小・高甫小への統合も検討したが、通学を考えた時に須坂小の方が通学時間が短く、スクールバス導入でも安全にスムーズに通学でき、子どもの負担が軽減できる。第二学園の開校予定地は常盤中・須坂小の周辺で、豊丘小からの通学距離が大きく変わらないことも考慮。',
    category: 'substantive',
  },
  {
    q: 20, question: '通学時間が長くなる場合は、スクールバスは導入できないでしょうか。',
    answer: '通学の負担を考慮し、公費でスクールバスの導入を検討する。文科省の手引きでは徒歩通学を小学校で概ね4km以内、中学校で概ね6kmとしている。運行区域・時間・停留所など具体的な導入方法は保護者や地域、学校等と検討したい。',
    category: 'substantive',
  },
  {
    q: 13, question: '須坂支援学校との交流活動は継続できますか。須坂学園構想で支援学校はどうなりますか。',
    answer: 'インクルーシブな教育づくりに向けて、須坂支援学校は第二学園の開校に合わせて同じ敷地内に新たに整備する考え。センター的機能の充実と活用を図り、特別支援教育を充実させる。',
    category: 'substantive',
  },
  {
    q: 26, question: '豊丘小学校と須坂小学校が統合した場合、児童クラブはどうなりますか。',
    answer: '豊丘小の児童は、須坂小に近い東部児童センターまたは自宅に近い豊丘地区の公共施設の活用を検討している。',
    category: 'pending',
  },
]

/** 学校ID → 関連するQ番号のマッピング */
export const schoolQAMap: Record<string, number[]> = {
  // 豊丘小: なぜ第二学園か、児童クラブ、スクールバス
  toyooka: [16, 26, 20],
  // 高甫小: なぜ分離型か
  takaho: [11, 20],
  // 仁礼小: なぜ分離型か、スクールバス
  nire: [11, 20],
  // 東中: なぜ分離型か（教員不足の危機）、生徒数推計
  higashi: [11, 2],
  // 須坂小: 支援学校との関係
  suzaka: [13],
  // 常盤中: なぜ小中一貫型か（過大防止）、支援学校
  tokiwa: [9, 13],
  // 全学園共通（第三・第四は具体的Q&Aが少ない）
  // → 共通項目（スクールバス、不登校支援）で補う
}

/** 全学園共通で関連するQ番号 */
export const commonQA: number[] = [14, 2]

export function birthYearImpact(openingYear: number) {
  // 開校年に1年生になる子 = 開校年 - 7 年度生まれ
  const firstGraderBirthYear = openingYear - 7
  // 開校年に9年生（最終学年）の子 = 開校年 - 15 年度生まれ
  const ninthGraderBirthYear = openingYear - 15
  // 開校年に6年生（小学校最終学年）の子 = 開校年 - 12 年度生まれ
  const sixthGraderBirthYear = openingYear - 12

  return {
    /** この年度以降に生まれた子は新学校に1年生から通う */
    newSchoolFromStart: firstGraderBirthYear,
    /** この年度〜の子は在学中に統合を経験 */
    transitionStart: ninthGraderBirthYear,
    /** この年度より前に生まれた子は卒業済み */
    graduatedBefore: ninthGraderBirthYear,
  }
}
